import React from 'react';
import { StyleSheet, View, Text, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PrimaryButton from '../components/PrimaryButton';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? '#121212' : '#F5F5F5', paddingTop: insets.top, paddingBottom: insets.bottom }
    ]}>
      <Text style={[styles.title, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
        Welcome to your React Native Boilerplate
      </Text>
      <Text style={[styles.subtitle, { color: isDarkMode ? '#BBBBBB' : '#666666' }]}>
        This is the HomeScreen in src/screens/HomeScreen.tsx
      </Text>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Get Started"
          onPress={() => console.log('Button Pressed')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
  }
});

export default HomeScreen;
