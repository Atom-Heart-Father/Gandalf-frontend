import CanvasJSReact from './../canvasjs.react'
import './../styles/Dashboard.css'

const Dashboard = () => {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  CanvasJS.addColorSet("blueShades",
    [//colorSet Array
      "#33567f",
      "#3a6190",
      "#4774ab",
      "#668dc2",
      "#a3b5d4",
    ]);

  CanvasJS.addColorSet("redShades",
    [//colorSet Array
      "#a70000",
      "#de0404",
      "#ff5252",
      "#ff7b7b",
      "#ffbaba",
    ]);

  const totalRequest24 = {
    theme: 'light2',
    title: {
      text: "Total Requests/hour in the past 24 hrs",
      fontFamily: "Inter",
    },
    axisX: {
      title: "Time",
      gridThickness: 0,
      interval: 2,
      intervalType: "hour",
      valueFormatString: "hh TT",
      labelAngle: 0,
    },
    axisY: {
      gridThickness: 0,
      title: "Requests",
      labelAngle: 0,
    },
    data: [{
      type: "line",
      color: 'darkslategrey',
      dataPoints: [
        { x: new Date(Date.UTC(2021, 3, 20, 1, 0)), y: 39 },
        { x: new Date(Date.UTC(2021, 3, 20, 2, 0)), y: 51 },
        { x: new Date(Date.UTC(2021, 3, 20, 3, 0)), y: 28 },
        { x: new Date(Date.UTC(2021, 3, 20, 4, 0)), y: 35 },
        { x: new Date(Date.UTC(2021, 3, 20, 5, 0)), y: 27 },
        { x: new Date(Date.UTC(2021, 3, 20, 6, 0)), y: 55 },
        { x: new Date(Date.UTC(2021, 3, 20, 7, 0)), y: 48 },
        { x: new Date(Date.UTC(2021, 3, 20, 8, 0)), y: 30 },
        { x: new Date(Date.UTC(2021, 3, 20, 10, 0)), y: 49 },
        { x: new Date(Date.UTC(2021, 3, 20, 11, 0)), y: 26 },
        { x: new Date(Date.UTC(2021, 3, 20, 12, 0)), y: 38 },
        { x: new Date(Date.UTC(2021, 3, 20, 13, 0)), y: 43 },
        { x: new Date(Date.UTC(2021, 3, 20, 14, 0)), y: 29 },
        { x: new Date(Date.UTC(2021, 3, 20, 15, 0)), y: 41 },
        { x: new Date(Date.UTC(2021, 3, 20, 16, 0)), y: 54 },
        { x: new Date(Date.UTC(2021, 3, 20, 17, 0)), y: 66 },
        { x: new Date(Date.UTC(2021, 3, 20, 18, 0)), y: 60 },
        { x: new Date(Date.UTC(2021, 3, 20, 19, 0)), y: 53 },
        { x: new Date(Date.UTC(2021, 3, 20, 20, 0)), y: 47 },
        { x: new Date(Date.UTC(2021, 3, 20, 21, 0)), y: 58 },
        { x: new Date(Date.UTC(2021, 3, 20, 22, 0)), y: 42 },
        { x: new Date(Date.UTC(2021, 3, 20, 23, 0)), y: 69 },
      ]
    }]
  }
  const susRequest24 = {
    theme: 'light2',
    title: {
      text: "Blocked Requests/hour in the past 24 hrs",
      fontFamily: "Inter",
    },
    axisX: {
      title: "Time",
      gridThickness: 0,
      interval: 2,
      intervalType: "hour",
      valueFormatString: "hh TT",
      labelAngle: 0,
    },
    axisY: {
      gridThickness: 0,
      title: "Requests",
      labelAngle: 0,
    },
    data: [{
      type: "line",
      color: 'red',
      dataPoints: [
        { x: new Date(Date.UTC(2021, 3, 20, 1, 0)), y: 19 },
        { x: new Date(Date.UTC(2021, 3, 20, 2, 0)), y: 21 },
        { x: new Date(Date.UTC(2021, 3, 20, 3, 0)), y: 8 },
        { x: new Date(Date.UTC(2021, 3, 20, 4, 0)), y: 18 },
        { x: new Date(Date.UTC(2021, 3, 20, 5, 0)), y: 7 },
        { x: new Date(Date.UTC(2021, 3, 20, 6, 0)), y: 15 },
        { x: new Date(Date.UTC(2021, 3, 20, 7, 0)), y: 22 },
        { x: new Date(Date.UTC(2021, 3, 20, 8, 0)), y: 10 },
        { x: new Date(Date.UTC(2021, 3, 20, 10, 0)), y: 7 },
        { x: new Date(Date.UTC(2021, 3, 20, 11, 0)), y: 10 },
        { x: new Date(Date.UTC(2021, 3, 20, 12, 0)), y: 18 },
        { x: new Date(Date.UTC(2021, 3, 20, 13, 0)), y: 13 },
        { x: new Date(Date.UTC(2021, 3, 20, 14, 0)), y: 19 },
        { x: new Date(Date.UTC(2021, 3, 20, 15, 0)), y: 11 },
        { x: new Date(Date.UTC(2021, 3, 20, 16, 0)), y: 17 },
        { x: new Date(Date.UTC(2021, 3, 20, 17, 0)), y: 16 },
        { x: new Date(Date.UTC(2021, 3, 20, 18, 0)), y: 6 },
        { x: new Date(Date.UTC(2021, 3, 20, 19, 0)), y: 18 },
        { x: new Date(Date.UTC(2021, 3, 20, 20, 0)), y: 18 },
        { x: new Date(Date.UTC(2021, 3, 20, 21, 0)), y: 16 },
        { x: new Date(Date.UTC(2021, 3, 20, 22, 0)), y: 12 },
        { x: new Date(Date.UTC(2021, 3, 20, 23, 0)), y: 23 },
      ]
    }]
  }
  const totalPie = {
    theme: 'light2',
    colorSet: "blueShades",
    title: {
      text: "Categories of Total Requests",
      fontFamily: 'Inter',
    },
    data: [{
      type: "pie",
      showInLegend: true,
      legendText: "{label}",
      toolTipContent: "{label}: <strong>{y}%</strong>",
      indexLabel: "{y}%",
      indexLabelPlacement: "inside",
      indexLabelFontColor: "#000",
      dataPoints: [
        { y: 80, label: "General" },
        { y: 10, label: "Adult Content" },
        { y: 5, label: "Coding" },
        { y: 4, label: "Entertainment" },
        { y: 1, label: "Social Media" },
      ]
    }]
  }
  const susPie = {
    theme: 'light2',
    colorSet: "redShades",
    title: {
      text: "Categories of Blocked Requests",
      fontFamily: 'Inter',
    },
    data: [{
      type: "pie",
      showInLegend: true,
      legendText: "{label}",
      toolTipContent: "{label}: <strong>{y}%</strong>",
      indexLabel: "{y}%",
      indexLabelPlacement: "inside",
      indexLabelFontColor: "#000",
      dataPoints: [
        { y: 50, label: "Adult Content" },
        { y: 25, label: "Coding" },
        { y: 20, label: "Entertainment" },
        { y: 5, label: "Social Media" },
      ]
    }]
  }

  return (
    <section id='dashboard'>
      <div className='list-container dashboard'>
        <CanvasJSChart options={totalRequest24} />
      </div>
      <div className='list-container dashboard'>
        <CanvasJSChart options={susRequest24} />
      </div>
      <div className='pie-row'>
        <div className='list-container dashboard'>
          <CanvasJSChart options={totalPie} />
        </div>
        <div className='list-container dashboard'>
          <CanvasJSChart options={susPie} />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
