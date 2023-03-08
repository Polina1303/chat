import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TextMessege from '../components/TextMessege/TextMessege ';
import Chat from '../screens/Chat/Chat';
import ChatList from '../screens/ChatList/ChatList';
import Chats from '../screens/Chats/Chats';
import { Home } from '../screens/Home/Home';
import { RouteName } from './types/RouteName';
import { StackParamsList } from './types/StackParamsList';

const Stack = createNativeStackNavigator<StackParamsList>();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={RouteName.Home} component={Home} />
      <Stack.Screen name={RouteName.ChatList} component={ChatList} />
      <Stack.Screen name={RouteName.Chats} component={Chats} />
      <Stack.Screen name={RouteName.Chat} component={Chat} />
    </Stack.Navigator>
  );
};
