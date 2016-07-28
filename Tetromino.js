/**
 * Copyright 2016 Alejandro Acosta
 */
"use strict";
var canvas;
var ctx;

var block_width = 10;
var block_height = 10;
var prev_time;

var render = function() {
    
    ctx.rect(10,10,10,10);
    ctx.stroke();
}

var main = function () {

    render();

    requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame ||
    w.webkitRequestAnimationFrame ||
    w.msRequestAnimationFrame ||
    w.mozRequestAnimationFrame;

window.onload = function init()
{
    canvas = document.getElementById("tetromino");
    ctx = canvas.getContext("2d");
    main();
};

