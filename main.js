song_status = ""
rightWristX = 0
rightWristY = 0

leftWristX = 0
leftWristY = 0

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(400,400)
    video.hide();
    poseNet = ml5.poseNet(video, modeLoaded)
    poseNet.on("pose", gotPoses)
    }
    
    function draw() {
    image(video,0,0,600,500)

    circle(leftWristX, leftWristY, 20)
    stroke("red")
    fill("black")

    if(scoreleftWrist > 0.2) {
        
        

    }

}
    function preload() {
    song_status = loadSound("harry_potter_hedwigs.mp3")
    }

    

function modeLoaded() {
    console.log("Model is loaded")
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results)

        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y

        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y

        scoreleftWrist = results[0].pose.keypoints[9].score
        scorerightWrist = results[0].pose.keypoints[10].score

    }
     
}

function play() {
    song_status.play();
}