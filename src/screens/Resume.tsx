import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Answer } from '../libs/types';
import GlobalStyles from '../themes/GlobalStyles';
import { FlatList } from 'react-native-gesture-handler';
import QuestionResume from '../components/QuestionResume';
import colors from '../libs/colors';

interface Props {
  route: {
    params: {
      result: Answer[]
    }
  }
}

const Resume = (props: Props) => {
  const [total, setTotal] = useState<Answer[]>([])

  const navigation = useNavigation();

  useEffect(() => setTotal(props.route.params.result), [navigation])

  const getTotalAnswerCorrect = () => {
    const correctas = total.filter(item => item.isCorrect);
    return correctas.length
  }

  const getCups = () => total.map(item => (
    <Image
      key={item.response}
      style={(item.isCorrect)
        ? styles.imgCup
        : [styles.imgCup, styles.imgCupOpacity]
      }
      source={{uri: 'https://image.spreadshirtmedia.net/image-server/v1/mp/designs/5957864,width=178,height=178/copa-trofeo-campeon-ganador.png'}}
    />
  ));

  return (
    <View style={GlobalStyles.container}>

      <Text style={GlobalStyles.subTitle}>
        {(getTotalAnswerCorrect() === 5) && '¡Excelente!'}
      </Text>
      <View style={styles.header}>
        {getCups()}
      </View>
      
      <Text style={GlobalStyles.subTitle}>
        {(getTotalAnswerCorrect() > 2) ? '¡Hiciste un buen trabajo!' : '¡Necesitas Esforzarte más!'}
      </Text>
      
      <FlatList
      style={styles.resumelist}
        data={total}
        renderItem={({item}) => <QuestionResume question={item}/>}
      />

    </View>
  )
}

export default Resume;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  imgCup: {
    marginVertical: 20,
    width: 60,
    height: 60
  },
  imgCupOpacity: {
    opacity: .3
  },
  resumelist: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 35,
    backgroundColor: colors.picton,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  }
})
