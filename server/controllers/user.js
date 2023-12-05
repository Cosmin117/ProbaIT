const user = require("../modules/UserModel.js")


exports.register = async (req, res) => {
    const userExists = await users.finOne({
        email: req.body.username, 
    });

    if (userExists) {
        return res.status(403).json({
            error: "Email is already used",
        })
    }

    const user = new User(req.body);
    await user.save();

    res.status(201).json({
        message: "Signup Succesful! Please login to proceed",
    })
};