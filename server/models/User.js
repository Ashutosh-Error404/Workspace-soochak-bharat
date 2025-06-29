const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const Tender = sequelize.define('Tender', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  dueDate: { type: DataTypes.DATE },
  status: { type: DataTypes.STRING },
  createdBy: { type: DataTypes.INTEGER, allowNull: false }
});

Tender.belongsTo(User, { foreignKey: 'createdBy' });

module.exports = Tender;
