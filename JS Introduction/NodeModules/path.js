const { ENGINE_METHOD_ALL } = require('constants')
const { endianness } = require('os')
const path = require('path')
// extname is a function that will get the extension
// from the path of the file 
let ext = path.extname('D:\\web dev\\JS Introduction\\NodeModules\\f1.txt')
console.log('extension of the file :- ' ,ext)
// basename is a function that will get you the actual name of a file or a folder from it's path
let basename = path.basename('D:\\web dev\\JS Introduction\\NodeModules\\f1.txt')
console.log('basename of the file :- ' , basename)
console.log(__dirname)// gets you the path of the current directory you are in
console.log(__filename)//gets you the path of the current file you are in
