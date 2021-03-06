const User          = require('../models').User;
const UserDetail    = require('../models').userDetail;
const authService   = require('./../services/AuthService');

module.exports = {
    create: async function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        const body = req.body;
        console.log(body);

        if (!body.unique_key && !body.email && !body.phone) {
            return ReE(res, 'Please enter an email or phone number to register.');
        } else if (!body.password) {
            return ReE(res, 'Please enter a password to register.');
        } else {
            let err, user;

            [err, user] = await to(authService.createUser(body));

            if (err) return ReE(res, err, 422);
            return ReS(res, {message: 'Successfully created new user.', user: user.toWeb(), token: user.getJWT()}, 201);
        }
    },
    login: async function(req, res){
        const body = req.body;
        let err, user;

        [err, user] = await to(authService.authUser(req.body));
        if(err) return ReE(res, err, 422);

        return ReS(res, {token:user.getJWT(), user:user.toWeb()});
    },


    get: async function(req, res){
        res.setHeader('Content-Type', 'application/json');
        let user = req.user;

        return ReS(res, {user:user.toWeb()});
    },

    getUser : async function(req, res){
        res.setHeader('Content-Type', 'application/json');
        console.log(req);
        userId = req.params.user_id;
        console.log(userId);
        [err, user] = await to(
                User.findById(userId,
                    {
                        attributes:
                            {exclude: ['password']},
                        include: [
                            {model:UserDetail,
                            attributes: {exclude: ["UserId", "createdAt", "id"]}}
                        ]
                    },
                )
            );


        if(err){
            console.log(err);
            err ={
                message: 'invalid user id'
            };
            return ReE(res, err);
        }
        return ReS(res, {user: user});
    },
    update : async function(req, res){
        let err, user, data;
        user = req.user;
        data = req.body;
        user.set(data);

        [err, user] = await to(user.save());
        if(err){
            if(err.message=='Validation error') err = 'The email address or phone number is already in use';
            return ReE(res, err);
        }
        return ReS(res, {message :'Updated User: '+user.email});
    },
    remove : async function(req, res) {
        let user, err;
        user = req.user;

        [err, user] = await to(user.destroy());
        if (err) return ReE(res, 'error occured trying to delete user');

        return ReS(res, {message: 'Deleted User'}, 204);
    }
};
