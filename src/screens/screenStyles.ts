import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: responsiveWidth(5),
    backgroundColor: 'white',
  },
  title: {
    fontSize: RFValue(24),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(3),
  },
  inputContainer: {
    width: '100%',
    marginBottom: responsiveHeight(3),
  },
  input: {
    height: responsiveHeight(6),
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: responsiveWidth(2),
    alignSelf: 'center',
    fontSize: RFValue(14),
    minHeight: 50,
  },
  safeArea: {
    flex: 1,
  },
  inputTitle: {
    marginBottom: 12,
  },
  bold: {
    fontWeight: 'bold',
    color: 'darkblue',
  },
});
