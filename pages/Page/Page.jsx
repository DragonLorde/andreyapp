import React, {useEffect, useState} from "react";
import PressableButton, {GlobalStyle} from "../UI";
import {ActivityIndicator} from "react-native";

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

    useEffect(
        () => {
            getData()
        }, [])
    const checkAuto = () => {
        setCheckAutoState(true)
    }
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
                        {checkAutoState && ( <RegularText style={{
                            color:'green',
                            marginBottom:20,
                        }}> С автомобилем все хорошо </RegularText> )}
                    </>
                )}
            </MainContainer>
        </MainContainer>
    )
}

export default Page

