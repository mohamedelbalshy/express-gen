# express-gen

### Tool to generate express files in modules structure

```javascript
npm install
sudo npm i -g .
```

now you can execute the command
`express-gen service user`

#### Output

`/src/modules/user/user.service.js`

```javascript
const repository = require("./user.repository.js");
module.exports = {
  create: () => {},
  findById: () => {},
  findAll: () => {},
  updateOne: () => {},
  deleteOne: () => {},
};
```

#### supported file types for now

```javascript
["controller", "routes", "service", "model", "repository"];
```
