import { StyleSheet } from 'react-native';
import colors from '../libs/colors';

export default StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.zircon,
  },
  subTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.picton
  },
  container: {
    flex: 1,
    backgroundColor: colors.zircon
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  left: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  right: {
    width: '100%',
    justifyContent: 'flex-end',
  },
  marginToplarge: {
    marginTop: 80
  },
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 15,
    backgroundColor: colors.secondary
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.zircon
  }
});
