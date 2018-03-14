'use strict';
module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('contentCategory', {
        id:  {allowNull: false, primaryKey: true, type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4},
    });

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Model;
};