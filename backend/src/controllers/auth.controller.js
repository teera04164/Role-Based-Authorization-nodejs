
import UserModel from '../models/User'
const authentication = (req) => {
    console.log("log =>: ---------------------------------")
    console.log("log =>: authentication -> req", req)
    console.log("log =>: ---------------------------------")
    return 'success'
}

const register = async ({ values: { name, username, password } }) => {
    let result
    let user = await UserModel.findOne({ username })
    if (user) {
        result = { status: 400, message: 'User already exists' }
        return result
    }

    let regisUser = await UserModel.create({ name, username, password })
    if (regisUser)
        result = { status: 200, message: 'Register Success' }
    return result
}

const login = async ({ values: { username, password } }) => {
    let result
    let user = await UserModel.findOne({ username })
    if(!user){
        result = { status: 404, message: 'not found user' }
        return result
    }
    if(user.password != password){
        result = { status: 400, message: 'password invalid' }
        return result
    }
    
    result = { status: 200, message: 'Login success' }
    return result
}

export default {
    authentication,
    register,
    login
}









