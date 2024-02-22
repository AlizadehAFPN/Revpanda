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

// Screen2 component representing the second screen for entering verification code
const Screen2: React.FC<Screen2Props> = () => {
  // State to manage the verification code input
  const [code, setCode] = useState<string>('');

  // Accessing the app context to retrieve the email from the state
  const {state}: ContextState = useAppContext();

  // Render the screen components
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        {/* Title for the second screen */}
        <Text testID="screen2-title" style={styles.title}>
          Verification Code
        </Text>
        <View style={styles.inputContainer}>
          {/* Instructional text for entering the verification code */}
          <Text style={styles.inputTitle}>
            Please enter the code that we sent to the{' '}
            {/* Displaying the email from the app context */}
            <Text style={styles.bold}>{state.email}</Text>
          </Text>
          {/* Input field for entering the 5-character code */}
          <TextInput
            style={styles.input}
            placeholder="Enter the 5-character code"
            keyboardType="decimal-pad"
            onChangeText={setCode}
            maxLength={5}
            testID="code-input"
          />
        </View>
        {/* Custom button for submitting the verification code */}
        <CustomButton
          testID="submit-button"
          title="Submit"
          onPress={() => console.log('Code submitted')}
          // Disable the button if the entered code is not valid
          disabled={!isOtpCodeValid(code)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Screen2;
