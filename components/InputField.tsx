import { View, Text, TextInput } from 'react-native'
import React from 'react'
import SearchIcon from '../assets/svg/search.svg'


interface InputFieldProps {
  placeholder: string
  value: string
  handleChangeText : (text: string) => void
  secureTextEntry?: boolean
}
const InputField = ({placeholder, value, handleChangeText, secureTextEntry = false} : InputFieldProps) => {
  return (
    <View className='flex flex-row gap-x-5 items-center bg-black-200 rounded-[15px]  py-4'>
      <SearchIcon width={20} height={20} />
      <TextInput className='text-white-100 font-PoppinsMedium text-base'
         placeholder={placeholder}
         placeholderTextColor={'#52555A'}
         value={value}
         onChangeText={handleChangeText}
         secureTextEntry={secureTextEntry}
         />
    </View>
  )
}

export default InputField