
import React, { useState } from 'react';
import gymImg from './roligt.jpg';
import { Link , Outlet } from "react-router-dom";


function Workouts() {

    const [selectedExercises, setSelectedExercises] = useState([]);

    const handleAddExercise = (exercise) => {
        setSelectedExercises((prev) => [...prev, exercise]);
    };
      const removeExercise = (index) => {
    setSelectedExercises(prev => prev.filter((_, i) => i !== index));
  };
    const clearAll = () => setSelectedExercises([]);

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
        {/* {selectedExercises.length > 0 && (
           
            <section className='lista_av_ovningar' style={{ marginTop: "1rem" }}>
                <h3>Tillagda övningar</h3>
                <ul>
                    {selectedExercises.map((ex, i ) => (
                        <li key={`${ex.id}-${i}`}> {ex.label} - {ex.sets} sets * {ex.reps} reps</li>
                    ))}
                </ul>
                <button onClick={() => setSelectedExercises([])}>Rensa Lista</button>
            </section>
        )} */}
       
      
    </>
);

}

export default Workouts;
