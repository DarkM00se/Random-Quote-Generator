const quotes=[
    {
        quote: "Relaxing your hair is like being in prison. You're caged in. Your hair rules you. You didn't go running with Curt today because you don't want to sweat out this straightness. You're always battling to make your hair do what it wasn't meant to do.",
        author: "~ Chimamanda Ngozi Adichie"


    },
   { quote:"If the past isn't weighing me down, I could have climbed higher. Who knows what I could have been, a free spirit and a better person, if the memories had set me free. For years, I haven't been able to close the door to the room that keeps pulling me in to my past.",
    author:"~ Fidelis O. Mkparu"},

    {quote:"If life brings to you what you don't like, try and learn to love what life brings to you.",
    author:"~ Kayambila Mpulamasaka"

    },

    {quote:"“Lord I am just another activist in silence. Let my books speak what lacerates deep into my spirit.",
        author:"~ Tapiwanaishe Pamacheche"},


    { quote:"Most people write me off when they see me.They do not know my story.They say I am just an African.They judge me before they get to know me.What they do not know is the pride I have in the blood that runs through my veins,The pride I have in my rich culture and the history of my people;The pride I have in my strong family ties and the deep connection to my community;The pride I have in the African music, African art, and African dance;The pride I have in my name and the meaning behind it.Just as my name has meaning, I too will live my life with meaning.So you think I am nothing?Don’t worry about what I am now,For what I will be, I am gradually becoming.I will raise my head high wherever I goBecause of my African pride,And nobody will take that away from me.",
author:"~ Idowu Koyenikan"
    },
];

//when the page loads the screen runs this function 
window.onload=start;
    function start(){
         getQuote()




}

//function for generating the New quote ,generates onClick button
function getQuote(){

    let quoteSize=quotes.length;//array 
    let randomIndex=Math.floor(Math.random()*quoteSize);//random generator
    let randomQuoteData=quotes[randomIndex];//generates random quote via index
    
    document.getElementById("text").innerText= randomQuoteData.quote;
    document.getElementById("author").innerText= randomQuoteData.author;

}