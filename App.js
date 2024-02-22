'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
// App.tsx
const react_1 = __importDefault(require('react'));
const native_1 = require('@react-navigation/native');
const AppContext_1 = require('./src/context/AppContext');
const screen1_1 = __importDefault(require('./src/screens/screen1'));
const screen2_1 = __importDefault(require('./src/screens/screen2'));
const native_stack_1 = require('@react-navigation/native-stack');
const Stack = (0, native_stack_1.createNativeStackNavigator)();
const App = () => {
  return react_1.default.createElement(
    AppContext_1.AppProvider,
    null,
    react_1.default.createElement(
      native_1.NavigationContainer,
      null,
      react_1.default.createElement(
        Stack.Navigator,
        null,
        react_1.default.createElement(Stack.Screen, {
          name: 'screen1',
          component: screen1_1.default,
          options: {title: 'Enter Email'},
        }),
        react_1.default.createElement(Stack.Screen, {
          name: 'screen2',
          component: screen2_1.default,
          options: {title: 'Enter OTP'},
        }),
      ),
    ),
  );
};
exports.default = App;
