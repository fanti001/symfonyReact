import React from 'react';
import { StyledAverage } from './Average.styled';

const Average = ({ average }) => <StyledAverage value={average}>{average}</StyledAverage>;

export default Average;
