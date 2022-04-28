const mongoose = require('mongoose');

const GeoSchema = new mongoose.Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    },
});
//*
const fieldsSchema = new mongoose.Schema({
    coordinates: {type:[Number]},
    cou_name_en: {
        type:String,
    },
    label_en: {
        type:String,
    },
    feature_code:{
        type:String,
    },
    population:{
        type:String,
    },
    dem: {
        type:String,
    },
    geoname_id:{
        type:String,
    },
    admin4_code: {
        type:String,
    },
    name: {
        type:String,
    },
    ascii_name: {
        type:String,
    },
    alternate_names: {
        type:String,
    },
    admin1_code:{
        type:String,
    },
    admin3_code: {
        type:String,
    },
    feature_class: {
        type:String,
    },
    country_code: {
        type:String,
    },
    admin2_code: {
        type:String,
    },
    timezone:{
        type:String,
    },
    modification_date: {
        type:String,
    },
});
//*
const pointSchema = new mongoose.Schema({
    datasetid:{
        type:String,
    },
    recordid:{
        type:String,
    },
    fields:fieldsSchema,
    geometry:GeoSchema,
    record_timestamp:{
        type:String,
    },
});

module.exports = mongoose.model("Point",pointSchema);