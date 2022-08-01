"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
(0, node_fetch_1["default"])('./data.json').then(function (res) {
    console.log(res);
});
