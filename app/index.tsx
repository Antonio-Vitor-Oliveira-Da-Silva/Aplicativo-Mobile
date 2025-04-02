import { View, Text, StyleSheet, Pressable } from 'react-native'
import { colors } from '../constants/colors'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { MotiImage } from 'moti'

export default function Index()
{
  return(
    <View style={styles.container}>
      <MotiImage
        from={{
          opacity: 0,
          translateY: -150,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
          zIndex: 1,
        }}
          source={require('../assets/images/logo.png')}
      />

      <Text style={styles.title}>
        Dieta<Text style={{ color: colors.white}}>.IA</Text>
      </Text>

      <Text style={styles.text}>
        Crie sua dieta personalizada com inteligência artificial
      </Text>

      <Link href="./step" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Criar minha dieta <Ionicons name="restaurant" size={17} color="#FFF" /></Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  title:{
    fontSize: 36,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: colors.green
  },
  text:{
    fontSize: 16,
    fontFamily: 'Poppins',
    color: colors.white,
    width: 240,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  button:{
    backgroundColor: colors.blue,
    width: '100%',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34
  },
  buttonText:{
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold'
  }
})