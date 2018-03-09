const Category = require('../models').Category;

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, category;
    let user = req.user;

    let category_info = req.body;


    [err, category] = await to(Category.create(category_info));
    if(err) return ReE(res, err, 422);

    let category_json = category.toWeb();
    category_json.users = [{user:user.id}];

    return ReS(res,{content:category_json}, 201);
}
module.exports.create = create;

const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let user = req.user;
    let err, categories;

    [err, categories] = await to(Category.findAll());

    let categories_json =[]
    for( let i in categories){
        let category = categories[i];
        let category_info = category.toWeb();
        categories_json.push(category_info);
    }

    // console.log('c t', categories_json);
    return ReS(res, {categories:categories_json});
}
module.exports.getAll = getAll;

const get = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let category = req.category;

    return ReS(res, {category:category.toWeb()});
}
module.exports.get = get;

const update = async function(req, res){
    let err, category, data;
    category = req.category;
    data = req.body;
    category.set(data);

    [err, category] = await to(category.save());
    if(err){
        return ReE(res, err);
    }
    return ReS(res, {category:category.toWeb()});
}
module.exports.update = update;

const remove = async function(req, res){
    let category, err;
    category = req.category;

    [err, category] = await to(category.destroy());
    if(err) return ReE(res, 'error occured trying to delete the category');

    return ReS(res, {message:'Deleted category'}, 204);
}
module.exports.remove = remove;