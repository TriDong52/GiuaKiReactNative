import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { CategoriesModel } from "../../models/categories.model";
import { FoodModel } from "../../models/foods.model";
import { categories } from "../../data/categories";
import { foods } from "../../data/food";
import { SCREENS } from "../../helpers/constants";

const { width } = Dimensions.get('window'); // Lấy kích thước màn hình


const cardWidth = width / 2 - 20; // Tính toán kích thước cho card
type CategoryItemProps = {
  itemCategory: CategoriesModel;
  onPress: () => void;
};

type FoodItemProps = {
  itemFood: FoodModel;
  onPressF: () => void;
};

const CategoryList = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
 
  
  const CategoryItem = ({ itemCategory, onPress }: CategoryItemProps) => (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.categoryBtn, backgroundColor: "orange" }}>
        <Image
          source={itemCategory.imageC}
          style={{ width: 20, height: 20, borderRadius: 50 }}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 10,
            color: "white",
          }}
        >
          {itemCategory.nameC}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesListContainer}
    >
      {categories.map((category, index) => (
        <CategoryItem
          key={category.idC}
          itemCategory={category}
          onPress={() => setSelectedCategoryIndex(index)}
        />
      ))}
    </ScrollView>
  );
};

const FoodItem = ({ itemFood, onPressF }: FoodItemProps) => (
  <TouchableHighlight underlayColor={"white"} activeOpacity={0.9} onPress={onPressF}>
    <View style={styles.card}>
      <View style={{ alignItems: 'center', top: -40 }}>
        <Image source={itemFood.imageF} style={{ height: 100, width: 100 }} />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{itemFood.nameF}</Text>
        <Text style={{ fontSize: 14, color: "grey"}}>
          {itemFood.ingredients}
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          ${itemFood.price}
        </Text>
        <View style={styles.addToCartBtn}>
          <Icon name="plus" size={20} color={"white"} />
        </View>
      </View>
    </View>
  </TouchableHighlight>
);

const FoodHome = ({navigation}) => {
  const [foodName, setFoodName] = useState('')
  const [foodImage, setFoodImage] = useState('')
  const goToDetailScreen = (name: string, image: string) => {
    navigation.navigate(SCREENS.DETAIL, {
      foodName: name,
      foodImage: image
    });
  };
 

 

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 22, color: "black" }}>Hello,</Text>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginLeft: 10, color: "black" }}>Linh</Text>
          </View>
          <Text style={{ marginTop: 7, fontSize: 20, color: "grey" }}>What do you want to do?</Text>
        </View>
        <Image source={require("../../assets/categories/sushi.png")} style={{ height: 50, width: 50, borderRadius: 25 }} />
      </View>
      <View style={{
        marginTop: 40,
        flexDirection: "row",
        paddingHorizontal: 20,
      }}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput style={{ flex: 1, fontSize: 18 }} placeholder="search for food" />
        </View>
       
      </View>
      <View>
        <CategoryList />
      </View>
      <FlatList
  showsVerticalScrollIndicator={false}
  numColumns={2}
  data={foods}
  renderItem={({ item }) => (
    <FoodItem
      itemFood={item}
      onPressF={() => {
        goToDetailScreen(item.nameF, item.imageF);
      }}
    />
  )}
/>
     
    </SafeAreaView>
  );
};

export default FoodHome;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 45,
    borderRadius: 15,
    flexDirection: "row",
    backgroundColor: "rgba(192, 192, 192, 0.5)",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  card: {
    height: 230,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: "white",
   
    flexDirection: "column",
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
