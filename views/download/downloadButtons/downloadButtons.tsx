// Assets
import style from './style';
import viewStyle from '../style';
// Components
import TextButton from '../../../shared/components/button/text';
// Library
import { useState, useRef, useEffect } from 'react';
import { View, Text, Platform, Animated, ActivityIndicator } from 'react-native';

const DownloadButtons = ({ channel, options }) => {
  const [lastOption, setOption] = useState(options);
  const [selectedFile, setSelectedFile] = useState(null);
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (lastOption !== options) {
      fadeAnimation.setValue(0);
      setOption(options);
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: Platform.OS !== 'web'
      }).start();
    }
  }, [options, lastOption])

  if (options === null || lastOption !== options) return <></>
  return <Animated.View style={{ opacity: fadeAnimation }}>
    <Text style={viewStyle.subTitle}>Select File Type:</Text>
    <View style={style.container}>
      {
        options === 'Linux' ? <LinuxOptions select={setSelectedFile}/> :
        options === 'Windows' ? <WindowsOptions select={setSelectedFile}/> :
        options === 'OSX' ? <OSXOptions select={setSelectedFile}/> :
        <></>
      }
    </View>
    {selectedFile !== null && <>
      <ActivityIndicator size="large" animated color="#FE8605"/>
      <Text style={style.spinnerText}>Acquiring files...</Text>
    </>}
  </Animated.View>
}

const LinuxOptions = ({ select }) => <>
  <DownloadButton text="Installer (debian)" buttonText=".deb" select={select}/>
  <DownloadButton text="Installer (other)" buttonText=".rpm" select={select}/>
  <DownloadButton text="Source Code" buttonText=".tar.gz" select={select}/>
</>

const WindowsOptions = ({ select }) => <>
  <DownloadButton text="Installer" buttonText=".exe" select={select}/>
  <DownloadButton text="Source Code" buttonText=".zip" select={select}/>
</>

const OSXOptions = ({ select }) => <>
  <DownloadButton text="Installer" buttonText=".pkg" select={select}/>
  <DownloadButton text="Source Code" buttonText=".tar.gz" select={select}/>
</>

const DownloadButton = ({ text, buttonText, select }) => <View style={style.option}>
  <Text style={style.label}>
    {text}
  </Text>
  <TextButton
    text={buttonText}
    containerStyle={style.buttonContainer}
    containerHoverStyle={style.buttonContainerHover}
    onPress={() => select(buttonText)}
  />
</View>

export default DownloadButtons;
