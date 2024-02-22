// Types and interfaces for navigation

// Importing required types from navigation libraries
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TouchableOpacityProps} from 'react-native';

// Type definition for the parameters accepted by the navigator
export type NavigatorParamList = {
  navigate(arg0: string): unknown; // Navigation action accepting a string argument
  screen1: undefined; // Screen named 'screen1' with no parameters
  screen2: undefined; // Screen named 'screen2' with no parameters
};

// Interface defining props for a custom button component
export interface CustomButtonProps {
  title: string; // Button text
  onPress: () => void; // Handler for button press
  disabled: boolean; // Indicates if the button is disabled
  testID?: string; // Test identifier for UI testing
  prp?: TouchableOpacityProps; // Additional TouchableOpacityProps
}

// Type definition for the expected props of 'screen1'
export type Screen1Props = NativeStackScreenProps<
  NavigatorParamList,
  'screen1'
>;

// Type definition for the expected props of 'screen2'
export type Screen2Props = NativeStackScreenProps<
  NavigatorParamList,
  'screen2'
>;
