// Assets
import style from './style';
import applePNG from '../../../shared/assets/image/apple.png';
import linuxPNG from '../../../shared/assets/image/linux.png';
import windowsSVG from '../../../shared/assets/svg/windows.svg';
// Components
import ImageButton from '../../../shared/components/button/image';
// Library
import { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

const OSSelect = () => {
  const [hoveredOption, setHoveredOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  return <>
    <Text style={style.selectOSLabel}>Select Operating System:</Text>
    <View style={style.selectOSOptionsContainer}>
      <OSButton label="Linux" image={linuxPNG} selectedOption={selectedOption} select={setSelectedOption}/>
      <OSButton label="Windows" image={windowsSVG} selectedOption={selectedOption} select={setSelectedOption}/>
      <OSButton label="OSX" image={applePNG} selectedOption={selectedOption} select={setSelectedOption}/>
    </View>
  </>
};

const OSButton = ({ label, image, selectedOption, select }) => {
  return <ImageButton
    label={label}
    labelStyle={{ color: '#FFFFFF', marginTop: 12, fontFamily: 'Metro-Thin', fontSize: 13 }}
    containerStyle={{
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      borderRadius: 6,
      backgroundColor: selectedOption === label ? '#FE860599' : undefined
    }}
    containerHoverStyle={{
      backgroundColor: selectedOption !== label ? '#11111133' : undefined
    }}
    image={image}
    imageStyle={{
      width: 48,
      height: 48,
      opacity: selectedOption !== label ? 0.5 : 1
    }}
    imageHoverStyle={{
      opacity: 1
    }}
    onPress={() => select(label)}
  />
}

export default OSSelect;
