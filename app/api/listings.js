import client from "./cilent";
import { storage } from "./firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const endPoint = "/listings";

// upload Images to Firebase
const uploadToFirebase = async (imageUri) => {
  try {
    // Fetch the image file from its URI
    const response = await fetch(imageUri);
    const blob = await response.blob(); // convert to blob type

    const filename =
      'listingsImages/${Date.now()}_${imageUri.split("/").pop()}';
    const imageRef = ref(storage, filename);

    // upload the blob to the storage
    // const uploadTask = await uploadBytesResumable(imageRef, blob);

    // if (uploadTask.state != "success") {
    //   throw new Error("File upload Failed");
    // }

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Upload failed:", error.message);
      }
    );

    // get the url if the upload is successful
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image to Firebase:", error.message);
    throw new Error("Failed to upload image to Firebase Storage.");
  }
};

// GET command
const getListings = () => client.get(endPoint);
// POST command
const addListings = async (listing) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("description", listing.description);
  data.append("category_id", listing.category.value);

  const imageUrls = [];

  try {
    for (const imageUri of listing.images) {
      try {
        const firebaseUrl = await uploadToFirebase(imageUri);
        imageUrls.push(firebaseUrl);
      } catch (error) {
        console.error("Error uploading image:", error.message);
        alert("Failed to upload one or more images. Please try again.");
        return { ok: false }; // Stop if any image upload fails
      }

      // Add the image URLs array to the FormData as JSON
      data.append("images", JSON.stringify(imageUrls));

      if (listing.location) {
        data.append("location", JSON.stringify(listing.location));
      }
      return client.post(endpoint, data, {
        onUploadProgress: (progress) =>
          onUploadProgress(progress.loaded / progress.total),
      });
    }
  } catch (error) {
    console.error("Error posting listing:", error.message);
    alert("Failed to save the listing. Please try again later.");
    return { ok: false };
  }
};
export default {
  addListings,
  getListings,
};
