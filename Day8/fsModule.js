const fs=require('fs')

//Reading File
// fs.readFile('demo.txt', 'utf8', (err, data)=>{

//     if(err)
//     {
//         console.log(err)
//     }
//     console.log(data)
//})


//Creating File
// const data1="This is inserted data"
// fs.writeFile('AVCOE.html', data1, (err, data)=>{

//     if(err)
//     {
//         console.log(err)
//     }
//     console.log("File Created Succesfully!")
// })


//Renaming File
// fs.rename('AVCOE.html', 'newAVCOE.html', (err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     console.log("File Renamed Successfully")
// })


//Deleting File
fs.unlink('newAVCOE.html', (err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("File Deleted Successfully")
})


