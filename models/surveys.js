const connect = require('../config/connection.js');

module.exports ={
    view: (param) => {
        return new Promise ((resolve,reject) => {
            var queryString = `SELECT * FROM list WHERE user_id = ${param}`
            connect.query(queryString,[param], function (error,result){
                if (error) {reject(error) } else{
                    resolve(result)
                    }
            })
        })
    }
}