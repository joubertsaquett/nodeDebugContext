# DEBUG
Debug for conditional logs in application!

# Windows CMD
`
// install
npm install

// set debug
set DEBUG=*,-not_this

// run debug by context
set DEBUG=* & node index.js
// or
set DEBUG=api:* & node index.js
// or
set DEBUG=api:multiply & node index.js
`
