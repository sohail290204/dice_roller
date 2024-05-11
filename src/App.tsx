import { StyleSheet, Text, View, ImageSourcePropType, Image, Pressable, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react';

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'



type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}
export default function App() {
  const [num1, setNum1] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  const [diceImage, setDiceImage] = useState(DiceOne)

  const rollDice = () => {
    let num = Math.floor(Math.random() * 6) + 1
    let newHistory = [...history, num]; // Add rolled number to history array

    setHistory(newHistory);
    switch (num) {
      case 1:
        setDiceImage(DiceOne)
        setNum1(1)
        break;
      case 2:
        setDiceImage(DiceTwo)
        setNum1(2)
        break;
      case 3:
        setDiceImage(DiceThree)
        setNum1(3)
        break;
      case 4:
        setDiceImage(DiceFour)
        setNum1(4)
        break;
      case 5:
        setDiceImage(DiceFive)
        setNum1(5)
        break;
      case 6:
        setDiceImage(DiceSix)
        setNum1(6)
        break;
      default:
        setDiceImage(DiceOne)
        setNum1(1)
        break;
    }

    console.log(num1)

  }
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={[isDarkMode ? styles.containerDark : styles.containerLight]}>
      <Dice imageUrl={diceImage} />
      <View>
        <Pressable
          onPress={rollDice}
        >
          <View style={styles.btn}>
            <Text style={styles.text}>Click here to Roll</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.his}>
        <Text style={styles.textLight}> Number is {num1}</Text>
        <Text style={[styles.textLight1]}>History: {history.join(', ')}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  his: {
    margin: 20,
    borderRadius: 15,
    backgroundColor: '#c1cb41',
  },
  text: {
    color: '#fafafa',
    fontSize: 20,
    padding: 15
  },
  textDark: {
    color: '#fafafa',
    fontSize: 35,
    padding: 15,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  textLight: {
    color: '#000000',
    fontSize: 35,
    padding: 15,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  textLight1: {
    color: '#000000',
    fontSize: 20,
    padding: 15,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  btn: {
    marginVertical: 50,

    width: 230,
    borderRadius: 15,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#7286d3'
  },
  containerDark: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  containerLight: {
    flex: 1,
    color: '#000000',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  diceImage: {
    height: 200,
    width: 200
  }
})