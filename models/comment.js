'use strict';
module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Comment', {
        id:  {allowNull: false, primaryKey: true, type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4},
        message : DataTypes.TEXT,
        flag    : {type: DataTypes.ENUM, values:['True','False']},
        active  : {type: DataTypes.ENUM, values:['True','False']},
    });

    Model.associate = function(models){
        this.userId  = this.belongsTo(models.User);
        this.contentId  = this.belongsTo(models.Content);
        this.objectId  = this.belongsTo(models.Comment);
    };


    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Model;
};