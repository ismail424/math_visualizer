
const convertBase = (value: number, from_base: number, to_base: number) => {
  // The maximum number of digits we can convert is the length of the, example A = 10 and Z = 35
  const DIGITS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (from_base < 2 || from_base > 36 || to_base < 2 || to_base > 36) {
    // return NaN if base is not between 2 and 36
    return null;
  }

  let result: string = '';
  let number = value;

  while (number > 0) {
    result += DIGITS.charAt(number % to_base);
    number = Math.floor(number / to_base);
  }
  return result;
}


function App() {
  return (
    <>
      <p>{convertBase(255, 10, 16)}</p>
    </>
  );
}

export default App;
