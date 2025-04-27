import React, { useCallback, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;  // Callback to tell parent that we closed
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose }) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleSheetChanges = useCallback((index: number) => {
        // console.log('handleSheetChanges', index);
        // If user swipes down completely, index will become -1, you can detect close
        if (index === -1) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            bottomSheetRef.current?.expand();
        } else {
            bottomSheetRef.current?.close();
        }
    }, [isOpen]);

    return (
        <GestureHandlerRootView style={styles.fullScreenContainer}>
            <BottomSheet
                ref={bottomSheetRef}
                index={-1} // Initially closed
                snapPoints={['100%']} // ALMOST full page
                onChange={handleSheetChanges}
                enablePanDownToClose={true} // allow swipe down to close
            >
                <BottomSheetView style={styles.contentContainer}>
                    <Text style={styles.title}>This is a Dialog 🎉</Text>
                    <Button title="Close Dialog" onPress={onClose} />
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    fullScreenContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default Dialog;
