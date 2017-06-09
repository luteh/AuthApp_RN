/**
 * Created by Luteh on 08/06/2017.
 */
import React, { Component } from 'react'
import { Text } from 'react-native'
import { Card, CardSection, Button, Input } from './common'
import firebase from 'firebase'

class LoginForm extends Component {
  state = {email: '', password: '', error: ''}

  onButtonPressed () {
    const {email, password} = this.state

    this.setState({error: ''})

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({error: 'Authentication Failed!'})
          })
      })
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={'user@gmail.com'}
            label={'Email'}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder={'password'}
            label={'Password'}
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPressed={this.onButtonPressed.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm