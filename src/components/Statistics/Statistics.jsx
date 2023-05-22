import React from 'react';
// import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    const getRandomColor = () => {
      const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

  return (
    <section className="statistics">
      {/* <h2 class="title">Upload stats</h2> */}
          {title && <h2 className="title">{title}</h2>}
          
          <ul className="stat-list">
              {stats.map((stat, index) => (
           <li key={index} className="item">
            <span className="label" style={{ backgroundColor: getRandomColor() }}>
              {stat.label}
                      </span>
           <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};            
        
// Statistics.propTypes = {
//  title: PropTypes.string,
//  stats: PropTypes.arrayOf(
//     PropTypes.shape({
//         label: PropTypes.string.isRequired,
//         percentage: PropTypes.string.isRequired,
//     })
//  ).isRequired,
// }; 

export default Statistics;
