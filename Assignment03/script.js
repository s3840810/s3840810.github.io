/* This will take in elements from an array (in this case, sentences from my story) and print print them in sequential order. Only one sentence will diplay at any given time */
let currentTextSelection = 0;

//current placeholder text reads as "text1", "text2", etc etc. Will exchange for the lines of the story in the final build.
//for testing purposes, it will remain with these placeholders for reference.
//my concern now is that the lines of the story will be longer than the placeholders so I'll need to conisder that when developing the flex grid.
/* Thaat previous message was in week 1 of development, I have now inserted all text from the story.
I've also considered how to space it. e.g. what lines can run on while others end abruptely for narrative effect. */
let textArray = [
    "The ash was the worst part.",
    "It would get stuck in your lungs. Invite a most appalling dry cough.",
    "I would wretch time and time again, acidic sprays of bile coating my chin and dripping down my neck.",
    "Assuming there was even any food to expel.",
    "There often wasn’t.",
    "My diet was bread and water.",
    "It was all my Mother could afford for us.",
    "I can still hear her cries during the night sometimes. Haunting me.",
    "I suppose I shouldn’t complain though, Mr. Rotherfard kept the both of us in his employ.",
    "As far as employers go, he wasn’t that bad. I’d had worse.",
    "At the time, I never knew what mother did for him. She didn’t like to talk about work.",
    "I occupied the assortment of chimneys around his manor. Until I was a teenager, that was.",
    "My mother wept when I got my diagnosis.",
    "I was told it was like I had been breathing from an exhaust pipe for years. They weren’t far off.",
    "That usually meant I had a few years still left in me.",
    "Boys my age came and went. The unforeseen departure of one of the other boys left a void to fill.",
    "So, day by day I swept the chimneys. Up and down the stone tombs that might one day have claimed me.",
    "Until I met her.",
    "She was older than me. Only by about a year, maybe two.",
    "She didn’t have the fortune that I had in recounting one's time on earth.",
    "She loved to read though. We’d sneak out at night together and read Jules Verne.",
    "The markings on each page resembled no more than hieroglyphics, but she taught me how to interpret them.",
    "Each night, little by little, I learned what power the written word held.",
    "How they could take me far, far away from here and observe fortune that I never thought I would see.",
    "20,000 Leagues Under the Sea was my very favourite. I must’ve read it a hundred times.",
    "I loved the ocean, though I’d never seen it for myself.",
    "I had been taken there so many times in Verne’s adventures that it felt like an old friend.",
    "She would clean chimneys like me. She would cough like me.",
    "Each day when I saw her I felt the flurry of a thousand butterflies sweeping through my stomach.",
    "She had consumed my every thought, her sweetness claiming my heart.",
    "I once sketched her looking out the window at the setting sun under the guise of practising my alphabet. I must admit, I captured her likeness remarkably.",
    "If she had known my secret, I fear she may have laughed. So, my secret it remained.",
    "I asked her what her mother did for Mr. Rotherfard but she told me she had no mother.",
    "She had to find work after she outgrew the orphanage. This might’ve been her 4th or 5th employer.",
    "She had this silly little dream to run away and live by the sea in a cottage. I remember thinking that might be nice.",
    "She would yawn with comical volume and cry, 'I’m tired!'",
    "'I am too. We’ve both been tired. Since the day we were born', I would reply.",
    "'Yeah, I’ve just been tired a little longer'",
    "The routine of our pleas concerned me. It was true, I was tired.",
    "Exhausted. Longing. For so many, many things. I would fall asleep thinking of us running away together.",
    "She came to me one night as I was boarding The Nautilus once more. She was excited. A large grin enveloped her face. The same grin she would greet me with every day.",
    "'Let’s get out of here. Let’s find Atlantis. We can live by the sea. Just the two of us!'",
    "Her offer warmed my heart. The butterflies returned. I thought her insane! That world was just a fantasy.",
    "She took my face into her hands and kissed me. I felt liberated. I felt free. We climbed out a window and disappeared into the night.",
    "I now sit here at my table by a small window, looking out at the ocean.",
    "I write this for you, my audience, who have perspired with me through my several publications and have granted me a most fortuitous adulthood.",
    "I do hope this next story about the brave queen who saved her knight will be as touching for you to read as it was for me to compose.",
    "In an hour's time I will take my fishing rod, leave the warmth of my wooden cottage, which I remark took me 5-and-a-half years to construct, and acquire tonight's dinner.",
    "Nowadays, I cook only for one.",
    "But she never left me. She rests outside, 100 paces North from the vegetable garden.",
    "She, too, can watch the sun set on this little world we built for ourselves."
]

let textButton = document.getElementsByClassName("textButton")[0]

textButton.addEventListener("click", changeText);
changeText();

function changeText(){
    textButton.innerHTML = textArray[currentTextSelection]
    currentTextSelection = currentTextSelection +1;
    
}
textButton.addEventListener("click", changeTextColour);

// this will change the text to the next entry in the array
function changeTextColour(){
    textButton.classList.add("textFadeOut");
    /* the next timeouts call the 'move' functon below which determines it's randomised position.
    The function here will call the 'removeClass' function that removes it from the array, now with a timeout 
    so that it fades out, before waiting to move it. */
    setTimeout(removeClass, 1000);
    setTimeout(move, 500);
}

function removeClass(){
   textButton.classList.remove("textFadeOut");
}

function move(){
    randomPosition(textButton);
}

/* this will dictate the parameters of where the text can be randomised in it's position */
function randomPosition(el){
    el.style.position = 'absolute';
    /* console.log here is to test if it was working correctly */
    console.log(getRandomFloatRange(0, 100));
    el.style.left = getRandomFloatRange(0, window.innerWidth - el.offsetWidth) +"px";
    el.style.top = getRandomFloatRange(0, window.innerHeight - el.offsetHeight) +"px";
}

/* this determines the math behind how it's randomised as that the text isn't placed outside of the area the user can view.
initially I wrote '(min - max)' and it returned the text in negative position values so we couldn't actually see it.*/
function getRandomFloatRange(min, max){
    return Math.random() * (max - min) + min;
}

/* Add a function here that plays sound on click if you get the time */

let currentFontSelection = 0;

let fontPickerArray = [
    '"font0", cursive',
    '"font1", cursive',
    '"font2", cursive',
    '"font3", cursive',
    '"font4", cursive',
    '"font5", cursive',
    '"font6", cursive',
    '"font7", cursive'
]

function fontPicker(){
    textButton.style.fontFamily = fontPickerArray [0];
    textButton.innerHTML = fontPickerArray[currentFontSelection]
/*     currentFontSelection = currentFontSelection +1; */
/* math int on font array here */
}

function pickRandomFont(){
    randomise(textButton);
}

/* In the end I couldn't get this font picker to work. 
I also tried to get audio to play but couldn't get that to work. 
Thankfully these features were part of my 'want' rather than my 'need', so 
the module here works as designed. If I had more coding literacy these would've been easy
additions to my code. Unfortunately I'm not as confident withh this yet. */