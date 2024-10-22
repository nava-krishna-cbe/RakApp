import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const ImageInput = ({ placeholder, imageSource, onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        maxLength={50}
      />
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
    marginBottom: 14,
    paddingHorizontal: 8
  },
  image: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#777'
  },
});

export default ImageInput;