const App = require('./app');
const http = require('http');
const config = require('./config');

const PORT = process.env.PORT || 3000;

const app = new App(config);

const server = http.createServer(app.callback());
server.listen(PORT, () => console.info('Server listening at', PORT));
