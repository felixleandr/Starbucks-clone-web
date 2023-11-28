'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beverage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Beverage.belongsToMany(models.Ingredient,{through: 'BeverageIngredients'})
      // Beverage.hasMany(models.BeverageIngredients, {foreignKey: 'IngredientId', onDelete: 'cascade'})
      Beverage.belongsTo(models.Category, {foreignKey: "CategoryId", onDelete: 'cascade'})
      Beverage.belongsTo(models.User, {foreignKey: 'AuthorId'})
    }
  }
  Beverage.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
			  notNull: {
          args: true,
          msg:"Name is required"
			  },
			  notEmpty: {
          args: true,
          msg:"Name is required"
			  }
			}
    },
    imgUrl:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
			  notNull: {
          args: true,
          msg:"Image URL is required"
			  },
			  notEmpty: {
          args: true,
          msg:"Image URL is required"
			  }
			}
    },
    description:  {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
			  notNull: {
          args: true,
          msg:"Description is required"
			  },
			  notEmpty: {
          args: true,
          msg:"Description is required"
			  }
			}
    },
    price:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
			  notNull: {
          args: true,
          msg:"Price is required"
			  },
			  notEmpty: {
          args: true,
          msg:"Price is required"
			  },
        minPrice(){
          if(this.price < 35000){
            throw new Error('Minimum price is IDR 35.000')
          }
          }
			}
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      references: {
				model: {
					tableName: "Categories"
				},
				key: 'id'
			}
    },
    
    AuthorId: {
      type: DataTypes.INTEGER,
      references: {
				model: {
					tableName: "Users"
				},
				key: 'id'
			}
    },
  }, {
    sequelize,
    modelName: 'Beverage',
  });
  return Beverage;
};