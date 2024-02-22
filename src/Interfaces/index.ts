import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TouchableOpacityProps} from 'react-native';

export type NavigatorParamList = {
  navigate(arg0: string): unknown;
  screen1: undefined;
  screen2: undefined;
};

export interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled: boolean;
  testID?: string;
  prp?: TouchableOpacityProps;
}

export type Screen1Props = NativeStackScreenProps<
  NavigatorParamList,
  'screen1'
>;

export type Screen2Props = NativeStackScreenProps<
  NavigatorParamList,
  'screen2'
>;
