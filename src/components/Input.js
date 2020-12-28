import React from 'react'

const Input = ({label, id, onChange, value, type="text"}) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                onChange={onChange}
                type={type} 
                className="form-control" 
                placeholder={label} 
                value={value} />
        </div>
    )
}

export default Input;