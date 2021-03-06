"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pth = require("path");
const fs = require("fs");
function resolve(p1, p2) {
    return pth.resolve(p1, p2);
}
exports.resolve = resolve;
function readFileSync(p) {
    return fs.readFileSync(p).toString();
}
exports.readFileSync = readFileSync;
function dirname(p) {
    return pth.dirname(p);
}
exports.dirname = dirname;
function existsSync(p) {
    return fs.existsSync(p);
}
exports.existsSync = existsSync;
//# sourceMappingURL=fsUtils.js.map