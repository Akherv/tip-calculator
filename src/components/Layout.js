import { useState } from 'react';
import '../styles/Layout.css';
import Input from './Input';
import Output from './Output';

function Layout() {

  const [bill,setBill] = useState();
  const [tip,setTip] = useState();
  const [customTip,setCustomTip] = useState();
  const [people,setPeople] = useState();
  const [tipAmount,setTipAmount] = useState();
  const [total,setTotal] = useState();

  console.log(bill,tip,customTip,people,tipAmount,total)

  return (
    <div className="Layout">
      <Input 
      bill={bill} 
      setBill={setBill} 
      tip={tip}
      setTip={setTip}
      customTip={customTip}
      setCustomTip={setCustomTip}
      people={people} 
      setPeople={setPeople}
      tipAmount={tipAmount}
      setTipAmount={setTipAmount}
      total={total}
      setTotal={setTotal}
      />
      <Output 
      bill={bill} 
      setBill={setBill} 
      tip={tip}
      setTip={setTip}
      customTip={customTip}
      setCustomTip={setCustomTip}
      people={people} 
      setPeople={setPeople}
      tipAmount={tipAmount}
      setTipAmount={setTipAmount}
      total={total}
      setTotal={setTotal}
      />
    </div>
  );
}

export default Layout;
