import React from 'react'
import { Line } from 'react-chartjs-2';

 const DayIntervalData = (props) => {
    const item = props.id = "first"?{
        labels: props.dayIntervalData.labels,
        dataset: [
            {
                label: "HIGH",
                 data: props.dayIntervalData.highData,
                 borderColor : "green",
                 backgroundColor: "green"
            },
            {
                label: "LOW",
                 data: props.dayIntervalData.lowData,
                 borderColor : "red",
                 backgroundColor: "red"
            }
        ]

    }:{
        labels: props.dayIntervalData.labels,
        dataset: [
            {
                label: "OPEN",
                 data: props.dayIntervalData.openData,
                 borderColor : "blue",
                 backgroundColor: "blue"
            },
            {
                label: "CLOSE",
                 data: props.dayIntervalData.closeData,
                 borderColor : "yellow",
                 backgroundColor: "yellow"
            }
        ]

    }

  return (
    <div>
            <Line data={item} id='dayIntervalWrapper' />
    </div>
  )
}
export default DayIntervalData;
