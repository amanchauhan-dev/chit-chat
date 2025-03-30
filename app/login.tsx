import { useContext } from "react";
import { Dimensions, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { AuthContext } from "@/context/AuthContext";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button";
import { Input } from "@/components/Input";

const LoginScreen = () => {
    const auth = useContext(AuthContext);
    const router = useRouter();

    if (!auth) return null; // Ensure auth is not undefined

    const handleLogin = () => {
        auth.setLogin(true);
        auth.setUser({ id: 1, name: "Aman Chauhan", email: "aman@example.com" });
        router.replace("/(screens)/(tabs)"); // Redirect after login
    };

    return (
        <View className="flex-1 justify-center gap-3 items-center">
            <ThemedText type='title'>Login</ThemedText>
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 100 }}>
                <ThemedText>username</ThemedText>
                <Input placeholder="username" />
            </View>
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 100 }}>
                <ThemedText>Password</ThemedText>
                <Input placeholder="Password" />
            </View>
            <View className="" style={{ width: Dimensions.get('window').width - 100 }}>
                <Button onPress={handleLogin} className="w-full p-3 py-2 text-center">Login</Button>
            </View>
            <View className="" style={{ width: Dimensions.get('window').width - 100 }}>
                <ThemedText>Don't have a account? <Link href={'/register'} className="text-green-600 ml-3">Register here</Link></ThemedText>
                <ThemedText>Don't have a account? <Link href={'/(screens)/(tabs)'} className="text-green-600 ml-3">Home</Link></ThemedText>
            </View>
        </View>
    );
};

export default LoginScreen;
