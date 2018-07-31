'use strict';
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('userDetail', {
        avatar    : {type: DataTypes.STRING, allowNull: false},
        phone     : {type: DataTypes.STRING, allowNull: true, unique: true},
        branch    : {type: DataTypes.STRING, allowNull: true},
        role      : {type: DataTypes.ENUM, values: ['pastor', 'elder', 'leader', 'none'], defaultValue: 'none'},
    });

    Model.associate = function(models){
        this.userId  = this.belongsTo(models.User);
    };

    return Model;
};