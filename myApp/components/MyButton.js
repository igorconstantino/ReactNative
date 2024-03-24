import React from 'react';
import { TouchableOpacity, Text, } from 'react-native';
import styles from '../styles/styles';

const MyButton = ({ onPress, title,}) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle} >
    <Text style={styles.buttonText}> {title} </Text>
  </TouchableOpacity>
);

export default MyButton;