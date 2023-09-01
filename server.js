let http = require('http')
let fs = require('fs')
let url = require('url')

let app = http.createServer((req, res) => {
    let page_url = req.url
    let query_url = url.parse(req.url, true).query
    
    //Query String Manage
    if (page_url === '/') {
        page_url = '/index.html'
    }
    else if (req.url === '/favicon.ico') {
        return res.writeHead(404)
    }

    let title = query_url.id
    let template = `
<!DOCTYPE HTML>
<html>
<head>
  <title>${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="/?id=web">WEB</a></h1>
  <ol>
    <li><a href="/?id=html">HTML</a></li>
    <li><a href="/?id=css">CSS</a></li>
    <li><a href="/?id=js">JavaScript</a></li>
  </ol>
  <h2>${title}</h2>
  <p></p>
</body>
</html>
`

    //go to certain Page
    res.writeHead(200, {"Content-Type" : "text/html"})
    res.end(template)
})

app.listen(3000)