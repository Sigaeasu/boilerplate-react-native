import React, { useState } from 'react';
import { StyleSheet, View, Text, useColorScheme, ActivityIndicator, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PrimaryButton from '../components/PrimaryButton';
import productService from '../services/productService';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const insets = useSafeAreaInsets();
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const handleFetchProducts = async () => {
    setLoading(true);
    try {
      const response = await productService.fetchProducts(1);
      setData(response);
      Alert.alert('Success', 'Products fetched successfully (Simulator)');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await productService.login({ 
        username: 'user123', 
        password: 'password123' 
      });
      console.log('Login Response:', response);
      Alert.alert('Success', 'Login successful (Simulator)');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? '#121212' : '#F5F5F5', paddingTop: insets.top, paddingBottom: insets.bottom }
    ]}>
      <Text style={[styles.title, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
        API Service Pattern
      </Text>
      
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
      ) : (
        <View style={styles.content}>
          <Text style={[styles.subtitle, { color: isDarkMode ? '#BBBBBB' : '#666666' }]}>
            {data ? JSON.stringify(data).substring(0, 100) + '...' : 'Data shown here after fetch'}
          </Text>
          
          <View style={styles.buttonContainer}>
            <PrimaryButton 
              title="Fetch Products (Service → Utils)" 
              onPress={handleFetchProducts} 
            />
            <View style={{ height: 10 }} />
            <PrimaryButton 
              title="Mock Login (Service → Utils)" 
              onPress={handleLogin} 
            />
          </View>
        </View>
      )}
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
  loader: {
    marginVertical: 20,
  },
  content: {
    alignItems: 'center',
    width: '100%',
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
