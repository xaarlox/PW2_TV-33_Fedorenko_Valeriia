//Файл містить компонент EmissionForm, який дозволяє користувачу ввести кількість використаного палива для розрахунку викидів

import { useState } from 'react';

const initialState = {
    coalAmount: '',
    mazutAmount: '',
    gasAmount: ''
}

export function EmissionForm({ onCalculate }) {
    const [formData, setFormData] = useState(initialState);

    //Функція, що оновлює стан відповідно до введених даних
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //Функція, яка запобігає стандартній поведінці форми та передає введені дані у функцію onCalculate
    const handleSubmit = (event) => {
        event.preventDefault();
        onCalculate(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Кількість вугілля (т):</label>
                <input type="number" name="coalAmount" value={formData.coalAmount} onChange={handleChange} required/>
            </div>
            <div className="form-group">
                <label>Кількість мазуту (т):</label>
                <input type="number" name="mazutAmount" value={formData.mazutAmount} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Кількість природного газу (тис. м<sup>3</sup>):</label>
                <input type="number" name="gasAmount" value={formData.gasAmount} onChange={handleChange} required />
            </div>
            <button type="submit">Розрахувати викиди</button>
        </form>
    );
}