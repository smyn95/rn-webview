import { useLocalSearchParams } from 'expo-router';
import React, { useMemo, useRef, useState } from 'react';
import {
  Animated,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import WebView from 'react-native-webview';

const style = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  urlText: { color: 'white' },
  loadingBarBackground: {
    height: 3,
    backgroundColor: 'white',
  },
  loadingBar: { height: '100%', backgroundColor: 'green' },
});

const BrowserScreen = () => {
  const params = useLocalSearchParams();
  const initialUrl = params.initialUrl as string;
  const [url, setUrl] = useState(initialUrl);

  const urlTitle = useMemo(
    () => url.replace('https://', '').split('/')[0],
    [url],
  );

  const progressAnim = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.container}>
        <Text style={style.urlText}>{urlTitle}</Text>
      </View>
      <View style={style.loadingBarBackground}>
        <Animated.View
          style={[
            style.loadingBar,
            {
              width: progressAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
      <WebView
        source={{ uri: initialUrl }}
        onNavigationStateChange={event => {
          setUrl(event.url);
        }}
        onLoadProgress={event => {
          progressAnim.setValue(event.nativeEvent.progress);
        }}
        onLoadEnd={() => {
          progressAnim.setValue(0);
        }}
      />
    </SafeAreaView>
  );
};

export default BrowserScreen;
