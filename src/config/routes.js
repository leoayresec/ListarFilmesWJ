import Home from '../pages/Home'
import Login from '../pages/Login'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import {  createMaterialTopTabNavigator,
} from 'react-navigation-tabs'
const stackLogin = createSwitchNavigator({
  Login:Login
})
const TabNavigator = createMaterialTopTabNavigator(
    {
      Home: Home,
    },{
    tabBarPosition: 'bottom'
  }
    )

export default createAppContainer(stackLogin)