import { View, Text, ScrollView, Pressable, StyleSheet, Image, Animated, Dimensions } from 'react-native'
import React, {useState, useRef, useMemo, useCallback} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import GradientBackground from '@/components/GradientBackground';
import { images } from '@/constants';
import InputField from '@/components/InputField';
import { CoffeeData, BeansData } from '@/constants';
import CoffeCard from '@/components/CoffeCard';
import DetailScreen from '@/components/DetailScreen';


const { height } = Dimensions.get('window');

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentCategory, setCurrentCategory] = useState('All')
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(height)).current;
  const [itemToView, setItemToView] = useState<any>(null);

  const togglePanel = useCallback((item?: any) => {
    if (item) {
      setItemToView(item);
      setIsPanelVisible(true);
    } else {
      setIsPanelVisible(false);
    }
    
    Animated.spring(slideAnim, {
      toValue: item ? 0 : height,
      useNativeDriver: true,
    }).start();
  }, [height, slideAnim]);

  const categories = useMemo(() => [
    "All", 'Cappuccino', 'Latte', 'Espresso', 'Americano', 'Macchiato', 'Mocha', 'Cafe au Lait',
  ], []);
  return (
    <>
      <SafeAreaView className='bg-black-100'>
        <ScrollView >
          <View className='px-4 mt-5 mb-10' >
            <View className='w-full flex-row justify-between items-center'>
              <Pressable className='w-[30px] h-[30px]'>
                <GradientBackground style={style.grid} colors={['#21262E', '#21262E00']} locations={[0.0428, 0.9352]}>
                <MaterialCommunityIcons name="view-grid" size={14} color="#FFFFFF2E" />
                  </GradientBackground>
              </Pressable>
              <Pressable className='w-[30px] h-[30px]'>
                <Image className='w-full h-full rounded-[30px]' resizeMode='contain' source={images.avatar} />
              </Pressable>
            </View>
            <Text className='text-white-100 w-[70%] font-PoppinsSemiBold text-xl my-4'>Find the best coffee for you</Text>
            <InputField handleChangeText={(text) => setSearchTerm(text)} value={searchTerm} placeholder={'Find Your Coffee...'} />
            <View className='my-8'>
              <ScrollView className='w-full flex-row gap-x-4' horizontal showsHorizontalScrollIndicator={false} >
                  {
                    categories.map((category, index) => (
                      <Pressable className='flex items-center gap-y-2' onPress={() => setCurrentCategory(category)} key={category}>
                        <Text className={`font-PoppinsSemiBold text-sm ${currentCategory === category ? 'text-orange-100' : 'text-gray-200'}`}>
                          {category}
                        </Text>
                        {
                          currentCategory === category &&
                          <View className='w-2 h-2 bg-orange-100 rounded-full'></View>

                        }
                      </Pressable>
                    ))
                  }
              </ScrollView>
            </View>
            <View>
              <ScrollView   horizontal showsHorizontalScrollIndicator={false}>
                <View style={{gap: 20, display: 'flex', flexDirection: 'row'}}>
                    {
                      CoffeeData.map((coffee, index) => (
                        <CoffeCard onPress={togglePanel} item={coffee} key={coffee.id} />
                      ))
                    }
                </View>
              </ScrollView>
            </View>
            <Text className='text-white-100 my-6 font-PoppinsMedium text-base'>Coffe beans</Text>
            <View className='mb-8'>
              <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                <View style={{gap: 20, display: 'flex', flexDirection: 'row'}}>
                    {
                    BeansData.map((coffee, index) => (
                        <CoffeCard onPress={togglePanel} item={coffee} key={coffee.id} />
                      ))
                    }
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Animated.View
          style={[style.panel,
            {
              transform: [{ translateY: slideAnim }],
            }
          ]}
        >
          <DetailScreen closeModal={togglePanel} item={itemToView} />
        </Animated.View>
    </>
    
  )
}

export default Home

const style = StyleSheet.create({
  grid: {
    width: '100%', 
    height: '100%',
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#21262E', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'},

    panel: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: height,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: -3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
})