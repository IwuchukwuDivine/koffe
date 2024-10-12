import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Text } from 'react-native';
import 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';
import SplashScreenComponent from '@/components/splash';

interface SplashScreenProps {
  onAnimationFinish: () => void;
}

const RootLayout: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState<boolean>(true);
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const handleAnimationFinish = useCallback(() => {
    setIsSplashVisible(false);
  }, []);

  const StackNavigator = useMemo(() => (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="(tabs)" />
    </Stack>
  ), []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (fontError) {
    return <Text>Error loading fonts</Text>;
  }

  if (isSplashVisible) {
    return <SplashScreenComponent onAnimationFinish={handleAnimationFinish} />;
  }

  return (
    <>
      <StatusBar style="light" />
      {StackNavigator}
    </>
  );
};

export default RootLayout;