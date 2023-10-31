import './App.css';
import Body from "./components/Body"
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react';

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  // const [isAddTaskDivVisible, setIsAddTaskDivVisible] = useState(false);
  function handleSidebarToggle() {
    setIsSidebarExpanded(!isSidebarExpanded)
  }
  // function handleAddTaskDivToggle() {
  //   setIsAddTaskDivVisible(!isAddTaskDivVisible)
  //   console.log(isAddTaskDivVisible)
  // }

  return (
    <div className="App">
      <Navbar onSidebarToggle={handleSidebarToggle} />
      <Body isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
}

export default App;
