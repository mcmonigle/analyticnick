import React from 'react';
import Plot from 'react-plotly.js';

export default function PlotlyScatter (props) {
    const { title, caption, plotData, type, id } = props;
    const white = "#ffffff"
    const scatterColors = ["#fda555", // orange
                            "#098f66", // green
                            "#434bb3", //blue
                            "#7643b3", //purple
                            "#ab3a29", // red
                        ]
    
    const data = {
                    type: 'scatter',
                    x: plotData.x,
                    y: plotData.y,
                    mode: 'markers',
                    marker: {
                      size: 40,
                      opacity: 0.75,
                      color: scatterColors[2]
                    }
    }

    if (plotData.groups) {
      let uniqueGroups = [...new Set(plotData.groups)]
      
      data.transforms = [{
        type: 'groupby',
        groups: plotData.groups,
        styles: uniqueGroups.map((grp, ind) => {
          return {target: grp, value: {marker: {color: scatterColors[ind]}}}
        })
      }]
    }

    const plotLayout = {
            plot_bgcolor:"#1e1e1e",
            paper_bgcolor:"#1e1e1e",
            autosize: true,
            title: {text: 'Group Scatter',
                    font: {color: white},
                    x: 0.05,
                    },
            margin: {
                    l: 40,
                    r: 25,
                    b: 40,
                    t: 50
                    }, 
            xaxis: {
                linecolor: white,
                tickfont: {
                    color: white
                 },
                // showgrid: true,
                gridcolor: "#283442",
                title: {
                  text: 'This'
                }
              },
            yaxis: {
                linecolor: white,
                tickfont: {
                    color: white
                    },
                // showgrid: true,
                gridcolor: "#283442",
                title: {
                  text: 'That'
                }
                },
            
            font: {
                color: white
            },
    };



    return (
      <Plot
        divId={id}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        data={[data]}
        useResizeHandler={true}
        layout={plotLayout}
      />
    );
    }