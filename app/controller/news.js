'use strict';
const Controller = require('egg').Controller;


class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const newsList = await ctx.service.news.list();
    console.log(newsList)
    await ctx.render('news/list.tpl', { list: newsList.data.data.list });
  }
}

module.exports = NewsController;
