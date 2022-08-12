import React, { useState } from 'react';
//import CSS
import "./App.css";
//import components
import AddButton from './components/AddButton';
import SubButton from './components/SubButton';
import SubButton2 from './components/SubButton2';
import SubButton3 from './components/SubButton3';
import AddButton2 from './components/AddButton2';
import AddButton3 from './components/AddButton3';
import SelectCounter from './components/SelectCounter';
import SelectCounter2 from './components/SelectCounter2';
import SelectCounter3 from './components/SelectCounter3';
import ClearButton from './components/ClearButton';


function App() {

  const options0 = [...Array(10).keys()];
  const options = options0.map((item) => item + 1)
  //States
  let [number, setNumber] = useState(0);
  const [numOption, setNumOption] = useState(1);
  const [numOption2, setNumOption2] = useState(1);
  const [numOption3, setNumOption3] = useState(1);

  //Functions
  //Add:
  const Add = () => {
    setNumber(number + numOption);
  }
  const Add2 = () => {
    setNumber(number + numOption2);
  }
  const Add3 = () => {
    setNumber(number + numOption3);
  }

  //Subtract:
  const Subtract = () => {
    if (number >= 1) {
      setNumber(number - numOption);
    }
    else {
      alert("Error: Negative Result.");
    }
  }

  const Subtract2 = () => {
    if (number >= 1) {
      setNumber(number - numOption2);
    }
    else {
      alert("Error: Negative Result.");
    }
  }

  const Subtract3 = () => {
    if (number >= 1) {
      setNumber(number - numOption3);
    }
    else {
      alert("Error: Negative Result.");
    }
  }

  const Clearfct = () => {
    setNumber(number = 0);
  }

  const numberTaker = (e) => {
    setNumOption(parseInt(e.target.value));
    //parseInt,parseFloat:to convet a string.
  }

  const numberTaker2 = (e) => {
    setNumOption2(parseInt(e.target.value));
    console.log(parseInt(e.target.value));
  }

  const numberTaker3 = (e) => {
    setNumOption3(parseInt(e.target.value));
    console.log(parseInt(e.target.value));
  }


  return (
    <div className='App'>
      {/* SelectCounters */}
      <div className='Selector'>
        <SelectCounter pnumOption={numOption} pnumberTaker={numberTaker} poptions={options} />
        <SelectCounter2 pnumOption2={numOption2} pnumberTaker2={numberTaker2} poptions={options} />
        <SelectCounter3 pnumOption3={numOption3} pnumberTaker3={numberTaker3} poptions={options} />
      </div>

      <div className='number'>{number}</div>
      {/* clear button */}
      <div className='Clear'><ClearButton pClearFct={Clearfct} /> </div>

      <div className='Buttons'>
        {/* Add Buttons */}
        <div className='AddButtons'>
          <AddButton bAdd={Add} pnumOption={numOption} />
          <AddButton2 bAdd2={Add2} pnumOption2={numOption2} />
          <AddButton3 bAdd3={Add3} pnumOption3={numOption3} />
        </div>

        <div className='SubButtons'>
          {/* Sub Buttons */}
          <SubButton bSubtract={Subtract} pnumOption={numOption} />
          <SubButton2 bSubtract2={Subtract2} pnumOption2={numOption2} />
          <SubButton3 bSubtract3={Subtract3} pnumOption3={numOption3} />
        </div>
      </div>
    </div >
  );
}

export default App;
