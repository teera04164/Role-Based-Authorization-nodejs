
import mongoose from 'mongoose'

const MONGO_CONFIG = {
    MONGO_DB_URI : `mongodb://rule-auth:rule-auth123@ds061076.mlab.com:61076/rule-base-auth`
}

const initialization = () => {
    return new Promise((resolve, reject) => {
        console.log('MONGO_CONFIG.MONGO_DB_URI', MONGO_CONFIG.MONGO_DB_URI)

        mongoose.connect(MONGO_CONFIG.MONGO_DB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            keepAlive: 1,
            connectTimeoutMS: 30000, 
            reconnectTries: 30, 
            reconnectInterval: 5000
        })
        mongoose.Promise = global.Promise;

        mongoose.connection.on('error', (error) => {
            reject(error);
            console.log('Database error: ' + error)
        });

        mongoose.connection.on('connected', () => {
            console.log('Connected to database');
            resolve()
        });
    })
}

export default {
    initialization
}
