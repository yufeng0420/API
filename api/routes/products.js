const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/check-auth");
const ProductsController = require("../controller/products");
const upload = require("../middleware/upload");

router.get("/", ProductsController.products_get_all);

router.post(
  "/",
  // checkAuth,
  upload.single("productImage"),
  ProductsController.products_create_product
);

router.get("/:productId", ProductsController.products_get_product);

router.put(
  "/:productId",
  upload.single("productImage"),
  // checkAuth,
  ProductsController.products_update_product
);

router.delete(
  "/:productId",
  // checkAuth,
  ProductsController.products_delete_product
);

module.exports = router;
