import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
  },
  title: {
    fontSize: 35,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 10,
    fontFamily: 'sans-serif',
    textAlign: 'center',
    margin: 20,
    marginTop: 40,
    color: '#FFFFFF',
  },
  score: {
    fontSize: 25,
    fontFamily: 'sans-serif-medium',
    textAlign: 'center',
    margin: 20,
    color: '#4C4CFF',
  },
  input: {
    height: 45,
    width: 200,
    borderColor: '#9FA3A6',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    margin: 10,
    padding: 5,
    color: '#000000',
  },
  numbers: {
    textAlign: 'center',
    fontSize: 20,
    margin: 5,
    padding: 5,
    backgroundColor: '#00A36C',
    color: 'white',
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  buttonStyle: {
    backgroundColor: '#FF3053',
    borderColor: '#FBA1FF',
    borderWidth: 1.5,
    padding: 12,
    marginBottom: 50,
    borderRadius: 10,
    alignItems: 'center',
    width: 200
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default styles;