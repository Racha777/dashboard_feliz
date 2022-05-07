import { getColorsData } from "../helpers/helper.js";

export const models = (allData) => {
  // Chart.defaults.color='#000';

  // const result=allData.reduce((previous, curr)=>{
  //     const exist=previous.find(element=>element===curr.model);
  //     if(exist){
  //     }else{
  //         previous.push(curr.model);
  //     }
  //     return previous;
  // },[]);

  const uniqueModels = [...new Set(allData.map((element) => element.model))];

  const amaountModels=uniqueModels.map(model=>allData.filter(element=>element.model===model).length);
  console.log(amaountModels);
  const data = {
    labels: uniqueModels,
    datasets: [
      {
        data: amaountModels,
        borderColor: getColorsData(),
        backgroundColor: getColorsData(40),
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "left",
      },
    },
  };

  new Chart("dashboardModelsChart", { type: "doughnut", data, options });
};

export default models;
