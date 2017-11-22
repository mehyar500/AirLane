var path = require("path");
var webpack = require("webpack");

module.exports = options => {
  return {
    entry: "./index.js",
    output: {
      filename: "bundle.js"
    },
    module : {
        rules : [
            {
                test : "/\.jsx?$/",
                use : [
                    {
                        loader : "babel-loader",
                        options : {
                            presets : [
                                "react",
                                "es2015"
                            ]
                        }
                    }
                ]
            }
        ]
    }
  };
};