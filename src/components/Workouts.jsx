
import React, { useState , useRef, useEffect} from 'react';
import gymImg from './roligt.jpg';
import { Link , Outlet } from "react-router-dom";



function Workouts() {

    const [selectedExercises, setSelectedExercises] = useState([]);
     const [showAdded, setShowAdded] = useState(false);
     const hideTimer = useRef(null);

    const handleAddExercise = (exercise) => {
        setSelectedExercises((prev) => [...prev, exercise]);

                 setShowAdded(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowAdded(false), 2000);
         
    };
      const removeExercise = (index) => {
    setSelectedExercises(prev => prev.filter((_, i) => i !== index));
  };
    const clearAll = () => setSelectedExercises([]);

 

  useEffect(() => {
    return () => clearTimeout(hideTimer.current); // städa upp vid unmount
  }, []);

return (
    <>
    <img src={gymImg} alt="roligt" style={{width: "50%", maxWidth: "600px" }}/>
    <h2>Vad ska tränas idag?</h2>


        <Link to="arms"><button>Armar</button></Link>
        <Link to="bones"><button>Ben</button></Link>
        <Link to="back"><button>Rygg</button></Link>
        <Link to="stomach"><button>Mage</button></Link>
        <Link to="exerciseList"><button>Din träning</button></Link>
          
      


         <Outlet context={{ onAddExercise: handleAddExercise, selectedExercises, removeExercise, clearAll }} />
     
           {showAdded && (
        <div className="toast">Lagt till övning till din träning!</div>
      )}
      
    </>
 );
}


export default Workouts;
