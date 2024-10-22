import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const PasswordInput = ({ placeholder, imageSource, onChangeText, value,imageSourceRight}) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry
        maxLength={50}
      />
      <Image source={imageSourceRight} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 40,
    borderWidth: 1,
    marginBottom: 6,
    paddingHorizontal: 8
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default PasswordInput;