import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, FlatList,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FoodModel } from '../../models/foods.model';
import { foods } from '../../data/food';

const COLORS = {
  white: 'white',
  primary: 'orange',
};

type FoodItemProps = {
  itemFood: FoodModel;
  onPressF: () => void;
};

const CartFood = () => {
  

  const FoodItem = ({ itemFood, onPressF }: FoodItemProps) => (
    <View style={styles.cartCard}>
      <Image source={itemFood.image} style={{ height: 80, width: 80 }} />
      <View style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{itemFood.name}</Text>
        <Text style={{ fontSize: 13, color: 'grey' }}>{itemFood.ingredients}</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>${itemFood.price}</Text>
      </View>
      <View style={{ marginRight: 20, alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 12 }}>3</Text>
        <View style={styles.actionBtn}>
          <Icon name="minus" size={15} color={'white'} />
          <Icon name="plus" size={15} color={'white'} />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="angle-left" size={28} />
        </TouchableOpacity>
        <Text style={{ marginLeft:20, fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={foods}
        renderItem={({ item }) => <FoodItem itemFood={item} onPressF={() => {}} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total Price</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$50</Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutText}>CHECKOUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkoutButton: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartFood;
