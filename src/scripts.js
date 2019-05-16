$(document).ready(() => {
$('#sleep-quality-chart').hide()
$('#sleep-amount-line-chart').hide()
$('.widget-area').hide();
$('#steps-today-chart').hide()
$('#comparitive-line-chart').hide()
$('#friends-chart').hide()

  $('.pig').click(function() {
    var randomUserList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
    shuffleArrayRandomly(randomUserList);
    const $userRepository = new UserRepository([randomUserList[0], randomUserList[1], randomUserList[2]]);
    const $hydrationRepository = new HydrationRepository(randomUserList[0]);
    const $sleepRepository = new SleepRepository([randomUserList[0], randomUserList[1], randomUserList[2]]);
    const $activityRepository = new ActivityRepository([randomUserList[0], randomUserList[1], randomUserList[2]]);
    var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('.user-name').html('Name: ' + $userRepository.currentUser.currentUserData.name).fadeOut(1).fadeIn(700);
    $('.user-address').html('Address: ' + $userRepository.currentUser.currentUserData.address).fadeOut(1).fadeIn(700);
    $('.user-email').html('Email: ' + $userRepository.currentUser.currentUserData.email).fadeOut(1).fadeIn(700);
    $('.pig').css('background-color', randomColorChange);
    $('.welcome-message').html('Welcome back ' + $userRepository.currentUser.returnFirstName() + '!').fadeOut(1).fadeIn(700);
    $('.intro-message').html('Below you\'ll find a list of stats curated just for').fadeOut(1).fadeIn(700);
    $('.you').html('You!').fadeOut(1).fadeIn(700);
    $('.you').css('color', randomColorChange);
    $('.widget-area').fadeIn(3000);
    chart.data.datasets[0].backgroundColor[0] = randomColorChange;
    chart.data.datasets[0].data[0] = $userRepository.currentUser.currentUserData.dailyStepGoal;
    chart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    compareChart.data.datasets[0].backgroundColor = randomColorChange;
    compareChart.data.datasets[0].data[0] = $activityRepository.userActivityData.returnMilesWalkedByDate("13/08/2019", $userRepository.currentUser.currentUserData.strideLength)
    compareChart.data.datasets[0].data[1] = $activityRepository.userActivityData.returnMinutesActiveByDate("13/08/2019") / 60;
    compareChart.data.datasets[0].data[2] = $activityRepository.userActivityData.returnFlightsOfStairsByDate("13/08/2019") / 10
    lineChart.data.datasets[0].backgroundColor = randomColorChange;
    lineChart.data.datasets[0].data = $hydrationRepository.userHydrationData.returnWeeklyOz("13/08/2019")
    sleepAmountLineChart.data.datasets[0].backgroundColor = randomColorChange;
    sleepAmountLineChart.data.datasets[0].data = $sleepRepository.userSleepData.returnWeekOfHoursByDate("13/08/2019")
    sleepChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    sleepChart.data.datasets[0].data[0] = $sleepRepository.userSleepData.returnAveDailySleepHours()
    sleepChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    sleepQualityChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    sleepQualityChart.data.datasets[0].data[0] = $sleepRepository.userSleepData.returnAveSleepQual()
    sleepQualityChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    sleepQualityLineChart.data.datasets[0].backgroundColor = randomColorChange;
    sleepQualityLineChart.data.datasets[0].data = $sleepRepository.userSleepData.returnWeekOfQualityByDate("13/08/2019");
    stepsTodayChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    stepsTodayChart.data.datasets[0].data[0] = $activityRepository.userActivityData.returnUserStepsByDate("13/08/2019");
    stepsTodayChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    comparitiveLineChart.data.datasets[0].data = $activityRepository.userActivityData.returnAveWeeklyActivityHours("13/08/2019");
    comparitiveLineChart.data.datasets[1].data = $activityRepository.userActivityData.returnMilesWalkedWeeklyByDate("13/08/2019", $userRepository.currentUser.currentUserData.strideLength);
    comparitiveLineChart.data.datasets[2].data = $activityRepository.userActivityData.returnFlightsOfStairsWeeklyByDate("13/08/2019");
    friendsChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    friendsChart.data.labels[1] = $userRepository.userFriend1.returnFirstName();
    friendsChart.data.labels[2] = $userRepository.userFriend2.returnFirstName();
    friendsChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    friendsChart.data.datasets[0].data[0] = $activityRepository.userActivityData.returnWeeklyStepCount("13/08/2019");
    friendsChart.data.datasets[0].data[1] = $activityRepository.friend1ActivityData.returnWeeklyStepCount("13/08/2019");
    friendsChart.data.datasets[0].data[2] = $activityRepository.friend2ActivityData.returnWeeklyStepCount("13/08/2019");
    compareChart.update();
    chart.update();
    stepsTodayChart.update();
    lineChart.update();
    sleepChart.update();
    sleepQualityChart.update();
    sleepQualityLineChart.update();
    sleepAmountLineChart.update();
    comparitiveLineChart.update();
    friendsChart.update()

  });


    $('.activity').click(function() {
      $('#sleep-chart').toggle()
      $('#sleep-quality-chart').toggle()
  })
    $('.sleep').click(function() {
      $('#sleep-quality-line-chart').toggle()
      $('#sleep-amount-line-chart').toggle()
  })
    $('.user').click(function() {
      $('#bar-chart').toggle()
      $('#steps-today-chart').toggle()
  })
    $('.activity-2').click(function() {
      $('#comparitive-line-chart').toggle()
      $('#compare-chart').toggle()
  })
    $('.hydration').click(function() {
      $('#line-chart').toggle()
      $('#friends-chart').toggle()
  })




  var friendsChart = new Chart(document.getElementById("friends-chart"), {
      type: 'bar',
      data: {
        labels: ["user", "friend1", "friend2"],
        datasets: [
          {
            label: "hi",
            backgroundColor: ["anything", "#606060"],
            borderColor: "white",
            borderWidth: 2,
            data: [2478,6960,5000],
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
          text: 'Step-Goals!',
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

  var chart = new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: ["anything", "Users"],
        datasets: [
          {
            label: "hi",
            backgroundColor: ["anything", "#606060"],
            borderColor: "white",
            borderWidth: 2,
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
          text: 'Step-Goals!',
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

  var stepsTodayChart = new Chart(document.getElementById("steps-today-chart"), {
      type: 'bar',
      data: {
        labels: ["anything", "Users"],
        datasets: [
          {
            label: "hi",
            backgroundColor: ["anything", "#606060"],
            borderColor: "white",
            borderWidth: 2,
            data: [2478,7850],
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
          text: 'Steps-Today!',
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
    labels: ["13/02","13/03","13/04","13/05","13/06","13/07","Today"],
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
          backgroundColor: ["red", "#606060"],
          borderColor: "white",
          borderWidth: 2,
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

var sleepQualityChart = new Chart(document.getElementById("sleep-quality-chart"), {
    type: 'bar',
    data: {
      labels: ["hey", "Users"],
      datasets: [
        {
          label: "hi",
          backgroundColor: ["red", "#606060"],
          borderColor: "white",
          borderWidth: 2,
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

var sleepQualityLineChart = new Chart(document.getElementById("sleep-quality-line-chart"), {
type: 'line',
data: {
  labels: ["13/02","13/03","13/04","13/05","13/06","13/07","Today"],
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
    text: 'Sleep Quality this week!'
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

var sleepAmountLineChart = new Chart(document.getElementById("sleep-amount-line-chart"), {
type: 'line',
data: {
  labels: ["13/02","13/03","13/04","13/05","13/06","13/07","Today"],
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
    text: 'Sleep Amount this week!'
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

var compareChart = new Chart(document.getElementById("compare-chart"), {
    type: 'bar',
    data: {
      labels: ["Miles-walked", "Hours-Active", "flightsOfStairs-in-10's"],
      datasets: [
        {
          label: "Africa",
          backgroundColor: "#3e95cd",
          borderColor: "white",
          borderWidth: 2,
          data: [3,5,8]
        }, {
          label: "Europe",
          borderColor: "white",
          borderWidth: 2,
          backgroundColor: "#606060",
          data: [6.5,2.5,2.6]
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
        text: 'User vs all Users ',
        fontColor: "white",
        fontSize: 18
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

var comparitiveLineChart = new Chart(document.getElementById("comparitive-line-chart"), {
type: 'line',
data: {
  labels: ["13/02","13/03","13/04","13/05","13/06","13/07","Today"],
  datasets: [{
      data: [],
      label: "Hours active",
      borderColor: "red",
      labelColor: "white"
      // fill: true,
      // backgroundColor: "#40E1ECF4",
    }, {
      data: [],
      label: "Miles walked",
      borderColor: "blue",
      fontColor: "white"
      // fill: true,
      // backgroundColor: "#00E1ECF4",
    },
    {
      data: [],
      label: "Stair-flights in 10s",
      borderColor: "white",
      fontColor: "white"
      // fill: true,
      // backgroundColor: "#00e3CF4",
    }
  ]
},
options: {
  responsive: false,
  maintainAspectRatio: false,
  legend: {
    labels: {
      fontColor: 'white',
      fontSize: 14
    }
  },
  title: {
    padding: 20,
    fontColor: "white",
    fontSize: 18,
    display: true,
    text: 'Sleep Amount this week!'
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


  function generateRandomUser() {
    return Math.floor((Math.random() * 50) + 1);
  };

});
