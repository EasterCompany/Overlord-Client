import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 720,
    height: "100%",
    minHeight: 720,
    marginTop: 64
  },

  contentContainer: {
    padding: 32,
    backgroundColor: "#20202999",
    backdropFilter: "blur(8px)",
    webKitBackdropFilter: "blur(8px)"
  },

  title: {
    paddingVertical: 12,
    color: "#FE8605",
    fontSize: 24,
    fontFamily: "Metro"
  }
});
