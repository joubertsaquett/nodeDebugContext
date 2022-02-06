# DEBUG by context
## Debug

Debug for conditional logs in application!
Using debug lib, is possible debug by parts application splitted

- Express
- Debug

## Installation
```sh
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
```