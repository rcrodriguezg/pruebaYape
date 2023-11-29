const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el nombre del proyecto: ', (projectName) => {
  rl.close();

  const packageJsonPath = path.resolve(__dirname, '..', 'package.json');
  const packageJson = require(packageJsonPath);
  packageJson.name = projectName;

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  console.log('El nombre del proyecto', projectName, 'se ha actualizado en package.json.');
});
