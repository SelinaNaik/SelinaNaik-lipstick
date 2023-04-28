x_position = 0;
y_position = 0;

function preload() {
    lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup() {
canvas = createCanvas(500, 350);
canvas.center();
video = createCapture(VIDEO);
video.size(450,300);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',itposes);
video.hide();
}

function modelLoaded() {
console.log("PoseNet Is Now Working!");
}


function draw() {
image(video, 0, 0, 500, 350);
image(lipstick, x_position, y_position, 100, 70);
}

function capture_photo() {
    save("Filer_Photo.jpg");
}

function itposes(results) {
    if(results.length > 0)
    {
        console.log(results);
        x_position = results[0].pose.nose.x - 25;
        y_position = results[0].pose.nose.y + 27;
        console.log("x position of nose = " + results[0].pose.nose.x);
        console.log("y position of nose = " + results[0].pose.nose.y);
    }
}