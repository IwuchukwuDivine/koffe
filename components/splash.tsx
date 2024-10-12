import React, { useRef, useEffect } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

interface SplashScreenProps {
  onAnimationFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationFinish }) => {
  const animation = useRef<LottieView | null>(null);

  useEffect(() => {
    if (animation.current) {
      animation.current.play();
    }
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <LottieView
        ref={animation}
        source={require('../assets/lottie/coffeecup.json')}
        style={{ width: 200, height: 200 }}
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};

export default SplashScreen;