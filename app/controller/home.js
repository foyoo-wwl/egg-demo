'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { username } = ctx.query;
    ctx.body = username;
  }
  async test() {
    const { ctx } = this;
    ctx.body = '测试接口';
  }
  async getid() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = id;
  }
  async list() {
    const { ctx } = this;
    const result = await ctx.service.diary.list();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败',
      };
    }
  }
  async add() {
    const { ctx } = this;
    const params = {
      ...ctx.request.body,
    };
    const result = await ctx.service.diary.add(params);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '添加失败',
      };
    }
  }

  async update() {
    const { ctx } = this;
    const params = {
      ...ctx.request.body,
    };
    const result = await ctx.service.diary.update(params);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '添加失败',
      };
    }
  }

  async getDiaryById() {
    const { ctx } = this;
    const result = await ctx.service.diary.diaryById(ctx.params.id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败',
      };
    }
  }

  async delete() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const result = await ctx.service.diary.delete(id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败',
      };
    }

  }

}


module.exports = HomeController;
