import { useState } from 'react';
import UserProfile from './components/UserProfile';
import './App.css';
const App = () => {
  // State to manage the background color
  const [backgroundColor, setBackgroundColor] = useState('');
  // Function to update the background color
  const changeUpdates = (color) => {
    console.log(color); // Log the selected color
    setBackgroundColor(color); // Update the background color state
  };
  return (
    <div
      className="first"
      style={{ backgroundColor }} // Apply inline styling for background color
      >
      <UserProfile changeUpdates={changeUpdates} />
    </div>
  );
};

export default App;
