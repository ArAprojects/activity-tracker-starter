$(document).ready(() => {
$('#sleep-quality-chart').hide()

  $('.pig').click(function() {
    let randomUser = generateRandomUser();
    const $userRepository = new UserRepository(randomUser);
    const $hydrationRepository = new HydrationRepository(randomUser);
    const $sleepRepository = new SleepRepository(randomUser);
    var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('.user-name').html('Name: ' + $userRepository.currentUser.currentUserData.name).fadeOut(1).fadeIn(700);
    $('.user-address').html('Address: ' + $userRepository.currentUser.currentUserData.address).fadeOut(1).fadeIn(700);
    $('.user-email').html('Email: ' + $userRepository.currentUser.currentUserData.email).fadeOut(1).fadeIn(700);
    $('.pig').css('background-color', randomColorChange);
    $('.welcome-message').html('Welcome back ' + $userRepository.currentUser.returnFirstName() + '!').fadeOut(1).fadeIn(700);
    $('.intro-message').html('Below you\'ll find a list of stats curated just for').fadeOut(1).fadeIn(700);
    $('.you').html('You!').fadeOut(1).fadeIn(700);
    $('.you').css('color', randomColorChange);
    $('.specific-widget-area').removeClass('none');
    sleepQualityChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    sleepQualityChart.data.datasets[0].data[0] = $sleepRepository.userSleepData.returnAveSleepQual()
    sleepQualityChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    sleepChart.data.datasets[0].data[0] = $sleepRepository.userSleepData.returnAveDailySleepHours()
    sleepChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    sleepChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    lineChart.data.datasets[0].backgroundColor = randomColorChange;
    lineChart.data.datasets[0].data = $hydrationRepository.userHydrationData.returnWeeklyOz("13/08/2019")
    chart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    chart.data.datasets[0].data[0] = $userRepository.currentUser.currentUserData.dailyStepGoal;
    chart.data.datasets[0].backgroundColor[0] = randomColorChange;
    chart.update();
    lineChart.update();
    sleepChart.update();
    sleepQualityChart.update();
  });


  $('.activity').click(function() {
    $('#sleep-chart').toggle()
    $('#sleep-quality-chart').toggle()
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
    labels: [1500,1600,1700,1750,1800,2000, "Today"],
    datasets: [{
        data: [],
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
          data: [2478,7.6],
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
        text: 'sleep average chart',
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
                  min:6.5,
                  maxTicksLimit: 6,
                  beginAtZero: true
              }
          }]
      }
    }
});

var sleepQualityChart = new Chart(document.getElementById("sleep-quality-chart"), {
    type: 'bar',
    data: {
      labels: ["hey", "Users"],
      datasets: [
        {
          label: "hi",
          backgroundColor: ["red", "grey"],
          data: [2478,3.1],
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
        text: 'Sleep Quality Chart',
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
                  maxTicksLimit: 4,
                  min: 2.7,
                  max: 3.3,
                  stepSize: 0.2,
              }
          }]
      }
    }
});






  function generateRandomUser() {
    return Math.floor((Math.random() * 50) + 1);
  };
});
