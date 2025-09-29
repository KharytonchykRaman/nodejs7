const http = require("http");
const url = require("url");

const PORT = 3000;

const webApp = http.createServer((req,res)=>{
    switch (url.parse().pathname) {
        case '/':
            
            break;
    
        default:
            break;
    }
}).listen(PORT)