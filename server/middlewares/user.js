const user = require('../modules/UserModel')


exports.userById = async (req, res, next) => {
    user.findById(req._id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({error: "User not found"})
        }

        req.user = user;
        next();
    });
}