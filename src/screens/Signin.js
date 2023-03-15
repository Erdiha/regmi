import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icons from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const handleSignIn = () => {
    // Add your sign-in logic here
  };

  const handleSignUp = () => {
    // Add your sign-up logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconAndTitle}>
        <Text style={styles.title}>{isSignIn ? 'Sign In' : 'Sign Up'} </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      {isSignIn ? (
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.switch}
        onPress={() => setIsSignIn(!isSignIn)}>
        <Text style={styles.switchText}>
          {isSignIn
            ? "Don't have an account? Sign Up"
            : 'Already have an account? Sign In'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    margin: 10,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  switch: {
    marginTop: 20,
  },
  switchText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  iconAndTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
});
