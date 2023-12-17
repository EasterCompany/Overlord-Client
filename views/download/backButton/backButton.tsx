// Assets
import style from './style';
import chevronLeftSVG from '../../../shared/assets/svg/chevron_left_orange.svg';
// Library
import { useRef } from 'react';
import { Pressable, Image, Text, Animated, Platform, NativeEventEmitter } from 'react-native';

const nativeEvent = new NativeEventEmitter()

const BackButton = () => {
  const underlineAnimation = useRef(new Animated.Value(0)).current;

  const onHoverIn = () => {
    Animated.timing(underlineAnimation, {
      toValue: 96,
      duration: 300,
      useNativeDriver: Platform.OS !== 'web'
    }).start();
  };

  const onHoverOut = () => {
    Animated.timing(underlineAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: Platform.OS !== 'web'
    }).start();
  };

  return <Pressable
    style={style.navBackButton}
    onHoverIn={onHoverIn}
    onHoverOut={onHoverOut}
    onPress={() => nativeEvent.emit("navChangeView", "home")}
  >
    <Image source={chevronLeftSVG} style={style.navBackButtonIcon}/>
    <Text style={style.navBackButtonText}>Back Home</Text>
    <Animated.View style={[ style.navBackButtonUnderline, { width: underlineAnimation } ]}/>
  </Pressable>
};

export default BackButton;
