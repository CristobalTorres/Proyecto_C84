import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView
} from "react-native";
//importamos firebas
import firebase from "firebase";

export default class LoginScreen extends Component {

    constructor(props){
        super(props)
        this.State={
            email:"",
            password:""
        }
    }
    handleLogin = (email, password) => {
        //Añadir código para autenticación de Firebase
          firebase
          .auth()
          .signInWithEmailAndPasword(email,password)
          .then(()=>{
            this.props.navigation.navigate("bottomTab")
          })
          .catch(error=>{Alert.alert(error.mesage)})
        };


    render() {
        const { email, password } = this.state;
        return (
            <View style={styles.upperContainer}>
            <Image source={appIcon} style={styles.appIcon} />
            <Text style={styles.title}>Travesía Digital</Text>
            <Text style={styles.subtitle}>Un viaje ecológico</Text>
         
          <View style={styles.lowerContainer}>
          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Escribe tu correo electrónico"}
            placeholderTextColor={"#FFFFFF"}
            autoFocus
          />
          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"Escribe tu contraseña"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
          />
          <TouchableOpacity
            style={[styles.scanbutton, { marginTop: 20 }]}
            onPress={() => this.handleLogin(email, password)}
          >
            <Text style={styles.scanbuttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
        </View>
          
          )    }
}
const styles = StyleSheet.create({
    
    textinput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "#4C5D70",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#F88379",
    fontFamily: "Rajdhani_600SemiBold",
    color: "#FFFFFF"
  },
  scanbutton: {
    width: 100,
    height: 50,
    backgroundColor: "#FBE5C0",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  scanbuttonText: {
    fontSize: 24,
    color: "#4C5D70",
    fontFamily: "Rajdhani_600SemiBold"
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  appIcon: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 80
  },
  title: {
    fontSize: 40,
    fontFamily: "Rajdhani_600SemiBold",
    paddingTop: 20,
    color: "#4C5D70"
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Rajdhani_600SemiBold",
    color: "#4C5D70"
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: "center"
  },
})