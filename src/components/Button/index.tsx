// Import necessary React and React Native components and interfaces
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {CustomButtonProps} from '../../Interfaces';
import {styles} from './styles';

// Importing styles from a separate file to maintain a clean and organized code structure.

// Define a functional component for a custom button
const CustomButton: React.FC<CustomButtonProps> = React.memo(
  // Destructure props to access individual properties
  ({testID, title, onPress, disabled, ...prp}) => {
    // Determine the button style based on the 'disabled' prop
    const buttonStyle = disabled ? styles.disabledButton : styles.enabledButton;

    // Render the TouchableOpacity component with appropriate styles and props
    return (
      <TouchableOpacity
        testID={testID}
        style={[styles.btn, buttonStyle]}
        onPress={onPress}
        disabled={disabled}
        {...prp}>
        <Text style={styles.txtBtn}>{title}</Text>
      </TouchableOpacity>
    );
  },
);

// Export the CustomButton component as the default export
export default CustomButton;
