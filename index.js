import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent kalder AppRegistry.registerComponent('main', () => App)
// og sikrer, at miljøet er sat korrekt op, uanset om appen køres i Expo Go
// eller som en native build.
registerRootComponent(App);
