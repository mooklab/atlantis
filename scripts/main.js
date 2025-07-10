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

const main_swiper = new Swiper('section.main div.swiper', {
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



window.onload = () => {

    /*
    ** Main Screen
    */
    let main_timeline = gsap.timeline()
    let main_text_elements = document.querySelectorAll('section.main div.container > div.text > *, section.main div.swiper-slide-active > div.text > *')

    main_timeline
        .to('header a.logotype', { opacity: 1, duration: 1 })
        .to('header div.menu, header div.contacts', { opacity: 1, duration: 1 }, "-=0.7")
        .to('section.main div.swiper-pagination', { opacity: 1 })
        .to('section.main h1 b', { backgroundPosition: 0 })

    main_text_elements.forEach(element => {
        main_timeline.fromTo(element, { opacity: 0, y: 50, duration: 1 }, { opacity: 1, y: 0, duration: 1 }, "-=0.9")
    })

    main_swiper.on('slideChangeTransitionEnd', () => {
        let active_slide_elements = document.querySelectorAll('section.main div.swiper-slide-active div.text > *')
        let nonactive_slide_elements = document.querySelectorAll('section.main div.swiper-slide:not(.swiper-slide-active) div.text > *')
        nonactive_slide_elements.forEach(element => element.style.opacity = 0)

        gsap.fromTo(active_slide_elements[0], { opacity: 0, y: 50, duration: 1 }, { opacity: 1, y: 0, duration: 1 })
        active_slide_elements.forEach((element, index) => {
            if (index === 0) return
            gsap.fromTo(element, { opacity: 0, y: 50, duration: 1 }, { opacity: 1, y: 0, duration: 1 }, "-=0.9")
        })
    })


    titles = document.querySelectorAll('h2 b, h3 b, h4 b, h5 b')
    titles.forEach(title => {
        gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 75%',
                end: '+=500',
                toggleActions: 'play none none reverse',
                // scrub: true,
            },
            delay: 0.5,
            backgroundPosition: 0
        })
    })

    // setTimeout(function () {

    //     galleries = document.querySelectorAll('section.gallery')
    //     galleries.forEach(gallery => {
    //         gsap.from(gallery, {
    //             scrollTrigger: {
    //                 trigger: gallery,
    //                 start: 'top top',
    //                 end: '+=1000',
    //                 // scrub: true,
    //                 pin: true,
    //                 markers: true
    //             },
    //             scale: 0.9
    //         })
    //     });
    // }, 1000)


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: 'section.gallery',
            scrub: true,
            start: 'top top',
            end: 'bottom top',
            invalidateOnRefresh: true,
            pin: true,
            // markers: true
        }
    })

    tl.addLabel('start').from('section.gallery', { scale: 0.9 }).addLabel('end')

    setTimeout(function () {
        tl.scrollTrigger.refresh()
    }, 500)


    window.addEventListener('resize', () => {
        setTimeout(function () {
            tl.scrollTrigger.refresh()
        }, 500)
    })


    descriptions = document.querySelectorAll('div.description, section.details div.container')
    descriptions.forEach(description => {
        childrens = description.querySelectorAll(':scope > *')
        let gap = 30
        childrens.forEach((child, index) => {
            gsap.fromTo(child, {
                alpha: 0,
                y: gap * index
            }, {
                alpha: 1,
                y: 0,
                scrollTrigger: {
                    trigger: description,
                    start: 'top 75%',
                    end: '+=500',
                    toggleActions: 'play none none reverse'
                }
            })
        })
    })


    article_cards = document.querySelectorAll('div.article_card')
    article_cards.forEach((card, index) => {
        gsap.fromTo(card, {
            y: 50 * (index + 1)
        }, {
            y: 0,
            scrollTrigger: {
                trigger: card,
                start: 'top 75%',
                end: () => "+=" + window.innerHeight,
                toggleActions: 'play none none reverse'
            }
        })
    })


    steps = document.querySelectorAll('div.step')
    steps.forEach((step, index) => {
        gsap.fromTo(step, {
            y: 50 * (index + 1)
        }, {
            y: 0,
            scrollTrigger: {
                trigger: step.parentElement,
                start: 'top 75%',
                end: () => "+=" + window.innerHeight,
                toggleActions: 'play none none reverse'
            }
        })
    })


    persons = document.querySelectorAll('div.person')
    persons.forEach((person, index) => {
        gsap.fromTo(person, {
            y: 50 * (index + 1)
        }, {
            y: 0,
            scrollTrigger: {
                trigger: person.parentElement,
                start: 'top 75%',
                end: () => "+=" + window.innerHeight,
                toggleActions: 'play none none reverse'
            }
        })
    })



    questions = document.querySelectorAll('section.faq div.accordion')
    questions.forEach(question => {
        title = question.querySelector('h4')
        icon = question.querySelector('div.icon')
        trigger = {
            trigger: question,
            start: 'top 85%',
            end: "+=500",
            scrub: true
        }
        gsap.fromTo(title, {
            x: -50
        }, {
            x: 0,
            scrollTrigger: trigger
        })
        gsap.fromTo(icon, {
            x: 50
        }, {
            x: 0,
            scrollTrigger: trigger
        })
    })

    about = document.querySelector('section.about img')
    gsap.fromTo(about, {
        scale: 1.3
    }, {
        scale: 1,
        scrollTrigger: {
            trigger: about,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
        }
    })


    const [line1, line2, line3] = document.querySelectorAll('header div.menu div.icon div')
    gsap.to(line1, {
        y: '-7px',
        delay: 0.5
    })
    gsap.to(line3, {
        y: '7px',
        delay: 0.5
    })


}




const [line1, line2, line3] = document.querySelectorAll('header div.menu div.icon div')
const menuDialog = document.querySelector('section[data-dialog=menu]')
const menuDialogTimeline = gsap.timeline({ paused: true });
const menuIconTimeline = gsap.timeline({ paused: true });

menuDialogTimeline.to(menuDialog, {
    left: 0,
    duration: 0.5
}).from(menuDialog.querySelectorAll('li'), {
    x: -100,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1
})

menuIconTimeline.to(line1, { y: 0 })
menuIconTimeline.to(line3, { y: 0 }, 0)
menuIconTimeline.to(line3, { opacity: 0, duration: 0.1 })
menuIconTimeline.to(line1, { rotate: '45deg', delay: 0.5 }, 0)
menuIconTimeline.to(line2, { rotate: '-45deg', delay: 0.5 }, 0)

const menuOpen = (element) => {
    element.classList.toggle('open')
    element.classList.contains('open') ? menuDialogTimeline.play() : menuDialogTimeline.reverse()
    element.classList.contains('open') ? menuIconTimeline.play() : menuIconTimeline.reverse()
}



const consulting = () => {
    dialog = document.querySelector('section[data-dialog=consulting]')
    dialog.classList.toggle('open')
}