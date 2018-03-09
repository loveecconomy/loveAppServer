'use strict';
module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Category', {
        name       : {type: DataTypes.STRING, unique: true},
        wallpaper  : DataTypes.STRING,
    });

    Model.associate = function(models){
        this.categories = this.belongsToMany(models.Content, {through: 'contentCategory'});
    };

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Model;
};