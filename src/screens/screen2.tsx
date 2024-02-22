// Screen2.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  TextInput,
} from 'react-native';
import {ContextState, useAppContext} from '../context/AppContext';
import CustomButton from '../components/Button';
import {Screen2Props} from '../Interfaces';
import {isOtpCodeValid} from '../utils';
import {styles} from './screenStyles';

const Screen2: React.FC<Screen2Props> = () => {
  const [code, setCode] = useState<string>('');
  const {state}: ContextState = useAppContext();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Text testID="screen2-title" style={styles.title}>
          Verification Code
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>
            Please enter the code that we sent to the{' '}
            <Text style={styles.bold}>{state.email}</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the 5-character code"
            keyboardType="decimal-pad"
            onChangeText={setCode}
            maxLength={5}
            testID="code-input"
          />
        </View>
        <CustomButton
          testID="submit-button"
          title="Submit"
          onPress={() => console.log('Code submitted')}
          disabled={!isOtpCodeValid(code)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Screen2;
