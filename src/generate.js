var fs = require("fs");
const template = require("./template");

const srcGeneration = "./src/pages";

fs.mkdirSync(`${srcGeneration}`);

const createExportCode = (el, toLowerCase) =>
  `export { ${el.name} } from ${
    toLowerCase ? `"./${el.name.toLowerCase()}"` : `"./${el.name}"`
  };`;

const getTsxFileBody = (el) =>
  `import React from 'react';

export const ${el.name} : React.FC<{}> = (props) => {
  return <>${el.name}</>
};
`;

const getIndexFileBody = (el) => {
  let body = createExportCode(el);

  if (el.sub) {
    el.sub.forEach((e) => {
      body = body + "\n" + createExportCode(e, true);
    });
  }
  return body;
};

const generate = (temp, path) => {
  temp.forEach((el) => {
    const currPath = path
      ? `${path}/${el.name.toLowerCase()}`
      : `${srcGeneration}/${el.name.toLowerCase()}`;

    fs.mkdir(currPath, function (err) {
      fs.writeFile(
        `${currPath}/${el.name}.${el.ext}`,
        getTsxFileBody(el),
        function (err) {
          if (err) throw err;
        }
      );

      fs.writeFile(
        `${currPath}/index.ts`,
        getIndexFileBody(el),
        function (err) {
          if (err) throw err;
        }
      );

      if (err) throw err;
      console.log(el.name, "Dir is created successfully.");
    });

    if (el.sub) {
      generate(el.sub, currPath);
    }
  });
};

generate(template);
