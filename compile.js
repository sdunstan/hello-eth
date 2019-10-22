const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxBath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxBath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];