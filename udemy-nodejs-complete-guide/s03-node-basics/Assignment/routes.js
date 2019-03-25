const fs = require('fs')

const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter a new User name</title><head>')
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    )
    res.write('</html>')
    return res.end()
  }
  if (url === '/users') {
    res.write('<html>')
    res.write('<ul><li>User1</li></ul>')
    res.write('<ul><li>User2</li></ul>')
    res.write('<ul><li>User3</li></ul>')
    res.write('<ul><li>User4</li></ul>')
    res.write('</html>')
    return res.end()
  }
  if (url === '/create-user' && method === 'POST') {
    const body = []
    req.on('data', chunk => {
      console.log(chunk)
      body.push(chunk)
    })
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const users = parsedBody.split('=')[1]
      console.log(users)
      res.writeHead(302, { Location: '/' })
      return res.end()
    })
  }
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>First Page</title><head>')
  res.write('<body>Hello from NodeJS</body>')
  res.write('</html>')
  res.end()
}

module.exports = requestHandler

// module.exports = {
//     // handler: requestHandler,
//     // someText: 'Some text'
// }

// module.exports.handler = requestHandler
// module.exports.someText = 'Some Text'

// exports.handler = requestHandler
// exports.someText = 'Some Text'
