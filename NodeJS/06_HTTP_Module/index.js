import http from 'http'

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        console.log("you are on home page")
    }else{
        console.log("Error 404")
    }
})

server.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})



// import http from 'http';
// import {fileURLToPath} from 'url';
// import path, {dirname} from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const server = http.createServer((req, res)=>{
//     if(req.url === "/"){
//         console.log("you are on home page")
//     }else{
//         console.log("Error 404")
//     }
// })

// server.listen(3000, ()=>{
//     console.log("server is listening on port 3000")
// })
