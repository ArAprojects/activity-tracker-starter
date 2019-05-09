$(document).ready(() => {



  $('.user-photo').click(function() {
    let randomUser = generateRandomUser();
    const $userRepository = new UserRepository(randomUser);
    const $hydrationRepository = new HydrationRepository(randomUser);
    console.log($userRepository);
    console.log($hydrationRepository);
    $('.all-content').fadeIn();
    $('.user-name').html('Name: ' + $userRepository.currentUser.currentUserData.name);
    $('.user-address').html('Address: ' + $userRepository.currentUser.currentUserData.address);
    $('.user-email').html('Email: ' + $userRepository.currentUser.currentUserData.email);
    $('.average-steps').html('User Ave. Daily Steps: ' + $userRepository.returnAveDailySteps());
    $('.find-most-common-state').html('Most Common State For All Users: ' + $userRepository.returnMostCommonState());
    $('.average-daily-ounces').html('User average daily ounces: ' + $hydrationRepository.returnAveDailyOz());
  });
  function generateRandomUser() {
    return Math.floor((Math.random() * 50) + 1);
  }
});
