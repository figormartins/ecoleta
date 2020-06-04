import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Points from './pages/Points'
import Detail from './pages/Detail'

const AppStatck = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStatck.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5'
          }
        }}
      >
        <AppStatck.Screen name="Home" component={Home} />
        <AppStatck.Screen name="Points" component={Points} />
        <AppStatck.Screen name="Detail" component={Detail} />
      </AppStatck.Navigator>
    </NavigationContainer>
  )
}

export default Routes