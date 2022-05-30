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

    const renderItem = ( {item, index} ) => {
        return (
            <Card key={index} onPress={() => {
                navigation.navigate("Page", {
                    itemId: item.id
                })
            }}>
                <CustomImg source={{uri: item.img}} />
                <CardTextTitle > {item.title} </CardTextTitle>
                <CardTextPrice > {item.price}KK </CardTextPrice>
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
