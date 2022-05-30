import {Styled} from "./global.styled";

const {
    CustomButton,
    ButtonText,
} = Styled

const PressableButton = ({ onPress, title }) => (
    <CustomButton onPress={onPress}>
        <ButtonText>{title}</ButtonText>
    </CustomButton>
)

export default PressableButton;
