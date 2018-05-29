import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';



class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['5/21', '5/22', '5/23', '5/24', '5/25', '5/26', '5/27'],
        datasets: [
          {
            label: 'Tasks Complete',
            data: [
              6,
              9,
              3,
              5,
              5,
              3,
              8
            ],
            backgroundColor: [
            
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)'
            
              
            ]
          }
        ]
      }
    }
  }

static defaultProps ={
  displayTitle:true,
  displayLegend:true,
  legendPosition:'right'
}

    render() {
      return (
        <div className="chart">
          <Bar
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Complete tasks this week',
                fontsize:25
                },
              legend:{
                display:this.props.displayLegend,
                  position:this.props.LegendPosition
                
              }
              
            }}
          />
        </div>
      )


    }

  }

  export default Chart;