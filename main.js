function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.sounfClassifier('https://teachablemachine.withgoogle.com/models/DYFvfNg0T/model.json', modelReady);
}

function modeReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        randome_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"

        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');

        if (results[0].label == "Squeaking"){
            img.src = 'GP.gif';
            img1.src = 'Catte.jpg';
            img2.src = 'dogeeee.jpg';
        } 
        else if (results[0].label == "Borking"){
            img.src = 'Guineapig.jpg';
            img1.src = 'DOG.gif';
            img2.src = 'Catte.jpg';
        }
        else if (results[0].label == "Meowing"){
            img.src = 'Guineapig.jpg';
            img1.src = 'dogeeee.jpg';
            img2.src = 'EL-GATO.gif';
        }
        else{
            img.src = 'Catte.jpg';
            img1.src = 'dogeeee.jpg';
            img2.src = 'Catte.jpg';
        }
    }
}