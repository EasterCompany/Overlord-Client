// Assets
import style from './style';
import chevronUp from '../../shared/assets/svg/chevron_up.svg';
import chevronDown from '../../shared/assets/svg/chevron_down.svg';
import chevronLeftDoubleOrangeSVG from '../../shared/assets/svg/chevron_left_double_orange.svg';
import homeOrangeSVG from '../../shared/assets/svg/home_orange.svg';
import isLightModeSVG from '../../shared/assets/svg/is_light_mode.svg';
import isDarkModeSVG from '../../shared/assets/svg/is_dark_mode.svg';
import expandAllSVG from '../../shared/assets/svg/expand_all.svg';
import collapseAllSVG from '../../shared/assets/svg/collapse_all.svg';
import leftNavCloseOrangeSVG from '../../shared/assets/svg/left_nav_close_orange.svg';
import leftNavOpenOrangeSVG from '../../shared/assets/svg/left_nav_open_orange.svg';
// Components
import ImageButton from '../../shared/components/button/image';
// Hooks
import useDimensions from '../../shared/hooks/useDimensions';
// Library
import { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Pressable, Image, Text, Animated, Platform, NativeEventEmitter } from 'react-native';

const nativeEvent = new NativeEventEmitter();
const setDoc = (doc:string) => nativeEvent.emit('navChangeView', `docs:${doc}`);

const SideBar = ({ isVisible, setVisible, isDarkMode, setDarkMode }) => {
  const [w, v, s] = useDimensions();
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const toggleVisibleEvent = nativeEvent.addListener('docsSideBarToggle', () => {
      const toToggle = !isVisible;
      setVisible(toToggle);
      Animated.timing(slideAnimation, {
        toValue: isVisible ? -350 : 0,
        duration: isVisible ? 640 : 480,
        useNativeDriver: Platform.OS !== 'web'
      }).start(() => setVisible(toToggle))
    })
    return () => toggleVisibleEvent.remove();
  }, [isVisible])

  return <Animated.View style={[ style.container, { left: slideAnimation } ]}>
    <Header isDarkMode={isDarkMode} toggleDarkMode={() => setDarkMode(!isDarkMode)} isVisible={isVisible}/>
    <ScrollView style={[ style.scrollContainer, { height: v.height - 48 } ]}>
      <Dropdown label="Getting Started" openByDefault={true}>
        <Option label="Introduction" docId="getting_started/introduction"/>
        <Option label="Install (Linux)" docId="getting_started/install_linux"/>
        <Option label="Install (Windows)" docId="getting_started/install_windows"/>
        <Option label="Install (MacOSX)" docId="getting_started/install_darwin"/>
        <Option label="Basic Setup" docId="getting_started/basic_setup"/>
      </Dropdown>
      <Dropdown label="Command Line Interface" openByDefault={true}>
        <Option label="Git"/>
        <Option label="Server"/>
        <Option label="Client"/>
        <Option label="Sharing"/>
        <Option label="API"/>
        <Option label="Redis"/>
        <Option label="Nginx"/>
      </Dropdown>
      <Dropdown label="Library" openByDefault={true}>
        <Option label="Server API"/>
        <Option label="Client API"/>
        <Option label="User & Session"/>
      </Dropdown>
      <Dropdown label="Deployment" openByDefault={true}>
        <Option label="AWS (Lightsail)"/>
        <Option label="Python Anywhere"/>
      </Dropdown>
    </ScrollView>
  </Animated.View>
}

const Header = ({ isDarkMode, toggleDarkMode, isVisible }) => {
  const [showCollapseAll, setShowCollapseAll] = useState(true);
  const sideBarToggleButtonAnimation = useRef(new Animated.Value(-52)).current;

  useEffect(() => {
    const dropdownExpandedListener = nativeEvent.addListener('docsDropdownExpanded', () => setShowCollapseAll(true))

    setTimeout(() => {
      Animated.timing(sideBarToggleButtonAnimation, {
        toValue: isVisible ? -52 : 0,
        duration: isVisible ? 0 : 480,
        useNativeDriver: Platform.OS !== 'web'
      }).start()
    }, isVisible ? 0 : 640);

    return () => dropdownExpandedListener.remove();
  }, [isVisible])

  return <View style={style.header}>
    <View style={style.headerButtonsSection}>
      <HeaderButton icon={homeOrangeSVG} onPress={() => nativeEvent.emit('navChangeView', 'home')}/>
      <HeaderButton icon={isDarkMode ? isDarkModeSVG : isLightModeSVG} onPress={toggleDarkMode}/>
      <HeaderButton icon={showCollapseAll ? collapseAllSVG : expandAllSVG} onPress={() => {
        setShowCollapseAll(!showCollapseAll);
        nativeEvent.emit(showCollapseAll ? 'docsNavCollapseAll' : 'docsNavExpandAll');
      }}/>
    </View>
    <Animated.View style={[style.headerRetractSidebarButton, {
      marginLeft: sideBarToggleButtonAnimation
    }]}>
      <HeaderButton
        icon={isVisible ? leftNavCloseOrangeSVG : leftNavOpenOrangeSVG}
        onPress={() => nativeEvent.emit('docsSideBarToggle')}
        containerStyle={ isVisible ? {} : {
          width: 64,
          paddingLeft: 18,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          backgroundColor: '#00000033'
        }}
      />
    </Animated.View>
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

const Dropdown = ({ label, openByDefault=false, children }) => {
  const [isOpen, setOpen] = useState(openByDefault);
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    const collapseAllListener = nativeEvent.addListener('docsNavCollapseAll', () => setOpen(false))
    const expandAllListener = nativeEvent.addListener('docsNavExpandAll', () => setOpen(true))
    return () => {
      collapseAllListener.remove();
      expandAllListener.remove();
    }
  }, [])

  return <>
    <Pressable
      style={[
        style.dropdownHeader,
        isOpen ? {backgroundColor: '#00000011'} : {},
        isHovered ? style.dropdownHeaderHover : {}
      ]}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPress={() => {
        setOpen(!isOpen)
        nativeEvent.emit('docsDropdownExpanded')
      }}
    >
      <Text style={style.dropdownLabel}>{label}</Text>
      <Image source={isOpen ? chevronDown : chevronUp} style={style.dropdownChevron}/>
    </Pressable>
    <View style={[ style.dropdownMenu, {maxHeight: isOpen ? undefined : 0} ]}>
      {children}
    </View>
  </>
}

const Option = ({ label, docId }) => {
  const [isHovered, setHovered] = useState(false);
  return <Pressable
    style={[ style.dropdownHeader, isHovered ? style.dropdownHeaderHover : {} ]}
    onHoverIn={() => setHovered(true)}
    onHoverOut={() => setHovered(false)}
    onPress={() => setDoc(`${docId}:${label}`)}
  >
    <Text style={style.dropdownLabel}>{label}</Text>
  </Pressable>
};

export default SideBar;
