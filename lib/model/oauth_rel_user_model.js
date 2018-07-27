const mongoose = require('mongoose');
const constant = require('/config/constant');
let _ = require("lodash");

/**
 *  关系表, 用于维护 权限-资源-用户之间的关系
 */
let oauth_rel_user = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    role: [{type: mongoose.Schema.Types.ObjectId, ref: 'oauth_role'}],
    resource: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'oauth_role'}
    ],
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

module.exports = mongoose.model('oauth_rel_user', oauth_rel_user);