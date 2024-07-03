// JavaScript source code

var i = 0; //loop count


// cal time
var t = new Date();
var min = t.getMinutes() < 10 ? '0' : '';
var ampm = t.getHours() >= 12 ? 'pm' : 'am';
var hour = t.getHours();
if (t.getHours() > 12) {
     hour -= 12;} 
var d = hour + ":" + min + t.getMinutes() + " " + ampm;
var maxCount = myObj.dialog.length;

var recallow = false;
var recEvent;
var pling = new Audio("media/Pling.mp3");
var downloadLink = new Array();

function startcourse() {
    document.getElementById("startButton").style.visibility = "hidden";
    var time = myObj.dialog[0].time * 1000;
    //Update
    var update = setInterval(playcourse, 3000);
    navigator.mediaDevices.getUserMedia({ audio: true, video: false });

    // check status
    function playcourse() {
        if (i == maxCount) {
            show();
            clearInterval(update);
        }
        if (i < maxCount) {
            var msg = myObj.dialog[i].rolemsg;
            var src = myObj.dialog[i].sndfile;
            var role = myObj.dialog[i].role;
            var roleicon = myObj.dialog[i].roleicon;
            pling.play();
            if (role == "student") {
                addR(msg);
            }
            if (role == "pc") {
                addL(msg, roleicon);
            }
            if (role == "pcR") {
                addLSound(src);
                clearInterval(update);
            }
            if (role == "studentR") {
                hints(msg);
                RecordIcon();
                clearInterval(update);
            }
        }
    }
    function RecordIcon() {
        document.getElementById("mic").style.borderRadius = "5px";
        document.getElementById("mic").style.animation = "alert 1s 3";

    }


    //add the text dialog box.-----------------------------------------
    function addL(word, roleicon) {
        if (roleicon == 'pic') {
            var t = document.createElement('img');
            t.src = word;
        } else {
            var t = document.createTextNode(word);
        }
        var l = document.createElement("LU");
        var pre = document.createElement("pre");
        var timelu = document.createElement("LU");
        var timetext = document.createTextNode(d);
        var p = document.createElement("P");
        l.appendChild(t);
        l.appendChild(timelu);
        timelu.appendChild(timetext);
        timelu.classList.add("time");
        if (roleicon == 'pic') {
            l.classList.add("L2")
        } else {
            l.classList.add("L");
        }
        p.appendChild(l);
        p.id = "line" + i;
        pre.appendChild(p);
        document.getElementById("dialog").appendChild(pre);
        document.getElementById("dialog").scroll(0, document.getElementById("dialog").scrollHeight);
        i++;
    }

    function addR(word) {
        var t = document.createTextNode(word);
        var l = document.createElement("LU");
        var pre = document.createElement("pre");
        var timelu = document.createElement("LU");
        var timetext = document.createTextNode(d);
        var p = document.createElement("P");
        l.appendChild(t);
        l.appendChild(timelu);
        timelu.appendChild(timetext);
        timelu.classList.add("time");
        l.classList.add("R");
        p.appendChild(l);
        p.style.textAlign = "right";
        p.id = "line" + i;
        pre.appendChild(p);
        document.getElementById("dialog").appendChild(pre);
        document.getElementById("dialog").scroll(0, document.getElementById("dialog").scrollHeight);
        i++;
    } 

    //function addRSound(src) {
    //    var audio = new Audio(src);
    //    var iPhoto = document.createElement("img"); //photo icon
    //    iPhoto.src = "st_pic.png";
    //    var iPlay = document.createElement("img"); //play icon
    //    iPlay.src = "playIcon.png";
    //    iPlay.onclick = function () { audio.play(); };
    //    audio.onended = function () { update = setInterval(playcourse, 3000); };
    //    var iBar = document.createElement("img"); //bar icon
    //    iBar.src = "playIcon2.png";
    //    iBar.classList.add("playerBar");
    //    var l = document.createElement("LU");
    //    var pre = document.createElement("p");
    //    var timelu = document.createElement("LU");
    //    var timetext = document.createTextNode(d);
    //    var p = document.createElement("P");
    //    p.style.textAlign = "right";
    //    l.append(iPhoto);
    //    l.appendChild(iPlay);
    //    l.appendChild(iBar);
    //    l.appendChild(timelu);
    //    timelu.appendChild(timetext);
    //    timelu.classList.add("time");
    //    l.classList.add("R");
    //    p.appendChild(l);
    //    p.id = "line" + i;
    //    iPlay.id = "play" + i;
    //    pre.appendChild(p);
    //    document.getElementById("dialog").appendChild(pre);
    //    window.scrollTo(0, document.body.scrollHeight);
    //}

    function addLSound(src) {
        var audio = new Audio(src);
        var current_i = i;
        var iPhoto = document.createElement("img"); //photo icon
        iPhoto.src = "my_pic.png";
        var iPlay = document.createElement("img"); //play icon
        iPlay.src = "playIcon.png";
        iPlay.onclick = function () { audio.play(); };
        audio.onended = function () {
            if (i == current_i) { update = setInterval(playcourse, 3000); i++ } };
        var iBar = document.createElement("img"); //bar icon
        iBar.src = "playIcon2.png";
        iBar.classList.add("playerBar");
        var l = document.createElement("LU");
        var pre = document.createElement("p");
        var timelu = document.createElement("LU");
        var timetext = document.createTextNode(d);
        var p = document.createElement("P");
        p.style.textAlign = "left";
        l.appendChild(iPlay);
        l.appendChild(iBar);
        l.append(iPhoto);
        l.appendChild(timelu);
        timelu.appendChild(timetext);
        timelu.classList.add("time");
        l.classList.add("L");
        p.appendChild(l);
        p.id = "line" + i;
        pre.appendChild(p);
        document.getElementById("dialog").appendChild(pre);
        document.getElementById("dialog").scroll(0, document.getElementById("dialog").scrollHeight);
    }

    function hints(word) {
        word.toString();
        document.getElementById("hints").innerHTML = word;
        //document.getElementById("typemessage").contentEditable = true;
        recEvent = document.getElementById("mic").addEventListener("click", Recording);
    }


    function inputText() {
        var text = document.getElementById("typemessage").textContent;
        if (text != "") {
            //console.log(text);
            //text info
            var t = document.createTextNode(text);
            var l = document.createElement("LU");
            var timelu = document.createElement("LU");
            var timetext = document.createTextNode(d);
            var p = document.createElement("P");
            l.appendChild(t);
            l.appendChild(timelu);
            timelu.appendChild(timetext);
            timelu.classList.add("time");
            l.classList.add("R");
            p.appendChild(l);
            p.style.textAlign = "right";
            document.getElementById("dialog").appendChild(p);
            window.scrollTo(0, document.body.scrollHeight);
            document.getElementById("typemessage").contentEditable = false;
            document.getElementById("typemessage").innerHTML = "";
            answers = true;
        }

    } //not use


    function Recording() {
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then(stream => {
                document.getElementById("mic").className = "stopIcon";
                recEvent = document.getElementById("mic").removeEventListener("click", Recording);
                recEvent = document.getElementById("mic").addEventListener("click", stopR);
                //document.getElementById("action").style.display="none";
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start();

                const audioChunks = [];
                mediaRecorder.addEventListener("dataavailable", event => {
                    audioChunks.push(event.data);
                });
                //checkend of recording
                //var checkend = setInterval(function () { if (recStatus === 1) { stopR(); } }, 100);
                //setInterval(function () { if (recStatus === 1) { clearInterval(checkend); } }, 1000);
                function stopR() {
                    //document.getElementById("action2").style.display="none"; 
                    mediaRecorder.stop();
                    
                    document.getElementById("mic").className = "mic";
                    document.getElementById("mic").style.animation = "";
                    recEvent = document.getElementById("mic").removeEventListener("click", stopR);
                    addRSound();
                    update = setInterval(playcourse, 3000);
                    
                }
                function addRSound() {
                    var iPhoto = document.createElement("img"); //photo icon
                    iPhoto.src = "st_pic.png";
                    var iPlay = document.createElement("img"); //play icon
                    iPlay.src = "playIcon.png";
                    iPlay.onclick = function () { play(); };
                    var iBar = document.createElement("img"); //bar icon
                    iBar.src = "playIcon2.png";
                    iBar.classList.add("playerBar");
                    var l = document.createElement("LU");
                    var pre = document.createElement("p");
                    var timelu = document.createElement("LU");
                    var timetext = document.createTextNode(d);
                    var p = document.createElement("P");
                    p.style.textAlign = "right";
                    l.append(iPhoto);
                    l.appendChild(iPlay);
                    l.appendChild(iBar);
                    l.appendChild(timelu);
                    timelu.appendChild(timetext);
                    timelu.classList.add("time");
                    l.classList.add("R");
                    p.appendChild(l);
                    p.id = "line" + i;
                    iPlay.id = "play" + i;
                    pre.appendChild(p);
                    document.getElementById("dialog").appendChild(pre);
                    document.getElementById("dialog").scroll(0, document.getElementById("dialog").scrollHeight);
                    i++;
                    setTimeout(saveToArray, 500);
                }
                              
                //play
                function play() {
                    const audioBlob = new Blob(audioChunks);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    const audio = new Audio(audioUrl);
                    audio.play();
                   // audio.onended = function () { update = setInterval(playcourse, 3000); };
                }
                // add audio link to array
                function saveToArray() {
                    const audioBlob = new Blob(audioChunks);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    const audio = new Audio(audioUrl);
                    var url = audioUrl;
                    downloadLink.push(url);
                    // audio.onended = function () { update = setInterval(playcourse, 3000); };
                }

                //onReset();
            });
    }
    var voice = "";
    function show() {
        document.getElementById("startButton").style.visibility = "visible";
        document.getElementById("startButton").removeEventListener("click", startcourse);
       voice +=  "Download files</br>";
        for (var i = 0; i < downloadLink.length; i++) {
            voice += "<a href='" + downloadLink[i] + "' download = 'voice " + i + ".wav' a>voice" + i + "</a></br>";
            document.getElementById("startButton").innerHTML = voice;
        }
    }

    function onReset() {
        // 釋放記憶體
        URL.revokeObjectURL(inputVideoURL);
        URL.revokeObjectURL(outputVideoURL);
        outputVideo.src = '';
        outputVideo.controls = false;
        inputVideo.src = '';

        // 重新啟動攝影機
        mediaRecorderSetup();
    }
}




    

