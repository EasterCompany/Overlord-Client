// Assets
import style from './style';
import applePNG from '../../../shared/assets/image/apple.png';
import linuxPNG from '../../../shared/assets/image/linux.png';
import windowsSVG from '../../../shared/assets/svg/windows.svg';
// Components
import ImageButton from '../../../shared/components/button/image';
// Library
import { View, Text } from 'react-native';

const OSSelect = ({selected, setSelected}) => {
  return <>
    <Text style={style.selectOSLabel}>Select Operating System:</Text>
    <View style={style.selectOSOptionsContainer}>
      <OSButton label="Linux" image={linuxPNG} selected={selected} select={setSelected}/>
      <OSButton label="Windows" image={windowsSVG} selected={selected} select={setSelected}/>
      <OSButton label="OSX" image={applePNG} selected={selected} select={setSelected}/>
    </View>
  </>
};

const OSButton = ({ label, image, selected, select }) => {
  return <ImageButton
    label={label}
    labelStyle={{ color: '#FFFFFF', marginTop: 12, fontFamily: 'Metro-Thin', fontSize: 13 }}
    containerStyle={{
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      borderRadius: 6,
      backgroundColor: selected === label ? '#FE860599' : undefined
    }}
    containerHoverStyle={{
      backgroundColor: selected !== label ? '#11111133' : undefined
    }}
    image={image}
    imageStyle={{
      width: 48,
      height: 48,
      opacity: selected !== label ? 0.5 : 1
    }}
    imageHoverStyle={{
      opacity: 1
    }}
    onPress={() => select(label)}
  />
}

export default OSSelect;
