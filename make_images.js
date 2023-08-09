const defines = require('./define.json');

// console.log(define);


for (let i = 0; i < defines.length; i++) {
    // console.log(defines[i]);
    const name = defines[i].Name;
    // console.log("cp ./car_images/" + name + "/1.png ./docs/images/"+name +".png");

    console.log("ffmpeg -r 10 -f image2 -i ./car_images/" + name + "/%0d.png   ./docs/video/" + name + ".mp4");
    // ffmpeg -r 1/5 -i img%03d.png -c:v libx264 -vf fps=25 -pix_fmt yuv420p out.mp4

    // ffmpeg -framerate 24 -i ./car_images/Toyota_TS040/%0d.png Project.mp4

    // ffmpeg -framerate 10 -i filename-%03d.jpg output.mp4

}