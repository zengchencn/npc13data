import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          '圣卢西亚',
          '赤道几内亚',
          '墨西哥',
          '中国',
          '土耳其',
          '保加利亚',
          '黎巴嫩'
        ],
        datasets: [
          {
            label: '女性占比（%）',
            data: [16.67, 21, 48.2, 24.94, 17.45, 25.83, 3.94],
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
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
