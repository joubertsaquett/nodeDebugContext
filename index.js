const debug = require('debug')('api:server');
const app = require('express')();

const { multiply } = require('./multiply');

app.use((request, response, next) => {
    debug(request.query, `request at: ${new Date().toISOString()}`);
    return next();
});

app.get('/', (request, response) => {
    const num1 = Math.floor(Math.random() * 100)
    const num2 = Math.floor(Math.random() * 100)
    const result = multiply(num1, num2);
    return response.send(`${num1} * ${num2} is: ${result}`)
})

app.listen(3000, () => console.log('Listen port 3000'))