const express = require("express");
const router = express.Router();

const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  listRelatedProducts,
  listCategories,
  listBySearch,
  photo,
} = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth.js");
const { userById } = require("../controllers/user");

//  ========= ROUTES LIST ==========
router.get("/product/:productId", read);
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.delete(
  "/product/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

router.put(
  "/product/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);

router.get("/products", list);
router.get("/products/related/:productId", listRelatedProducts);
router.get("/products/categories", listCategories);

// route - make sure its post
router.post("/products/by/search", listBySearch);

router.get("/product/photo/:productId", photo);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
