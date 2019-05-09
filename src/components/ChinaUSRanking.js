import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          1954,
          1959,
          1964,
          1969,
          1974,
          1979,
          1984,
          1989,
          1994,
          1999,
          2004,
          2009,
          2014,
          2019
        ],
        datasets: [
          {
            label: '中国(%)',
            backgroundColor: '#ff6384',
            borderColor: '#ff6384',
            data: [
              16.1,
              10.1,
              5.4,
              4.2,
              8.0,
              9.5,
              9.9,
              7.5,
              8.3,
              13.6,
              21.1,
              32.3,
              35.6,
              37.8
            ],
            fill: false
          },
          {
            label: '美国(%)',
            backgroundColor: '#36a2eb',
            borderColor: '#36a2eb',
            data: [
              43.5,
              40.6,
              39.1,
              46.3,
              56.0,
              58.6,
              56.5,
              53.4,
              32.0,
              29.5,
              38.3,
              48.4,
              49.2,
              41.0
            ],
            fill: false
          }
        ]
      },
      {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                reverse: true
              }
            }
          ]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 10
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    )
  }
}
