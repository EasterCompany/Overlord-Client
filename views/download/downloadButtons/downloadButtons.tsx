// Assets
import style from './style';
import viewStyle from '../style';
// Components
import Divider from '../divider/divider';
import TextButton from '../../../shared/components/button/text';
// Library
import fileSaver from 'file-saver';
import { api } from '../../../shared/library/api';
import { useState, useRef, useEffect } from 'react';
import { View, Text, Platform, Animated, NativeEventEmitter, ActivityIndicator } from 'react-native';

const nativeEvent = new NativeEventEmitter();

const DownloadButtons = ({ channel, options }) => {
  const [lastOption, setOption] = useState(options);
  const [selectedFile, setSelectedFile] = useState(null);
  const [downloaded, setDownloaded] = useState(null);
  const [downloadError, setDownloadError] = useState(null);
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
    };
    if (selectedFile !== null && downloaded === null) {
      setDownloaded(false);
      api(
        `download/${channel}/${selectedFile}`,
        (resp) => setTimeout(() => {
          setDownloadError(resp);
          setDownloaded(null);
        }, 1750),
        (resp) => setTimeout(() => {
          fileSaver.saveAs(resp.url, resp.name)
          setDownloadError(null);
          setDownloaded(true);
        }, 1750)
      );
    };
  }, [options, lastOption, selectedFile])

  if (options === null || lastOption !== options) return <></>;
  return <>
    <Animated.View style={{ opacity: fadeAnimation }}>
      <Text style={viewStyle.subTitle}>Select File Type:</Text>
      <View style={style.container}>
        {
          options === 'Linux' ? <LinuxOptions select={setSelectedFile} file={selectedFile}/> :
          options === 'Windows' ? <WindowsOptions select={setSelectedFile} file={selectedFile}/> :
          options === 'OSX' ? <OSXOptions select={setSelectedFile} file={selectedFile}/> :
          <></>
        }
      </View>
    </Animated.View>
    <Divider/>
    {downloaded === false && <>
      <Text style={viewStyle.subTitle}>Downloading:</Text>
      <ActivityIndicator size="large" animated color="#FE8605"/>
      <Text style={style.spinnerText}>Acquiring files...</Text>
    </>}
    {downloaded === true && <>
      <Text style={viewStyle.subTitle}>Getting Started:</Text>
      <Text style={style.docsText}>
        Learn how to install, setup, configure & begin building applications with Overlord by checking out our
        beautifully crafted documentation which is accompanied by an educational and entertaining video series.
      </Text>
      <TextButton
        text="View Documentation"
        containerStyle={style.docsButtonContainer}
        containerHoverStyle={style.docsButtonContainerHover}
        textStyle={style.docsButtonText}
        onPress={() => nativeEvent.emit("navChangeView", "docs:home")}
      />
    </>}
  </>;
}

const LinuxOptions = ({ select, file }) => <>
  <DownloadButton text="Installer (debian)" buttonText=".deb" select={select} file={file}/>
  <DownloadButton text="Installer (other)" buttonText=".rpm" select={select} file={file}/>
  <DownloadButton text="Source Code" buttonText=".tar.gz" select={select} file={file}/>
</>;

const WindowsOptions = ({ select, file }) => <>
  <DownloadButton text="Installer" buttonText=".exe" select={select} file={file}/>
  <DownloadButton text="Source Code" buttonText=".zip" select={select} file={file}/>
</>;

const OSXOptions = ({ select, file }) => <>
  <DownloadButton text="Installer" buttonText=".pkg" select={select} file={file}/>
  <DownloadButton text="Source Code" buttonText=".tar.gz" select={select} file={file}/>
</>;

const DownloadButton = ({ text, buttonText, select, file }) => {
  const [disabled, setDisabled] = useState(false);
  return <>
    <View style={style.option}>
      <Text style={style.label}>
        {text}
      </Text>
      <TextButton
        text={buttonText}
        containerStyle={style.buttonContainer}
        containerHoverStyle={style.buttonContainerHover}
        onPress={() => {
          setDisabled(true);
          select(buttonText);
        }}
        disabled={file !== null}
      />
    </View>
  </>;
};

export default DownloadButtons;
