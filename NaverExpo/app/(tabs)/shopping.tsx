import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ShoppingScreen = () => {
  return (
    <View>
      <Text>Shopping</Text>
      <TouchableOpacity
        onPress={() => {
          router.navigate({
            pathname: 'browser',
          });
        }}
      >
        <Text>Go to Browser</Text>
      </TouchableOpacity>
      <MaterialCommunityIcons name="shopping" size={24} color="black" />
    </View>
  );
};

export default ShoppingScreen;
