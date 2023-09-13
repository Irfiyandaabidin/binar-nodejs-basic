const fs = require('fs');
const http = require('http');
const url = require('url')

// const textIn = fs.readFileSync('./txt/read-this.txt', 'utf-8');
// console.log(textIn);

// const textOut = fs.writeFileSync('./txt/output.txt', 'lorem')
// console.log('sukses');

// async
// var dataRead
// fs.readFile('./txt/read-this.txt', 'utf-8', (err, data) => {
//     if(err) {
//         console.log(err)
//     } else {
//         dataRead = data
//         console.log(dataRead)
//     }
// })
// console.log(dataRead)

// fs.readFile('./txt/read-this.txt', 'utf-8', (err, data) => {
//     fs.readFile('./txt/final.txt', 'utf-8', (err, data2) => {
//         fs.writeFileSync('./txt/hasil.txt', `${data}\n${data2}`)
//     })
// })

const server = http.createServer((req, res) => {
    const pathName = req.url
    if(pathName === '/hello') {
        res.end('ini hello')
    } else if(pathName === '/product') {
        res.end(JSON.stringify({
            data: 'ini product'
        }))
    } else if(pathName === '/api') {
        const data = fs.readFileSync(`${__dirname}/dev-data/data.json`)
        res.writeHead(200, {
            'Content-Type' : 'application/json'
        })
        res.end(data)
    } else if(pathName === '/overview') {
        const data = fs.readFileSync(`${__dirname}/templates/overview.html`)
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        res.end(data)
    } 
    else {
        res.writeHead(404, {
            'Content-Type' : 'text/html'
        })
        res.end("<h1>Not Found</h1>");
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('server running in PORT 8000')
})
