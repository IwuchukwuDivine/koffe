import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const Addbutton = ({onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} className='items-center justify-center bg-orange-100 w-7 h-7 rounded-lg'>
      <FontAwesome6 name="add" size={16} color="#fff" />
    </TouchableOpacity>
  )
}

export default Addbutton