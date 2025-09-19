import Repeats from "./Repeats";
import gymImg from './arm.png';
import {useState} from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";

function Arms(){

  const { onAddExercise } = useOutletContext();
    const navigate = useNavigate();

    const exercise = [
        {id: 'arm', label: 'Armövningar'},
        {id: 'bisep', label: 'Bisepscurl'},
        {id: 'trisep', label: 'Triseps extensions'},
    
    ];
    const [selected, setSelected] = useState(null);
    const [repeatInfo, setRepeatInfo] = useState({sets: 0, reps:0});
    const [resetKey, setResetKey] = useState(0);

    const handleAdd = () => {
      if(!selected) return;

      onAddExercise({
            ...selected,
           ...repeatInfo
        });
        setSelected(null);
        setRepeatInfo({ sets:0, reps:0});
        setResetKey(k => k +1);
        navigate('/workouts');
    };
       //{onAddExercise = () => {}}

    return(
        <>
        
        <h2>ARMAR</h2>
          <img 
        src= {gymImg}
        alt= "arm"
        style={{width: "15%", maxWidth: "600px" }}/>
         <section className="list_side_by_image">
      
        <ul className="exerciseList">
          {exercise.map(ex => (
            <li key={ex.id} className="exerciseItem">
              <button
                type="button"
                onClick={() => {
                  setSelected(ex);
                  setResetKey(k => k + 1);
                }}
              >
                {ex.label}
              </button>
            </li>
          ))}
        </ul>

     
        <section>  
            <h2>Välj övning och lägg till i listan!</h2>
            {selected && (
                <p>
                    Vald: {selected.label} - {repeatInfo.sets} sets * {repeatInfo.reps} reps
                </p>
            )}
   <Repeats key={`${selected?.id || "none"}-${resetKey}`} onChange={setRepeatInfo}/>
   
   <button onClick={handleAdd} disabled={!selected}>lägg till</button>
            
            </section>
        
        </section>

         

       

        
        </>
    );
}
export default Arms;