//Файл містить компонент EmissionCalculator, який керує всім процесом

import { useState } from 'react';
import { EmissionForm } from './EmissionForm';
import { ResultsDisplay } from './ResultsDisplay';
import { calculateEmissions } from '../utils/emissionCalculations';
import './EmissionCalculator.css';

export default function EmissionCalculator() {
    const [results, setResults] = useState(null);

    const handleCalculate = (FormData) => {
        const calculatedResults = calculateEmissions(FormData);
        setResults(calculatedResults);
    };

    return (
        <div className="emission-container">
            <h1>🌱 Екологічний калькулятор</h1>
            <h2>Розрахунок валових викидів</h2>
            <EmissionForm onCalculate={handleCalculate} />
            <ResultsDisplay results={results} />
        </div>
    );
}