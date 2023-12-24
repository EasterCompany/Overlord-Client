import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#20202999",
    backdropFilter: "blur(8px)",
    webKitBackdropFilter: "blur(8px)",
    elevation: 5,
    webkitBoxShadow: "0px 0px 5px #00000099",
    mozBoxShadow: "0px 0px 5px #00000099",
    boxShadow: "0px 0px 5px #00000099"
  },

  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 48
  },

  headerButtonsSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingLeft: 16
  },

  headerRetractSidebarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: "100%",
    marginLeft: -52,
  },

  headerButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
    marginHorizontal: 16,
    borderRadius: 6
  },

  headerButtonContainerHover: {
    backgroundColor: "#FFFFFF11"
  },

  headerButtonImage: {
    width: 22,
    height: 22
  },

  scrollContainer: {
    width: "100%"
  },

  dropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 32,
    paddingHorizontal: 24,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderBottomColor: "#00000033"
  },

  dropdownHeaderHover: {
    backgroundColor: "#FFFFFF11"
  },

  dropdownLabel: {
    userSelect: 'none',
    color: "#FFFFFF",
    fontFamily: "Metro",
    fontSize: 16
  },

  dropdownChevron: {
    width: 20,
    height: 20
  },

  dropdownMenu: {
    overflow: "hidden",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#00000033'
  }
});
