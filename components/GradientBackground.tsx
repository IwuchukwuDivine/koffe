import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { ViewStyle } from 'react-native';

interface SpecificGradientBackgroundProps {
  style?: ViewStyle;
  children?: React.ReactNode;
  colors: string[];
  locations?: number[];
}
const GradientBackground: React.FC<SpecificGradientBackgroundProps> = ({ style, children, colors, locations }) => {
  return (
    <LinearGradient
      colors={colors}
      locations={locations}
      start= {{x: 0, y: 0.4}}
      end={{ x: 1, y: 0 }} 
      style={[style]}
    >
      {children}
    </LinearGradient>
  )
}

export default GradientBackground

