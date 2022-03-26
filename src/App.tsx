import  convertBase from './Utils/ConvertBase';
import Input from './Components/Input';
import Error from './Components/Error';
import Result from './Components/Result';
import { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import Latex from "react-latex-next";
require('./App.css');

function App() {

  const [value, setValue] = useState<string>("FF");
  const [base, setBase] = useState<number>(16);
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
    <div className='container'>
      <h1>Base Converter</h1>
      <div className='base-converter-form'>
        <Input id="value-input" label="Enter a number" type="text" name="value" value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.value.length < 8) {
            setValue(e.target.value.toUpperCase());
          }
        }} />
        <Input id="base-input" label="From Base" type="number" name="base" value={base} min="2" max="36" onChange={(e: any) => {
            setBase(e.target.value);
        }} />
        <Input id="base-to-input" label="To Base" type="number" name="baseTo" value={baseTo} min="2" max="36" onChange={(e: any) => {
            setBaseTo(e.target.value);
        }} />
        <Error error={error} />
        <div id='view'>

        	<Latex>{`$${value.toUpperCase()}_{${base}} = ${result}_{${baseTo}}$`}</Latex> 

        </div>
      </div>

      <div className='result'>
        <Result result={result} value={value} base={base} baseTo={baseTo} />
			</div>

    </div>
  );
}



export default App;
