import React from "react";
import AppTextInput from "../AppText/AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
// function AppFormField({ name, width, ...otherProps }) {
//   const { setFieldTouched, handleChange, errors, touched, values } = useFormikContext();

//   // console.log("Field:", name, "Value:", values[name]);

//   return (
//     <>
//       <AppTextInput
//         onBlur={() => setFieldTouched(name)}
//         onChangeText={handleChange(name)}
//         width={width}
//         value={values[name]} // Ensure this matches Formik's values
//         {...otherProps}
//       />
//       {touched[name] && errors[name] && <ErrorMessage error={errors[name]} visible />}
//     </>
//   );
// }
export default AppFormField;
