$(document).ready(() => {

  $('.pig').click(function() {
    var randomUserList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
    shuffleArrayRandomly(randomUserList);
    // let randomUser = generateRandomUser();
    const $userRepository = new UserRepository([randomUserList[0], randomUserList[1], randomUserList[2]]);
    const $hydrationRepository = new HydrationRepository(randomUserList[0]);
    var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('.user-name').html('Name: ' + $userRepository.currentUser.currentUserData.name).fadeOut(1).fadeIn(700);
    $('.user-address').html('Address: ' + $userRepository.currentUser.currentUserData.address).fadeOut(1).fadeIn(700);
    $('.user-email').html('Email: ' + $userRepository.currentUser.currentUserData.email).fadeOut(1).fadeIn(700);
    // $('.average-steps').html('User Ave. Daily Steps: ' + $userRepository.returnAveDailySteps()).fadeOut(1).fadeIn(700);
    // $('.find-most-common-state').html('Most Common State For All Users: ' + $userRepository.returnMostCommonState()).fadeOut(1).fadeIn(700);
    $('.pig').css('background-color', randomColorChange);
    $('.welcome-message').html('Welcome back ' + $userRepository.currentUser.returnFirstName() + '!').fadeOut(1).fadeIn(700);
    $('.intro-message').html('Below you\'ll find a list of stats curated just for').fadeOut(1).fadeIn(700);
    $('.you').html('You!').fadeOut(1).fadeIn(700);
    $('.you').css('color', randomColorChange);
    $('.specific-widget-area').removeClass('none');
    sleepChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    sleepChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    lineChart.data.datasets[0].backgroundColor = randomColorChange;
    chart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    chart.data.datasets[0].data[0] = $userRepository.currentUser.currentUserData.dailyStepGoal;
    chart.data.datasets[0].backgroundColor[0] = randomColorChange;
    chart.update();
    lineChart.update();
    sleepChart.update();
  });


  $('.activity').click(function() {
    $('#sleep-chart').toggle()
  })


  var chart = new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: ["anything", "Users"],
        datasets: [
          {
            label: "hi",
            backgroundColor: ["anything", "grey"],
            data: [2478,6960],
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        title: {
          padding: 20,
          display: true,
          text: 'User-Goal VS average-user-goal',
          fontColor: "white",
          fontSize: 18
        },
        scales: {
          xAxes: [{
              ticks: {
                  fontColor: "white",
                  fontSize: 16,
                }
              }],
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 16,
                    maxTicksLimit: 6,
                    beginAtZero: true
                }
            }]
        }
      }
  });

  var lineChart = new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999, "Today"],
    datasets: [{
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Water consumed this week",
        borderColor: "red",
        fill: true,
        backgroundColor: "rgba(32, 162, 219, 0.3)",
      }
    ]
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    title: {
      padding: 20,
      fontColor: "white",
      fontSize: 18,
      display: true,
      text: 'Water consumed this week!'
    },
    scales: {
      xAxes: [{
          ticks: {
              maxTicksLimit: 7,
              fontColor: "white",
              fontSize: 14,
            }
          }],
        yAxes: [{
            ticks: {
                fontColor: "white",
                fontSize: 14,
                beginAtZero: true
            }
        }]
    }
  }
});

var sleepChart = new Chart(document.getElementById("sleep-chart"), {
    type: 'bar',
    data: {
      labels: ["hey", "Users"],
      datasets: [
        {
          label: "hi",
          backgroundColor: ["red", "grey"],
          data: [2478,6960],
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      title: {
        padding: 20,
        display: true,
        text: 'User-Goal VS average-user-goal',
        fontColor: "white",
        fontSize: 18
      },
      scales: {
        xAxes: [{
            ticks: {
                fontColor: "white",
                fontSize: 16,
              }
            }],
          yAxes: [{
              ticks: {
                  fontColor: "white",
                  fontSize: 16,
                  maxTicksLimit: 6,
                  beginAtZero: true
              }
          }]
      }
    }
});

function shuffleArrayRandomly(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

  // function generateRandomUser() {
  //   return Math.floor((Math.random() * 50) + 1);
  // };
});
