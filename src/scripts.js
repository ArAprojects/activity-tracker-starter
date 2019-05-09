$(document).ready(() => {



  $('.user-photo').click(function() {
    let randomUser = generateRandomUser();
    const $userRepository = new UserRepository(randomUser);
    const $hydrationRepository = new HydrationRepository(randomUser);
    console.log($hydrationRepository);
    console.log($userRepository);
    $('.user-name').html('Name: ' + $userRepository.currentUser.currentUserData.name).fadeOut(1).fadeIn(1000);
    $('.user-address').html('Address: ' + $userRepository.currentUser.currentUserData.address).fadeOut(1).fadeIn(1000);
    $('.user-email').html('Email: ' + $userRepository.currentUser.currentUserData.email).fadeOut(1).fadeIn(1000);
    $('.average-steps').html('User Ave. Daily Steps: ' + $userRepository.returnAveDailySteps()).fadeOut(1).fadeIn(1000);
    $('.find-most-common-state').html('Most Common State For All Users: ' + $userRepository.returnMostCommonState()).fadeOut(1).fadeIn(1000);
    $('.average-daily-ounces').html('User average daily ounces: ' + $hydrationRepository.returnAveDailyOz()).fadeOut(1).fadeIn(1000);
  });
  function generateRandomUser() {
    return Math.floor((Math.random() * 50) + 1);
  }
});
