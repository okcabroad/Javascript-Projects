const button = document.querySelector('button');

button.addEventListener('click', openWiki);

function openWiki(){
    window.open('https://en.wikipedia.org/wiki/Indian_cuisine', '_blank');
}