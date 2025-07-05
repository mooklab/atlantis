class Tabs {

    constructor(section, captions, contents) {
        this.section = section
        this.captions = captions
        this.contents = contents

        this.captions.forEach((caption, index) => {
            caption.addEventListener('click', event => {
                this.resetAll()
                this.onClick(index)
            })
        })
    }

    onClick(index) {
        this.captions[index].classList.add('opened')
        this.contents[index].classList.add('opened')
    }

    resetAll() {
        this.captions.forEach(caption => caption.classList.remove('opened'))
        this.contents.forEach(content => content.classList.remove('opened'))
    }

}

class Accordion {

    constructor(element, button, content, speed) {
        this.element = element
        this.button = button
        this.content = content
        this.speed = speed

        this.button.addEventListener('click', event => this.onClick(event))
        this.defaultSettings()
    }

    defaultSettings() {
        this.content.style.display = 'grid'
        this.content.style.gridTemplateRows = '0fr'
        this.content.style.transition = 'all ' + this.speed + 'ms'
        this.content.children[0].style.overflow = 'hidden'
        this.updateSize()
    }

    onClick(event) {
        this.element.classList.toggle('open')
        this.updateSize()
    }

    updateSize() {
        this.element.classList.contains('open') ? this.content.style.gridTemplateRows = '1fr' : this.content.style.gridTemplateRows = '0fr'
    }

}

new Swiper('section.main div.swiper', {
    touchReleaseOnEdges: true,
    pagination: {
        el: 'section.main div.swiper-pagination',
        clickable: true
    }
})

new Swiper('section.services div.swiper.private', {
    touchReleaseOnEdges: true,
    pagination: {
        el: 'section.services div.swiper.private + div.swiper-pagination',
        clickable: true
    }
})

new Swiper('section.services div.swiper.business', {
    touchReleaseOnEdges: true,
    pagination: {
        el: 'section.services div.swiper.business + div.swiper-pagination',
        clickable: true
    }
})

new Swiper('section.advantages div.swiper', {
    slidesPerView: 1,
    initialSlide: 1,
    centeredSlides: true,
    touchReleaseOnEdges: true,
    pagination: {
        el: 'section.advantages div.swiper-pagination',
        clickable: true
    }
})

new Swiper('section.subservices div.swiper', {
    slidesPerView: 1,
    initialSlide: 0,
    centeredSlides: true,
    touchReleaseOnEdges: true,
    pagination: {
        el: 'section.subservices div.swiper-pagination',
        clickable: true
    }
})

new Swiper('section.content div.swiper', {
    slidesPerView: 1,
    initialSlide: 1,
    centeredSlides: true,
    touchReleaseOnEdges: true,
    pagination: {
        el: 'section.content div.swiper-pagination',
        clickable: true
    }
})

new Swiper('section.team div.swiper', {
    slidesPerView: 1.2,
    spaceBetween: '20px',
    touchReleaseOnEdges: true,
    pagination: {
        el: 'section.team div.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        480: {
            slidesPerView: 1.5
        },
        640: {
            slidesPerView: 2.5
        },
        960: {
            slidesPerView: 3.5
        },
        1280: {
            slidesPerView: 4
        },
    }
})

const articlesSwipers = document.querySelectorAll('section.articles div.swiper')
articlesSwipers.forEach(swiper => {
    new Swiper(swiper, {
        slidesPerView: 1.2,
        spaceBetween: '20px',
        breakpoints: {
            480: {
                slidesPerView: 1.5
            },
            640: {
                slidesPerView: 2.5
            },
            960: {
                slidesPerView: 3
            },
        }
    })
});


tabsSections = document.querySelectorAll('div.tabs')
tabsSections.forEach(tabSection => {
    captions = tabSection.querySelectorAll('.tab_caption')
    contents = tabSection.querySelectorAll('.tab_content')
    tab = new Tabs(tabSection, captions, contents)
})

accordions = document.querySelectorAll('div.accordion')
accordions.forEach(element => {
    button = element.querySelector('div.accordion_caption')
    content = element.querySelector('div.accordion_content')
    new Accordion(element, button, content, 300)
})


// setTimeout(function () {
//     let split = SplitText.create(".split", { type: "chars,words,lines" });
//     gsap.from(split.lines, {
//         rotationX: -100,
//         transformOrigin: "50% 50% -160px",
//         opacity: 0,
//         duration: 0.5,
//         ease: "power3",
//         stagger: 0.05,
//         scrollTrigger: {
//             trigger: ".split",
//             start: "top 80%",
//             end: "top 35%",
//             scrub: true,
//             // markers: true, 
//             // toggleActions: "play play reverse reverse"
//         }
//     });
// }, 1000)


window.onload = () => {
    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: 'section.gallery',
    //         scrub: true,
    //         start: 'top top',
    //         end: 'bottom top',
    //         invalidateOnRefresh: true,
    //         pin: true,
    //         // markers: true
    //     }
    // })

    // tl.addLabel('start').from('section.gallery', { scale: 0.9 }).addLabel('end')

    // setTimeout(function () {
    //     tl.scrollTrigger.refresh()
    // }, 500)


    // window.addEventListener('resize', () => {
    //     setTimeout(function () {
    //         tl.scrollTrigger.refresh()
    //     }, 500)
    // })




    // const split = SplitText.create(".gsap_title", { type: "chars, words" });
    // gsap.from(split.chars, {
    //     x: '-50px',
    //     scrollTrigger: {
    //         trigger: '.gsap_title',
    //         start: 'top 75%',
    //         end: '+=300',
    //         scrub: true,
    //         markers: true
    //     }
    // })
}






// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: 'section.gallery',
//         scrub: true,
//         start: 'top top',
//         end: 'bottom top',
//         invalidateOnRefresh: true,
//         pin: true,
//         // markers: true
//     }
// })

// tl.addLabel('start').from('section.gallery', { scale: 0.9 }).addLabel('end')

// setTimeout(function () {
//     tl.scrollTrigger.refresh()
// }, 500)


// window.addEventListener('resize', () => {
//     setTimeout(function () {
//         tl.scrollTrigger.refresh()
//     }, 500)
// })