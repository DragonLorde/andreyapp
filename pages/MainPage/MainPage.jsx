import React, {useEffect, useState} from "react";
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, FlatList} from 'react-native';
import checkStorge from "../utils";
import { Styled } from "./style/MainPage.styled";
import {GlobalStyle} from "../UI";

const {
    Card,
    CardTextPrice,
    CardTextTitle,
    Container,
    CustomImg,
    PriceTitle,
    CardTextTitlePrice,
} = Styled

const {
    MainContainer,
    LoginText,
    RegularText,
    MainContainerMin,
} = GlobalStyle

const MainPage = ({ navigation }) => {

    const [cars, setCars] = useState([])
    const [userData, setUserData] = useState('')

    const getStore = async () => {
        const data = await checkStorge()
        setUserData(data)
    }

    const getData = async () => {
        const response = await fetch(`https://laboratory-msk.online/v1.0/GetAllCars`)
        const responseData = await response.json()
        setCars(responseData)
    }

    const getGoodPrice = (price) => {
        if (price < 500000) {
            return (
                <PriceTitle color='rgba(88, 219, 124, 1)'>
                    <CardTextTitlePrice> Хорошая цена </CardTextTitlePrice>
                </PriceTitle>
            )
        }
        else if (price < 2000000) {
            return (
                <PriceTitle color='rgba(194, 227, 204, 1)'>
                    <CardTextTitlePrice> нормальная цена </CardTextTitlePrice>
                </PriceTitle>
            )
        } else {
            return (
                <PriceTitle color='rgba(213, 214, 215, 1)'>
                    <CardTextTitlePrice> высокая цена </CardTextTitlePrice>
                </PriceTitle>
            )
        }
    }

    const renderItem = ( {item, index} ) => {
        const priceCheckItem = getGoodPrice(item.price)
        return (
            <Card key={index} onPress={() => {
                navigation.navigate("Page", {
                    itemId: item.id
                })
            }}>
                {priceCheckItem}
                <CustomImg source={{uri: item.img}} />
                <CardTextTitle > {item.title} </CardTextTitle>
                <CardTextPrice > {item.price} Р </CardTextPrice>
            </Card>
        )
    }

    useEffect(
        () => {
            getData()
        }, [])

    return (
        <MainContainer>
            <MainContainerMin>
                    <FlatList
                        data={cars}
                        renderItem={renderItem}
                        keyExtractor={(item, index ) => (item, index)}
                    />
            </MainContainerMin>
        </MainContainer>
    )
}

export default MainPage
