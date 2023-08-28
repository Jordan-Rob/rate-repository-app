import { Platform, StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  font: Platform.select({
    android: "Roboto",
    ios: "Arial",
    default: "System",
  }),
});

const Main = () => {
  return (
    <View style={[styles.container, styles.font]}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;
