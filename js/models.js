import {getColorsData} from "../helpers/helper.js";

export const models=()=>{
    // Chart.defaults.color='#000';
    const data={
        labels:['javascript','HTML','CSS'],
        datasets:[{
            data:[60,50,50],
            borderColor:getColorsData(),
            backgroundColor:getColorsData(40)
        }]
    };

    const options={
        plugins:{
            legend:{
                position: 'bottom'
            },
        },
    };

    new Chart('dashboardModelsChart',{type: 'doughnut', data, options});
}

export default models;