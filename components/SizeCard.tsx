import { View, Text, Pressable } from 'react-native'
import React from 'react'

const SizeCard = ({size, setSize, sizes}: {size: string, sizes: string[], setSize: (value: string) => void}) => {
  return (
    <View>
      <Text className='text-gray-100 text-sm font-PoppinsSemiBold'>Size</Text>
      <View className='w-full flex-row items-center justify-between'>
        {
          sizes?.map((item, index) => (
            <Pressable onPress={() => setSize(item)} key={index} className={`min-w-[100px] h-[30px] items-center justify-center bg-black-200 rounded-lg ${item === size ? 'border border-orange-100':''}`}>
              <Text className={`text-xs font-PoppinsMedium ${size === item ? 'text-orange-100' : 'text-gray-100'}`}>{item}</Text>
            </Pressable>
          ))
        }
      </View>
    </View>
  )
}

export default SizeCard