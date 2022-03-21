import  convertBase from './Utils/ConvertBase';
import Input from './Components/Input';
import { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState<string>("");
  const [base, setBase] = useState<number>(10);
  const [baseTo, setBaseTo] = useState<number>(10);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    try {
      setResult(convertBase(value, base, baseTo));
      setError("");
    }
    catch (e: any) {
      setResult("");
      setError(e.message.toString());
    }
  }, [value, base, baseTo]);

  return (
    <>
      <h1>Convert Base</h1>
      <Input id="value-input" label="Value" type="text" name="value" value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);

      }} />
      <Input id="base-input" label="Base" type="number" name="base" value={base} onChange={(e: any) => {
          setBase(e.target.value);
      }} />
      <Input id="base-to-input" label="Base To" type="number" name="baseTo" value={baseTo} onChange={(e: any) => {
          setBaseTo(e.target.value);
      }} />

    
      <p>Result: {result}</p>
      <p>{error}</p>
    </>
  );
}

export default App;
