# convert-bmfont

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A command-line tool to convert a [BMFont files](http://www.angelcode.com/products/bmfont/) from one format to another. Defaults to outputting a [JSON representation](https://github.com/Jam3/load-bmfont/blob/master/json-spec.md) for composition with other modules.

Installation:

```sh
npm install convert-bmfont -g
```

Usage:

```sh
#convert text to binary
convert-bmfont Arial.xml --format bin > Arial.bin

#convert to pretty-printed JSON
convert-bmfont Arial.fnt --pretty > Arial.json
```

Currently supported BMFont inputs:

- XML
- ASCII (text)
- binary
- JSON

Currently supported outputs:

- JSON (default)
- binary

### See Also

See [text-modules](https://github.com/mattdesl/text-modules) for related modules.

## Usage

[![NPM](https://nodei.co/npm/convert-bmfont.png)](https://www.npmjs.com/package/convert-bmfont)

### CLI

Prints result to stdout.

```
Usage:
  convert-bmfont input [opt]

Options:
  -f, --format   the format (bin, json) - default json
  -p, --pretty   pretty-print if output is json
```

### API

#### `convert(file, opt, cb)`

Converts the file with the given options, and calls the `cb` on completion.

Opt:

- `format` can be "json", "bin" (or "binary") - default json
- `pretty` whether to pretty-print the JSON output

```js
convert(__dirname+'/Blah.fnt', {
  pretty: true,
  format: 'json'
}, function(err, data) {
  if (err) throw err
  //data may be a Buffer or string
  process.stdout.write(data)
})
```

## License

MIT, see [LICENSE.md](http://github.com/Jam3/convert-bmfont/blob/master/LICENSE.md) for details.
