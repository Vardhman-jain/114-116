noseX=0;
noseY=0;
function preload() {
    filter=loadImage('https://i.postimg.cc/HLZxrX3d/mustache.png');
}
function setup() {
    canvas=createCanvas(350, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is initiallived');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x -28;
        noseY=results[0].pose.nose.y -5;
        console.log("nose X = "+ noseX);
        console.log("nose Y = "+ noseY);
        }
}
function draw() {
    image(video, 0, 0, 350, 300);//image function shows the video/image.
    image(filter, noseX, noseY, 60, 30);
}
function take_snapshot() {
    save('give_me_$5.png');
}
