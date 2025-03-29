import { ThemedView } from '@/components/ThemedView';
import { ScreenView } from '@/components/ScreenView';
import { Dimensions, Image, View } from 'react-native';
import Button from '@/components/button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function EditProfilePictureScreen() {
    const [image, setImage] = useState<string | null>(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }
    return (
        <ScreenView className='flex items-center gap-3'>
            <ThemedView className='rounded-full mt-10 overflow-hidden' style={{
                width: Dimensions.get('window').width - 100,
                height: Dimensions.get('window').width - 100
            }}>
                {image && <Image className='object-cover w-full h-full' source={{ uri: image }} />}
            </ThemedView>
            <View className='flex gap-5 flex-row'>
                <Button onPress={pickImage} className='!bg-pink-500'>UPLOAD</Button>
                <Button>SAVE</Button>
            </View>
        </ScreenView>
    );
}

