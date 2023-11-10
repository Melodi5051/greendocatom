import React from 'react';
import { observer } from 'mobx-react-lite';
import Layout from './pages/Layout';

const App: React.FC = () => {
  return (
    <div>
      <Layout/>
    </div>
  );
};

export default observer(App);
