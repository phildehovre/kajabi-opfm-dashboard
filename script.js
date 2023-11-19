const productCategories = ['Guitar', 'Ukulele', ]


const items = [
    'YouTube Ukulele',
    'Just Play Along | Make Your Ukulele Sing',
    'This Course Makes You Feel Like You Are Playing With a Real Band',
    'Simple Steps to Fingerstyle Chords',
    'Spanish Uke Rhythm Masterclass',
    'Rhythm Technique Every Ukulele Player Should Learn',
    'Left Hand Tenor Uke Mastery',
    'Spanish Guitar Rhythm Masterclass',
    'Beautiful Rhythm Techniques that You\'ll Use Over and Over Again',
    'Thumb Slap Uke Masterclass',
    'A Guided Journey to Achieving the N.1 Most Popular Percussive Technique',
    'Thumb Slapping Guitar Masterclass',
    'Spanish Uke Rhythm Masterclass Bartione Series',
    'Rhythm exercises on the beautiful Andalusian cadence. Thaught on baritone ukulele.',
    'Baritone Ukulele Essentials (Grade 1-5)',
    'Baritone ukulele essentials is a comprehensive course designed to help beginners and intermediate players learn the fundamentals of playing the baritone ukulele. Throughout the course, you will learn essential chords, strumming patterns, and fingerstyle techniques that will help you become a proficient player.',
    'Tenor Uke Essentials (Grade 1-5)',
    'Spanish Tenor Ukulele Grade 1-5',
    'YouTube Guitar Tabs',
    'Understanding Basic Chords',
    'Fingerstyle Guitar Basics Masterclass',
    'Baritone Ukulele Fingerstyle Basics',
    'Fingerstyle Tenor Ukulele Basics (Masterclass)',
    'Spanish Tenor Ukulele',
    'Tenor Uke Backing Track Melody',
    'This Course Makes You Feel Like You Are Playing With a Real Band',
    'Ukulele Duets',
    'Spanish Baritone Ukulele',
    'Baritone Uke Backing Track Melody',
    'This Course Makes You Feel Like You Are Playing With a Real Band',
    'OPFM Tenor Uke Daily Challenge',
    'Baritone Duets',
    'Getting to Know Your Ukulele',
    'OPFM Daily Uke Challenge.',
    'Daily Guitar Challenge',
    'Spanish Guitar',
    'Strings & Family Lounge - Strings & Family Lounge',
    'Caged System Guitar'
  ];


  const ukeItems = items.filter(item => {
    return item.match(/uk/i);
  });
  const guitarItems = items.filter(item => {
    return ukeItems.indexOf(item) === -1;
  });

document.addEventListener('DOMContentLoaded', () => {

    const guitarCarousel = document.querySelector('#guitar_carousel');
    const ukuleleCarousel = document.querySelector('#ukulele_carousel');

    function appendItems(array, carousel) {
        array.forEach((item, index) => {
            const div = document.createElement('div');
            div.classList.add('slick-slide');
            div.style = `--order: ${index}`;
            div.textContent = item;
            carousel.appendChild(div);
        })
    }

    appendItems(guitarItems, guitarCarousel);
    appendItems(ukeItems, ukuleleCarousel);
    
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

var carousel = document.querySelectorAll('.carousel');

// Initialize the Slick carousel
$(carousel).slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
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
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
}

);


});



