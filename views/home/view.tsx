// Assets
import style from './style';
import awsPNG from '../../shared/assets/image/aws.png';
import reactPNG from '../../shared/assets/image/react.png';
import redisPNG from '../../shared/assets/image/redis.png';
import djangoPNG from '../../shared/assets/image/django.png';
import overlordPNG from '../../shared/assets/image/overlord.png';
// Components
import TextButton from '../../shared/components/button/text';
// Hooks
import useDimensions from '../../shared/hooks/useDimensions';
// Library
import { useRef } from 'react';
import {
  Text,
  View,
  Animated,
  Platform,
  NativeEventEmitter
} from 'react-native';

const nativeEvent = new NativeEventEmitter();

const Home = () => {
  const [w, v, s] = useDimensions();
  const fadeAnimationTriggered = useRef(false);
  const fadeAnimationHeader = useRef(new Animated.Value(0)).current;
  const fadeAnimationHeaderLogo = useRef(new Animated.Value(0)).current;
  const fadeAnimationAwsLogo = useRef(new Animated.Value(0)).current;
  const fadeAnimationReactLogo = useRef(new Animated.Value(0)).current;
  const fadeAnimationDjangoLogo = useRef(new Animated.Value(0)).current;
  const fadeAnimationRedisLogo = useRef(new Animated.Value(0)).current;

  if (!fadeAnimationTriggered.current) {
    Animated.timing(fadeAnimationHeader, {
      toValue: 1,
      duration: 1250,
      useNativeDriver: Platform.OS !== 'web'
    }).start(() => Animated.timing(fadeAnimationHeaderLogo, {
      toValue: 0.25,
      duration: 750,
      useNativeDriver: Platform.OS !== 'web'
    }).start(() => Animated.timing(fadeAnimationAwsLogo, {
      toValue: 0.75,
      duration: 750,
      useNativeDriver: Platform.OS !== 'web'
    }).start(() => Animated.timing(fadeAnimationReactLogo, {
      toValue: 0.75,
      duration: 750,
      useNativeDriver: Platform.OS !== 'web'
    }).start(() => Animated.timing(fadeAnimationDjangoLogo, {
      toValue: 0.75,
      duration: 750,
      useNativeDriver: Platform.OS !== 'web'
    }).start(() => Animated.timing(fadeAnimationRedisLogo, {
      toValue: 0.75,
      duration: 750,
      useNativeDriver: Platform.OS !== 'web'
    }).start())))));
    fadeAnimationTriggered.current = true;
  }

  return <>
    <Animated.View style={[ style.header, { opacity: fadeAnimationHeader }]}>
      <Animated.Image source={overlordPNG} style={[ style.headerLogo, { opacity: fadeAnimationHeaderLogo } ]}/>
      <Text style={style.h1}>Overlord</Text>
      <Text style={style.h2}>The Fullstack Framework</Text>
      <Text style={style.h3}>By Easter Company</Text>
    </Animated.View>

    <View style={style.partnerLogoSection}>
      <Animated.Image
        source={awsPNG}
        style={[ style.partnerLogo, { opacity: fadeAnimationAwsLogo } ]}
        resizeMode="contain"
      />
      <Animated.Image
        source={reactPNG}
        style={[ style.partnerLogo, { opacity: fadeAnimationReactLogo } ]}
        resizeMode="contain"
      />
      <Animated.Image
        source={djangoPNG}
        style={[ style.partnerLogo, { opacity: fadeAnimationDjangoLogo } ]}
        resizeMode="contain"
      />
      <Animated.Image
        source={redisPNG}
        style={[ style.partnerLogo, { opacity: fadeAnimationRedisLogo } ]}
        resizeMode="contain"
      />
    </View>

    <Animated.View style={[ style.contentContainer, { opacity: fadeAnimationHeader } ]}>
      <CTA
        buttonText="Documentation"
        labelText="Learn more"
        onPress={() => nativeEvent.emit("navChangeView", "docs")}
      />
      <CTA
        buttonText="Download Latest"
        labelText="Personal projects"
        onPress={() => nativeEvent.emit("navChangeView", "download:latest")}
      />
      <CTA
        buttonText="Download LTS"
        labelText="Business projects"
        onPress={() => nativeEvent.emit("navChangeView", "download:lts")}
      />
    </Animated.View>
  </>;
};

const CTA = ({buttonText, labelText, onPress}) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 750,
      useNativeDriver: Platform.OS !== 'web'
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 750,
      useNativeDriver: Platform.OS !== 'web'
    }).start();
  };

  return <View style={style.button}>
    <TextButton
      text={buttonText}
      containerStyle={style.buttonContainer}
      containerHoverStyle={style.buttonContainerHover}
      textStyle={style.buttonText}
      onHoverIn={fadeIn}
      onHoverOut={fadeOut}
      onPress={onPress}
      disabled={false}
    />
    <Animated.View style={[ style.buttonHoverTextContainer, { opacity: fadeAnimation } ]}>
      <Text style={style.buttonHoverText}>{labelText}</Text>
    </Animated.View>
  </View>
};

export default Home;
