import { StatusBar } from 'expo-status-bar'
import AppNavigator from '@/navigation'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar style="dark" />
    </NavigationContainer>
  )
}
