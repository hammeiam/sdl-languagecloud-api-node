var Languages = require('./languages.js').Languages;
var Translations = require('./translations.js').Translations;
var Projects = require('./projects.js').Projects;

function LanguageCloudAPI(opts) {
  this._configure(opts);
}

LanguageCloudAPI.prototype._configure = function(opts) {
  this.languages = new Languages(opts);
  this.translations = new Translations(opts);
  this.projects = new Projects(opts);
};

exports.LanguageCloudAPI = LanguageCloudAPI;
exports.Translations = Translations;
exports.Languages = Languages;
exports.Projects = Projects;
