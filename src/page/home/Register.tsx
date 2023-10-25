import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text,TextInput,Button,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import BouncyCheckbox from "react-native-bouncy-checkbox";


const Register = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
        
    }
    return (
        <SafeAreaView>
          <StatusBar backgroundColor="orange"/>
          <View style={styles.container} >
            <View style={styles.title}>
            <Icon style={styles.icon} name="angle-left" size={30} color="black" />
                <Text style={styles.textRegis}>Đăng Ký</Text>
            </View>
           
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Họ và tên <Text style={{color:"red"}}>*</Text></Text>
                    <TextInput style={styles.formControl}placeholder="Nhập họ và tên"/>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Số điện thoại <Text style={{color:"red"}}>*</Text></Text>
                    <TextInput style={styles.formControl} placeholder="Nhập số điện thoại"/>

                </View >
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Mật khẩu <Text style={{color:"red"}}>*</Text></Text>
                    <View style={styles.passwordLabel}>
                        <TextInput
                            style={styles.passwordControl}
                            placeholder="Nhập mật khẩu"
                            secureTextEntry={!isPasswordVisible}
                        />
                        <TouchableOpacity
                            style={styles.passwordIcon}
                            onPress={togglePasswordVisibility}
                        >
                            <Icon
                                name={isPasswordVisible ? "eye" : "eye-slash"}
                                size={20}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>
                   
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Xác nhận mật khẩu <Text style={{color:"red"}}>*</Text></Text>
                    <View style={styles.passwordLabel}>
                        <TextInput
                            style={styles.passwordControl}
                            placeholder="Nhập xác nhận mật khẩu"
                            secureTextEntry={!isPasswordVisible}
                        />
                         <Icon
                                name={isPasswordVisible ? "eye" : "eye-slash"}
                                size={20}
                                color="gray"
                            />
                    </View>
                   
                </View>
                <View >
                    <Text style={{color:"red"}}>Lưu ý:</Text>
                    <Text style={styles.text}>Họ Tên Phải Là Tên trên các giấy tờ tùy thân như CMND/CCND/Hộ Chiếu</Text>
                    <Text style={styles.text}>Mật Khẩu phải có độ dài ít nhất 6 kí tự, bao gồm:</Text>
                    <View style={styles.textIcon}>
                     <Icon style={{marginRight: 5,   marginLeft: 5,alignSelf: "center"}} name="circle" size={5} color="black"/>
                     <Text style={styles.text}>1 ký tự hoa</Text>
                    </View>
                    <View style={styles.textIcon}>
                     <Icon style={{marginRight:5, marginLeft: 5,  alignSelf: "center"}}name="circle" size={5} color="black"/>
                     <Text style={styles.text}>1 ký tự số</Text>
                    </View>
                </View>
                <View style={{marginTop:10, flexDirection:"row"}}>
                        <BouncyCheckbox style={{marginLeft: 10}} 
                            size={15}
                            fillColor="blue"
                            unfillColor="#FFFFFF"
                            text="Tôi đã đọc và đồng ý với "
                            iconStyle={{ borderColor: "red" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{ fontFamily: "JosefinSans-Regular", fontSize:13 }}   
                        />
                        <Text style={{textDecorationLine:'underline', color: "blue", fontSize:13}}>  điều khoản sử dụng</Text>
                       
                    </View>
                    <View style={styles.butRegister}>
                        <Button color={styles.butRegister.color} title="ĐĂNG KÝ"/>
                    </View>

                  
                   
            </View>

        </SafeAreaView>
    )
}

export default Register;
const styles = StyleSheet.create({
    container:{
      flexDirection: "column",
      paddingLeft: 7,
      paddingRight:7
      
    },
    title:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 40,
        marginTop:20
       
    },
    butRegister:{
        backgroundColor:'#3BCCBB',
        color: '#3BCCBB',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf:'stretch',
        marginLeft: 15,
        marginRight: 15,
        padding:5,
        marginTop: 10,
        borderRadius: 8,
        
        
    },
    icon:{
        justifyContent:"flex-start"
    },
    textRegis:{
      marginLeft:130,
      fontStyle: 'normal',
      color: 'black',
      fontSize: 17,
      fontWeight:'600',
      textAlign:"center"
    },
    formGroup:{
        alignSelf: 'stretch',
        marginBottom: 10,
        
    },
    formLabel: {
        fontWeight: '600',
        fontStyle: 'normal',
        color: '#757575',
        fontSize: 13
    },
    formControl: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#757575',
        borderBottomWidth: 0.5,
        fontStyle: 'italic',
        fontSize:15,
       
       
    },
    passwordLabel: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: '#757575',
        borderBottomWidth: 0.5,
    },
    passwordControl: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 15,
        fontStyle: 'italic',
        fontSize:15,
    },
    passwordIcon: {
        padding: 10,
    },
    text:{
        color:"black",
        fontWeight:"400",
        fontSize:13
    },
   
    textIcon:{
        flexDirection: "row",
        alignItems: "center",
        marginTop:10
    }
})