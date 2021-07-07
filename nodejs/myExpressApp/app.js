const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('hello, express world'));
app.post('/test', (req, res) => res.send('hello, post'));
app.put('/test/test', (req, res) => res.send('hello, put'));
app.delete('/tmp/tmp.txt', (req, res) => res.send('hello, delete'));

app.use(express.static('public'));
app.use('/static', express.static('public'));
app.use(express.static('test'));
app.listen(port, () => console.log(`Server listening at port ${port}...`));