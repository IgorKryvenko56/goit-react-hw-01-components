import React from 'react';
// import PropTypes from 'prop-types';

import { StatisticsContainer } from './Statistics.styled';
import { Title } from './Statistics.styled';
import { StatList } from './Statistics.styled';
import { StatItem } from './Statistics.styled';
import { Label } from './Statistics.styled';
import { Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const getRandomHexColor = () => {
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }; 
   return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
             style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label color={getRandomHexColor()}>{stat.label}</Label>
            <Percentage>{stat.percentage}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

export default Statistics;


        
// Statistics.propTypes = {
//  title: PropTypes.string,
//  stats: PropTypes.arrayOf(
//     PropTypes.shape({
//         label: PropTypes.string.isRequired,
//         percentage: PropTypes.string.isRequired,
//     })
//  ).isRequired,
// }; 

// export default Statistics;
