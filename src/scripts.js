$(document).ready(() => {
$('#sleep-quality-chart').hide()
$('#sleep-amount-line-chart').hide()
$('.widget-area').hide();
$('#steps-today-chart').hide()
$('#comparitive-line-chart').hide()

  $('.pig').click(function() {
    let randomUser = generateRandomUser();
    const $activityRepository = new ActivityRepository(randomUser)
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
    $('.widget-area').fadeIn(3000);
    compareChart.data.datasets[0].data[2] = $activityRepository.userActivityData.returnflightsOfStairsByDate("13/08/2019") / 10
    compareChart.data.datasets[0].data[0] = $activityRepository.userActivityData.returnMilesWalkedByDate("13/08/2019", $userRepository.currentUser.currentUserData.strideLength)
    compareChart.data.datasets[0].data[1] = $activityRepository.userActivityData.returnMinutesActiveByDate("13/08/2019") / 60;
    sleepAmountLineChart.data.datasets[0].data = $sleepRepository.userSleepData.returnWeekOfHoursByDate("13/08/2019")
    sleepQualityLineChart.data.datasets[0].data = $sleepRepository.userSleepData.returnWeekOfQualityByDate("13/08/2019")
    sleepQualityChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    sleepQualityChart.data.datasets[0].data[0] = $sleepRepository.userSleepData.returnAveSleepQual()
    sleepChart.data.datasets[0].data[0] = $sleepRepository.userSleepData.returnAveDailySleepHours()
    sleepChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    lineChart.data.datasets[0].data = $hydrationRepository.userHydrationData.returnWeeklyOz("13/08/2019")
    chart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    chart.data.datasets[0].data[0] = $userRepository.currentUser.currentUserData.dailyStepGoal;
    stepsTodayChart.data.labels[0] = $userRepository.currentUser.returnFirstName();
    stepsTodayChart.data.datasets[0].data[0] = $activityRepository.userActivityData.returnUserStepsByDate("13/08/2019")
    chart.data.datasets[0].backgroundColor[0] = randomColorChange;
    stepsTodayChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    sleepAmountLineChart.data.datasets[0].backgroundColor = randomColorChange;
    sleepQualityLineChart.data.datasets[0].backgroundColor = randomColorChange;
    sleepQualityChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    sleepChart.data.datasets[0].backgroundColor[0] = randomColorChange;
    lineChart.data.datasets[0].backgroundColor = randomColorChange;
    compareChart.data.datasets[0].backgroundColor = randomColorChange;
    compareChart.update();
    chart.update();
    stepsTodayChart.update();
    lineChart.update();
    sleepChart.update();
    sleepQualityChart.update();
    sleepQualityLineChart.update()
    sleepAmountLineChart.update()
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
  labels: [1500,1600,1700,1750,1800,2000, "Today"],
  datasets: [{
      data: [12, 15, 14, 14, 16],
      label: "Water consumed this week",
      borderColor: "red",
      // fill: true,
      // backgroundColor: "#40E1ECF4",
    }, {
      data: [11, 15, 15, 12, 11],
      label: "Water consumed this week",
      borderColor: "blue",
      // fill: true,
      // backgroundColor: "#00E1ECF4",
    },
    {
      data: [13, 18, 15, 11, 12],
      label: "Water consumed this week",
      borderColor: "black",
      // fill: true,
      // backgroundColor: "#00e3CF4",
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


  function generateRandomUser() {
    return Math.floor((Math.random() * 50) + 1);
  };
});
