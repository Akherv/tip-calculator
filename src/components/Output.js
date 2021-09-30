import '../styles/Output.css';

function Output({bill, setBill, tip, setTip, customTip, setCustomTip, people, setPeople, tipAmount, setTipAmount, total, setTotal}) {


  function calculateAmount(bill, tip, customTip, people) {
    const result = ((parseFloat(bill)* ((tip || parseFloat(customTip))/100)) / parseInt(people))
    setTipAmount(result)
    return result.toFixed(2);
  }

  function calculateTotal(bill, tipAmount,people) {
    console.log(tipAmount)
    const result = (parseFloat(bill)/parseInt(people)) + tipAmount
    console.log(people)
    return result.toFixed(2);
  }



  function ResetInputs() {
    console.log('ok')
    setBill("")
    setTip("")
    setCustomTip("")
    setPeople("")
  }

  return (
    <div className="Output">
      <div className="Result TipAmount">
        <h2>Tip Amount <br/><span>/ person</span></h2>
        <div className=" Result-item  TipAmount-result">
        { (bill && (bill.length >0) && 
          people && (people.length >0) && 
          ((tip && (tip > 0)) || (customTip && (customTip.length >0)))
          ) ?
          <span>
          $
          {calculateAmount(bill, tip, customTip, people)}
          </span>
          :  
          <span>
          $0.00 
          </span>
          }
          </div>
      </div>
      <div className="Result Total">
        <h2>Total <br/><span>/ person</span></h2>
        <div className=" Result-item Total-result">
          { (bill && (bill.length >0) && 
          people && (people.length >0)
          ) ?
          <span>
          $
          {calculateTotal(bill,tipAmount,people)}
          </span>
          :  
          <span>
          $0.00 
          </span>
          }
          </div>
      </div>

      <button onClick={ResetInputs}>RESET</button>
      

      
    </div>
  );
}

export default Output;
