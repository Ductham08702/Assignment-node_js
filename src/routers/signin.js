import User from "../../models/user";

export const signin = async(req, res) => {
    try {
        const user = await new User(req.body).save()
        res.json(user)
    } catch (error) {

    }
}