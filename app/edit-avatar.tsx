import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScreenView } from '@/components/ScreenView';
import { Dimensions, Image, TouchableOpacity, View } from 'react-native';
import Button from '@/components/button';
import AvatarImage from '@/assets/images/image1.jpg';

export default function NotFoundScreen() {
    return (
        <ScreenView className='flex items-center gap-3'>
            <ThemedView className='rounded-full mt-10 overflow-hidden' style={{
                width: Dimensions.get('window').width - 100,
                height: Dimensions.get('window').width - 100
            }}>
                <Image className='object-cover w-full h-full' source={AvatarImage} />
            </ThemedView>
            <View className='flex gap-5 flex-row'>
                <Button className='!bg-pink-500'>UPLOAD</Button>
                <Button>SAVE</Button>
            </View>
        </ScreenView>
    );
}

