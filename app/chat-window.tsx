import { ScreenView } from '@/components/ScreenView';
import { ThemedText } from '@/components/ThemedText';
import { useNavigation } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import AvatarImage from '@/assets/images/image1.jpg';

export default function ChatWindowScreen() {
    return (
        <>
            <CustomHeader />
            <View className='flex-1 bg-zinc-800'>
                <ChatList />
                <ChatInput />
            </View>
        </>
    );
}


const ChatInput = () => {
    return (
        <View className='flex flex-row gap-1  py-1 px-4 rounded-lg mb-5 bg-zinc-900 items-center mx-auto ' >
            <TextInput className='text-white' placeholderTextColor={'white'} style={{ width: Dimensions.get('window').width - 100 }} placeholder='Type a message...' />
            <FontAwesome name='send' size={24} color={'white'} />
        </View>
    )
}

const ChatList = () => {
    return (
        <ScrollView className='flex gap-3  flex-1'>
            <ScreenView >
                <ThemedText>Hello Chat</ThemedText>
            </ScreenView>
        </ScrollView>
    )
}



export function CustomHeader() {
    const navigation = useNavigation();
    const handleBackPress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        navigation.goBack();
    };

    return (
        <View className='flex flex-row  bg-transparent p-4 pl-2 gap-2 items-center  mx-2 mt-[36px] rounded-[25px]' >
            <TouchableOpacity onPress={handleBackPress}>
                <Ionicons name="arrow-back-outline" size={24} color="white" />
            </TouchableOpacity>
            <ThemedView className='w-12 h-12  rounded-full overflow-hidden' >
                <Image className='w-full h-full object-cover' source={AvatarImage} />
            </ThemedView>
            <View>
                <ThemedText className='font-bold'>John Doe</ThemedText>
                <ThemedText className='!text-green-500 !text-sm'>online</ThemedText>
            </View>
        </View>
    );
}