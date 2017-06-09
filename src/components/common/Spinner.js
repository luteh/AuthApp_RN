/**
 * Created by Luteh on 09/06/2017.
 */
import React from 'react'
import { View, ActivityIndicator }from 'react-native'

const Spinner = ({size}) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator
        size={size || 'large'}
      />
    </View>
  )
}

const styles = {
  spinnerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export { Spinner }