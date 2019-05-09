import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: ['中国', '蒙古', '韩国', '朝鲜', '日本'],
        datasets: [
          {
            label: '女性占比（%）',
            data: [24.94, 17.11, 17.61, 17.11, 10.15],
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)'
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
                min: 5,
                max: 25
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
