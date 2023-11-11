import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function Piechart() {
  const [categoryData, setCategoryData] = useState([]);
  
  useEffect(() => {
    const getdata = async () => {
      try {
        const reqData = await fetch('books.json');
        if (!reqData.ok) {
          throw new Error('Failed to fetch data');
        }

        const resData = await reqData.json();

       
        const categoryDataMap = {};

        for (let i = 0; i < resData.length; i++) {
          const category = resData[i].category;
          const value = resData[i].value;

          
          if (categoryDataMap[category]) {
            
            categoryDataMap[category] += value;
          } else {
            
            categoryDataMap[category] = value;
          }
        }

        
        const aggregatedData = Object.keys(categoryDataMap).map(category => ({
          category: category,
          value: categoryDataMap[category],
        }));

        setCategoryData(aggregatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getdata();
  }, []);
        
  return (
    <React.Fragment>
      <div className="piechart" style={{marginLeft:120, marginBottom:1,}} >
        
        <Chart
          type='donut'
          width={550}
          height={290}
          
          series={categoryData.map(item => item.value)}
          options={{
            labels: categoryData.map(item => item.category),
            
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      fontSize: 30,
                    }
                  }
                }
              }
            }
          }}
        />
      </div>
    </React.Fragment>
  )
}

export default Piechart;
