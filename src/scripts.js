$(document).ready(() => {
  const $userPhoto = $('.user-photo');
  const $allContent = $('.all-content');
  const $dataCard = $('.user-data');
  const $box1 = $('.average-steps');
  const $box2 = $('.find-most-common-state');
  const $box3 = $('.average-daily-ounces');
  const $box4 = $('.specific-daily-ounces');
  const $box5 = $('weekly-ounces');
  // const $usersTestData = require('../data/users-test-data');




  $userPhoto.click(function() {
    const $userRepository = new UserRepository(generateRandomUser());
    console.log($userRepository);
    // $('.all-content').toggleClass('hidden');
    $('.user-name').append('Name: ' + userRepository.currentUser.name);
    $('.user-address').append('Address: ' + user.userData.address);
    $('.user-email').append('Email: ' + user.userData.email);
  });
  function generateRandomUser() {
    return Math.floor((Math.random() * 50) + 1);
  }
});
