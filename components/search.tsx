import { TextInput, View } from "react-native"
import { ThemedView } from "./ThemedView"
import AntDesign from '@expo/vector-icons/AntDesign';


export const Search = () => {
    return (
        <ThemedView className='p-4 py-1 items-center  mt-4 rounded-2xl flex flex-row gap-1 elevation-lg'>
            <AntDesign name="search1" size={24} color="#fff" />
            <TextInput placeholder='Search here...' placeholderTextColor={'#fff'} />
        </ThemedView>
    )
}