const settings = require('./properties-parser.js');

const path = "";

var properties = {};
properties["enable-command-block"] = 'es'
properties["gamemode"] = 'sur'
properties["motd"] = '?'
properties["query.port"] = '69'
properties["pvp"] = 'YE'

settings.writeProperties(path, properties)
