import React from "react";
import PressableButton, {GlobalStyle} from "../UI";

const {
    MainContainer,
    MainContainerMin,
    RegularText,
    CardTextTitle,
    Input,
    Title,
} = GlobalStyle

const Pay = () => {
    return(
        <MainContainer>
            <MainContainerMin>
                <Title>
                    Оплата подписки
                </Title>
                <RegularText>
                    Стоимость: 1000Р
                </RegularText>
                <RegularText>
                    Длительность: 1 мес
                </RegularText>
                <Input
                    placeholder="Номер карты"
                />
                <Input
                    placeholder="MM/YY"
                />
                <Input
                    placeholder="CVC"
                />
                <PressableButton
                    title="GO"
                />
            </MainContainerMin>
        </MainContainer>
    )
}

export default Pay
