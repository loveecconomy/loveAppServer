'use strict';
module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Content', {
        id:  {allowNull: false, primaryKey: true, type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4},
        title        : DataTypes.STRING,
        contentType  : {type: DataTypes.ENUM, values: ['audio','video']},
        genre        : DataTypes.STRING,
        source       : DataTypes.STRING,
        author       : DataTypes.STRING,
        tags         : DataTypes.STRING,
        views        : DataTypes.INTEGER,
        active  : {type: DataTypes.ENUM, values:['True','False']},
    });

    Model.associate = function(models){
        this.categories = this.belongsToMany(models.Category, {through: 'contentCategory'});
        this.addedBy  = this.belongsTo(models.User);
    };

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Model;
};