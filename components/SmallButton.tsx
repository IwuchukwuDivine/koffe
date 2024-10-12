import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import GradientBackground from './GradientBackground'

const SmallButton = ({children, style}: any) => {
  return (
    <Pressable className='w-[30px] h-[30px]'>
      <GradientBackground style={styles.grid} colors={['#21262E', '#21262E00']} locations={[0.0428, 0.9352]}>
        {children}
      </GradientBackground>
    </Pressable>
  )
}

export default SmallButton

const styles = StyleSheet.create({
  grid: {
    width: '100%', 
    height: '100%',
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#21262E', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'},
})