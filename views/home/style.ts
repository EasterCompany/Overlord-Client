import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 150,
    paddingBottom: 96
  },

  headerLogo: {
    position: 'absolute',
    width: 250,
    height: 250,
    marginTop: 18
  },

  h1: {
    textAlign: 'center',
    color: '#EEEEEE',
    fontFamily: 'Metro-Bold',
    fontSize: 72,
    width: '100%'
  },

  h2: {
    textAlign: 'center',
    color: '#CCCCCC',
    fontFamily: 'Metro',
    fontSize: 48,
    width: '100%'
  },

  h3:{
    textAlign: 'center',
    color: '#AAAAAA',
    fontFamily: 'Metro-Thin',
    fontSize: 32,
    width: '100%'
  },

  partnerLogoSection: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
    marginBottom: 104
  },

  partnerLogo: {
    width: 32,
    height: 32
  },

  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    maxWidth: 1280,
    height: '100%',
    minHeight: 250,
    //backgroundColor: '#20202999',
    //backdropFilter: 'blur(8px)',
    //webKitBackdropFilter: 'blur(8px)'
  },

  button: {
    width: '25%',
    maxWidth: 225,
    height: 100
  },

  buttonHoverTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 4,
    width: '100%'
  },

  buttonHoverText: {
    textAlign: 'center',
    width: '100%',
    color: '#919191',
    fontFamily: 'Metro-Thin',
    fontSize: 14
  },

  buttonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    maxWidth: 225,
    height: 64,
    backgroundColor: '#20202933',
    backdropFilter: 'blur(8px)',
    webKitBackdropFilter: 'blur(8px)'
  },

  buttonContainerHover: {
    boxShadow: "1px 1px 12px #FE860533",
    transform: "scale(1.025)"
  },

  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Metro-Thin',
    fontSize: 18
  }
});
