$(document).ready(() => {

  $('.pig').click(function() {
    let randomUser = generateRandomUser();
    const $userRepository = new UserRepository(randomUser);
    const $hydrationRepository = new HydrationRepository(randomUser);
    var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('.user-name').html('Name: ' + $userRepository.currentUser.currentUserData.name).fadeOut(1).fadeIn(700);
    $('.user-address').html('Address: ' + $userRepository.currentUser.currentUserData.address).fadeOut(1).fadeIn(700);
    $('.user-email').html('Email: ' + $userRepository.currentUser.currentUserData.email).fadeOut(1).fadeIn(700);
    $('.average-steps').html('User Ave. Daily Steps: ' + $userRepository.returnAveDailySteps()).fadeOut(1).fadeIn(700);
    $('.find-most-common-state').html('Most Common State For All Users: ' + $userRepository.returnMostCommonState()).fadeOut(1).fadeIn(700);
    //$('.average-daily-ounces').html('User Average Daily All-time Ounces: ' + $hydrationRepository.returnAveDailyOz()).fadeOut(1).fadeIn(700);
    // $('.specific-daily-ounces').html('User Hydration Ounces Today: ' + $hydrationRepository.returnOzByDate('13/08/2019')).fadeOut(1).fadeIn(700);
    $('.pig').css('background-color', randomColorChange);
    $('.welcome-message').html('Welcome back ' + $userRepository.currentUser.returnFirstName() + '!').fadeOut(1).fadeIn(700);
    $('.intro-message').html('Below you\'ll find a list of stats curated just for').fadeOut(1).fadeIn(700);
    $('.you').html('You!').fadeOut(1).fadeIn(700);
    $('.you').css('color', randomColorChange)
    $('.specific-widget-area').removeClass('none')
  });

  function generateRandomUser() {
    return Math.floor((Math.random() * 50) + 1);
  }

});
