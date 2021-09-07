import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Answer } from '../libs/types';
import colors from '../libs/colors';

interface Props {
  question: Answer
}

const QuestionResume = ({question}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {question.question}
      </Text>
      <Text style={(question.isCorrect) ? styles.isCorrect : styles.isIncorrect}>
      <Text style={styles.response}>Respuesta: </Text>
        {question.response}
      </Text>

      {(!question.isCorrect) && (
        <Text style={styles.solution}>
          <Text style={styles.response}>Respuesta correcta: </Text>
          {question.solution}
        </Text>
      )}
    </View>
  )
}

export default QuestionResume;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.white
  },
  question: {
    marginBottom: 30,
    fontSize: 18,
    color: colors.picton    
  },
  isCorrect: {
    fontSize: 16,
    color: colors.success,
    fontWeight: '500'
  },
  isIncorrect: {
    marginVertical: 10,
    fontSize: 16,
    color: colors.carmine,
    fontWeight: '500'
  },
  response: {
    fontSize: 14,
    color: colors.picton
  },
  solution: {
    fontSize: 14,
    color: colors.success,
    fontWeight: '500'
  }
});
