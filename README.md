# TypeScript File Parser

[![Build Status](https://travis-ci.org/MaxGorshkov/ts-file-parser.svg?branch=master)](https://travis-ci.org/MaxGorshkov/ts-file-parser)


This repository provides a parser for `*.ts` files. It parses the structure of a file and provides JSON object that contains its declaration.

## Usage

```js
import tsFileStruct = require("ts-file-parser")

var filePath = "./src/typescript-file.ts";
var decls = fs.readFileSync(filePath).toString();
var jsonStructure = tsFileStruct.parseStruct(decls,{},filePath);
```
