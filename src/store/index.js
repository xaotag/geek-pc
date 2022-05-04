import React from 'react';
import LoginStore from './login.Store';
import userStore from './user.Store';

class RootStore {
  constructor() {
    this.loginStore = new LoginStore();
    this.userStore = new userStore();
  }
}

const rootStore = new RootStore();
const context = React.createContext(rootStore);
const useStore = () => React.useContext(context);
export { useStore };
