import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RNQuestions from '../libs/RNQuestions';
import GlobalStyles from '../themes/GlobalStyles';
import colors from '../libs/colors';
import AnswerButton from '../components/AnswerButton';
import { Answer, Question } from '../libs/types';

const Quiz = () => {
  const [Questions, setQuestions] = useState<Question[]>([]);
  const [Solved, setSolved] = useState<Answer[]>([]);
  const [Loading, setLoading] = useState(true);
  
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => resetGame());
  }, [navigation]);

  const resetGame = () => {
    setLoading(true);
    setQuestions([]);
    setSolved([]);
    setTimeout(() => getRandomQuiz(RNQuestions), 300);
  }

  const getRandomQuiz = (list: Question[]) => {
    const newQuiz: Question[] = [];
    
    while(newQuiz.length<5) {
      const randomQuestion = list[Math.floor(Math.random()*list.length)];
      if(!newQuiz.includes(randomQuestion)) {
        newQuiz.push(randomQuestion);
      }
    }
    setQuestions(newQuiz);
    setLoading(false);
  }

  const nextQuestion = (answer: string) => {
    const current = Solved.length
    
    setLoading(true);
    Solved.push({
      question: Questions[current].question,
      response: answer,
      isCorrect: answer === Questions[current].solution,
      solution: Questions[current].solution
    });

    if(Solved.length < 5) {
      setTimeout(() => setLoading(false), 200);
    }
    if(Solved.length > 4) {
      setTimeout(() => navigation.navigate('Resume', {result: Solved}),500);
    }
  }

  if(Loading) {
    return (
      <View style={GlobalStyles.containerCenter}>
        <Text>Loading...</Text>
      </View>
    )
  }

  if(!Loading && Questions.length>1 && Solved.length<5) {
    const current: number = Solved.length;
    const currentQuestion  = Questions[current]

    return (
      <View style={GlobalStyles.container}>
        
        {/* header */}
        <View style={styles.header}>
          <Text style={GlobalStyles.title}>
            Quiz {current + 1}/5
          </Text>
        </View>

        <TouchableOpacity
          onPress={resetGame}
          style={[
            GlobalStyles.button,
            styles.resetButton
          ]}
        >
          <Text style={styles.resetButtonText}>Reiniciar</Text>
        </TouchableOpacity>
        
        {/* question */}
        <View style={styles.question}>
          <Text style={GlobalStyles.subTitle}>
            {currentQuestion.question}
          </Text>
        </View>
  
        {/* answers */}
        <View style={styles.answer}>
  
          <Text>a)</Text>
          <AnswerButton
            title={currentQuestion.a}
            onPress={() => nextQuestion(currentQuestion.a)}
          />
  
          <Text>b)</Text>
          <AnswerButton
            title={currentQuestion.b}
            onPress={() => nextQuestion(currentQuestion.b)}
          />
  
          <Text>c)</Text>
          <AnswerButton
            title={currentQuestion.c}
            onPress={() => nextQuestion(currentQuestion.c)}
          />
          
        </View>
  
      </View>
    )
  }
}

export default Quiz;

const styles = StyleSheet.create({
  header: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.picton,
    borderRadius: 15,
  },
  question: {
    marginTop: 10
  },
  answer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 10,
    marginBottom: 50,
  },
  resetButton: {
    alignSelf: 'flex-end'
  },
  resetButtonText: {
    color: colors.white,
    fontSize: 20
  }
});
