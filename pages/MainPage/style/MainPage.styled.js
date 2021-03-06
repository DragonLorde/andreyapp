import styled from "styled-components/native";

const Container = styled.FlatList`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Card = styled.TouchableOpacity`
  border-radius: 12px;
  background: #FBFBFD;
  //max-height: 160px;
  min-height: 180px;
  height: auto;
  width: auto;
  margin: 20px;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const CustomImg = styled.Image`
  width: 110px;
  height: 42.15px;
  margin-bottom: 10px;
`

const CardTextTitle = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #B5B5B8;

`

const CardTextPrice = styled.Text`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-top: 10px;

  color: #FF8C05;
`

const PriceTitle = styled.View`
  width: auto;
  padding: 3px;
  height: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 12px;
  background-color: ${(props) => props.color};
`

const CardTextTitlePrice = styled.Text`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: white;
`

export const Styled = {
    Card,
    CardTextPrice,
    CardTextTitle,
    CustomImg,
    Container,
    PriceTitle,
    CardTextTitlePrice,
}
