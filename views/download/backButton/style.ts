import { StyleSheet } from "react-native";

export default StyleSheet.create({
  navBackButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 124
  },

  navBackButtonIcon: {
    width: 28,
    height: 28
  },

  navBackButtonText: {
    userSelect: "none",
    color: "#FE8605",
    fontFamily: "Metro-Thin",
    fontSize: 18
  },

  navBackButtonUnderline: {
    position: "absolute",
    bottom: 0,
    left: 28,
    width: "calc(100% - 28px)",
    borderColor: "#FE8605",
    borderBottomWidth: "1px"
  },
});
