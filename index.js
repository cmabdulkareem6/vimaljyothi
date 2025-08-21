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