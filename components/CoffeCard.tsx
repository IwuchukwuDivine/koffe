
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GradientBackground from './GradientBackground'
import AntDesign from '@expo/vector-icons/AntDesign';
import Addbutton from './Addbutton';


export interface CoffeeItem {
  id: string;
  name: string;
  description: string;
  ingredients: string;
  roasted: string;
  prices: {size: string, price: string, currency: string}[];
  imagelink_square: any;
  imagelink_portrait: any;
  average_rating: number;
  special_ingredient: string;
  index: number;
  type: string;
  favourite: boolean;
  ratings_count: string;
}

interface CoffeCardProps {
  item: CoffeeItem;
  onPress: (item: CoffeeItem) => void;
}
const CoffeCard = ({item, onPress}: CoffeCardProps) => {
  return (
    <GradientBackground style={styles.card} colors={['#252A32', '#262B3300']} locations={[0.04, 0.9193 ]}>
        <Pressable onPress={() => onPress(item)} style={styles.imageCard}>
          <Image resizeMode='cover' className='w-full h-full rounded-[23px]' source={item.imagelink_square} />
          <View style={styles.rating}>
            <AntDesign name="star" size={10} color="#D17842" />
            <Text className='text-xxs font-PoppinsSemiBold text-white-100'>{item.average_rating}</Text>
          </View>
        </Pressable>
        <View className='py-2 gap-y-1'>
          <Text className='text-white-100 font-Poppins text-[13px]'>{item.name}</Text>
          <Text className='text-[9px] text-white-100 font-Poppins'>{item.special_ingredient}</Text>
          <View className='items-center flex-row justify-between'>
            <Text className='font-[15px] font-PoppinsSemiBold text-white-100'>
              <Text className='text-orange-100'>$ </Text>
              4.20
            </Text>
            <Addbutton />
          </View>
        </View>
    </GradientBackground>
  )
}

export default CoffeCard

const styles = StyleSheet.create({
  card: {
   borderRadius: 23,
   padding: 15,
   display: 'flex',
  },
  imageCard: {
    width: 136,
    height: 136,
    borderRadius: 23,
    position: 'relative',
  },
  rating: {
    position: 'absolute',
    width: 53,
    height: 22,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 23,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 23,
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4
  }
})