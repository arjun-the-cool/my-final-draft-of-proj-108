function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Pj1J8A5zO/model.json', modelReady());
}
function modelReady()
{
    classifier.classify(gotResults);
}
var dog= 0;
var cat= 0;
var lion= 0;
var cow= 0;
function gotResults(error, results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random * 255) +1;
        random_number_g = Math.floor(Math.random * 255) +1;
        random_number_b = Math.floor(Math.random * 255) +1;

        document.getElementById("icanhear").innerHTML= 'I can hear - ' + results[0].label;
        if(results[0].label == "BARK"){
            var dog= dog + 1;
            document.getElementById("numberoftimes").innerHTML= 'times - ' + dog;
        }else if(results[0].label == "MEOW"){
            var cat= cat + 1;
            document.getElementById("numberoftimes").innerHTML= 'times - ' + cat;
        }else if(results[0].label == "MOO"){
            var cow= cow + 1;
            document.getElementById("numberoftimes").innerHTML= 'times - ' + cow;
        }else if(results[0].label == "ROAR"){
            var lion= lion + 1;
            document.getElementById("numberoftimes").innerHTML= 'times - ' + lion;
        }
    }
}