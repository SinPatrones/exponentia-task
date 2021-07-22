function Input(props){

    return (
        <div className="form-group">
            <label htmlFor={props.nameInput} className="labelForm">{props.labelTitle}</label>
            <input
                type="text"
                name={props.nameInput}
                id={props.nameInput}
                className="form-control"
                onChange={props.funcOnChange}
                value={props.value}
                defaultValue={props.defaulValue}
            />
        </div>
    );
}

export default Input;
