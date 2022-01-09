// Node modules are used to perform different tasks as required

// File System Module-
//we will be reading , writing , deleting files from our script

const fs = require('fs')
const path = require('path')
/*
let content = fs.readFileSync('f1.txt')// readFileSync is a method to read a file
console.log('This is F1 data -> ' + content)

// Writing to a File ! 
// writeFileSync method is used to put(data) in a file
// if the file passed doesnt exist it creates a new file and writes to it
fs.writeFileSync('f1.txt' , 'Helloo from f2')
// append file
// append file sync adds data to the previously written file
// basically it appends a file with new data passed
fs.appendFileSync('f2.txt' , ' This is f2 data' )

// Delete a file by passing it's path
// unlinkSync
fs.unlinkSync('f2.txt')
console.log('File_Removed!!!😁😁👍')
*/
//*   DIRECTORIES  *//

// create
//mkdirSyn is used to create a new directory
//fs.mkdirSync('myDirectory')

// delete
// rmdir is used to delete a directory
//fs.rmdirSync('myDirectory')

// Path😎 :-- 

// To check whether a directory exist or not we can use exist sync method
// If the directory exist the method returns true else false
let doesExist = fs.existsSync('myDirectory')
console.log(doesExist)

// stats of a path(Details of the folder)
// lstat sync provides us with all the statistics of a directory
let statsOfPath = fs.lstatSync('myDirectory')
console.log(statsOfPath)

console.log('isFile ?' , statsOfPath.isFile())
// Is File methtod checks whether it is a file 
console.log('isDirectory?' , statsOfPath.isDirectory())
// is Directory is a method that checks whether a passed file is diretory
// or not

// readdirSyn method is used to check the content of a particular directory
let folderPath = 'D:\\web dev\\JS Introduction\\NodeModules\\myDirectory'
let folderContent = fs.readdirSync(folderPath)
console.log('directory content -> ' + folderContent)

// CopyFiles
// srcFile destPath

let srcFilePath = 'D:\\web dev\\JS Introduction\\NodeModules\\myDirectory\\f3.txt'
let destFolder = 'D:\\web dev\\JS Introduction\\NodeModules\\myDirectory2'
let toBeCopiedFileName = path.basename(srcFilePath)
console.log('directory content -> ' + toBeCopiedFileName)
// basename methods gets actual name of the directory or file
let destPath = path.join(destFolder , toBeCopiedFileName)
console.log(destPath)

fs.copyFileSync(srcFilePath , destPath)
console.log("file copied")


