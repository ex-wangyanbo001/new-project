module.exports = { 
    plugins: { 
      'autoprefixer': {browsers: 'last 5 version'} ,
      "postcss-px2rem-exclude": {
        remUnit: 75,
        exclude: /node_modules|folder_name/i   // 忽略node_modules目录下的文件
    }
    } 
  }