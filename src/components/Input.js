import '../styles/Input.css';

function Input({bill, setBill, tip, setTip, customTip, setCustomTip, people, setPeople}) {

  function handleInputBill(e) {
    setBill(e.target.value)
  }

  function handleInputPeople(e) {
    setPeople(e.target.value)
  }

  function handleInputCustom(e) {
    setCustomTip(e.target.value)
  }

  function handleBlur() {
    if({people} === 0) {
      console.log("can't be zéro")
    }
  }

  function preventNonNumericalInput(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
  
    if (!charStr.match(/^[0-9]*\.?[0-9]*$/))
      e.preventDefault();
  }


  return (
    <div className="Input">
      <div className="Input-item Input-bill">
         <label htmlFor="bill">Bill</label>
        <input 
        type="number" 
        name="bill" 
        id="bill" 
        placeholder="0"
        onChange={handleInputBill}
				value={bill}
        // step="0.01"
        // pattern="[0-9]*"
        onKeyPress={(e)=>preventNonNumericalInput(e)
        }
         />
      </div>
      <div className="Input-item Input-SelectTip">
            <label htmlFor="SelectTip">Select Tip %</label>
              <div className="Input-SelectTip-buttons">
                <input type="button" value="5%" onClick={()=>setTip(5)} className={tip===5 && customTip === undefined?'activeButton':null}/>
                <input type="button" value="10%" onClick={()=>setTip(10)} className={tip===10 && customTip === undefined?'activeButton':null} />
                <input type="button" value="15%" onClick={()=>setTip(15)} className={tip===15 && customTip === undefined?'activeButton':null}/>
                <input type="button" value="25%" onClick={()=>setTip(25)} className={tip===25 && customTip === undefined?'activeButton':null}/>
                <input type="button" value="50%" onClick={()=>setTip(50)} className={tip===50 && customTip === undefined?'activeButton':null}/>
                <input 
                type="number" 
                name="SelectTip" 
                id="SelectTip" 
                className="inputLast-selectTip"
                placeholder="Custom"
                onChange={handleInputCustom}
                value={customTip}
                onKeyPress={(e)=>preventNonNumericalInput(e)}
                />
              </div>
      </div>
      <div className="Input-item InputPeople">
        <label htmlFor="people">Number of People</label>
        <input 
        type="number" 
        name="people" 
        id="people" 
        placeholder="0" 
        onBlur={handleBlur}
        onChange={handleInputPeople}
				value={people}
        onKeyPress={(e)=>preventNonNumericalInput(e)}
        />
      </div>
    </div>
  );
}

export default Input;
