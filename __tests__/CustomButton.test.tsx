import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomButton from '../src/components/Button';

describe('CustomButton Component', () => {
  test('renders correctly', () => {
    const {getByText} = render(
      <CustomButton title="Test Button" onPress={() => {}} disabled={false} />,
    );
    expect(getByText('Test Button')).toBeDefined();
  });

  test('calls onPress when button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <CustomButton
        title="Test Button"
        onPress={onPressMock}
        disabled={false}
      />,
    );
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalled();
  });

  // Add more tests as needed
});
