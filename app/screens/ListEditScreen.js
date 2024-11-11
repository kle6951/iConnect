import React from "react";
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
function ListEditScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          categories: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyBoardType="numeric"
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
