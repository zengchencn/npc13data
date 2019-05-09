import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: ['men', 'women'],
  mounted() {
    this.renderChart(
      {
        labels: ['男', '女'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: ['#6666FF', '#FF6666'],
            data: [this.men, this.women]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              let sum =
                data['datasets'][0]['data'][0] + data['datasets'][0]['data'][1]
              let current = data['datasets'][0]['data'][tooltipItem['index']]
              return (
                data['labels'][tooltipItem['index']] +
                ': ' +
                current +
                ', ' +
                ((current / sum) * 100).toFixed(2) +
                '%'
              )
            }
          }
        }
      }
    )
  }
}
