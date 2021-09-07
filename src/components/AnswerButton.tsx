import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../libs/colors';

interface Props {
  title: string
  onPress: ()=>void
}

const AnswerButton = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text
        style={styles.buttonText}
        numberOfLines={2}
        adjustsFontSizeToFit
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default AnswerButton

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: colors.white,
    borderRadius: 15
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.charade
  }
});