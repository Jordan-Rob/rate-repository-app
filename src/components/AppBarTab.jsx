import { Text, StyleSheet, Pressable } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color:"white",
    paddingLeft: 14
  }
  // ...
});

const AppBarTab = () => {
  return (
    <Pressable>
      <Text style={styles.text}>
        Repositories
      </Text>
    </Pressable>
  )
};

export default AppBarTab;