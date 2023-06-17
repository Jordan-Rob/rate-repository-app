import { Text, StyleSheet, Pressable } from 'react-native';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  text: {
    color:"white",
    paddingLeft: 14
  },
  bottom:{
    flexDirection: "row"
  },
  // ...
});

const AppBarTab = () => {
  return (
    <Pressable style={styles.bottom}>
      <Link to="/">
        <Text style={styles.text}>
          Repositories
        </Text>
      </Link>
      <Link to="/SignIn">
        <Text style={styles.text}>
          Sign In
        </Text>
      </Link>
    </Pressable>
  )
};

export default AppBarTab;