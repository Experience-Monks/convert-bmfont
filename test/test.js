var convert = require('../')
var test = require('tape')
var path = require('path')
var fs = require('fs')
var bufferEqual = require('buffer-equal')
var load = require('load-bmfont')

test('text to json', run('font.fnt', 'json', 'font.json'))
test('xml to json', run('font.xml', 'json', 'font.json'))
test('json to json', run('font.json', 'json', 'font.json'))
test('binary to json', run('font.bin', 'json', 'font.json'))

test('text to binary', run('font.fnt', 'bin', 'font.bin'))
test('xml to binary', run('font.xml', 'bin', 'font.bin'))
test('json to binary', run('font.json', 'bin', 'font.bin'))
test('binary to binary', run('font.bin', 'bin', 'font.bin'))

function run(file, format, expected) {
  return function(t) {
    t.plan(1)
    //get expected result
    var expectedResult = fs.readFileSync(path.join(__dirname, expected))
    convert(path.join(__dirname, file), format, function(err, data) {
      if (err) t.fail(err)
      if (format === 'json')
        t.deepEqual(JSON.parse(data), JSON.parse(expectedResult.toString()), 'matches json')
      else if (format === 'bin') 
        t.equal(bufferEqual(data, expectedResult), true, 'matches binary')
    })
  }
}