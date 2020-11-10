
import './App.css';
import Barchart from './Components/Barchart';
import Barchart2 from './Components/Barchart2';

function App() {
  return (
    <div className="App">
      <div className="chart">
     <h1>MS Dhoni visualisation portal</h1>
     <Barchart/>
     <Barchart2/>
     <h3>the graphs shows the visualisation of batting and bowling average of MS Dhoni sports career</h3>
    </div>
    </div>
  );
}

export default App;
