import {Styled} from "./global.styled";

const {
    CustomButton,
    ButtonText,
    CustomButtonLink,
    ButtonTextLink,
} = Styled

const PressableButtonLink = ({ onPress, title }) => (
    <CustomButtonLink onPress={onPress}>
        <ButtonTextLink>{title}</ButtonTextLink>
    </CustomButtonLink>
)

export default PressableButtonLink;
