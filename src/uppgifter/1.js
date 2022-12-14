import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { useEffect, useState } from 'react';
    import { Line } from 'react-chartjs-2';

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
      );

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

export default function Uppgift1({Agnes, Alice, Anna}) {
    const [labels, setLabel] = useState([]);

    useEffect(() => {
        labelset()
    })

    function labelset() {
        let list= []
        Agnes.map((value) => {
            list.push(value.year)
        })
        setLabel(list);
    }

    const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'Dataset 2',
            data: labels.map(() => Agnes.value),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return (
        <div className="one">
            <h3>Uppgift 1</h3>
            <Line options={options} data={data} />;
        </div>
    );
}
