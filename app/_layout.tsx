import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return <GestureHandlerRootView>
        <Stack screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name="(settings)/ApplicationInfo" options={{ headerShown: true, headerTitle: "Account Info", headerBackTitle: "Go Back" }}></Stack.Screen>
        </Stack>
    </GestureHandlerRootView>
}