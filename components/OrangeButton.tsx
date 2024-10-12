import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface buttonProps {
  title: string
  otherStyles?: string
  onPress: () => void
}
const OrangeButton = ({title, onPress, otherStyles}: buttonProps) => {
  return (
    <TouchableOpacity className={`${otherStyles} bg-orange-100 items-center justify-center rounded-[20px] h-[60px]`} onPress={onPress}>
      <Text className='text-base text-white-100 font-PoppinsSemiBold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default OrangeButton