import { useEffect, useState } from "react";

function Repeats({onChange , resetKey}){

const [sets, setSets] = useState(0);
const [reps, setReps] = useState(0);

useEffect(() => {
    setSets(0);
    setReps(0);
    onChange?.({sets: 0, reps:0});
}, [resetKey, onChange]);

const increaseSets = () => {
    const newAmount = sets +1;
    setSets(newAmount);
    onChange?.({sets: newAmount, reps});
};

const increaseReps = () => {
    const newAmount = reps +1;
    setReps(newAmount);
    onChange?.({sets, reps: newAmount});
};


    return(
        <>
        
        
        

        <button onClick = {increaseSets}>antal set:{sets}</button>
        <button onClick = {increaseReps}>antal rep:{reps}</button>

        </>
    )
}
export default Repeats;