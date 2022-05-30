import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";
import Page from "./pages/Page";
import Pay from "./pages/Pay/Pay";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Settings from "./pages/Settings/Settings";
import ThemeContext from "./pages/context";
import checkStorge from "./pages/utils";

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator()

const Theming = {
    dark: DarkTheme,
    default: DefaultTheme,
}

function LoginStackScreen() {
    return (
        <HomeStack.Navigator initialRouteName="Login">
            <HomeStack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <HomeStack.Screen name="Register" component={Register} options={{
                headerShown: false
            }}/>
        </HomeStack.Navigator>
    );
}

function HomeStackScreen() {
    return (
        <HomeStack.Navigator initialRouteName="Feed">
            <HomeStack.Screen
                name="Feed"
                component={MainPage}
                options={{
                    headerShown: true
                }}
            />
            <HomeStack.Screen name="Page" component={Page} />
        </HomeStack.Navigator>
    );
}

export default function App({ navigation }) {
    const [themeState, setThemeState] = useState(Theming.default)
    const [userData, setUserData] = useState('')

    const getStore = async () => {
        const data = await checkStorge()
        setUserData(data)
        console.log(userData)
    }

    useEffect(() => {
        getStore()
        console.log(userData)
    }, [])
      return (
          <ThemeContext.Provider value={{ Theming, themeState, setThemeState, userData, setUserData }}>
              <NavigationContainer theme={themeState}>
                  { userData ? (<Tab.Navigator
                      screenOptions={{
                          headerShown: false
                      }}
                  >
                      <Tab.Screen name="MainPage" component={HomeStackScreen}/>
                      <Tab.Screen name="Pay" component={Pay} options={{
                          headerShown: true
                      }} />
                      <Tab.Screen name="Settings" component={Settings} options={{
                          headerShown: true
                      }}
                      />
                  </Tab.Navigator>) : (
                        <LoginStackScreen />
                  )}
              </NavigationContainer>
          </ThemeContext.Provider>
      );
}


