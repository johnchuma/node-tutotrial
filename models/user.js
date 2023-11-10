'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Course)
      // define association here
    }
  }
  User.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type:DataTypes.STRING, 
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    courseId:{
      type:DataTypes.INTEGER,
      allowNull:false
     },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};