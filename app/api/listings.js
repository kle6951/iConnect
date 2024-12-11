import client from "./client";
import { storage } from "./firebaseConfig";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import authStorage from "../auth/storage";

const endPoint = "/listings";

// Delete images from Firebase
const deleteFromFirebase = async (imageName) => {
  try {
    const imageRef = ref(storage, `listingsImages/${imageName}`);
    await deleteObject(imageRef);

    console.log(`Image ${imageName} deleted successfully from Firebase.`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting image from Firebase:", error);
    return { success: false, error: error.message };
  }
};

// Upload images to Firebase
const uploadToFirebase = async (imageUri, setProgress) => {
  try {
    const response = await fetch(imageUri);
    const blob = await response.blob();

    const filename = `listingsImages/${Date.now()}_${imageUri
      .split("/")
      .pop()}`;
    const imageRef = ref(storage, filename);

    const uploadTask = uploadBytesResumable(imageRef, blob);

    // Listen for state changes and update progress
    await new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (setProgress) setProgress(progress); // Update progress in the parent component
        },
        (error) => {
          console.error("Upload failed:", error.message);
          reject(error);
        },
        () => {
          resolve();
        }
      );
    });

    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  } catch (error) {
    throw new Error("Failed to upload image to Firebase Storage.");
  }
};

// GET all Listings command
const getListings = () => client.get(endPoint);

// GET user's listings
const getUserListings = async () => {
  const user = await authStorage.getUser();
  const endpoint = `/user/${user.id}/listings`;
  return client.get(endpoint);
};

// POST command
const addListings = async (listing, onUploadProgress) => {
  const user = await authStorage.getUser();
  if (!user || !user.id) {
    alert("User not found. Please log in again.");
    return { ok: false };
  }

  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("description", listing.description);
  data.append("category_id", listing.category.value);
  data.append("user_id", user.id);

  const imageUrls = [];

  try {
    for (const imageUri of listing.images) {
      try {
        const firebaseUrl = await uploadToFirebase(imageUri, onUploadProgress);
        const imageName = imageUri.split("/").pop(); // Extracting image name
        imageUrls.push({ url: firebaseUrl, name: imageName }); // Storing url and name
      } catch (error) {
        console.error("Error uploading image:", error.message);
        alert("Failed to upload one or more images. Please try again.");
        return { ok: false }; // Stop if any image upload fails
      }
    }

    // Store images as JSON with "url" and "name"
    data.append("images", JSON.stringify(imageUrls));

    if (listing.location) {
      data.append("location", JSON.stringify(listing.location));
    }

    const response = await client.post(endPoint, data, {
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    });

    return response;
  } catch (error) {
    console.error("Error posting listing:", error.message);
    alert("Failed to save the listing. Please try again later.");
    return { ok: false };
  }
};

// DELETE Command
const deleteListing = async (userId, listingId, images) => {
  try {
    // Delete the image from Firebase
    for (const imageName of images) {
      const result = await deleteFromFirebase(imageName); 
      if (!result.success) {
        console.error(`Failed to delete image ${imageName}: ${result.error}`);
        return { ok: false, error: "Failed to delete associated images." };
      }
    }

    const response = await client.delete(
      `/user/${userId}/listings/${listingId}`
    );
    if (response.ok) {
      console.log("Listing deleted successfully");
      return { ok: true };
    } else {
      console.error("Failed to delete listing from server.");
      return { ok: false, error: "Failed to delete listing from server." };
    }
  } catch (error) {
    console.error("Error deleting listing:", error.message);
    return { ok: false, error: "An unexpected error occurred." };
  }
};

export default {
  addListings,
  getListings,
  getUserListings,
  deleteListing,
};
