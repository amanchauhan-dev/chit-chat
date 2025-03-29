import { ScreenView } from '@/components/ScreenView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AvatarImage from '@/assets/images/image1.jpg';
import { Link } from 'expo-router';
export default function ProfileScreen() {
  return (
    <ScreenView>
      <View className='p-4 mt-4 rounded-xl flex items-center'>
        {/* avatar */}
        <ThemedView className='w-24 h-24  rounded-full overflow-hidden' >
          <Image className='w-full h-full object-cover ' source={AvatarImage} />
        </ThemedView>
        <Link className='flex flex-row gap-2 mt-2 items-center' href="/edit-avatar">
          <ThemedText className='text-center'>Profile</ThemedText>
          <MaterialIcons name="mode-edit-outline" size={20} color="green" />
        </Link>
        {/* username */}
        <View className='flex items-center mt-4 gap-2'>
          <ThemedText className='!text-2xl text-center font-bold'>John Doe</ThemedText>
          <ThemedText className='font-bold text-center'>john.doe</ThemedText>
          {/* email */}
          <ThemedText className='!text-lg text-center font-bold'>john.doe@gmail.com</ThemedText>
          <ThemedText className=' text-center'>Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Pariatur magni incidunt modi deleniti quia
            labore deserunt vitae neque natus officia cupiditate esse eveniet
            veritatis ullam amet, numquam, eos odit in 😇🧑‍🎓.
          </ThemedText>
          <View className='flex flex-row gap-2 mt-2 items-center'>
            <ThemedText className=''>Edit</ThemedText>
            <MaterialIcons name="mode-edit-outline" size={20} color="green" />
          </View>
        </View>

      </View>
    </ScreenView>
  );
}

