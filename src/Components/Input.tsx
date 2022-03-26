
const Input = (props: any) => {

    return (
        <div className="input-container">
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} name={props.name} value={props.value} onChange={props.onChange} max={props.max || undefined } min={props.min || undefined}  />
        </div>
    );
}

export default Input;