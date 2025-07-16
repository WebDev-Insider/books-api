import { DataTypes } from 'sequelize';
import { sequelize } from '../common/db.common.js';

export const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publication_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
