import { http } from '@/utils';

const { makeAutoObservable } = require('mobx');

class userStore {
  userinfo = {};
  constructor() {
    makeAutoObservable(this);
  }
  getUserInfo = async () => {
    let res = await http.get('/user/profile');
    this.userinfo = res.data;
  };
}
export default userStore;
