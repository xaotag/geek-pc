import { getToken, http, removeToken, setToken } from '@/utils';
import { makeAutoObservable } from 'mobx';

class LoginStore {
  token = getToken() || '';
  constructor() {
    makeAutoObservable(this);
  }
  getToken = async ({ mobile, code }) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code,
    });
    this.token = res.data.token;
    setToken(res.data.token);
  };
  LoginOut = () => {
    this.token = '';
    removeToken();
  };
}
export default LoginStore;
