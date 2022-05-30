import React, {useEffect, useState, useContext} from "react";
import {Styled} from "./style/Login.styled";
import {GlobalStyle} from "../UI";
import PressableButton from "../UI";
import checkStorge from "../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ThemeContext from "../context";
import CustomLink from "../UI/CustomLink";
const {
    Input,
    Title,
    CustomText,
    AlertText,
} = GlobalStyle

const {
    Container,
    Wrapper,
} = Styled

const Login = ({ navigation  }) => {
    const currentContext = useContext(ThemeContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [alertText, setAlertText] = useState('Не все поля заполнены')

    const { setUserData } = currentContext

    const onChangeLogin = (value) => {
        setLogin(value)
    }
    const onChangePassword = (value) => {
        setPassword(value)
    }

    const onSubmit = async () => {
        if(!login || !password) {
            setError(true)
            return false
        }
        const formData = {
            login,
            password,
        }

        const response = await fetch('https://laboratory-msk.online/v1.0/login', {
            method: "POST",
            body: JSON.stringify(formData),
        })
        const responseObject = await response.json()
        const { status, data } = responseObject
        if(!status) {
            setAlertText('Неправильный логин или пароль')
            setError(true)
            return false
        } else {
            await AsyncStorage.setItem('@userData', JSON.stringify(data))
            setUserData(data)
            //navigation.navigate('MainPage')
        }
    }

    const goToReg = () => {
        navigation.navigate('Register')
    }

    return (
        <Wrapper>
            <Container>
                <Title>LOGIN</Title>
                <Input
                    placeholder='Логин'
                    placeholderTextColor="white"
                    onChangeText={onChangeLogin}
                />
                <Input
                    placeholder='Пароль'
                    placeholderTextColor="white"
                    onChangeText={onChangePassword}
                />
                <PressableButton
                    onPress={onSubmit}
                    title="GO"
                />
                <CustomLink
                    onPress={goToReg}
                    title="Нет аккаунта ?"
                    style={{
                        backgroundColor:'white'
                    }}
                />
                { error && <AlertText>{ alertText }</AlertText> }
            </Container>
        </Wrapper>
    )
}

export default Login

