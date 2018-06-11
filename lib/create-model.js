// pour taper du command shell
const shelljs = require('shelljs');
// pour gérer les fichier
const fs = require('fs');
// récupération des config
const config = require('./config.js');

// le chemin vers react-model
const { modelPath } = config;
// vérifie si le dossier existe
const dirExist = fs.existsSync(modelPath);
// récupération du dossier courant
const currentDir = shelljs.pwd().stdout;

// si le dossier n'existe pas
if(!dirExist) {
    console.log('Erreur le dossier n\'existe pas');
// sinon
} else {
    console.log('mise a jour');
    // on entre dans le dossier de react-model
    shelljs.cd(modelPath);
    // on fait un pull pour récupérer la dernière version
    shelljs.exec('git pull');
    console.log('copie des fichiers');
    // on copie les fichier et dossier nécessaires
    shelljs.cp('-n', modelPath + '/*', currentDir);
    shelljs.cp('-n', modelPath + '/.*', currentDir);
    shelljs.cp('-rn', modelPath + '/src', currentDir);
}
