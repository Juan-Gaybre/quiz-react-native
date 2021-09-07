import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../libs/colors';
import GlobalStyles from '../themes/GlobalStyles';

const Login = () => {

  const navigation = useNavigation();

  const startQuiz = () => navigation.navigate('Quiz');

  return(
    <View style={ GlobalStyles.container}>

      <View style={styles.header}>
        <View style={[
          styles.headerRow,
          GlobalStyles.left
        ]}>
          <Text style={[
            styles.headerSmallText,
          ]}>R</Text> 
          <Text style={[
            styles.headerSmallText,
            styles.textDown
          ]}>E</Text>
          <Text style={[
            styles.headerSmallText,
          ]}>A</Text>
          <Text style={[
            styles.headerSmallText,
            styles.textDown
          ]}>C</Text>
          <Text style={[
            styles.headerSmallText,
          ]}>T</Text>
        </View>

        <View style={[
          styles.headerRow,
          GlobalStyles.right
        ]}>
          <Text style={[
            styles.headerSmallText,
            styles.textDown
          ]}>N</Text> 
          <Text style={[
            styles.headerSmallText,
          ]}>A</Text>
          <Text style={[
            styles.headerSmallText,
            styles.textDown
          ]}>T</Text>
          <Text style={[
            styles.headerSmallText,
          ]}>I</Text>
          <Text style={[
            styles.headerSmallText,
            styles.textDown
          ]}>V</Text>
          <Text style={[
            styles.headerSmallText,
          ]}>E</Text>
        </View>

        <Image
        style={styles.imgReact}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

        <View style={[
          styles.headerRow,
          GlobalStyles.marginToplarge
        ]}>
          <Text style={[
            styles.headerText,
          ]}>Q</Text>
          <Text style={[
            styles.headerText,
            styles.textDown
          ]}>U</Text>
          <Text style={[
            styles.headerText,
          ]}>I</Text>
          <Text style={[
            styles.headerText,
            styles.textDown
          ]}>Z</Text>
          <Text style={[
            styles.headerText,
          ]}>!</Text>
        </View>
      </View>

      <Pressable
        style={[
          GlobalStyles.button,
          styles.loginButton
        ]}
        onPress={startQuiz}
      >
        <Text style={GlobalStyles.buttonText}>COMENZAR</Text>
      </Pressable>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  headerRow: {
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 65,
    marginHorizontal: 10,
    color: colors.picton,
    fontWeight: '500'
  },
  headerSmallText: {
    fontSize: 45,
    marginHorizontal: 8,
    color: colors.picton,
    fontWeight: '500'
  },
  textDown: {
    marginTop: 15
  },
  loginButton: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  },
  imgReact: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  }
});
