const scrollEventController = (sectionsToAnimate,cb) => {
    document.addEventListener('scroll',() => {
        var sections = document.getElementsByClassName('info-container')
        for (let i = 0; i < sections.length; i++) {
            let section = sections[i]
            if (section.offsetTop < window.innerHeight + window.scrollY && sectionsToAnimate.includes(section.id)) {
                cb(section.id)
                console.log('section.id',section.id)
            }
        }
    })
}

export {scrollEventController}