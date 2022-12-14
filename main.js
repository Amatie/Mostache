nose_x=0;
nose_y=0;

function preload() {
    clown_nose=loadImage("https://i.postimg.cc/Z5g7C36D/Movember-moustache-on-transparent-background-PNG-removebg-preview.png");
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotposes);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotposes(results) {
    if(results.length > 0){
        console.log(results);
        nose_x= results[0].pose.nose.x;
        nose_y= results[0].pose.nose.y;
        console.log("nose x =" + nose_x);
        console.log("nose y =" +nose_y);
    }
}

function draw() {
    image(video, 0 , 0 ,300, 300);
    image(clown_nose,nose_x-24,nose_y-5,90,70);

  
}

function take_snap() {
    save('myFilterImage.png');
}