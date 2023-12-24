// Assets
import playSVG from '../../../shared/assets/svg/play.svg';
import closeSVG from '../../../shared/assets/svg/close.svg';
import introductionWebm from '../../../assets/video/introduction.webm';
// Hooks
import useDimensions from '../../../shared/hooks/useDimensions';
// Components
import ImageButton from '../../../shared/components/button/image';
// Library
import Markdown from 'react-native-markdown-display';
import { useState, useRef } from 'react';
import { Video } from 'expo-av';
import { ScrollView, View, Text, Platform } from 'react-native';

const DocumentViewer = ({ title, navIsVisible, isDarkMode, content }) => {
  const [w, v, s] = useDimensions();
  const [showVideo, setVideo] = useState(false);
  const videoDoc = useRef(null);
  const theme = useRef({
    color: '#000000',
    fontFamily: 'Metro'
  }).current;

  if (isDarkMode) theme.color = '#FFFFFF';
  else theme.color = '#000000';

  if (!title) return <></>

  const MarkdownStyle = {
    // The main container
    body: {},

    // Headings
    heading1: {
      color: theme.color,
      flexDirection: 'row',
      fontFamily: theme.fontFamily,
      fontSize: 38,
      marginTop: 32,
      marginBottom: 16
    },
    heading2: {
      color: theme.color,
      flexDirection: 'row',
      fontFamily: theme.fontFamily,
      fontSize: 28,
      marginTop: 32,
      marginBottom: 16
    },
    heading3: {
      color: theme.color,
      flexDirection: 'row',
      fontFamily: theme.fontFamily,
      fontSize: 22,
      marginTop: 32,
      marginBottom: 16
    },
    heading4: {
      color: theme.color,
      flexDirection: 'row',
      fontFamily: theme.fontFamily,
      fontSize: 18,
      marginTop: 32,
      marginBottom: 16
    },
    heading5: {
      color: theme.color,
      flexDirection: 'row',
      fontFamily: theme.fontFamily,
      fontSize: 16,
      marginTop: 32,
      marginBottom: 16
    },
    heading6: {
      color: theme.color,
      flexDirection: 'row',
      fontFamily: theme.fontFamily,
      fontSize: 14,
      marginTop: 32,
      marginBottom: 16
    },

    // Horizontal Rule
    hr: {
      backgroundColor: theme.color,
      height: 1,
    },

    // Emphasis
    strong: {
      color: theme.color,
      fontFamily: 'Metro-Bold',
      fontWeight: 'bold',
    },
    em: {
      color: theme.color,
      fontFamily: theme.fontFamily,
      fontStyle: 'italic',
    },
    s: {
      color: theme.color,
      fontFamily: theme.fontFamily,
      textDecorationLine: 'line-through',
    },

    // Block quotes
    blockquote: {
      color: theme.color,
      backgroundColor: '#F5F5F5',
      borderColor: '#CCC',
      borderLeftWidth: 4,
      marginLeft: 5,
      paddingHorizontal: 5,
    },

    // Lists
    bullet_list: {
      color: theme.color,
      fontFamily: theme.fontFamily,
      fontSize: 18
    },
    ordered_list: {
      color: theme.color,
    },
    list_item: {
      color: theme.color,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    // @pseudo class, does not have a unique render rule
    bullet_list_icon: {
      color: theme.color,
      marginLeft: 10,
      marginRight: 10,
    },
    // @pseudo class, does not have a unique render rule
    bullet_list_content: {
      flex: 1,
      color: theme.color,
    },
    // @pseudo class, does not have a unique render rule
    ordered_list_icon: {
      color: theme.color,
      marginLeft: 10,
      marginRight: 10,
    },
    // @pseudo class, does not have a unique render rule
    ordered_list_content: {
      flex: 1,
      color: theme.color,
    },

    // Code
    code_inline: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      backgroundColor: '#f5f5f5',
      padding: 10,
      borderRadius: 4,
      ...Platform.select({
        ['ios']: {
          fontFamily: 'Courier',
        },
        ['android']: {
          fontFamily: 'monospace',
        },
      }),
    },
    code_block: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      backgroundColor: '#f5f5f5',
      padding: 10,
      borderRadius: 4,
      ...Platform.select({
        ['ios']: {
          fontFamily: 'Courier',
        },
        ['android']: {
          fontFamily: 'monospace',
        },
      }),
    },
    fence: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      backgroundColor: '#f5f5f5',
      padding: 10,
      borderRadius: 4,
      ...Platform.select({
        ['ios']: {
          fontFamily: 'Courier',
        },
        ['android']: {
          fontFamily: 'monospace',
        },
      }),
    },

    // Tables
    table: {
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 3,
    },
    thead: {},
    tbody: {},
    th: {
      flex: 1,
      padding: 5,
    },
    tr: {
      borderBottomWidth: 1,
      borderColor: '#000000',
      flexDirection: 'row',
    },
    td: {
      flex: 1,
      padding: 5,
    },

    // Links
    link: {
      textDecorationLine: 'underline',
    },
    blocklink: {
      flex: 1,
      borderColor: '#000000',
      borderBottomWidth: 1,
    },

    // Images
    image: {
      flex: 1,
    },

    // Text Output
    text: {
      color: theme.color,
      fontFamily: theme.fontFamily,
    },
    textgroup: {
      color: theme.color,
      fontFamily: theme.fontFamily,
    },
    paragraph: {
      color: theme.color,
      fontSize: 18,
      fontFamily: theme.fontFamily,
      fontWeight: 400,
      marginTop: 10,
      marginBottom: 10,
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '100%',
    },
    hardbreak: {
      width: '100%',
      height: 1,
    },
    softbreak: {},

    // Believe these are never used but retained for completeness
    pre: {},
    inline: {},
    span: {},
  };

  return <ScrollView style={{
    position: 'absolute',
    top: -52,
    left: 0,
    width: navIsVisible ? v.width - 350 : v.width,
    minHeight: v.height + 52,
    maxHeight: v.height + 52,
    marginLeft: navIsVisible ? 350 : 0,
    transition: 'all ease-in-out 0.64s'
  }}>
    <View style={{
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      flexWrap: 'wrap',
      top: 52,
      width: '100%',
      height: (v.height / 2) - 52,
      paddingBottom: 16,
      transition: 'all ease-in-out 0.64s'
    }}>
      <Text style={{
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: 'Metro',
        fontSize: 42,
        transition: 'all ease-in-out 0.64s'
      }}>{title}</Text>
      <ImageButton
        onPress={() => setVideo(true)}
        image={playSVG}
        imageStyle={{
          width: 28,
          height: 28,
        }}
        label="Watch Video"
        labelStyle={{
          userSelect: 'none',
          textAlign: 'center',
          color: '#FFFFFF',
          fontFamily: 'Metro-Thin',
          fontSize: 18,
          width: '100%'
        }}
        containerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          minWidth: 200,
          padding: 12,
          marginTop: 48,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#FFFFFF'
        }}
        containerHoverStyle={{
          backgroundColor: '#FFFFFF66',
        }}
      />
    </View>
    { showVideo ?
      <>
        <Video
          ref={videoDoc}
          source={introductionWebm}
          resizeMode="cover"
          shouldPlay={true}
          useNativeControls
          style={{
            position: 'absolute',
            top: 52,
            left: 0,
            width: navIsVisible ? v.width - 350 : v.width,
            minHeight: v.height,
            maxHeight: v.height
          }}
          videoStyle={{
            width: '100%',
            height: '100%'
          }}
        />
        <ImageButton
          label="Close Video"
          labelStyle={{
            textAlign: 'center',
            color: '#FFFFFF',
            fontFamily: 'Metro-Thin',
            fontSize: 14,
            width: '100%'
          }}
          image={closeSVG}
          imageStyle={{
            width: 18,
            height: 18,
            marginLeft: 6,
            marginRight: 6
          }}
          containerStyle={{
            flexDirection: 'row',
            position: 'absolute',
            justifyContent: 'space-between',
            alignItems: 'center',
            top: 60,
            right: 0,
            width: 128,
            height: 32,
            borderRadius: 6,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: "#00000033"
          }}
          containerHoverStyle={{
            backgroundColor: "#FFFFFF11"
          }}
          onPress={() => setVideo(false)}
        />
      </>
      :
      <View style={{
        width: '100%',
        minHeight: (v.height / 2) - 16,
        marginTop: v.height / 2,
        marginBottom: 128,
        padding: '10%',
        borderRadius: 3,
        backgroundColor: isDarkMode ? '#202029DD' : '#FFFFFFDD',
        backdropFilter: "blur(8px)",
        webKitBackdropFilter: "blur(8px)",
        elevation: 5,
        webkitBoxShadow: "0px 0px 5px #00000099",
        mozBoxShadow: "0px 0px 5px #00000099",
        boxShadow: "0px 0px 5px #00000099",
        transition: 'all ease-in-out 0.64s'
      }}>
        <Markdown style={MarkdownStyle} mergeStyle={false}>
          {content}
        </Markdown>
      </View>
    }
  </ScrollView>
}

export default DocumentViewer;
