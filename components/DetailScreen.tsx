import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import SizeCard from './SizeCard'
import OrangeButton from './OrangeButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import SmallButton from './SmallButton'
import AntDesign from '@expo/vector-icons/AntDesign';
import LocationIcon from '../assets/svg/location.svg'
import Bean from '../assets/svg/bean.svg'
import { CoffeeItem } from './CoffeCard'

const DetailScreen = ({item, closeModal}: {item: CoffeeItem, closeModal: () => void}) => {
  const [selectedSize, setSelectedSize] = React.useState('')
  const sizes = item?.prices?.map((item: any) => item?.size)
  const [selectedPrice, setPrice] = React.useState<{size: string, price: string, currency: string} | null>(null)
  useEffect(() => {
    if(selectedSize){
      const price = item?.prices.find((item: any) => item?.size === selectedSize);
      if(price){
        setPrice(price)
      }
    }
  }, [selectedSize])
  return (
    <View className='w-full h-full bg-black-100'>
      <View className='flex-1 w-full relative'>
        <Image source={item?.imagelink_portrait} className='w-full absolute -z-10 top-0 bottom-0 h-full' resizeMode={'cover'} />
        <View style={{ paddingTop: '30%'}} className='h-full justify-between  w-full'>
            <View className='w-full px-5  flex-row items-center justify-between'>
              <TouchableOpacity onPress={() => closeModal()} className='border justify-center items-center rounded-lg bg-black-200 border-[#21262E] w-[33px] h-[33px]' activeOpacity={0.8}>
                <AntDesign name="left" size={20} color="#52555A" />
              </TouchableOpacity>
              <TouchableOpacity className='border justify-center items-center rounded-lg bg-black-200 border-[#21262E] w-[33px] h-[33px]' activeOpacity={0.8}>
              <AntDesign name="heart" size={18} color="#DC3535" />
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <View>
                <Text className='text-white-100 font-PoppinsSemiBold text-lg'>{item?.name}</Text>
                <Text className='text-gray-100 font-Poppins text-xs'>{item?.special_ingredient}</Text>
                <View className='items-center flex-row gap-x-2 mt-8'>
                  <AntDesign name="star" size={22} color="#D17842" />
                  <Text className='text-base font-PoppinsSemiBold text-white-100'>{item?.average_rating}</Text>
                  <Text className='text-gray-100 font-Poppins text-xxs'>({item?.ratings_count})</Text>
                </View>
              </View>
              <View className='gap-y-4'>
                <View className='flex-row items-center justify-between'>
                  <View className='bg-black-200 w-[55px] h-[55px] rounded-[10px] items-center justify-center'>
                    <Bean width={31} height={31} />
                    <Text className='text-gray-100 text-xxs font-PoppinsMedium'>{item?.type}</Text>
                  </View>
                  <View className='bg-black-200 w-[55px] h-[55px] rounded-[10px] items-center justify-center'>
                    <LocationIcon width={31} height={31} />
                    <Text className='text-gray-100 text-xxs font-PoppinsMedium'>{item?.ingredients}</Text>
                  </View>
                </View>
                <TouchableOpacity className='bg-black-200 rounded-[10px] w-[132px] h-[45px] items-center justify-center'>
                  <Text className='text-gray-100 text-xxs font-PoppinsMedium'>{item?.roasted}</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </View>
      <View className='py-5 px-3'>
        <Text className='text-gray-100 mb-3 font-PoppinsSemiBold text-sm'>Description</Text>
        <Text style={{lineHeight: 20}} className='text-white-100 mb-3 font-Poppins text-xs'>{item?.description}</Text>
        <SizeCard sizes={sizes} setSize={setSelectedSize} size={selectedSize} />
        <View className='w-full mt-8 flex-row'>
          <View className='items-center justify-center'>
            <Text className='text-gray-100 font-PoppinsMedium text-xs'>Price</Text>
            <Text className='text-white-100 font-PoppinsSemiBold text-lg'>
              <Text className='text-orange-100'>{selectedPrice?.currency}</Text>
              {selectedPrice?.price || 0}
            </Text>
          </View>
          <OrangeButton otherStyles='flex-1 ml-20' onPress={() => closeModal()} title='Add To Cart' />
        </View>
      </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  card:{
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  }
})