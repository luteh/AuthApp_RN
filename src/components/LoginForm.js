/**
 * Created by Luteh on 08/06/2017.
 */
import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { Card, CardSection, Button } from './common'

class LoginForm extends Component {
  state = {text: ''}

  render () {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({text})}
            style={{height: 40, width: 100}}
          />
        </CardSection>

        <CardSection/>

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm