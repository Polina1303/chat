import { NavigationContainer } from '@react-navigation/native';
import { createContext, useState } from 'react';
import { Navigator } from './src/navigation/Navigator';

interface Props {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const AuthContext = createContext<Props>({
  isAuth: false,
  setIsAuth: (auth) => {},
});

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    // <AuthContext.Provider value={{ isAuth, setIsAuth }}>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
    // </AuthContext.Provider>
  );
}
