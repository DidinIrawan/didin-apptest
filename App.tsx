import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import storeRedux from './src/Redux/store/store'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './src/Route/AppStack'
const App = () => {
  return (
    <Provider store={storeRedux}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App