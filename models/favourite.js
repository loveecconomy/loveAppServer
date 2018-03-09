'use strict';
module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Favourite', {
        active      : DataTypes.INTEGER,
    });

    Model.associate = function(models){
        this.userId  = this.belongsTo(models.User);
        this.contentId  = this.belongsTo(models.Content);
    };


    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Model;
};