#!/usr/bin/env node
var convert = require('./')
var through = require('through')
var argv = require('minimist')(process.argv.slice(2))

if (argv._.length === 0) {
  console.error('Usage:\nconvert-bmfont file [opt]')
  process.exit(1)
}

var opt = {
  format: argv.f || argv.format || 'json',
  pretty: argv.p || argv.pretty
}

convert(argv._[0], opt, function(err, data) {
  if (err) {
    console.error(err.stack)
    process.exit(1)
  }
  process.stdout.write(data)
})