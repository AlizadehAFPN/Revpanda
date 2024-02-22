// Screen1.tsx
import React, {useState} from 'react';
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

// Screen1 component representing the first screen of the application
const Screen1: React.FC<Screen1Props> = ({navigation}) => {
  // State to manage the user's email input
  const [email, setEmail] = useState<string>('');

  // Accessing the app context to dispatch actions
  const {dispatch}: ContextState = useAppContext();

  const handlePress = () => {
    // Validate the entered email using a utility function
    if (isValidEmail(email)) {
      // If the email is valid, dispatch an action to update the email in the context
      dispatch({type: UPDATE_EMAIL, payload: {email}});
      // Navigate to the next screen ('screen2')
      navigation.navigate('screen2');
    }
  };

  // Render the screen components
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Text style={styles.title}>Welcome to Revpanda</Text>
        <View style={styles.inputContainer}>
          {/* Input field for entering the email */}
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
            testID="email-input"
          />
        </View>
        {/* Custom button for proceeding to the next screen */}
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
