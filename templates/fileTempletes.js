module.exports = {
  service: (name) => `
  const repository = require("./${name}.repository.js");
  module.exports = {
        create: () => {},
        findById: () => {},
        findAll: () => {},
        updateOne: () => {},
        deleteOne: () => {},
      };`,
  controller: (name) => `
  const service = require("./${name}.service.js");
  module.exports = {
        create: () => {},
        findById: () => {},
        findAll: () => {},
        updateOne: () => {},
        deleteOne: () => {},
    };`,
  routes: (name) => `
  const router = require("express").Router;
  const controller = require("./${name}.controller.js");
  router.get("/", controller.findAll);
  router.get("/:id", controller.findById);
  router.put("/:id", controller.updateOne);
  router.delete("/:id", controller.deleteOne);
  module.exports = router;
  `,
};
