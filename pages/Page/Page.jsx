import React, {useEffect, useState} from "react";
import PressableButton, {GlobalStyle} from "../UI";
import { ActivityIndicator } from "react-native";

const {
    MainContainer,
    MainContainerMin,
    RegularText,
    CustomImg,
    CardTextTitle,
    CardTextPrice,
} = GlobalStyle

const Page = ({ route, navigation }) => {
    const [loading, isLoading] = useState(true)
    const [cars, setCars] = useState()
    const { itemId } = route.params;
    const [checkAutoState, setCheckAutoState] = useState(false)

    const getData = async () => {
        const response = await fetch(`https://laboratory-msk.online/v1.0/GetCar/${itemId}`)
        const responseData = await response.json()
        setCars({ ...responseData })
        isLoading(false)
    }

    const stateCarText = [
        {
            gib: "ДТП не найдено, не в угоне",
            rsa: "Страховка есть",
            easito: "Пробег не скручен",
        },
        {
            gib: "Есть ДТП, не в угоне",
            rsa: "Страховка есть",
            easito: "Пробег не скручен",
        },
        {
            gib: "ДТП не найдено, в угоне!",
            rsa: "Страховки нет",
            easito: "Пробег не скручен",
        },
        {
            gib: "ДТП не найдено, не в угоне",
            rsa: "Страховки нет",
            easito: "Пробег скручен !",
        }
    ]

    const getRandomText = () => {
        const rand =  ~~(Math.random()*stateCarText.length)
        const text = stateCarText[ rand ]
        return (
            <>
                <RegularText style={{
                    color:'green',
                    marginBottom:20,
                }}>
                    ГИББД: {text.gib}
                </RegularText>
                <RegularText style={{
                    color:'green',
                    marginBottom:10,
                }}>
                    РСА: {text.rsa}
                </RegularText>
                <RegularText style={{
                    color:'green',
                    marginBottom:10,
                }}>
                    ЕАСИТО: {text.easito}
                </RegularText>
            </>
        )
    }

    useEffect(
        () => {
            getData()
        }, [])
    const checkAuto = () => {
        setCheckAutoState(true)
    }
    getRandomText()
    return (
        <MainContainer>
            <MainContainer>
                {loading ? (<ActivityIndicator size="large" />) : (
                    <>
                        <CustomImg
                            source={{uri: cars.img}}
                        />
                        <CardTextTitle>{cars.title} </CardTextTitle>
                        <CardTextPrice> {cars.price} KK </CardTextPrice>
                        <RegularText style={{
                            marginBottom:20
                        }}> {cars.text} </RegularText>
                        <PressableButton title="Проверить авто" onPress={checkAuto} />
                        {checkAutoState && getRandomText()}
                    </>
                )}
            </MainContainer>
        </MainContainer>
    )
}

export default Page

