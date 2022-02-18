import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useState } from 'react';
import { useEffect } from 'react';
  import { Line } from 'react-chartjs-2';
import PopulationTable from '../table/table';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  export default function Chart({animals, years = 1, action}){
    const [chartData, setChartData] = useState([]);
    const [labels, setLabels] = useState([]);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Populations',
      },
    },
  };

  const animalData = [];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  useEffect(() => {
      console.log('action');
    setChartData([]);
    setLabels([])
    for(let i = 0; i <= years; i++){
        setLabels(old => [...old, i])
    }
    Object.keys(animals).map(item => {
    const temp = {...animals[item]}
    temp.population = animals[item].population
    console.log(temp);
    console.log(animals);
    const red = getRandomInt(255);
    const green = getRandomInt(255);
    const blue = getRandomInt(255);
    const animalsPerYear = [];
    for(let i = 0; i <= years; i++){
        let newData = Math.floor(temp.population + temp.population*(temp.births/100) - temp.population*(temp.deaths/100));
        Object.keys(animals[item]).forEach(prop => {
            if(prop !== 'births' && prop !== 'deaths' && prop !== 'population' && prop !== 'title'){
                if(newData - (animals[prop].population * animals[item][prop]) <= 0){
                    newData = 0
                }
                else{
                    newData -= animals[prop].population * animals[item][prop];
                }
            }
        })
        // console.log(typeof newData);
        temp.population = Number(newData)
        animalsPerYear.push(newData);
    }
    animalData[animals[item].title] = {
        label : animals[item].title,
        data: [10, 200, 300],
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    }
    setChartData(old => [...old, {
        label : animals[item].title,
        data: animalsPerYear,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    }])
    // console.log(chartData);
  })}, [action])
  const data = {
    labels,
    datasets: chartData
  };

      return(
          <div>
            <Line options={options} data={data} />
            <PopulationTable data={chartData}/>
          </div>
      )
  }