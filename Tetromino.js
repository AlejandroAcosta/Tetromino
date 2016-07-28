/**
 * Copyright 2016 Alejandro Acosta
 */
"use strict";
var canvas;
var ctx;

var block_width = 10;
var block_height = 10;
var prev_time;
var tetromino_types = [
    'I',
    'J',
    'L',
    'O',
    'S',
    'T',
    'Z',
];

var render = function() {
    var active_tetromino = createTetromino('I');
    active_tetromino.forEach( function(block) {
        block.drawBlock();
    }, this);
    ctx.stroke();
}

function Block(x,y) {
    this.x = x;
    this.y = y;
    this.width = block_width;
    this.height = block_height;

    this.drawBlock = function() {
        ctx.rect( this.x, this.y, this.width, this.height );
    };

    this.getPosition = function() {
        return {
            x: this.x,
            y: this.y,
        };
    };
    this.getDimensions = function() {
        return {
            width: this.width,
            height: this.height,
        };
    };
}

var createTetromino = function( tetro_type ) {
    var blocks;

    switch( tetro_type ) {
        case "I":
            blocks = [
                new Block(10,10),
                new Block(20,10),
                new Block(30,10),
                new Block(40,10),
            ];
        break;
    }

    return blocks;

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

