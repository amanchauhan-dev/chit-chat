import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import "./global.css"
import { useNavigation } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#18181b' }}>
        <Stack
          screenOptions={{
            header(props) {
              return <CustomHeader title={props.route.name} />
            },
            contentStyle: {
              backgroundColor: '#18181b'
            }
          }}

        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="edit-avatar" />
          <Stack.Screen name="chat-window" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style='light' />
      </View>
    </>
  );
}





export function CustomHeader({ title }: { title: string }) {
  const navigation = useNavigation();
  if (title == 'edit-avatar') {
    title = 'Edit Profile Picture'
  }
  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.goBack();
  };

  return (
    <View className='flex flex-row items-center bg-transparent p-4 pl-2 gap-2  mx-2 mt-[36px] rounded-[25px]' >
      <TouchableOpacity onPress={handleBackPress}>
        <Ionicons name="arrow-back-outline" size={24} color="white" />
      </TouchableOpacity>
      <Text className='text-green-500 text-2xl font-bold'>{title}</Text>
    </View>
  );
}