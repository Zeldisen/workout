
import { useOutletContext } from "react-router-dom";
import { Trash2 } from "lucide-react";

 function ExerciseList() {
    const { selectedExercises = [], removeExercise, clearAll } = useOutletContext() || {};
    const doneCheck = false;
  if (!selectedExercises.length) {
    return <p style={{ marginTop: "1rem" }}>Inga övningar tillagda ännu.</p>;
  }

  return (
    <section className="lista_av_ovningar" style={{ marginTop: "1rem" }}>
      <h3>Tillagda övningar</h3>
      <ul className="exerciseListUL">
        {selectedExercises.map((ex, i) => (
          <li key={`${ex.id}-${i}`} className="exerciseItemRow">
            <span>{ex.label} – {ex.sets} sets × {ex.reps} reps</span>
            {removeExercise && (
                        <button onClick={() => removeExercise(i)}
                            aria-label={`Ta bort ${ex.label}`}
                              className="icon-btn"
                               title="Ta bort">
                                <Trash2 size={20} />
            </button>
            )}

          </li>
        ))}
      </ul>

      {clearAll && (
        <button type="button" onClick={clearAll}>
          Rensa Lista
        </button>
      )}
    </section>
  );
}
export default ExerciseList;