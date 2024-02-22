// AppContext.tsx
import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  FC,
} from 'react';

// Define state type
interface AppState {
  email: string;
}

export interface ContextState {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

// Define actions
type AppAction = {type: 'UPDATE_EMAIL'; payload: AppState};

// Create New context
const AppContext = createContext<ContextState | undefined>(undefined);

// Define initial state
const initialState: AppState = {
  email: '',
};

// Define reducer function
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'UPDATE_EMAIL':
      return {...state, ...action.payload};
    default:
      return state;
  }
};

// Create provider
interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook to use the context
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('Sth went wrong about the Context');
  }
  return context;
};

export {AppProvider, useAppContext};
