function Select(props){
    return (
        <div className="form-group">
            <label htmlFor={props.nameInput} className="labelForm">{props.labelTitle}</label>
            <select
                name={props.nameInput}
                id={props.nameInput}
                className="form-control"
                onChange={props.funcOnChange}
                value={props.value}
            >
                {
                    props.options.map((obj, idx) => {
                        return (
                            <option
                                key={props.nameInput + idx}
                                value={obj[props.valueOptionName]}
                            >
                                {obj[props.labelOptionName]}
                            </option>
                        );
                    })
                }
            </select>
        </div>
    );
}

export default Select;
