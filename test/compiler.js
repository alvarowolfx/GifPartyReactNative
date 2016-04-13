/**
 * Created by alvaroviebrantz on 05/03/16.
 */

var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var origJs = require.extensions['.js'];

/* Compile with babel node modules published in es6 */
var listOfEs6Modules = ['react-native-router-flux','react-native-tabs', 'react-native-gifted-spinner', 'react-native-vector-icons'];

function compile(module, filename) {
    var src = fs.readFileSync(filename, 'utf8');
    var output = babel.transform(src, {
        filename: filename
    }).code;

    return module._compile(output, filename);
}

require.extensions['.js'] = function (module, filename) {

    for (var i = 0; i <= listOfEs6Modules.length; i++){
        var moduleName = listOfEs6Modules[i];
        if (filename.indexOf(moduleName) >= 0) {
            return compile(module, filename);
        }
    }
    if (filename.indexOf('node_modules/') >= 0) {
        return (origJs || require.extensions['.js'])(module, filename);
    }

    return compile(module, filename);


};