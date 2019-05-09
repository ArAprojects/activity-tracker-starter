$(document).ready(() => {

  $('.user-photo').click(function() {
    const $userRepository = new UserRepository(generateRandomUser());
    console.log($userRepository);
    $('.all-content').fadeToggle();
    $('.user-name').append('Name: ' + $userRepository.currentUser.name);
    $('.user-address').append('Address: ' + $userRepository.currentUser.address);
    $('.user-email').append('Email: ' + $userRepository.currentUser.email);
    $('.user-photo');
    $('.all-content');
    $('.user-data');
    $('.average-steps');
    $('.find-most-common-state');
    $('.average-daily-ounces');
  });
  function generateRandomUser() {
    return Math.floor((Math.random() * 50) + 1);
  }
});
