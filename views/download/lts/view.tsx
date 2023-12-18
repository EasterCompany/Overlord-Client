// Assets
import style from '../style';
// Components
import BackButton from '../backButton/backButton';
import OSSelect from '../osSelect/osSelect';
import Divider from '../divider/divider';
import DownloadButtons from '../downloadButtons/downloadButtons';
// Library
import { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

const DownloadLTS = () => {
  const [selected, setSelected] = useState(null);
  return <View style={style.container}>
    <BackButton/>
    <View style={style.contentContainer}>
      <Text style={style.title}>Download LTS Version</Text>
      <Text style={style.subTitle}>
        Long-term-support versions will only be able to update to the next LTS version, when one is available.
        LTS channel versions of Overlord are only recommended for business & commercial projects.
      </Text>
      <OSSelect selected={selected} setSelected={setSelected}/>
      <Divider/>
      <DownloadButtons channel="lts" options={selected}/>
    </View>
  </View>
}

export default DownloadLTS;
