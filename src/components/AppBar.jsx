import { View } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';


const AppBar = () => {
  return (
    <View style={theme.AppBar}>
      <AppBarTab />
    </View>)
};

export default AppBar;