const Content = require('../models').Content;

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, content;
    let user = req.user;

    let content_info = req.body;
        content_info.UserId = req.user.id;


    [err, content] = await to(Content.create(content_info));
    if(err) return ReE(res, err, 422);
    content.addCategory(req.body.category)

    let content_json = content.toWeb();
    content_json.users = [{user:user.id}];

    return ReS(res,{content:content_json}, 201);
}
module.exports.create = create;

const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let user = req.user;
    let err, categories;

    [err, contents] = await to(Content.findAll());

    let contents_json =[]
    for( let i in contents){
        let content = contents[i];
        let content_info = content.toWeb();
        contents_json.push(content_info);
    }

    // console.log('c t', categories_json);
    return ReS(res, {contents:contents_json});
}
module.exports.getAll = getAll;

// const getAll = async function(req, res){
//     res.setHeader('Content-Type', 'application/json');
//     let user = req.user;
//     let err, contents;

//     [err, contents] = await to(user.getCompanies({include: [ {association: Company.Users} ] }));

//     let companies_json =[]
//     for( let i in companies){
//         let company = companies[i];
//         let users =  company.Users;
//         let company_info = company.toWeb();
//         let users_info = [];
//         for (let i in users){
//             let user = users[i];
//             // let user_info = user.toJSON();
//             users_info.push({user:user.id});
//         }
//         company_info.users = users_info;
//         companies_json.push(company_info);
//     }

//     console.log('c t', companies_json);
//     return ReS(res, {companies:companies_json});
// }
// module.exports.getAll = getAll;

const get = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let content = req.content;

    return ReS(res, {content:content.toWeb()});
}
module.exports.get = get;

const update = async function(req, res){
    let err, content, data;
    content = req.content;
    data = req.body;
    content.set(data);

    [err, content] = await to(content.save());
    if(err){
        return ReE(res, err);
    }
    return ReS(res, {content:content.toWeb()});
}
module.exports.update = update;

const remove = async function(req, res){
    let company, err;
    company = req.company;

    [err, company] = await to(company.destroy());
    if(err) return ReE(res, 'error occured trying to delete the company');

    return ReS(res, {message:'Deleted Company'}, 204);
}
module.exports.remove = remove;