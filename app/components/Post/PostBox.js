import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";
import Screen from "../../components/Screen";
import CloseIcon from "../../components/Post/CloseIcon";
import { AppForm, FormImagePicker, AppFormField as FormFiled } from "../forms";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  description: Yup.string().required().min(1).label("Share your exciting news"),
  images: Yup.array(),
});

const PostBox = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
            <CloseIcon
              onPress={() => setModalVisible(false)}
              backgroundColor="white"
              style={styles.closeIcon}
            />
            <AppText style={styles.headerTitle}>Create Post</AppText>
            <AppText style={styles.postButton}>Post</AppText>
          </View>
          <AppForm
            initialValues={{
              description: "",
              images: [],
            }}
            onSubmit={() => console.log("submit")}
            validationSchema={validationSchema}
          >
            <View style={styles.formContainer}>
              <FormImagePicker name="images" style={styles.imagePicker} />
              <FormFiled
                name="description"
                placeholder="Share your exciting news"
                multiline={true}
                scrollEnabled={true}
                style={styles.textInput}
              />
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
  closeIcon: {
    marginRight: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  postButton: {
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 20,
    marginRight: 10,
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
    height: "81%",
    textAlignVertical: "top",
    padding: 5,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 15,
  },
});

export default PostBox;
