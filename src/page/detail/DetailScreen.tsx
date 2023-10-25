import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




const DetailsScreen = ({route,navigation}) => {
  const{foodName, foodImage} = route.params
 

 return (
    <SafeAreaView style={{backgroundColor: "white"}}>
      <View style={style.header}>
        <Icon name="angle-left" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft:8}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={foodImage} style={{height: 220, width: 220}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: "white"}}>
                {foodName}
            </Text>
            <View style={style.iconContainer}>
              <Icon name="heart" color={"orange"} size={25} />
            </View>
          </View>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley /</Text>
        </View>
        </ScrollView>
    </SafeAreaView>)}
const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    details: {
      paddingHorizontal: 20,
      paddingTop: 40,
      paddingBottom: 60,
      backgroundColor: "orange",
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
    },
    iconContainer: {
      backgroundColor: "white",
      height: 50,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
    },
    detailsText: {
      marginTop: 10,
      lineHeight: 22,
      fontSize: 16,
      color: "white",
    },
  });
  
  export default DetailsScreen;