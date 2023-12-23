// Assets
import style from '../style';
// Components
import BackButton from '../../../components/backButton/backButton';
import OSSelect from '../osSelect/osSelect';
import Divider from '../divider/divider';
import DownloadButtons from '../downloadButtons/downloadButtons';
// Library
import { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

const DownloadLatest = () => {
  const [selected, setSelected] = useState(null);
  return <View style={style.container}>
    <BackButton/>
    <View style={style.contentContainer}>
      <Text style={style.title}>Download Latest Version</Text>
      <OSSelect selected={selected} setSelected={setSelected}/>
      <Divider/>
      <DownloadButtons channel="latest" options={selected}/>
    </View>
  </View>
}

export default DownloadLatest;
