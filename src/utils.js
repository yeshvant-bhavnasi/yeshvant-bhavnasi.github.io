'use strict';

var mysql = require('mysql');

const config = require('../config.json'); 
const _ = require('lodash');

const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];

function getPosts(req,res) {
    try{      
        var connection = mysql.createConnection({
            host     : environmentConfig.databasehost,
            user     : environmentConfig.username,
            password : environmentConfig.password,
            database : environmentConfig.database
        });

        connection.connect();
        connection.query('SELECT * from post', (err, result) => {
            if (err) {
                res.json({err:"error fetching data"});
            }
            result = _.groupBy(result,function(b) { var date = new Date(b.post_date); return date.getFullYear()});
            //result = {years:_.keys(result).sort().reverse(),data:result};
            res.json(result);
        });
        connection.end();
        
    }
    catch(err){
        res.json({err:"error connecting database"})
    }
}

function getPostsUtil() {
    return new Promise(function(resolve, reject) {
        try{      
            var connection = mysql.createConnection({
                host     : environmentConfig.databasehost,
                user     : environmentConfig.username,
                password : environmentConfig.password,
                database : environmentConfig.database
            });
    
            connection.connect();
            connection.query('SELECT * from post', (err, result) => {
                if (err) {
                    reject({err:"error fetching data"});
                }
                result = _.groupBy(result,function(b) { var date = new Date(b.post_date); return date.getFullYear()});
                //result = {years:_.keys(result).sort().reverse(),data:result};
                resolve(result);
            });
            connection.end();
        }
        catch(err){
            reject({err:"error connecting database"})
        }

    });
}

module.exports = {
    getPosts: getPosts,
    getPostsUtil: getPostsUtil
};