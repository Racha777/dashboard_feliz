export const models=()=>{
    const data={
        labels:['javascript','HTML','CSS'],
        datasets:[{
            data:[60,50,50],
        }]
    };

    new Chart('dashboardModelsChart',{type: 'doughnut', data});
}

export default models;