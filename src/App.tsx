import React from 'react';
import Layout from './pages/Layout';
import { observer } from 'mobx-react-lite';

const App: React.FC = () => {
  return (
    <div>
      <Layout/>
    </div>
  );
};

export default observer(App);
