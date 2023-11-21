const productCategories = ['Guitar', 'Ukulele', ]



  const ukeItems = ['uke1', 'uke2']
  const guitarItems = ['guitar1', 'guitar2']

document.addEventListener('DOMContentLoaded', () => {

    const guitarHeader = document.querySelector('#guitar-header');
    const ukeHeader = document.querySelector('#ukulele-header');
    const guitarList = document.querySelector('#guitar-list');
    const ukeList = document.querySelector('#ukulele-list');
    
    guitarHeader.addEventListener('click', () => {
        if (guitarHeader.classList.contains('active')) {
            guitarHeader.classList.remove('active');
            guitarList.innerHTML = '';
            guitarList.classList.remove('active');
            
        } else {
            guitarHeader.classList.toggle('active');
            guitarList.classList.toggle('active');
        // Clear existing content
        guitarList.innerHTML = '';
        guitarItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.classList.add('course-item');
            li.style = `--order: ${index}`
            li.textContent = item;
            const img = document.createElement('div');
            li.appendChild(img);
            img.classList.add('img_ctn');
            guitarList.appendChild(li);
            
        });
    }
});

ukeHeader.addEventListener('click', () => {
    if (ukeHeader.classList.contains('active')) {
        ukeHeader.classList.remove('active');
        ukeList.classList.remove('active');
        ukeList.innerHTML = '';
    } else {
        ukeHeader.classList.toggle('active');
        ukeList.classList.toggle('active');
        // Clear existing content
        ukeList.innerHTML = '';
        ukeItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.classList.add('course-item');
            li.style = `--order: ${index}`
            li.textContent = item;
            const img = document.createElement('div');
            li.appendChild(img);
            img.classList.add('img_ctn');
            ukeList.appendChild(li);
            
        });
    }
}
);

var carouselList = document.querySelectorAll('.carousel-dashboard');

// Collecting all rendered products
const productsElement = document.querySelectorAll('.product-element');
// Convert the NodeList to an array
const productsArray = Array.from(productsElement);
const rawArray = productsArray.map((item) => item.textContent.split(';'));
const cleanedProductsArray = rawArray.map((array) => {
    return [...array].map((item) => {
        return item.trim()
    })
});

const productObjectTemplate = {
    id: "",
    title: "",
    url: "",
    description: "",
    thumbnail_url: "",
    created_at: "",
    updated_at: "",
    categories_url: "",
    placeholder: ""
}

const products = cleanedProductsArray.map((array) => {
   const object = {...productObjectTemplate};
   Object.keys(productObjectTemplate).forEach((key, index) => {
       object[key] = array[index];
   });
   return object;
});

console.log(products);

  const ukeItems = products.filter(item => {
    return item.title.match(/uk/i) || item.description.match(/uk/i);
  });
  const guitarItems = products.filter(item => {
    return ukeItems.indexOf(item) === -1;
  });
    const guitarCarouselList = document.querySelectorAll('#guitar_carousel');
    const ukuleleCarouselList = document.querySelectorAll('#ukulele_carousel');

    function appendItems(array, carousel) {
        array.forEach((item, index) => {
            const course = document.createElement('a');
            const heading = document.createElement('h2');
            course.classList.add('course-slide');
            course.style = `--order: ${index}`;
            course.setAttribute('href', item.url);
            course.appendChild(heading);
            heading.textContent = item.description;
            course.style = `background-image: url(${item.thumbnail_url})`
            carousel.appendChild(course);
            course.addEventListener('mouseenter', () => {
                heading.classList.add('hovered');
            })
            course.addEventListener('mouseleave', () => {
                heading.classList.remove('hovered');
            })
            
        })
    }
    
    
    guitarCarouselList.forEach(carousel => appendItems(guitarItems, carousel))
    ukuleleCarouselList.forEach(carousel => appendItems(ukuleleItems, carousel))
    
    // Daily challenges Hover effects
    
    const challenges = document.querySelectorAll(".challenge_item")
        console.log(challenges)
    challenges.forEach(item => {
        const description = item.querySelector(".challenge_description")
            item.addEventListener('mouseenter', () => {
                description.classList.add('hovered');
            })
            item.addEventListener('mouseleave', () => {
                description.classList.remove('hovered');
            })
            
    })


// Initialize the Slick carousel
carouselList.forEach(carousel => {
$(carousel).slick({
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
})
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object

}

);


});




