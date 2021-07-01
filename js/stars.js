const starOne = document.querySelector('#stars-1');
const starTwo = document.querySelector('#stars-2');
const starThree = document.querySelector('#stars-3');
const starFour = document.querySelector('#stars-4');
const starFive = document.querySelector('#stars-5');
const starSix = document.querySelector('#stars-6');
const starSeven = document.querySelector('#stars-7');
const stareight = document.querySelector('#stars-8');
const starnine = document.querySelector('#stars-9');
const starten = document.querySelector('#stars-10');
const stareleven = document.querySelector('#stars-11');
const startewleve = document.querySelector('#stars-12');


getStars('Dev-YT-Theme', 'Abod1960', starOne);
getStars('Nord-Circular-Calendar-Clock-Display', 'Abod1960', starTwo);
getStars('One-Commander-Dev-Theme', 'Abod1960', starThree);
getStars('T-rex-runner', 'Abod1960', starFour);
getStars('Nordic-Controlled-Clock', 'Abod1960', starFive);
getStars('BetterDiscord-Translucence-Themes', 'Abod1960', starSix);
getStars('Opera-Gx-YT-Theme', 'Abod1960', starSeven);
getStars('Opera-Gx-YT-Theme', 'Abod1960', stareight);
getStars('Opera-Gx-YT-Theme', 'Abod1960', starnine);
getStars('Opera-Gx-YT-Theme', 'Abod1960', starten);
getStars('Opera-Gx-YT-Theme', 'Abod1960', stareleven);
getStars('Opera-Gx-YT-Theme', 'Abod1960', startewleve);


function getStars(repoName, user, projectNumber) {
    let api = `https://api.github.com/repos/Abod1960/${repoName}`;
    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            stars = data.stargazers_count;
        })
        .then(function () {
            projectNumber.innerHTML = `<p class="project__stars" > <i class="project__stars-icon" data-feather="star"></i> ${stars} </p>`;
            feather.replace();
        });
}