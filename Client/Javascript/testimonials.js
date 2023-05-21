const glody = './Assets/glody.jpg'
const jemy = './Assets/jemy.jpg'
const chris = './Assets/chris.jpg'
const testimonialsContainer = document.querySelector('.swiper-wrapper')


const testimonials = [
    {
        id:1,
        ownerNames:'Chris Evans',
        stars:4,
        description:"The best thing is their delivery speed, the 2 hours is not a scam.",
        image:chris
    },
    {
        id:2,
        ownerNames:'Jemmy Bella',
        stars:3,
        description:"The best food and tasty one in the region,what a Yummy?.",
        image:jemy
    },
    {
        id:3,
        ownerNames:'Glody Jantar',
        stars:5,
        description:"Clean food with coocked with organic groceries, very tasty and healthier.",
        image:glody
    },
    {
        id:4,
        ownerNames:'Glody Jantar',
        stars:1,
        description:"Clean food with coocked with organic groceries, very tasty and healthier.",
        image:glody
    },
    {
        id:5,
        ownerNames:'Glody Jantar',
        stars:2,
        description:"Clean food with coocked with organic groceries, very tasty and healthier.",
        image:glody
    },
    {
        id:6,
        ownerNames:'Glody Jantar',
        stars:0,
        description:"Clean food with coocked with organic groceries, very tasty and healthier.",
        image:glody
    },
]

const displayStars = (starNumber) => {
    const uncheckedStars = 5-starNumber
    let stars = "";
    for (let i=0; i < starNumber; i++) {
        stars +='<i class="fas fa-star"></i>' 
    }
    for (let j=0; j < uncheckedStars; j++) {
        stars +='<i class="fa-regular fa-star"></i>' 
    }

    return stars
}

testimonialsContainer.innerHTML = testimonials.map(testimony => `
    <div class="swiper-slide slide">
        <div class="doublequotes">
            <i class="fa-solid fa-quote-left"></i>
        </div>
        <div class="slide-header">
            <img src=${testimony.image} alt=${testimony.ownerNames} />
            <div class='title'>
                <h4>${testimony.ownerNames}</h4>
                <div class="stars">${displayStars(testimony.stars)}</div>
            </div>
        </div>
        <p>${testimony.description}</p>
    </div>
`).join('')

const swiper = new Swiper('.mySwiper', {
    spaceBetween: 20,
    slidesPerView:1,
    fade:true,
    loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        640: {
            slidesPerView:2,
        },
        768: {
            slidesPerView:3,
        },
        1024: {
            slidesPerView:4,
        },
    }
  });