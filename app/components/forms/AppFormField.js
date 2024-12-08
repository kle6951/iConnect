import React from "react";
import AppTextInput from "../AppText/AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

function AppFormField({
  name,
  width,
  multilineEnabled = false,
  style,
  scrollEnabled = false,
  ...otherProps
}) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        multilineEnabled={multilineEnabled} // Pass correctly
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        scrollEnabled={scrollEnabled} // Pass correctly
        style={[style]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
export default AppFormField;
