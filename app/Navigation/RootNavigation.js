import AuthLoading from '../Screens/Authloading';
import Navtabs from './Navtabs';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppStack = createStackNavigator(
  {
    Navtabs: {
      screen: Navtabs,
      navigationOptions: { gesturesEnabled: true, header: null },
    },
  },
  {
    defaultNavigationOptions: {
      initialRouteName: Navtabs,
      resetOnBlur: true,
    },
  },
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
    },
    {
      initialRouteName: 'AuthLoading',
      resetOnBlur: true,
    },
  ),
);

export default createAppContainer(AppContainer);
