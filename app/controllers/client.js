function apex() {

    var options1 = {
        dataLabels: {
            enabled: true,
            formatter: function(val) {
                return val + "%"
            },
        },
        chart: {
            /*animations: {
              enabled: false
            },*/
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false
                },
                /*export: {
                  csv: {
                    filename: undefined,
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  }
                },*/
                autoSelected: 'zoom'
            },
            type: 'bar'
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        series: [{
            name: 'Answered %',
            data: [69, 59]
        }],
        grid: {
            row: {
                colors: ['#F9FAF0', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        title: {
            text: 'ANSWERING PERCENTAGE',
            align: 'left',
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                fontFamily: undefined,
                color: '#107527'
            }
        },
        xaxis: {
            categories: ["This year 2020", "Last year 2019"]
        },
        fill: {
            colors: ['#107527']
        }
    }

    var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);

    chart1.render();

    var options2 = {
        series: [{
            name: "Total score",
            data: [45, 48, 55, 61, 72, 80]
        }],
        chart: {
            height: '100%',
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'YEARLY DEVELOPMENT 2015-2020',
            align: 'left',
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                fontFamily: undefined,
                color: '#107527'
            }
        },
        grid: {
            row: {
                colors: ['#F9FAF0', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['2015', '2016', '2017', '2018', '2019', '2020'],
        },

        colors: ['#107527']
    };

    var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
    chart2.render();

    var options3 = {
        series: [80, 20],
        chart: {
            height: '100%',
            type: 'donut',
                        toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false
                },
                /*export: {
                  csv: {
                    filename: undefined,
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  }
                },*/
                autoSelected: 'zoom'
            },
        },
        title: {
            text: 'TOTAL SCORE 2020',
            align: 'left',
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                fontFamily: undefined,
                color: '#107527'
            },
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false,
            formatter: function(val) {
                return val;
            },

        },
        colors: ['#107527', '#b5d065']
    };

    var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
    chart3.render();

}