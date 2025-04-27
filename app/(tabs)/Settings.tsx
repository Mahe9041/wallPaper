import { View, Text, SafeAreaView, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function settings() {
    const router = useRouter();
    return (
        <SafeAreaView >
            <Text>This is settings!!</Text>

            <Button
                title="Application Information"
                onPress={() => router.push('/(settings)/ApplicationInfo')}  // navigate to ApplicationInfo page
            />
        </SafeAreaView>
    );
}
