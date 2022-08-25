import React, {useState} from 'react'

function App() {
  const [firstInput, setFirstInput] = useState("")
  const [secondInput, setSecondInput] = useState("")
  const [result, setResult] = useState("")
  const [op, setOp] = useState("add")

  const countHandler = (fst, snd) => {
    fetch(`/calculate?fst=${firstInput}&snd=${secondInput}&opp=${op}`).then(res => res.json()).then(data => setResult(data.ans))
  }

  const changeOpHandler = (event) => {
    setOp(event.target.value);
  };

  return (
    <div>
      <input type="text" value={firstInput} onInput={e => setFirstInput(e.target.value.replace(/\D/,''))}/>
      <select value={op} onChange={changeOpHandler}>
        <option value="add">+</option>
        <option value="sub">-</option>
        <option value="div">/</option>
        <option value="mult">*</option>
      </select>
      <input type="text" value={secondInput} onInput={e => setSecondInput(e.target.value.replace(/\D/,''))}/>
      =
      <input value={result} readOnly/>
      <button onClick={()=> countHandler(parseInt(firstInput),parseInt(secondInput))}>Count</button>
      
    </div>
  )
}

export default App