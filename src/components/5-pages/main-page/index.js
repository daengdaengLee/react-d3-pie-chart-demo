import React from 'react';
import MainHeader from '../../3-organisms/main-header';
import MainChartContainer from '../../3-organisms/main-chart-container';
import MainTemplate from '../../4-templates/main-template';

const MainPage = () => (
  <MainTemplate
    top={() => <MainHeader />}
    bottom={() => <MainChartContainer />}
  />
);

export default MainPage;
