let envs = {
    dev: {
      host: 'http://192.168.0.1:20087/',
      imgHost: 'http://192.168.0.2:20087/'
    },
    test:{
      host: 'http://192.168.0.1:20086/',
      imgHost: 'http://192.168.0.2:20086/'
    },
    prod: {
      host: 'https://XXXXX.com/',
      imgHost: 'http://image.XXXXX.com/'
    },
  }
  
  module.exports = envs
  