import { Routes, Route } from 'react-router-dom';
// import { Box, Text } from '@chakra-ui/react'
import ReactHooks from './modules/ReactHooks';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/react-hooks" element={<ReactHooks />} />
      </Routes>
    </div>
  );
}

export default App;
