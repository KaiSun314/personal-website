$('.home').show();
$('.about').hide();
$('.projects').hide();

$('.footer').html("© " + new Date().getFullYear() + " Kai Sun");

$('.homeButton').click(event => {
    $('.home').show();
    $('.about').hide();
    $('.projects').hide();
    $('.bottomSection').css('color', 'white');
    $('.github').attr('src', 'images/github.png');
    $('.linkedin').attr('src', 'images/linkedin.png');
});

$('.aboutButton').click(event => {
    $('.home').hide();
    $('.about').show();
    $('.projects').hide();
    $('.bottomSection').css('color', 'white');
    $('.github').attr('src', 'images/github.png');
    $('.linkedin').attr('src', 'images/linkedin.png');
});

$('.resumeButton').click(event => {
    window.open('Resume.pdf');
});

$('.projectsButton').click(event => {
    $('.home').hide();
    $('.about').hide();
    $('.projects').show();
    $('.bottomSection').css('color', 'black');
    $('.github').attr('src', 'images/github_black.png');
    $('.linkedin').attr('src', 'images/linkedin_black.png');
});

$('#chatForClass').click(event => {
    window.open('https://github.com/KaiSun314/ChatForClass');
});

$('#routePlanner').click(event => {
    window.open('https://github.com/KaiSun314/RoutePlanner');
});

$('#findAndSearch').click(event => {
    window.open('https://github.com/KaiSun314/FindandSearch');
});