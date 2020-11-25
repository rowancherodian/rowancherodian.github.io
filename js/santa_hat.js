// Script to help put santas hat on the top right of the table or about me section.

// get table element
var table = document.getElementById('table');

// well known function to get top, right, bottom and left locations of the element 
//relative to the viewport
var rect_table = table.getBoundingClientRect();
//console.log(rect_table.top, rect_table.right, rect_table.bottom, rect_table.left);

// santa hat is hidden, get santa image element and show it
var santa = document.getElementById('santa_hat');
santa.style.display = 'inline';

// get width and height of santa hat image
var width = santa.clientWidth;
var height = santa.clientHeight;

// propose new location based on rendered image size
var x = rect_table.right - width/2;
var y = rect_table.top - height/2;

// set new location of image
santa.style.position = "absolute";
santa.style.top = y+'px';
santa.style.left = x+'px';
