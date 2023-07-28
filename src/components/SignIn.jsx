import { View, StyleSheet, Pressable } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const initialValues = {
    mass: '',
    height: '',
};

const SignInForm = ({onSubmit}) => {
    return (
        <View>
            <FormikTextInput name={"Username"} placeholder={"username"}></FormikTextInput>
            <FormikTextInput name={"Password"} placeholder={"password"}></FormikTextInput>
            <Pressable onPress={onSubmit}>
              <Text>Sign In</Text>
            </Pressable>
        </View>
    )
}

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
};

export default SignIn;