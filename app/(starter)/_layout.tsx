import { Image, StyleSheet, Platform, View, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        <View>
            <Image
                source={require('@/assets/images/partial-react-logo.png')}
                style={styles.reactLogo}
                />
        <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        </ThemedView><HelloWave />

        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        // height: "auto",
        // width: 290,
        objectFit: "cover",
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
