/**
 * Created by Luteh on 08/06/2017.
 */
import React, { Component } from 'react'
import { Card, CardSection, Button, Input } from './common'

class LoginForm extends Component {
  state = {email: ''}

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={"user@gmail.com"}
            label = {"Email"}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
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