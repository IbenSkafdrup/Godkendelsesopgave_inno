import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OpgavelisteScreen from './screens/OpgavelisteScreen';
import OpgaveDetaljeScreen from './screens/OpgaveDetaljeScreen';
import ProfilScreen from './screens/ProfilScreen';
import { COLORS } from './styles/GlobalStyle';

const Tab = createBottomTabNavigator();
const OpgaveStack = createNativeStackNavigator();

// Stack til Opgaver-fanen: liste → detalje, så man kan navigere "ind i" en opgave
// og stadig blive i samme bundfane.
function OpgaverStackScreen() {
  return (
    <OpgaveStack.Navigator>
      <OpgaveStack.Screen
        name="Opgaveliste"
        component={OpgavelisteScreen}
        options={{ title: 'Opgaver' }}
      />
      <OpgaveStack.Screen
        name="OpgaveDetalje"
        component={OpgaveDetaljeScreen}
        options={{ title: 'Opgavedetaljer' }}
      />
    </OpgaveStack.Navigator>
  );
}

// Rod-navigationen: bundfaner (Opgaver/Profil). Opgaver-fanen skjuler sin egen
// header, fordi den bruger stack-navigatorens header i stedet.
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.muted,
        }}
      >
        <Tab.Screen name="Opgaver" component={OpgaverStackScreen} />
        <Tab.Screen
          name="Profil"
          component={ProfilScreen}
          options={{ headerShown: true }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
