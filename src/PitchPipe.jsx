// PitchPipe.jsx
// import React from 'react';
import * as Tone from 'tone';
import './PitchPipe.css';

function PitchPipe() {
  /* TODO: 
    make the notes only have 1 octive
    have an integer for octave, and then an 'up octave' and 'down octave' button
    combine the note letter, and octave number into 1 input for the tone library
  */
  const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];

  const playNote = (note) => {
    // Create a new synth instance
    const synth = new Tone.Synth().toDestination();

    // Start Tone.js context
    Tone.start().then(() => {
      // Play the note with a short duration
      synth.triggerAttackRelease(note, '0.5'); // Duration in seconds
    });
  };

  return (
    <div>
      <h1>PitchPipe</h1>
      <div className="button-container">
        {notes.map((note) => (
          <button key={note} onClick={() => playNote(note)}>
            {note}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PitchPipe;
