import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {responsiveHeight} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: RFValue(8),
    minHeight: 50,
  },
  txtBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: RFValue(16),
  },
  enabledButton: {
    backgroundColor: 'blue',
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
});
