const express = require("express");
const router = express.Router();
const { addItemController,
    updateitemController,
    getallitemcontroller,
    getbysingleitemcontroller,
    filterItemPricecontroller,
    SearchItemNamecontroller,
    sortItemNameController,
    sortItemPriceController,
   } = require("../controllers/items.controller");
   const {
    addfavoritescontroller,
  } = require("../controllers/favourites.controller");
  const { validate } = require("../middlewares/validate.middleware");
  const {
    itemaddSchema,
    updateitemSchema,
  } = require("../validations/items.schema");
  
  
router.post("/add-items", addItemController);
router.get("/items", getallitemcontroller);
router.get("/get-one-item", getbysingleitemcontroller);
router.post("/favourites", addfavoritescontroller);
router.get("/filter", filterItemPricecontroller);
router.get("/search", SearchItemNamecontroller);
router.get("/sort-by-name", sortItemNameController);
router.get("/sort-by-price", sortItemPriceController);

module.exports = router;
