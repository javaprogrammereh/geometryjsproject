const { Router } = require("express");
const pointController =require('../controllers/pointController');

const router = new Router();

//  @desc   Handle Point Creation
//  @route  POST /points/add-point
router.post("/add-point",pointController.createPoint);
//  @desc   select Points
//  @route  GET /points/select-near
router.get("/select-near",pointController.getNearPoints);


module.exports = router;
