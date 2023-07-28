import { View, StyleSheet, Pressable, Button } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name={"Username"}
        placeholder={"username"}
      ></FormikTextInput>
      <FormikTextInput
        name={"Password"}
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
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
