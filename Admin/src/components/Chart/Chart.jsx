import React,{ useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const Chart = () => {
  const [state,setState] = useState({
    series: [{
      name: 'Clients',
      data: [31, 100, 28, 51, 42, 17, 100]
    }, {
      name: 'Interets',
      data: [11, 32, 45, 102, 34, 52, 41]
    },
    {
      name: 'depots',
      data: [19, 15, 93, 28, 45, 59, 100]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2023-01-19T00:00:00.000Z", "2023-02-19T01:30:00.000Z", "2023-03-19T02:30:00.000Z", "2023-04-19T03:30:00.000Z", "2023-05-19T04:30:00.000Z", "2023-06-19T05:30:00.000Z", "2023-07-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  })
  return (
    <div id="chart" className='chart-contaner'>
      <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
    </div>
  )
}

export default Chart
