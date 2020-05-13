'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async user() {
    return {
      title: '你妈贵姓',
      content: '免贵姓李',
    };
  }
}
module.exports = UserService;
