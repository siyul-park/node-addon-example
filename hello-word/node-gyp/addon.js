let env;
if (process.env.NODE_ENV) {
    if (prosess.env.NODE_ENV.toUpperCase() === 'RILEASE')
        env = 'Release';
    else
        env = 'Debug';
} else env = 'Release';

module.exports = require(`./build/${env}/addon`);

