// Screen1.tsx
import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomButton from '../components/Button';
import {ContextState, useAppContext} from '../context/AppContext';
import {Screen1Props} from '../Interfaces';
import {UPDATE_EMAIL} from '../constant';
import {isValidEmail} from '../utils';
import {styles} from './screenStyles';

const Screen1: React.FC<Screen1Props> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const {dispatch}: ContextState = useAppContext();

  const handlePress = useCallback(() => {
    if (isValidEmail(email)) {
      dispatch({type: UPDATE_EMAIL, payload: {email}});
      navigation.navigate('screen2');
    }
  }, [email]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Text style={styles.title}>Welcome to Nacliat</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
            testID="email-input"
          />
        </View>
        <CustomButton
          testID="next-button"
          title="Next"
          onPress={handlePress}
          disabled={!isValidEmail(email)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Screen1;
