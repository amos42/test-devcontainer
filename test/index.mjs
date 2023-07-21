import * as fs from 'fs';

const test = fs.readFileSync('/workspaces/test-devcontainer/test/package.json');
console.log(test.toString());
