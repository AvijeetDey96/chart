import React, { useState, useEffect, useRef } from 'react';
import { Bar, Pie, getDatasetAtEvent,getElementAtEvent } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const CustomChart = ({ data }) => {
    const chartRef = useRef();
    const labels = [];
    data.elements.forEach((ele) => {
        labels.push(ele)
    })
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string

    const datas = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: data.elements,
                backgroundColor: rgb,
            }],
    };
    const onClick = (event) => {
        console.log(getElementAtEvent(chartRef.current, event));
    }
    if (data.type == "Bar") {

        return (<Bar   onClick={onClick}  ref={chartRef} data={datas} />)
    }
    if (data.type == "Pie") {

        return (<Pie  onClick={onClick}  ref={chartRef} data={datas} />)
    }
    // return (<>

    // <Line
    //     datasetIdKey='id'
    //     data={{
    //       labels: ['Jun', 'Jul', 'Aug'],
    //       datasets: [
    //         {
    //           id: 1,
    //           label: '',
    //           data: [5, 6, 7],
    //         },
    //         {
    //           id: 2,
    //           label: '',
    //           data: [3, 2, 1],
    //         },
    //       ],
    //     }}
    //   />


    //   </>  );
}

export default CustomChart;