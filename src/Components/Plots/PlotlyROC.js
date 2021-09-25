import React from 'react';
import Plot from 'react-plotly.js';

export default function PlotlyScatter (props) {
    const { title, caption, rocData, type, id } = props;
    const white = "#ffffff"
    const rocColors = ["#fda555", // orange
                            "rgba(9, 143, 102, 0.6)", // green
                            "rgba(67, 75, 179, 0.45)", // blue purp ?
                            "rgba(118, 67, 179, 0.45)", //purple
                            "rgb(118, 67, 179)",
                            "#ab3a29", // red
                        ]
    
    const data = {
        x: rocData.fpr,
        y: rocData.tpr,
        type: 'scatter',
        fill: 'tozeroy',
        mode: 'lines',
        line: {
            color: rocColors[4]
            },
        fillcolor: rocColors[3],        
    }

    const plotLayout = {
            plot_bgcolor:"#1e1e1e",
            paper_bgcolor:"#1e1e1e",
            autosize: false,
            height: 450,
            width: 450,
            title: {text: 'ROC Curve',
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
                range: [0, 1],
                linecolor: white,
                tickfont: {
                    color: white
                 },
                showgrid: false,
                gridcolor: "#283442",
                title: {
                  text: 'This'
                }
              },
            yaxis: {
                range: [0, 1],
                linecolor: white,
                tickfont: {
                    color: white
                    },
                showgrid: false,
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
        style={{ maxWidth: "100%", maxHeight: "100%", overflowX: 'scroll' }}
        data={[data]}
        layout={plotLayout}
      />
    );
    }