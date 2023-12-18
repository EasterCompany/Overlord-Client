// Assets
import style from './style';
import chevronUp from '../../shared/assets/svg/chevron_up.svg';
import chevronDown from '../../shared/assets/svg/chevron_down.svg';
import chevronLeftDoubleOrange from '../../shared/assets/svg/chevron_left_double_orange.svg';
// Components
import ImageButton from '../../shared/components/button/image';
// Hooks
import useDimensions from '../../shared/hooks/useDimensions';
// Library
import { useState } from 'react';
import { View, ScrollView, Pressable, Image, Text } from 'react-native';

const SideBar = () => {
  const [w, v, s] = useDimensions();
  return <View style={style.container}>
    <Header/>
    <ScrollView style={[ style.scrollContainer, { height: v.height - 48 } ]}>
      <Dropdown label="Getting Started"/>
    </ScrollView>
  </View>
}

const Header = () => {
  return <View style={style.header}>
    <View style={style.headerButtonsSection}>
    </View>
    <View style={style.headerRetractSidebarButton}>
      <HeaderButton icon={chevronLeftDoubleOrange} style={{
        marginHorizontal: 0
      }}/>
    </View>
  </View>
}

const HeaderButton = ({ icon, onPress, containerStyle }) => {
  return <ImageButton
    image={icon}
    imageStyle={style.headerButtonImage}
    containerStyle={{ ...style.headerButtonContainer, ...containerStyle }}
    containerHoverStyle={style.headerButtonContainerHover}
    onPress={onPress}
  />
}

const Dropdown = ({ label }) => {
  const [isHovered, setHovered] = useState(false);
  return <Pressable
    style={[ style.dropdownHeader, isHovered ? style.dropdownHeaderHover : {} ]}
    onHoverIn={() => setHovered(true)}
    onHoverOut={() => setHovered(false)}
  >
    <Text style={style.dropdownLabel}>{label}</Text>
    <Image source={chevronDown} style={style.dropdownChevron}/>
  </Pressable>
}

export default SideBar;
