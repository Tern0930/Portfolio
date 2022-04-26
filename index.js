const galleryPics = [];
const gallery = document.querySelector('.img-other');

const galleryProj = new Map();
galleryProj.set('source/Rocket_launch.png', {name: 'Rocket launch',
    description: `Used technologies: HTML 5, CSS 3, Native JS.<br><br>
This project was developed during the JetBrains Academy track
     and advanced by adding logic to levers to control rocket trajectory. 
     In this project you are supposed to enter the valid password to access control panel and control the rocket launch system by interacting with levers.<br><br>
The trajectory itself is changed by creating CSS rules and adding them in direct order to the additional CSS file.`});
galleryProj.set('source/To do list.jpg', {name: 'Task list',
    description: `Used technologies: HTML 5, CSS 3, Native JS.<br><br>
This project was developed during the JetBrains Academy track.
     This project is used to track down your tasks and mark them as completed by crossing them out, 
     also you are able to delete them.<br><br>
     The data is stored in local storage so you don't have a need to remain the page opened not to lose your to-do list. 
`});
galleryProj.set('source/Text converter.jpg', {name: 'Case converter',
    description: `Used technologies: HTML 5, CSS 3, Native JS.<br><br>
This project was developed during the JetBrains Academy track.
     It allows the user to convert text to lower, upper, proper, and sentence cases. 
     Also the project allows to download text. 
     The text file is created right on page.`});
galleryProj.set('source/Flashcards.png', {name: 'Flashcards',
    description: `Used technologies: HTML 5, CSS 3.<br><br>
This project was developed during the JetBrains Academy track.
     It is the example of flashcards with 3D animation to remember capitals presented. `});
galleryProj.set('source/TwigSleeping.jpg', {name: 'Portfolio',
    description: `Used technologies: HTML 5, CSS 3, Native JS.<br><br>
     You are on this page now. This is my portfolio for the current day currently in progress.`});
galleryProj.set('source/TwigInBandanna.jpg', {name: '',
    description: `WIP`});

// galleryPics.push('source/TwigSleeping.jpg');
for (const pic of galleryProj.keys()){
    galleryPics.push(pic);
}

const mainProj = document.querySelector('figure');
mainProj.children[0].setAttribute('src', galleryPics[0]);
mainProj.children[1].innerHTML = galleryProj.get(galleryPics[0]).name;

for (let it = 0; it < gallery.children.length; ++it) {
    gallery.children[it].innerHTML = `
        <img src="${galleryPics[it]}" alt=${galleryProj.get(galleryPics[it]).name}><h3>${galleryProj.get(galleryPics[it]).name}</h3>
    `;
    gallery.children[it].addEventListener('click', () => {
        const proj = galleryProj.get(gallery.children[it].firstElementChild.getAttribute('src'));
        mainProj.children[0].setAttribute('src', galleryPics[it]);
        mainProj.children[1].innerHTML = proj.name;
        selectProject(gallery.children[it]);
    });
    gallery.children[it].addEventListener('dblclick', () => {
        mainProj.click();
    })
}


mainProj.addEventListener("click", openWindow);

function openWindow() {
    const popUp = document.querySelector('.window');
    const nav = document.querySelector('nav');

    const mainProj = document.querySelector('figure');
    const popUpProj = document.querySelector('.inner-window');
    const mainProjSrc = mainProj.children[0].getAttribute('src');
    popUpProj.children[0].innerHTML = galleryProj.get(mainProjSrc).name;
    popUpProj.children[1].firstElementChild.setAttribute('src', mainProjSrc);
    popUpProj.children[2].innerHTML = `
            <h2 class="window-name-inner">${galleryProj.get(mainProjSrc).name}</h2>
            <p>
                ${galleryProj.get(mainProjSrc).description}
            </p>
    `;

    popUp.classList.toggle('window-hidden');
    nav.classList.toggle('window-hidden');

    const body = document.querySelector('body');
    body.classList.toggle('overflow-hidden');
}

function selectProject(project) {
    for (it of gallery.children) {
        it.classList.remove('selected');
    }
    project.classList.toggle('selected');
}


