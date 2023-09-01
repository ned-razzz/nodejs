let http = require('http')
let fs = require('fs')
let app = http.createServer((req, res) => {
    
    //Query String Manage
    let page_url = req.url
    if (page_url === '/') {
        page_url = '/index.html'
    }
    else if (req.url === '/favicon.ico') {
        return res.writeHead(404)
    }

    //go to certain Page
    res.writeHead(200, {"Content-Type" : "text/html"})
    res.end(fs.readFileSync(__dirname + page_url))

})

app.listen(3000)