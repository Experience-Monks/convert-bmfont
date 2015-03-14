var xtend = require('xtend')
var load = require('load-bmfont')
var writeBinary = require('write-bmfont-binary')
var noop = function(){}

module.exports = function(file, opt, cb) {
  if (typeof opt === 'string')
    opt = { format: opt }
  else if (!opt)
    opt = {}
  
  cb = typeof cb === 'function' ? cb : noop
  var format = (opt.format || 'json').toLowerCase()
  var binary = (format === 'binary' || format === 'bin')
  var pretty = opt.pretty
  load({
    uri: file,
    binary: binary
  }, function(err, font) {
    if (err) 
      return cb(err)

    if (binary)
      cb(null, writeBinary(font))
    else if (format === 'json')
      cb(null, JSON.stringify(font, undefined, pretty ? 2 : undefined))
    else
      cb(new Error('format not supported: '+format))
  })
}