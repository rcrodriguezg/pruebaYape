const fs = require('fs');
const path = require('path');
const { Select } = require('enquirer');

const versionTypes = ['hotfix', 'bugfix', 'patch', 'minor', 'major'];

(async function () {
  const prompt = new Select({
    name: 'versionType',
    message: 'Seleccione el tipo de versión:',
    choices: versionTypes,
  });

  const versionType = await prompt.run();

  const packageJsonPath = path.resolve(__dirname, '..', 'package.json');
  const packageJson = require(packageJsonPath);
  const currentVersion = packageJson.version.split('.');

  console.log('Versión actual:', packageJson.version);

  let newVersion;

  switch (versionType) {
    case 'hotfix':
    case 'bugfix':
    case 'patch':
      currentVersion[2] = (parseInt(currentVersion[2]) + 1).toString();
      newVersion = currentVersion.join('.');
      break;
    case 'minor':
      currentVersion[1] = (parseInt(currentVersion[1]) + 1).toString();
      newVersion = currentVersion.join('.');
      break;
    case 'major':
      currentVersion[0] = (parseInt(currentVersion[0]) + 1).toString();
      currentVersion[1] = '0';
      currentVersion[2] = '0';
      newVersion = currentVersion.join('.');
      break;
    default:
      console.log('Tipo de versión no válido.');
      return;
  }

  packageJson.version = newVersion;

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  console.log(`La versión del proyecto se ha actualizado a: ${newVersion}`);
})();
