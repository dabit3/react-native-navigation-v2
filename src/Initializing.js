import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { Auth } from 'aws-amplify'

import { goToAuth, goHome } from './navigation'

export default class Initialising extends React.Component {
  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log('user: ', user)
      if (user) {
        goHome()
      } else {
        goToAuth()
      }
    } catch (err) {
      console.log('error: ', err)
      goToAuth()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
