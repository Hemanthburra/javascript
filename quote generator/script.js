const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [
    {
        quote:"All that glitters is not gold.",
        person:"William Shakespeare"
    },{
        quote:'Ask not what your country can do for you; ask what you can do for your country.',
        person:'John Kennedy'
    },{
        quote:'No matter how hard or impossible it is, never lose sight of your goal.',
        person:'Monkey D.Luffy'
    },{
        quote:'Only those who have suffered long can see the light within the shadows.',
        person:'Roronoa Zoro'
    },{
        quote:'You can’t see the whole picture until you look at it from the outside.',
        person:'Trafalgar Law'
    },{
        quote:'This hat is the most precious thing I own. It means the world to me. And I want you to take it.',
        person:'Captain Shanks'
    },{
        quote:'Fools who don’t respect the past are likely to repeat it',
        person:'Nico Robin'
    },{
        quote:'You want my treasure, you can have it. I left everything I gathered together in one place. Now, you just have to find it.',
        person:'gold d.roger'
    },{
        quote:`I devoted my entire life to becoming the World's Greatest Swordsman. I made my choice, so I'm the only one who gets to call me stupid.`,
        person:'Roronoa Zoro'
    },{
        quote:`Scars on the back are a swordsman's shame.`,
        person:'Roronoa Zoro'
    },
];

btn.addEventListener("click",function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
})