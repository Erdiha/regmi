import React, { Text, Search } from 'react';
import { Text, View } from 'react-native';
import { Input, Icon } from 'react-native-elements';

const SearchBar = ({ placeholder }) => {
  return (
    <View
      className={`flex-row items-center justify-between bg-gray-200 rounded-full px-4 py-2`}>
      <Input
        placeholder={placeholder}
        placeholderTextColor='gray'
        inputContainerStyle={tw`border-none`}
        inputStyle={tw`text-base`}
        containerStyle={tw`flex-1`}
      />
      <Icon name='search' type='font-awesome' color='gray' size={20} />
    </View>
  );
};

export default SearchBar;
