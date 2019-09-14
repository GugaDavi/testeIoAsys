import storage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'enterprises',
      storage,
      whitelist: ['auth', 'profile', 'enterprises'],
    },
    reducers
  );

  return persistedReducer;
};
