// const images = document.querySelector(".img_container img");
// const next = document.querySelector(".next");
// const prev = document.querySelector(".prev");

// // console.log(next,prev);

// let curr_index = 1;
// function show_image(){
//     images.src = `Images/${curr_index}.jpg`;
// }

// next.addEventListener('click',()=>{
//     curr_index++;
//     if (curr_index > 4) curr_index = 1;
//     show_image();
// });

// prev.addEventListener('click',()=>{
//     curr_index--;
//     if (curr_index < 1) curr_index = 4;
//     show_image();
// })

let slides_index = 0;
show_image(slides_index);

function plusfunction(n){
    show_image(slides_index+=n);
    console.log(slides_index);
}

function show_image(n){
    let slides = document.getElementsByClassName("img_container");
    // console.log(slides.length);
    if (n == slides.length) slides_index = 0;
    if (n < 0) slides_index = slides.length-1;
    for (let i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none";
    }
    slides[slides_index].style.display = "block";
}

const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const model = document.querySelector(".model");
open_btn.addEventListener('click',()=>{
    model.style.display = 'block';
})
close_btn.addEventListener('click',()=>{
    model.style.display = 'none';
})


// const faq_qns = document.querySelector(".question-title");

const questions = document.querySelectorAll(".questions-menu");
for (let i = 0 ; i < questions.length ; i++){
    const ans = questions[i].querySelector('.question-ans');
    const open = questions[i].querySelector('.close');
    const close = questions[i].querySelector('.open');
    open.addEventListener('click',()=>{
        open.style.display = 'none';
        ans.style.display = 'block';
        close.style.display = 'block';
    })
    close.addEventListener('click',()=>{
        close.style.display = 'none';
        ans.style.display = 'none';
        open.style.display = 'block';
    })
    console.log(ans.textContent);
}

console.log(questions);

const menu = [
    {
        title: "Apple Smoothie",
        price: 4.5,
        img_path: "Images/1.jpg",
        description: "A refreshing apple smoothie.",
        category: "Shakes"
    },
    {
        title: "Banana Smoothie",
        price: 4.0,
        img_path: "Images/4.jpg",
        description: "A creamy banana smoothie.",
        category: "Shakes"
    },
    {
        title: "Pancakes",
        price: 6.0,
        img_path: "Images/3.jpg",
        description: "Fluffy pancakes with maple syrup.",
        category: "Breakfast"
    },
    {
        title: "Omelette",
        price: 5.5,
        img_path: "Images/1.jpg",
        description: "A classic cheese omelette.",
        category: "Breakfast"
    },
    {
        title: "Caesar Salad",
        price: 7.0,
        img_path: "Images/3.jpg",
        description: "A fresh Caesar salad with croutons.",
        category: "Lunch"
    },
    {
        title: "Grilled Chicken Sandwich",
        price: 8.5,
        img_path: "Images/2.jpg",
        description: "A grilled chicken sandwich with lettuce and tomato.",
        category: "Lunch"
    },
    {
        title: "Mango Shake",
        price: 4.5,
        img_path: "Images/4.jpg",
        description: "A delicious mango shake.",
        category: "Shakes"
    },
    {
        title: "Avocado Toast",
        price: 6.5,
        img_path: "Images/3.jpg",
        description: "Toast topped with fresh avocado.",
        category: "Breakfast"
    },
    {
        title: "Chicken Salad",
        price: 7.5,
        img_path: "Images/2.jpg",
        description: "A healthy chicken salad with mixed greens.",
        category: "Lunch"
    },
    {
        title: "Strawberry Shake",
        price: 4.0,
        img_path: "Images/1.jpg",
        description: "A sweet strawberry shake.",
        category: "Shakes"
    }
];

const sectioncenter = document.querySelector(".section-center");
const filterbtns = document.querySelectorAll(".filterbtns");
filterbtns.forEach(function(btns){
    btns.addEventListener('click',function(e){
        const category = e.target.dataset.id;
        const x = menu.filter(function(item){
            if (item.category == category) return item;
        })
        console.log(x);
        if (category == "all"){
            displayitems(menu);
        }
        else{
            displayitems(x);
        }
    })
})
window.addEventListener('DOMContentLoaded',function(){
    displayitems(menu);
});

// function allcategory(){
//     displayitems(menu);
//     // console.log("hlo");
// };
// function shakes(){
//     let x = menu.filter(function(item){
//         return item.category == "Shakes";
//     })
//     displayitems(x);
// };
// function breakfast(){
//     let x = menu.filter(function(item){
//         return item.category == "Breakfast";
//     })
//     displayitems(x);
// };
// function lunch(){
//     let x = menu.filter(function(item){
//         return item.category == "Lunch";
//     })
//     displayitems(x);
// };

function displayitems(menulist){
    let display_menu = menulist.map(
        function (item){
            return `
            <article class="menu-item">
            <img src="${item.img_path}" class="photo">
            <header>
                <div class="item-info">
                    <h4>${item.title}</h4>
                    <p>$${item.price}</p>
                </div>
            </header>
            <p>${item.description}</p>
        </article>
            `
        }
    )
    // console.log(display_menu.length);
    display_menu = display_menu.join("");
    sectioncenter.innerHTML = display_menu;
}
// console.log(menu);