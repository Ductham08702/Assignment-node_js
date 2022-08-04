import User from "../../models/user";

import jwt from "jsonwebtoken";



const signin = async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).exec()

        if (!user) {
            return res.status(400).json({
                messenger: "Email không tồn tại!"
            })
        }

        if (user && user.password != req.body.password) {
            return res.status(400).json({
                messenger: "Không đúng mật khẩu"
            })
        }

        const token = jwt.sign({ id: user._id }, "123456", { expiresIn: 60 * 60 })
        return res.status(200).json({
            token,
            user: {
                id: user._id,
                email: user.email,
            },
        });
    } catch (error) {

    }
}

export default signin