import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          '第一届',
          '第二届',
          '第三届',
          '第四届',
          '第五届',
          '第六届',
          '第七届',
          '第八届',
          '第九届',
          '第十届',
          '第十一届',
          '第十二届',
          '第十三届'
        ],
        datasets: [
          {
            label: '女性代表占比(%)',
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            data: [
              12,
              12.2,
              17.8,
              22.6,
              21.2,
              21.2,
              21.3,
              21,
              21.8,
              20.2,
              21.3,
              23.4,
              24.9
            ]
          }
        ]
      },
      {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 5,
                max: 35
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
