// Load google charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawFirstChart);
google.charts.setOnLoadCallback(drawSecondChart);
google.charts.setOnLoadCallback(drawThirdChart);

// FIRST CHART
function drawFirstChart() {
  var data = google.visualization.arrayToDataTable([
    ['Seasons', 'Percent of danger'],
    ['Зима', 10],
    ['Пролет', 20],
    ['Лято', 50],
    ['Есен', 30],
  ]);

  // Add properties
  var options = {
    'title': 'Сезони',
    'width': 600,
    'height': 400,
    backgroundColor: 'transparent',
    colors: ['#26CAFF', '#88FE44', '#FE4444', '#F5FF26'],
    is3D: true
  };

  // Display the chart in the html
  var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
  chart.draw(data, options);
}



//SECOND CHART
function drawSecondChart() {
  var data = google.visualization.arrayToDataTable([
    ['Citys', 'Percent of danger'],
    ['Бургас,Силистра,Русе,Ямбол', 50],
    ['Благоевград,Кюстендил,Перник,София', 10],
    ['Видин,Монтана,Враца,Кърджали', 40],

  ]);

  var options = {
    'title': 'Пожароопосност в България',
    'width': 600,
    'height': 400,
    backgroundColor: 'transparent',
    is3D: true,
    colors: ['#FE4444', '#26CAFF', '#F5FF26'],

  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
  chart.draw(data, options);
}


//THIRD CHART
function drawThirdChart() {
  var data = google.visualization.arrayToDataTable([
    ['Citys', 'Percent of danger'],
    ['Карнобат', 20],
    ['Айтос', 20],
    ['Несебър', 10],
    ['Поморие', 10],
    ['Бургас', 20],
    ['Средец', 40],
    ['Малко Търново', 50],
    ['Царево', 50],

  ]);

  var options = {
    'title': 'Пожароопосност в Бургаски регион',
    'width': 600,
    'height': 400,
    backgroundColor: 'transparent',
    is3D: true,
    colors: ['#88FE44', '#88FE44', '#26CAFF', '#26CAFF', '#88FE44', '#F5FF26', '#FE4444', '#FE4444'],
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart3'));
  chart.draw(data, options);
}