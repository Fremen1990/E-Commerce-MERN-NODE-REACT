const formidable = require("formidable");
const _ = require("lodash");

const Category = require("../models/category");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({ error: "Category not found" });
    }
    req.category = category;
    next();
  });
};

exports.read = (req, res) => {
  return res.json(req.category);
};

exports.create = (req, res, next) => {
  const category = new Category(req.body);
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    res.json({ data });
  });
};

exports.remove = (req, res) => {
  let category = req.category;
  category.remove((err, deletedCategory) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      deletedCategory,
      message: "Category deleted",
    });
  });
};

exports.update = (req, res) => {
  let category = new Category(req.body);
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    res.json({ data });
  });
};

exports.list = (req, res) => {
  Category.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(error) });
    }
    res.json(data);
  });
};
