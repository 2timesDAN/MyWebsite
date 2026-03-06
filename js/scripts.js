// RANDOM TIPS

const tips = [

{
title: "Sleeping with Mouth Tape",

text: "I have been sleeping with mouth tape for about 3 years and it genuinely changed my life. Since I started, I almost never wake up with mucus buildup or a congested nose. It encourages nasal breathing during sleep which can improve oxygen intake, sleep quality, and reduce snoring.",

extra: 'I highly recommend the book <a href="https://www.amazon.com/Breath-New-Science-Lost-Art/dp/0735213615" target="_blank">Breath: The New Science of a Lost Art</a> which explains the science behind breathing and why nasal breathing is so important.'
},

{
title: "Learn Bach Prelude in C Major",

text: "If you want to impress people on the piano without spending years practicing, Bach's Prelude in C Major is an amazing piece to learn. It sounds complex and beautiful but is actually quite approachable even for beginners.",

extra: 'Here is a great tutorial: <br><br><a href="https://www.youtube.com/watch?v=TncQYnTjqlA&pp=ygUhcHJlbHVkZSBpbiBjIG1ham9yIHBpYW5vIHR1dG9yaWFs" target="_blank">Watch the Piano Tutorial Easy video</a>'
},

{
title: "Frequent Flyers: Know EC 261",

text: "If you fly frequently in Europe, knowing EU Regulation EC 261 can save you a lot of money and frustration. When flights are delayed or cancelled, airlines are often legally required to provide compensation, meals, hotels, and alternative transportation.",

extra: "One important tip: when airlines offer you a simple cancellation and refund, be careful. Accepting a refund can waive your rights to additional compensation or rerouting. In many cases you are entitled to an alternative flight to your destination, sometimes even on another airline, plus financial compensation depending on the delay."
}

];

function newTip(){

const random = Math.floor(Math.random()*tips.length);

const tip = tips[random];

document.getElementById("tipTitle").innerText = tip.title;
document.getElementById("tipText").innerText = tip.text;
document.getElementById("tipExtra").innerHTML = tip.extra;

}


// GALLERY

const galleries = {

japan:[
"images/japan/1.JPEG",
"images/japan/2.JPEG"
],

italy:[
"images/italy/1.jpg",
"images/italy/2.jpeg"
],

usa:[
"images/usa/1.jpg",
"images/usa/2.jpg"
],

france:[
"images/france/1.jpg"
],

greece:[
"images/greece/1.jpg"
],

brazil:[
"images/brazil/1.JPEG"
]

};

function showGallery(country){

let container = document.getElementById("gallery-container");

container.innerHTML="";

galleries[country].forEach(img=>{

let image=document.createElement("img");

image.src=img;

container.appendChild(image);

});


}
