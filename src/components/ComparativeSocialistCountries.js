import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          1998,
          1999,
          2000,
          2001,
          2002,
          2003,
          2004,
          2005,
          2006,
          2007,
          2008,
          2009,
          2010,
          2011,
          2012,
          2013,
          2014,
          2015,
          2016,
          2017,
          2018
        ],
        datasets: [
          {
            label: '中国(%)',
            backgroundColor: '#ff6384',
            borderColor: '#ff6384',
            data: [
              21.8,
              21.8,
              21.8,
              21.8,
              21.8,
              20.2,
              20.2,
              20.3,
              20.3,
              20.6,
              21.3,
              21.3,
              21.3,
              21.3,
              21.3,
              23.4,
              23.4,
              23.6,
              23.6,
              24.2,
              24.9
            ],
            fill: false
          },
          {
            label: '古巴(%)',
            backgroundColor: '#36a2eb',
            borderColor: '#36a2eb',
            data: [
              27.6,
              27.6,
              27.6,
              27.6,
              27.6,
              36.0,
              36.0,
              36.0,
              36.0,
              36.0,
              43.2,
              43.2,
              43.2,
              45.2,
              45.2,
              48.9,
              48.9,
              48.9,
              48.9,
              48.9,
              53.2
            ],
            fill: false
          },
          {
            label: '朝鲜(%)',
            backgroundColor: '#cc65fe',
            borderColor: '#cc65fe',
            data: [
              20.1,
              20.1,
              20.1,
              20.1,
              20.1,
              20.1,
              20.1,
              20.1,
              20.1,
              20.1,
              20.1,
              15.6,
              15.6,
              15.6,
              15.6,
              15.6,
              16.3,
              16.3,
              16.3,
              16.3,
              16.3
            ],
            fill: false
          },
          {
            label: '越南(%)',
            backgroundColor: '#ffce56',
            borderColor: '#ffce56',
            data: [
              26.2,
              26.0,
              26.0,
              26.0,
              27.3,
              27.3,
              27.3,
              27.3,
              27.3,
              25.8,
              25.8,
              25.8,
              25.8,
              24.4,
              24.4,
              24.4,
              24.3,
              24.3,
              26.7,
              26.7,
              26.7
            ],
            fill: false
          },
          {
            label: '老挝(%)',
            backgroundColor: '#00ff00',
            borderColor: '#00ff00',
            data: [
              21.2,
              21.2,
              21.2,
              21.2,
              22.9,
              22.9,
              22.9,
              22.9,
              25.2,
              25.2,
              25.2,
              25.2,
              25.2,
              25.0,
              25.0,
              25.0,
              25.0,
              25.0,
              27.5,
              27.5,
              27.5
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
                min: 10,
                max: 55
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
