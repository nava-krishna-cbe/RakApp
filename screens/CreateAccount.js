import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image,TouchableOpacity } from 'react-native';
import ImageInput from '../components/ImageInput';
import PasswordInput from '../components/PasswordInput';
import CheckBox from '@react-native-community/checkbox';

const CreateAccount = ({ navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Regex for at least one number and one special character
    const regex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
   
    return regex.test(password);
  };

  const handleCreateAccount = async () => {
    try {
      let valid = true;

      if(username.trim().length==0){
        Alert.alert('Error', 'Please enter Username');
        valid=false
      }
      else if(email.trim().length==0){
        Alert.alert('Error', 'Please enter Email');
        valid=false
      }
      else if(!validateEmail(email)) {
        Alert.alert('Error', 'Please enter a valid email address.');
        valid=false
      }else if(password.trim().length==0){
        Alert.alert('Error', 'Please enter Password');
        valid=false
      }else if(!validatePassword(password)){
        Alert.alert('Error', 'Password should contain atleast 8 characters and with 1 special character and 1 number');
        valid=false
      }
      
      if(valid){
            const response = await fetch('http://192.168.1.36:8080/api/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username,
                email,
                password,
              }),
            });

          

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            const jsonData = await response.json();
            Alert.alert('Post created', `ID: ${jsonData.id}`);
            navigation.navigate('Acknowledge');
        }
        } catch (error) {
          Alert.alert('Error', error.message);
          console.log(error);
          
        }
      
  };

  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/rak-logo.jpg')} // Update with your logo's path
        style={styles.logo}
        resizeMode="contain" // Adjust as necessary
      />

      <Text style={styles.title}>Create Account</Text>

      
      
      <ImageInput        
        placeholder="Full name"
        imageSource={require('../assets/user.png')}
        value={username}
        onChangeText={setUsername}
      />
      
      <ImageInput        
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        imageSource={require('../assets/email.png')}
      />
      
      <PasswordInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        imageSource={require('../assets/password.png')}
        imageSourceRight={require('../assets/eyes-hide.png')}
        
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setIsSelected}
          style={styles.checkbox}
        />
        <Text style={styles.label}>I agree with <Text style={styles.redText}>Terms</Text> and <Text style={styles.redText}>Privacy</Text></Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={handleCreateAccount}>
      <View style={[styles.googleButton,{marginTop:10}]}>
      <Image
        source={require('../assets/google.png')} // Update with your logo's path
        style={styles.googleLogo} //Adjust as necessary
      />

      <Text style={[{height:40,marginTop:15 }]}>Sign Up with Google</Text>
      </View>
      
      </TouchableOpacity>
      
      <Text style={[styles.label,{ marginTop: 15,}]}>Already have an account? <Text style={styles.redText}>Login</Text> </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 24,
    marginBottom: 18,
    textAlign: 'left',
    color: '#888',
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: '#EEE'
  },
  logo: {
    width: 200,  // Adjust width
    height: 150, // Adjust height
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#D20103', // Set your desired background color here
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: 14,
    alignSelf: 'center'
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  redText:{
    color: '#D20103',
    fontWeight: 'bold'
  },
  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 40,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8
  },
  googleLogo: {
    width: 25,  // Adjust width
    height: 25, // Adjust height
    marginRight: 10,
  },
});

export default CreateAccount;