$(document).ready(() => {

  $('.user-photo').click(function() {
    let randomUser = generateRandomUser();
    const $userRepository = new UserRepository(randomUser);
    const $hydrationRepository = new HydrationRepository(randomUser);
    console.log($hydrationRepository);
    console.log($userRepository);
    $('.user-name').html('Name: ' + $userRepository.currentUser.currentUserData.name).fadeOut(1).fadeIn(700);
    $('.user-address').html('Address: ' + $userRepository.currentUser.currentUserData.address).fadeOut(1).fadeIn(700);
    $('.user-email').html('Email: ' + $userRepository.currentUser.currentUserData.email).fadeOut(1).fadeIn(700);
    $('.average-steps').html('User Ave. Daily Steps: ' + $userRepository.returnAveDailySteps()).fadeOut(1).fadeIn(700);
    $('.find-most-common-state').html('Most Common State For All Users: ' + $userRepository.returnMostCommonState()).fadeOut(1).fadeIn(700);
    $('.average-daily-ounces').html('User Average Daily All-time Ounces: ' + $hydrationRepository.returnAveDailyOz()).fadeOut(1).fadeIn(700 );

    $('.specific-daily-ounces').html('User Hydration Ounces Today: ' + $hydrationRepository.returnOzByDate('13/08/2019')).fadeOut(1).fadeIn(700 );
  });

  function generateRandomUser() {
    return Math.floor((Math.random() * 50) + 1);
  }

});