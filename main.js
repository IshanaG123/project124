function setup() {
    var canvas =  createCanvas(700,600);

  video = createCapture(VIDEO);
  video.size(600, 300);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);;
}