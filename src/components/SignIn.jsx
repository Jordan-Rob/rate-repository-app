import { View, StyleSheet, Pressable, Button } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import * as yup from "yup";

const initialValues = {
  mass: "",
  height: "",
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 50,
    textAlign: "center",
  },
  submitButton: {
    padding: 2,
    backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().min(2, "Too short!").required("Username is required"),
  password: yup.string().min(2, "Too short!").required("Password is required"),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name={"username"}
        placeholder={"username"}
      ></FormikTextInput>
      <FormikTextInput
        name={"password"}
        placeholder={"password"}
      ></FormikTextInput>
      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Button title={`Sign In`} color={"white"} />
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
