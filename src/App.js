import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing_page/Landing';
import Jobs from './Components/Jobs/jobs';
import Details from './Components/Details/Details';
import Form from './Components/Form/form';
import Display from './Components/Display/Display';
import { store } from './Store';
import {Provider } from 'react-redux';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/display" element={<Display/>} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
