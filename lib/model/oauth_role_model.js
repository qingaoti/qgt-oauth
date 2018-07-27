const mongoose = require('mongoose');
const constant = require('/config/constant');
let _ = require("lodash");

/**
 *  角色表,
 *  初始化时建立
 *  --默认
 *    |--管理员
 *    |--部门主管
 *    |--成员
 *  --职务
 *    |--人事
 *    |--财务
 *    |--出纳
 *    |--行政
 *    |--客服
 *    |--开发
 *    |--设计
 *    |--产品
 *  --区域
 *    |--北区
 *    |--东区
 *    |--华中区
 *    |--西区
 *    |--南区
 *  --总监
 *    |--ceo
 */
let oauth_role = new mongoose.Schema({
    name: {type: String},  //角色名称
    memo: {type: String},  //角色说明
    group : {type: String}, //角色的分组
    pid_group: {type: String} , //父级的分组
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

module.exports = mongoose.model('oauth_role', oauth_role);