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
    var tetrominos = [];
    tetrominos = tetrominos.concat(createTetromino('I'));
    tetrominos = tetrominos.concat(createTetromino('J'));
    tetrominos = tetrominos.concat(createTetromino('L'));
    tetrominos = tetrominos.concat(createTetromino('O'));
    tetrominos = tetrominos.concat(createTetromino('S'));
    tetrominos = tetrominos.concat(createTetromino('T'));
    tetrominos = tetrominos.concat(createTetromino('Z'));
    
    tetrominos.forEach( function(block) {
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
        case "J":
            blocks = [
                new Block(20, 30),
                new Block(20, 40),
                new Block(20, 50),
                new Block(10, 50),
            ];
        break;
        case "L":
            blocks = [
                new Block(40, 30),
                new Block(40, 40),
                new Block(40, 50),
                new Block(50, 50),
            ];
        break;
        case "O":
            blocks = [
                new Block(20, 80),
                new Block(20, 70),
                new Block(10, 80),
                new Block(10, 70),
            ];
        break;
        case "S":
            blocks = [
                new Block(40, 80),
                new Block(50, 80),
                new Block(50, 70),
                new Block(60, 70),
            ];
        break;
        case "T":
            blocks = [
                new Block(20, 100),
                new Block(10, 110),
                new Block(20, 110),
                new Block(30, 110),
            ];
        break;
        case "Z":
            blocks = [
                new Block(50, 100),
                new Block(60, 100),
                new Block(60, 110),
                new Block(70, 110),
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
