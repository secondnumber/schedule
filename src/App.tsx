import React from 'react';
//import TestTable from './components/TestTable/TestTable';
//import DropDownListRow from './components/DropDownListRow'
import WrappedDemoComponent from './components/TaskPage/TaskPage';
import ListView from './components/List/List';
import './App.less';
//import { connect } from 'react-redux';
//import {fetchScheduleData} from './redux/actions';

function App() {
  return (
    <div className="App">

      <ListView/>
    </div>
  );
}

export default App;
