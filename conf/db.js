const env = process.env.NODE_ENV // 环境变量

let MYSQL_CONF // 数据库配置
let REDIS_CONF // redis 配置

if(env === 'development') {

  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'jy199246',
    database: 'myblog'
  }

  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
}

if(env === 'production') { 

  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'jy199246',
    database: 'myblog'
  }

  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}