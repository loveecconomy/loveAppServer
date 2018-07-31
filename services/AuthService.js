const User 			= require('./../models').User;
const validator     = require('validator');


const createUser = async function(userInfo){
    let unique_key, auth_info, err;

    auth_info={};
    auth_info.status='create';

    if(!userInfo.email) TE('An email was not entered.');

    if(validator.isEmail(userInfo.email)){
        auth_info.method = 'email';

        [err, user] = await to(User.create(userInfo));
        if(err) TE('user already exists with that email');

        return user;

    }
}
module.exports.createUser = createUser;

const authUser = async function(userInfo){//returns token
    let auth_info = {};
    auth_info.status = 'login';

    if(!userInfo.email) TE('Please enter an email to login');


    if(!userInfo.password) TE('Please enter a password to login');

    let user;
    if(validator.isEmail(userInfo.email)){
        auth_info.method='email';

        [err, user] = await to(User.findOne({where:{email:userInfo.email}}));
        if(err) TE(err.message);

    }else{
        TE('A valid email was not entered');
    }

    if(!user) TE('Not registered');

    [err, user] = await to(user.comparePassword(userInfo.password));

    if(err) TE(err.message);

    return user;

}
module.exports.authUser = authUser;