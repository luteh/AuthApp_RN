/**
 * Created by Luteh on 08/06/2017.
 */
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, Button, Spinner, CardSection } from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = {loggedIn: null}

  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCdGCHiP4T1uRZkf2mcwbAoERvxyccPh-Q',
      authDomain: 'authentication-606a4.firebaseapp.com',
      databaseURL: 'https://authentication-606a4.firebaseio.com',
      projectId: 'authentication-606a4',
      storageBucket: 'authentication-606a4.appspot.com',
      messagingSenderId: '637261364801'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent () {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>
      case false:
        return <LoginForm/>
      default:
        return <Spinner size="large"/>
    }
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    )
  }
}

export default App