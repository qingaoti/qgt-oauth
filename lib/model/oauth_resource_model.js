const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const constant = require('/config/constant');
let _ = require("lodash");

/**
 *  资源表, 定位资源(项目,菜单,功能)
 */
let oauth_resource = new mongoose.Schema({
    pid: {type: String},   //父节点id
    name: {type: String},  //资源名称

    memo: {type: String},  //资源说明
    tag: {type: String},   //资源标签
    is_available: {type: Boolean, default: true}, // 是否可用
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

module.exports = mongoose.model('oauth_resource', oauth_resource);