$(document).ready(() => {

  let randomColorChange;
  let $userRepository;
  let $hydrationRepository;
  let $sleepRepository;
  let $activityRepository;

  $('#sleep-quality-chart').hide();
  $('#sleep-amount-line-chart').hide();
  $('.widget-area').hide();
  $('#steps-today-chart').hide();
  $('#comparitive-line-chart').hide();
  $('#friends-chart').hide();

  $('.info').click(function() {
    const randomUserList = generateRandomUser();
    $userRepository = new UserRepository([randomUserList[0], randomUserList[1], randomUserList[2]]);
    $hydrationRepository = new HydrationRepository(randomUserList[0]);
    $sleepRepository = new SleepRepository([randomUserList[0], randomUserList[1], randomUserList[2]]);
    $activityRepository = new ActivityRepository([randomUserList[0], randomUserList[1], randomUserList[2]]);
    changeRandomColor();
    transitionHeaderInfo();
    populateFirstNameChart();
    populateCompareChart();
    populateComparitiveLineChart();
    populateFriendsChart();
    populateLineChart();
    populateSleepAmountLineChart();
    populateSleepChart();
    populateSleepQualityChart();
    populatesleepQualityLineChart();
    populateStepsTodayChart();
    updateCharts();
  });

  function changeRandomColor() {
    randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }

  function transitionHeaderInfo() {
    $('.user-name').html('Name: ' + $userRepository.currentUser.currentUserData.name).fadeOut(1).fadeIn(700);
    $('.user-address').html('Address: ' + $userRepository.currentUser.currentUserData.address).fadeOut(1).fadeIn(700);
    $('.user-email').html('Email: ' + $userRepository.currentUser.currentUserData.email).fadeOut(1).fadeIn(700);
    $('.info').css('background-color', randomColorChange);
    $('.welcome-message').html('Welcome back ' + $userRepository.currentUser.returnFirstName() + '!').fadeOut(1).fadeIn(700);
    $('.intro-message').html('Below you\'ll find a list of stats curated just for').fadeOut(1).fadeIn(700);
    $('.you').html('You!').fadeOut(1).fadeIn(700);
    $('.you').css('color', randomColorChange);
    $('.widget-area').fadeIn(3000);
  }

  function populateFirstNameChart() {
    chart.data.datasets[0].backgroundColor[0] = randomColorChange;
    chart.data.datasets[0].data[0] = $userRepository.currentUser.currentUserData.dailyStepGoal;
    chart.data.labels[0] = $userRepository.currentUser.returnFirstName();
  }

  function populateCompareChart() {
    compareChart.data.datasets[0].backgroundColor = randomColorChange;
    compareChart.data.datasets[0].data[0] = $activityRepository.userActivityData.returnMilesWalkedByDate("13/08/2019", $userRepository.currentUser.currentUserData.strideLength);
    compareChart.data.datasets[0].data[1] = $activityRepository.userActivityData.returnMinutesActiveByDate("13/08/2019") / 60;
    compareChart.data.datasets[0].data[2] = $activityRepository.userActivityData.returnFlightsOfStairsByDate("13/08/2019") / 10;
  }

  function populateComparitiveLineChart() {
    comparitiveLineChart.data.datasets[0].data = $activityRepository.userActivityData.returnAveWeeklyActivityHours("13/08/2019");
    comparitiveLineChart.data.datasets[1].data = $activityRepository.userActivityData.returnMilesWalkedWeeklyByDate("13/08/2019", $userRepository.currentUser.currentUserData.strideLength);
    comparitiveLineChart.data.datasets[2].data = $activityRepository.userActivityData.returnFlightsOfStairsWeeklyByDate("13/08/2019");
  }

  function populateFriendsChart() {
    friendsChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    friendsChart.data.datasets[0].data[0] = $activityRepository.userActivityData.returnWeeklyStepCount("13/08/2019");
    friendsChart.data.datasets[0].data[1] = $activityRepository.friend1ActivityData.returnWeeklyStepCount("13/08/2019");
    friendsChart.data.datasets[0].data[2] = $activityRepository.friend2ActivityData.returnWeeklyStepCount("13/08/2019");
    friendsChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    friendsChart.data.labels[1] = $userRepository.userFriend1.returnFirstName();
    friendsChart.data.labels[2] = $userRepository.userFriend2.returnFirstName();
  }

  function populateLineChart() {
    lineChart.data.datasets[0].backgroundColor = randomColorChange;
    lineChart.data.datasets[0].data = $hydrationRepository.userHydrationData.returnWeeklyOz("13/08/2019");
  }

  function populateSleepAmountLineChart() {
    sleepAmountLineChart.data.datasets[0].backgroundColor = randomColorChange;
    sleepAmountLineChart.data.datasets[0].data = $sleepRepository.userSleepData.returnWeekOfHoursByDate("13/08/2019");
  }

  function populateSleepChart() {
    sleepChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    sleepChart.data.datasets[0].data[0] = $sleepRepository.userSleepData.returnAveDailySleepHours();
    sleepChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
  }

  function populateSleepQualityChart() {
    sleepQualityChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    sleepQualityChart.data.datasets[0].data[0] = $sleepRepository.userSleepData.returnAveSleepQual();
    sleepQualityChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
  }

  function populatesleepQualityLineChart() {
    sleepQualityLineChart.data.datasets[0].backgroundColor = randomColorChange;
    sleepQualityLineChart.data.datasets[0].data = $sleepRepository.userSleepData.returnWeekOfQualityByDate("13/08/2019");
  }

  function populateStepsTodayChart() {
    stepsTodayChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    stepsTodayChart.data.datasets[0].data[0] = $activityRepository.userActivityData.returnUserStepsByDate("13/08/2019");
    stepsTodayChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
  }

  function updateCharts() {
    compareChart.update();
    chart.update();
    stepsTodayChart.update();
    lineChart.update();
    sleepChart.update();
    sleepQualityChart.update();
    sleepQualityLineChart.update();
    sleepAmountLineChart.update();
    comparitiveLineChart.update();
    friendsChart.update();
  }

  function generateRandomUser() {
    return [null, null, null].map((userId, index) => {
      return Math.floor((Math.random() * 50) + 1);
    });
  };

    $('.activity').click(function() {
      $('#sleep-chart').toggle()
      $('#sleep-quality-chart').toggle()
  });

    $('.sleep').click(function() {
      $('#sleep-quality-line-chart').toggle()
      $('#sleep-amount-line-chart').toggle()
  });

    $('.user').click(function() {
      $('#bar-chart').toggle()
      $('#steps-today-chart').toggle()
  });

    $('.activity-2').click(function() {
      $('#comparitive-line-chart').toggle()
      $('#compare-chart').toggle()
  });

    $('.hydration').click(function() {
      $('#line-chart').toggle()
      $('#friends-chart').toggle()
  });

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
          text: 'Step Count This Week!',
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

});
