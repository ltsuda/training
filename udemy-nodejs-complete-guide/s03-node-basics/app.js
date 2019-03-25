// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

const http = require('http')

const routes = require('./routes')

const server = http.createServer((routes))

server.listen(3000)


// Client => Requesst => Server => Response => Client