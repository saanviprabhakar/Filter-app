
noseX=0;
noseY=0;
function preload()
{
nose=loadImage('Hi.png');
}

function setup()
{
canvas= createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

PoseNet= ml5.poseNet(video, modelloaded);
PoseNet.on('pose', got_poses);

}

function modelloaded()
{
console.log("Function has started");
}

function draw()
{
image(video,0,0,300,300)
image(nose,noseX-15,noseY-10,50,35);
}

function take_snapshot()
{
save('Filter_img.png');
}

function got_poses(result)
{
if(result.length > 0)
{
console.log(result);
noseX =  result[0].pose.nose.x-15;
noseY =  result[0].pose.nose.y +10;
console.log("nose x =" + noseX);
console.log("nose y =" + noseY);
}
}