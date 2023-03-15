import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NavigationBar = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className='bg-black/10 p-4 text-white '>
      <View
        className=' flex-row items-center justify-between  '
        style={[{ paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        <View className={`flex-row items-center`}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name='chevron-back-outline' size={24} color='black' />
          </TouchableOpacity>
          <Text className={`ml-2 font-bold text-xl`}>
            REG
            <Text className='text-red-500 font-bold '>MI</Text>
          </Text>
        </View>
        <View className={`flex-row`}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Ionicons name='search-outline' size={24} color='black' />
          </TouchableOpacity>
          <TouchableOpacity
            className={`ml-2`}
            onPress={() => navigation.navigate('Signin')}>
            <Ionicons name='person-outline' size={24} color='black' />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigationBar;
