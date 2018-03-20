var img
var h = 50, s = 50, b = 50, a = 50;
var capture; 
var video_1;
var pixel_array = [];
var num =128 
var p = [];
var range = 16;

function setup(){

    createCanvas(1024, 1024);

    frameRate(120);

    for ( var i = 0; i < num; i++ ) {
        var row = []
        for( var j = 0; j < num; j++){
            row[j] = 128
        }
        p[i] = row;
    }

}


var x = 0, y = 0;
var dl = 0;

function draw(){

    for ( var i = 1; i < num; i++){
        for ( var j = 1; j < num; j++){

            p[i][j] = (p[i][j-1]+p[i-1][j]+p[i-1][j-1])/3 + random(-range, range);
            p[i][j] = constrain(p[i][j], 0, 255);
        }
    }

    if( x < num ){
        console.log(x, y, p[x][num-1]);
        stroke(p[x][num-1]);     
        point(x, y); 
        x++;
    }else if( y < num){
        for ( var h = 0 ; h < num ; h++){
            stroke(p[h][num-1]);     
            point(h, y); 
        }
        y++;
    }else if(dl == 0){
        //filter(BLUR);
        var pattern = get(0,0,128,128);
        image(pattern, 0, 0, pattern.width*8, pattern.height*8);
        save('terrain.png');
        dl++;
    }
}


