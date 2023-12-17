// Assets
import style from '../style';
// Components
import BackButton from '../backButton/backButton';
import OSSelect from '../osSelect/osSelect';
// Library
import { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

const DownloadLatest = () => {
  return <View style={style.container}>
    <BackButton/>
    <View style={style.contentContainer}>
      <Text style={style.title}>Download Latest Version</Text>
      <OSSelect/>
    </View>
  </View>
}

export default DownloadLatest;
