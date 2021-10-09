#!/usr/bin/env node
const { Command } = require("commander"); // include commander in git clone of commander repo
const fs = require("fs");
const program = new Command();

const templates = require("./templates/fileTempletes");

program
  .description("Express Genrator by balshy")
  .argument("<type>", "type of file")
  .argument("<name>", "file name")
  .action(async (type, name) => {
    if (!["controller", "routes", "service", "model", "repository"].includes(type)) {
      return;
    }
    const path = `src/modules/${name}`;
    await createDirIfNotExist(path);
    await createFileIfNotExist(`${path}/${name}.${type}.js`, templates[`${type}`](`${name}`));
  });

const createDirIfNotExist = async (path) => {
  try {
    const isDirExist = await fs.existsSync(path);
    if (!isDirExist) await fs.mkdirSync(path, { recursive: true });
  } catch (error) {
    console.error(error);
  }
};

const createFileIfNotExist = async (filePath, data) => {
  try {
    const isFileExist = await fs.existsSync(filePath);
    if (!isFileExist) await fs.writeFileSync(filePath, data);
  } catch (error) {
    console.error(error);
  }
};

program.parse(process.argv);

// steps:
// create dir if not exist - /src/modules/user - /src/modules/room
//
