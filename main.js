var canvas = new fabric.Canvas('myCanvas');
var player_x = 10;
var player_y = 10;
var block_img_width = 30;
var block_img_height = 30;
var player_object = "";
var block_img_object = "";

function draw_player() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function draw_object(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_img_object);
    });
}
 draw_player();
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("p and shiftkey are pressed together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (e.shiftKey == true && keypressed == '77') {
        console.log("m and shiftkey are pressed together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (keypressed == '38') {
        console.log("up");
        up();
    }
    if (keypressed == '40') {
        console.log("down");
        down();
    }
    if (keypressed == '37') {
        console.log("left");
        left();
    }
    if (keypressed == '39') {
        console.log("right");
        right();
    }
    if(keypressed=='87'){
        console.log("w");
        draw_object("wall.jpg");
    }
    if(keypressed=='71'){
        console.log("g");
        draw_object("ground.png");
    }
    if(keypressed=='76'){
        console.log("l");
        draw_object("light_green.png");
    }
    if(keypressed=='84'){
        console.log("t");
        draw_object("trunk.jpg");
    }
    if(keypressed=='82'){
        console.log("r");
        draw_object("roof.jpg");
    }
    if(keypressed=='89'){
        console.log("y");
        draw_object("yellow_wall.png");
    }
    if(keypressed=='68'){
        console.log("d");
        draw_object("dark_green.png");
    }
    if(keypressed=='85'){
        console.log("u");
        draw_object("unique.png");
    }
    if(keypressed=='67'){
        console.log("c");
        draw_object("cloug.jpg");
    }

}
function up() {
    if(player_y > 0){
        player_y = player_y - block_img_height ;
        console.log("block image height = " + block_img_height);
        console.log("player_x="+ player_x + " player_y=" + player_y);
        canvas.remove(player_object);
        draw_player();
    }
}
function down() {
    if(player_y < 460){
        player_y = player_y + block_img_height ;
        console.log("block image height = " + block_img_height);
        console.log("player_x="+ player_x + " player_y=" + player_y);
        canvas.remove(player_object);
        draw_player();
    }
}
function right() {
    if(player_x < 850){
        player_x = player_x + block_img_width ;
        console.log("block image width = " + block_img_width);
        console.log("player_x="+ player_x + " player_y=" + player_y);
        canvas.remove(player_object);
        draw_player();
    }
}
function left() {
    if(player_x > 0){
        player_x = player_x - block_img_width ;
        console.log("block image width = " + block_img_width);
        console.log("player_x="+ player_x + " player_y=" + player_y);
        canvas.remove(player_object);
        draw_player();
    }
}
function clearArea() {
    canvas.clear();
}