import Dialog from '@/components/BottomSheets';
import { useState } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';

export default function Explore() {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>This is explore!!</Text>
            <Button title='Open Dialog' onPress={() => setDialogOpen(true)} />
            <Dialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
        </SafeAreaView>
    );
}
