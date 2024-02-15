difference = 0;
leftWristX = 0;
rightWristX = 0;

function preload() {
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log("Pose Net Is Initialized!");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}

function draw() {
    background("grey");
    textSize(difference);
    fill("#FFE787");
    text("Thanu", 50, 400);
}