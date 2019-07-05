const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/check-auth");
const OrdersController = require("../controller/orders");

router.get("/", OrdersController.orders_get_all);

router.post("/", OrdersController.orders_create_order);

router.get("/:orderId", OrdersController.orders_get_order);

router.put("/:orderId", OrdersController.orders_update_status);

router.get("/userById/:userId", OrdersController.orders_get_orderByUserId);

router.delete("/:orderId", OrdersController.orders_delete_order);

module.exports = router;
