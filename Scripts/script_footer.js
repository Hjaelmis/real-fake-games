/*Calculates values and rotates footer links.*/
const links = document.getElementsByClassName('footer_link');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', function() {
        var randomDegree = Math.floor(Math.random() * 21) - 10;
        this.style.transform = 'rotate(' + randomDegree + 'deg)';
    });
    links[i].addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0deg)';
    });
}