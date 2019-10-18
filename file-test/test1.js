const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname,'data.txt')

// fs.readFile(fileName,(err,data)=>{
//   if(err){
//     console.error(err)
//     return
//   }
//   // data为二进制类型
//   console.log(data.toString())
// })

// const content='这是新写入的内容\n'
// const opt={
//   flag:'a',
// }
// fs.writeFile(fileName,content,opt,(err)=>{
//   if (err) {
//     console.error(err)
//     return
//   }
// })

//判断文件是否存在
fs.exists(fileName,(exist)=>{
  console.log(exist)
})