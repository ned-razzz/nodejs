let http = require('http')
let fs = require('fs')
let url = require('url')
const { log } = require('console')

let app = http.createServer((req, res) => {
    let page_url = req.url
    let query_url = url.parse(req.url, true).query
    
    //Query String Manage
    if (req.url === '/favicon.ico') {
        return res.writeHead(404)
    }

    //page content setting
    let title = undefined
    console.log(query_url.id);
    switch(query_url.id) {
      case undefined:
        title = 'Welcome!'
        break
      case 'html':
        title = 'HTML'
        break
      case 'css':
        title = 'CSS'
        break
      case 'js':
        title = 'JavaScript'
        break
    }
    
    fs.readFile(`content/${query_url.id}.txt`, 'utf8', (err, content) => {
      let desc = content
      console.log(desc);
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
  <p>${desc}</p>
</body>
</html>
`
  //go to certain Page
  res.writeHead(200, {"Content-Type" : "text/html"})
  res.end(template)
    })
})

app.listen(3000)