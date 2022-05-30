import AsyncStorage from '@react-native-async-storage/async-storage';


const checkStorge = async () => {
    const value = await AsyncStorage.getItem('@userData')
    return value != null ? JSON.parse(value) : null;
}

export default checkStorge

