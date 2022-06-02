import React, { useContext } from "react";
import PressableButton, {GlobalStyle} from "../UI";
import ThemeContext from "../context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const {
    MainContainer,
    MainContainerMin,
    RegularText,
} = GlobalStyle

const Settings = () => {
    const { Theming, themeState, setThemeState, setUserData } = useContext(ThemeContext)

    const currentTheme = themeState
    const switchTheme = () => {
        if(currentTheme.dark) {
            setThemeState(Theming.default)
        } else {
            setThemeState(Theming.dark)
        }
    }

    const logOut = async () => {
        await AsyncStorage.removeItem('@userData')
        setUserData(null)
    }

    return (
        <MainContainer>
            <MainContainerMin>
                <RegularText style={{
                    marginBottom:20
                }}> Настройки </RegularText>
                <PressableButton title="Сменить тему" onPress={switchTheme} />
                <RegularText></RegularText>
                <PressableButton title="Выйти"  onPress={logOut}/>
            </MainContainerMin>
        </MainContainer>
    )
}

export default Settings
