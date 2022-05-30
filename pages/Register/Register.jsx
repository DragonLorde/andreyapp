import React, {useEffect, useState, useContext} from "react";
import {Styled} from "./style/Register.styled";
import PressableButton, {GlobalStyle} from "../UI";
import AsyncStorage from '@react-native-async-storage/async-storage';
import checkStorge from "../utils/checkStorge";
import CustomLink from "../UI/CustomLink";
import ThemeContext from "../context";

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

const Register = ({ navigation  }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [alertText, setAlertText] = useState('Не все поля заполнены')

    const onChangeLogin = (value) => {
        setLogin(value)
    }
    const onChangePassword = (value) => {
        setPassword(value)
    }

    const currentContext = useContext(ThemeContext)

    const { setUserData } = currentContext

    const onSubmit = async () => {
        if(!login || !password) {
            setError(true)
            return false
        }
        const formData = {
            login,
            password,
        }

        const response = await fetch('https://laboratory-msk.online/v1.0/register', {
            method: "POST",
            body: JSON.stringify(formData),
        })
        const responseObject = await response.json()
        const { status, data } = responseObject
        if(!status) {
            setAlertText('Что то пошло не так')
            setError(true)
            return false
        } else {
            setUserData(data)
            await AsyncStorage.setItem('@userData', JSON.stringify(data))
        }
    }

    const goToLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <Wrapper>
            <Container>
                <Title>Register</Title>
                <Input
                    placeholder='Логин'
                    placeholderTextColor="white"
                    onChangeText={onChangeLogin}
                />
                <Input
                    placeholder='Пароль'
                    placeholderTextColor="white"
                    name={"login"}
                    onChangeText={onChangePassword}
                />
                <Input
                    placeholder='Повторите пароль'
                    placeholderTextColor="white"
                    name={"password"}
                />
                <PressableButton
                    onPress={onSubmit}
                    title="GO"
                />
                <CustomLink
                    title="Есть аккаунт ?"
                    onPress={goToLogin}
                />
                { error && <AlertText>{ alertText }</AlertText> }
            </Container>
        </Wrapper>
    )
}

export default Register

