const Point = require("../models/Point");

exports.createPoint = async (req, res, next) => {
  try {
    await Point.create(req.body);
    res.status(201).json({ message: "Point create successfully..." });
  } catch (err) {
    next(err);
  }
};

exports.getNearPoints = async (req, res, next) => {
  const { lng, lat } = req.query;
  try {
    const points = await Point.aggregate([
        { "$geoNear": {
            "near": {
                "type": "Point",
                "coordinates": [parseFloat(lng), parseFloat(lat)],
            }, 
            "maxDistance": 100000,
            "spherical": true,
            "distanceField": "distance",
            "distanceMultiplier": 0.000621371
        }}
    ]);
    // const points = await Point.find({
    //   "geometry.coordinates": {
    //     $nearSphere: {
    //       $geometry: {
    //         type: "Point",
    //         coordinates: [parseFloat(lng), parseFloat(lat)],
    //       },
    //       $maxDistance: 3000,
    //     },
    //   },
    // });
    if (!points) {
      const error = new Error("not found points");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ points });
  } catch (err) {
    next(err);
  }
};
