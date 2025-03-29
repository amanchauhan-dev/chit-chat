import { ScreenView } from '@/components/ScreenView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ProfileScreen() {
  return (
    <ScreenView>
      <View className='p-4 mt-4 rounded-xl flex items-center'>
        {/* avatar */}
        <ThemedView className='w-24 h-24  rounded-full' />
        <ThemedText className=''>Profile Picture</ThemedText>
        <MaterialIcons name="mode-edit-outline" size={24} color="black" />
        {/* username */}
        <View className='flex items-center mt-4'>
          <ThemedText className='!text-2xl font-bold'>john.doe</ThemedText>
          {/* email */}
          <ThemedText className='!text-lg font-bold'>john.doe@gmail.com</ThemedText>
        </View>

      </View>
    </ScreenView>
  );
}

