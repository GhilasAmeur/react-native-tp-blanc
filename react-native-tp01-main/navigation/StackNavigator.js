import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens'
import { QuizScreen } from '../screens/QuizScreen';

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Accueil"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
