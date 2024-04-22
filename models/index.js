// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreign_Key: 'category_id',
  onDelete: 'CASCADE'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Defines a third table needed to store the foreign keys
  through: {
    model: ProductTag,
    foreign_Key: 'tag_id',
    onDelete: 'CASCADE'
  },
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Defines a third table needed to store the foreign keys
  through: {
    model: ProductTag,
    // unique: false
  },
  as: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
