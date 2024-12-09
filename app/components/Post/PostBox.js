import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";
import Screen from "../../components/Screen";
import CloseIcon from "../../components/Post/CloseIcon";
import {
  AppForm,
  FormImagePicker,
  AppFormField as FormField,
  SubmitButton,
} from "../forms";
import * as Yup from "yup";
import postsApi from "../../api/posts";

const validationSchema = Yup.object().shape({
  caption: Yup.string().required().min(1).label("Share your exciting news"),
  images: Yup.array(),
});

const PostBox = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = async (post, { resetForm }) => {
    const result = await postsApi.addPosts(post);

    if (!result.ok) {
      return alert("Could not save the post");
    }

    resetForm();
    alert("Post is uploaded!");
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <AppText style={styles.textBox}>Share your exciting news</AppText>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Screen>
          <View style={styles.header}>
            <View style={styles.leftContainer}>
              <CloseIcon
                onPress={() => setModalVisible(false)}
                backgroundColor="white"
                style={styles.closeIcon}
              />
            </View>
            <View style={styles.centerContainer}>
              <AppText style={styles.headerTitle}>Create Post</AppText>
            </View>
            <View style={styles.rightContainer} />
          </View>
          <AppForm
            initialValues={{
              caption: "",
              images: [],
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <View style={styles.formContainer}>
              <FormImagePicker name="images" style={styles.imagePicker} />
              <FormField
                name="caption"
                placeholder="Share your exciting news"
                multiline={true}
                scrollEnabled={true}
                style={styles.textInput}
              />
              <SubmitButton title="Post" />
            </View>
          </AppForm>
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  leftContainer: {
    flex: 1,
  },
  centerContainer: {
    flex: 2,
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
  },
  closeIcon: {
    alignSelf: "flex-start",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  formContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  imagePicker: {
    marginBottom: 0,
  },
  textBox: {
    height: 50,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  textInput: {
    height: 500,
    textAlignVertical: "top",
    padding: 5,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 15,
  },
});

export default PostBox;
