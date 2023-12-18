import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#20202966",
    backdropFilter: "blur(8px)",
    webKitBackdropFilter: "blur(8px)",
    boxShadow: "0 1px 5px #00000033"
  },

  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 48,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderBottomColor: "#00000033"
  },

  headerButtonsSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "calc(100% - 52px)",
    height: "100%"
  },

  headerRetractSidebarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: "100%"
  },

  headerButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
    marginHorizontal: 16,
    borderRadius: 6
  },

  headerButtonContainerHover: {
    backgroundColor: "#F0F0F010"
  },

  headerButtonImage: {
    width: 28,
    height: 28
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
    backgroundColor: "#F0F0F010"
  },

  dropdownLabel: {
    color: "#FFFFFF",
    fontFamily: "Metro",
    fontSize: 16
  },

  dropdownChevron: {
    width: 20,
    height: 20
  }
});
