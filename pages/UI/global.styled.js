import styled from "styled-components/native";

const Title = styled.Text`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  margin-bottom: 30px;
`

const CustomText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 48px;
  color: #000000;
`

const AlertText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 48px;
  color: #EE4343;
`

const Input = styled.TextInput`
  background: #2D2D2D;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  width: 300px;
  height: 43px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  padding-left: 20px;
  margin-bottom: 15px;
  margin-top: 15px;
`

const CustomButton = styled.TouchableOpacity`
  border-radius: 12px;
  width: 200px;
  max-height: 43px;
  background: #2D2D2D;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const CustomButtonLink = styled.TouchableOpacity`
  width: 200px;
  max-height: 43px;
  margin-top: 20px;
  background: transparent;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 24px;
`

const ButtonTextLink = styled.Text`
  color: black;
  font-size: 24px;
`

const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const MainContainerMin = styled.View`
  margin-top: 20px;
  flex: 1;
  flex-direction: column;
  width: 80%;
`

const LoginText = styled.Text`
  font-weight: 200;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`

const RegularText = styled(LoginText)`
  font-weight: 700;
  font-size: 24px;
  margin-top: 20px;
  color: #B5B5B8;
`

const CustomImg = styled.Image`
  width: 320px;
  height: 140px;
  margin-bottom: 10px;
`

const CardTextTitle = styled.Text`
  margin-top: 20px;
  font-weight: 500;
  font-size: 28px;
  color: #B5B5B8;

`

const CardTextPrice = styled.Text`
  font-weight: 700;
  font-size: 28px;
  margin-top: 10px;

  color: #FF8C05;
`

export const Styled = {
    Title,
    Input,
    CustomButton,
    ButtonText,
    CustomText,
    AlertText,
    LoginText,
    RegularText,
    MainContainer,
    MainContainerMin,
    CustomImg,
    CardTextTitle,
    CardTextPrice,
    CustomButtonLink,
    ButtonTextLink,
}
