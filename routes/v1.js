const express 			= require('express');
const router 			= express.Router();

const UserController 	= require('./../controllers/UserController');
const CategoryController = require('./../controllers/CategoryController');
const ContentController = require('./../controllers/ContentController');
const HomeController 	= require('./../controllers/HomeController');

const custom 	        = require('./../middleware/custom');

const passport      	= require('passport');
const path              = require('path');


require('./../middleware/passport')(passport)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});

// /* User Routes */
// router.post(    '/users/new',           UserController.create);                                                    // C
// router.get(     '/users',           passport.authenticate('jwt', {session:false}), UserController.get);        // R
// router.put(     '/users',           passport.authenticate('jwt', {session:false}), UserController.update);     // U
// router.delete(  '/users',           passport.authenticate('jwt', {session:false}), UserController.remove);     // D
// router.post(    '/users/login',     UserController.login);

// /* Category Routes */
// router.post(    '/categories/new',             passport.authenticate('jwt', {session:false}), CategoryController.create);                  // C
// router.get(     '/categories',             passport.authenticate('jwt', {session:false}), CategoryController.getAll);                  // R

// router.get(     '/categories/:category_id', passport.authenticate('jwt', {session:false}), custom.category, CategoryController.get);     // R
// router.put(     '/categories/:category_id', passport.authenticate('jwt', {session:false}), custom.category, CategoryController.update);  // U
// router.delete(  '/categories/:category_id', passport.authenticate('jwt', {session:false}), custom.category, CategoryController.remove);  // D

// /* Content Routes */
// router.post(    '/contents/new',             passport.authenticate('jwt', {session:false}), ContentController.create);                  // C
// router.get(     '/contents',             passport.authenticate('jwt', {session:false}), ContentController.getAll);                  // R

// router.get(     '/contents/:content_id', passport.authenticate('jwt', {session:false}), custom.content, ContentController.get);     // R
// router.put(     '/contents/:content_id', passport.authenticate('jwt', {session:false}), custom.content, ContentController.update);  // U
// router.delete(  '/contents/:content_id', passport.authenticate('jwt', {session:false}), custom.content, ContentController.remove);  // D

// router.get('/dash', passport.authenticate('jwt', {session:false}),HomeController.Dashboard)


/* User Routes */
router.post(    '/users/new',           UserController.create);                                                    // C
router.get(     '/users',           UserController.get);        // R
router.put(     '/users',           UserController.update);     // U
router.delete(  '/users',           UserController.remove);     // D
router.post(    '/users/login',     UserController.login);

/* Category Routes */
router.post(    '/categories/new',             CategoryController.create);                  // C
router.get(     '/categories',                 CategoryController.getAll);                  // R

router.get(     '/categories/:category_id', custom.category, CategoryController.get);     // R
router.put(     '/categories/:category_id', custom.category, CategoryController.update);  // U
router.delete(  '/categories/:category_id', custom.category, CategoryController.remove);  // D

/* Content Routes */
router.post(    '/contents/new',              ContentController.create);                  // C
router.get(     '/contents',                  ContentController.getAll);                  // R

router.get(     '/contents/:content_id',  custom.content, ContentController.get);     // R
router.put(     '/contents/:content_id',  custom.content, ContentController.update);  // U
router.delete(  '/contents/:content_id',  custom.content, ContentController.remove);  // D

router.get('/dash' ,HomeController.Dashboard)


//********* API DOCUMENTATION **********
router.use('/docs/api.json',            express.static(path.join(__dirname, '/../public/v1/documentation/api.json')));
router.use('/docs',                     express.static(path.join(__dirname, '/../public/v1/documentation/dist')));
module.exports = router;
