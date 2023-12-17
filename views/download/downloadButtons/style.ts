import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignSelf: "center",
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: 64
  },

  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  label: {
    color: '#E0E0E0',
    fontFamily: 'Metro',
    fontSize: 18,
  },

  buttonContainer: {
    width: 164,
    height: 28,
    transition: 'width 1s',
    backgroundColor: 'transparent'
  },

  buttonContainerHover: {
    width: 194,
    height: 28,
    transition: 'width 0.5s',
    backgroundColor: '#FE860533'
  },

  spinnerText: {
    alignSelf: 'center',
    textAlign: 'center',
    width: '100%',
    color: '#FFFFFF',
    fontFamily: 'Metro',
    fontSize: 16,
    marginVertical: 16
  }
});
