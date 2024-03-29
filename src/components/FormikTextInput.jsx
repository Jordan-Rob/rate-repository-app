import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 2,
    color: "#d73a4a",
  },
  inputError: {
    borderColor: "#d73a4a",
    width: "80%",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 2,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  input: {
    borderColor: "gray",
    width: "80%",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 2,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={showError ? styles.inputError : styles.input}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
