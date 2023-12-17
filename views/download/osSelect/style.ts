import { StyleSheet } from "react-native";

export default StyleSheet.create({
  selectOSLabel: {
    paddingVertical: 9,
    color: "#FE8605",
    fontSize: 18,
    fontFamily: "Metro"
  },

  selectOSOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginVertical: 32
  },

  selectOSOption: {
    width: 50,
    height: 50
  },

  osButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 6
  }
});
