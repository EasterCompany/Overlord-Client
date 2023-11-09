// Library
import {
  Text,
  View,
  ScrollView,
  ViewStyle,
  TextStyle,
  Platform
} from 'react-native';


const Home = ({view}:any) => {

  const scroll = {
    width: view.width,
    height: view.height,
    backgroundColor: '#202029'
  };

  const scrollContainer = {
    width: view.width,
    minHeight: view.height
  };

  const header:ViewStyle = {
    width: '100%',
    padding: '5%',
  };

  const h1:TextStyle = {
    color: '#ffffff',
    fontSize: 124,
    fontFamily: 'Metro-Bold',
  };

  const h2:TextStyle = {
    color: '#ffffff66',
    fontSize: 72,
    fontFamily: 'Metro',
  };

  const h3:TextStyle = {
    color: '#ffffff33',
    fontSize: 48,
    fontFamily: 'Metro-Thin',
  };

  const infoHeader:TextStyle = {
    color: '#ffffff9f',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    paddingBottom: 16,
    fontSize: 64,
    fontFamily: 'Metro',
  };

  const infoSection:TextStyle = {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%'
  };

  const infoSectionText:TextStyle = {
    width: '100%',
    paddingTop: '1%',
    paddingLeft: '2%',
    paddingRight: '2%',
    paddingBottom: '1%',
    color: '#ffffff',
    fontSize: 26,
    fontFamily: 'Metro-Thin'
  };

  return <ScrollView style={scroll} contentContainerStyle={scrollContainer}>
    <View style={header}>
      <Text style={h1}>Overlord</Text>
      <Text style={h2}>The Fullstack Framework</Text>
      <Text style={h3}>By Easter Company</Text>
    </View>
    <Text style={infoHeader}>Where is the documentation?</Text>
    <View style={infoSection}>
      <Text style={infoSectionText}>
        We're really sorry! but the documentation app for Overlord will be down for a few more days while we are
        overhauling our systems. When they are back up we promise you'll be totally blown away.
      </Text>
    </View>
  </ScrollView>;
};


export default Home;
