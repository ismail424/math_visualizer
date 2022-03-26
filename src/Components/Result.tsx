import Latex from "react-latex-next";

const Result = (props: any) => {
    if (props.result) {
        const DIGITS: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let value_array: string[] = props.value.split("");
        let value_in_base_10: number = parseInt(props.value, props.base);

        let final_result_array: string[] = [];
        let long_answer:any = [];
        let result_desc = value_in_base_10;
        let count = 1;
        while (result_desc > 0) {
            // Get the remainder of the result
            let remainder = result_desc % props.baseTo;
            long_answer.push({id: count, remainder: DIGITS.indexOf(DIGITS[remainder]), result_desc: result_desc});
           
            // Add the remainder to the result
            final_result_array.push(DIGITS[remainder]);
            
            // Remove the remainder from the result
            result_desc = Math.floor(result_desc / props.baseTo);

            count += 1;
        }

        return (
            <div className="result">
                <div className="result-header">
                    <h1>Long Anwer:</h1>
                </div>
                <div className="result-step">
                    <h2>Step 1 - Convert Value to base 10</h2>
                    <div className="result-step-content">
                        {value_array.map((char: string, index: number) => {
                            return(
                                <>
                                    <Latex key={index}>{`$${DIGITS.indexOf(char.toUpperCase())}*${props.base}^{${value_array.length -1 - index}}$`}</Latex>
                                    <p className="space">{ index === 0 && `+` }</p>
                                </>
                            );
                        })}
                        <p>= {value_in_base_10}</p>
                    </div>
                    <h2>Step 2 - Convert previous result to base {props.baseTo}</h2>
                    <div className="result-step-content newline">
                        {
                            long_answer.map((item: any, index: number) => {
                                return(
                                    <>
                                        <Latex key={index}>{`$${item.result_desc}mod(${props.baseTo}) = ${item.remainder}$`}</Latex>
                                    </>
                                );
                            }
                            )
                        }
                        <p>= {final_result_array.reverse()}</p>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}

export default Result;