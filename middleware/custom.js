const Category  = require('./../models').Category;
const Content 	= require('./../models').Content;

let category = async function (req, res, next) {
    let category_id, err, category;
    category_id = req.params.category_id;

    [err, category] = await to(Category.findOne({where:{id:category_id}}));
    if(err) return ReE(res, "err finding category");

    if(!category) return ReE(res, "category not found with id: "+category_id);

    req.category = category;
    next();
}
module.exports.category = category;

let content = async function (req, res, next) {
    let content_id, err, content;
    content_id = req.params.content_id;
    console.log('content id is '+content_id)

    [err, content] = await to(Content.findOne({where:{id:2}}));
    console.log(content)
    if(err) return ReE(res, "err finding content");

    if(!content) return ReE(res, "content not found with id: "+content_id);
    
    req.content = content;
    next();
}
module.exports.content = content;

// const Company 			    = require('./../models').Company;

// let company = async function (req, res, next) {
//     let company_id, err, company;
//     company_id = req.params.company_id;

//     [err, company] = await to(Company.findOne({where:{id:company_id}}));
//     if(err) return ReE(res, "err finding company");

//     if(!company) return ReE(res, "Company not found with id: "+company_id);
//     let user, users_array, users;
//     user = req.user;
//     [err, users] = await to(company.getUsers());

//     users_array = users.map(obj=>String(obj.user));

//     if(!users_array.includes(String(user._id))) return ReE(res, "User does not have permission to read app with id: "+app_id);

//     req.company = company;
//     next();
// }
// module.exports.company = company;