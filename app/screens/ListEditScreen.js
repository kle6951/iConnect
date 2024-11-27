import React, { useState } from "react";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as FormPicker,
  FormImagePicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import colors from "../config/colors";
import {
  FontAwesome,
  FontAwesome5,
  AntDesign,
  FontAwesome6,
} from "@expo/vector-icons";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(0).max(100000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});
// Book type category
const categories = [
  { label: "Arts", value: 1, backgroundColor: colors.primary, icon: "draw" },
  {
    label: "Economics",
    value: 2,
    backgroundColor: colors.primary,
    icon: "money",
    IconComponentName: FontAwesome,
  },
  {
    label: "Education",
    value: 3,
    backgroundColor: colors.primary,
    icon: "book-education",
  },
  {
    label: "Medical",
    value: 4,
    backgroundColor: colors.primary,
    icon: "book-medical",
    IconComponentName: FontAwesome5,
  },
  {
    label: "Science",
    value: 5,
    backgroundColor: colors.primary,
    icon: "rocket1",
    IconComponentName: AntDesign,
  },
  {
    label: "Computing",
    value: 6,
    backgroundColor: colors.primary,
    icon: "computer",
    IconComponentName: FontAwesome6,
  },
];
function ListEditScreen({ navigation }) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListings(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }
    resetForm();
    navigation.goBack(); // Close the modal after successful upload
  };
  return (
    <Screen>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <FormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={10}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

export default ListEditScreen;
