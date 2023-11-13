import React from 'react';
import Layout from './pages/Layout';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Router from './router/router';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default observer(App);
