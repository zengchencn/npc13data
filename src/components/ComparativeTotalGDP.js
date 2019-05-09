import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          '美国',
          '中国',
          '日本',
          '德国',
          '英国',
          '法国',
          '印度',
          '意大利',
          '巴西',
          '加拿大'
        ],
        datasets: [
          {
            label: '女性占比（%）',
            data: [
              23.61,
              24.94,
              10.15,
              30.89,
              32,
              39.69,
              12.6,
              35.71,
              15.01,
              26.95
            ],
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(20, 203, 207, 0.2)',
              'rgba(201, 20, 207, 0.2)',
              'rgba(201, 20, 20, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(20, 203, 207)',
              'rgb(201, 20, 207)',
              'rgb(201, 20, 20)'
            ],
            borderWidth: 1
          }
        ]
      },
      {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 50
              }
            }
          ]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    )
  }
}
