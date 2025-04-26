//Файл містить компонент ResultsDisplay, який відповідає за відображення результатів розрахунку викидів після того, як вони були обчислені

export function ResultsDisplay({ results }) {
    if (!results) return null;

    const { emissions, constants } = results;

    const fuelData = [
        { type: 'Вугілля', emission: emissions.E_coal, k_tv: constants.k_tv_coal },
        { type: 'Мазут', emission: emissions.E_mazut, k_tv: constants.k_tv_mazut },
        { type: 'Газ', emission: emissions.E_gas, k_tv: constants.k_tv_gas },
    ];

    return (
        <div className="results-container">
            <h3>Результати розрахунку</h3>
            <table>
                <thead>
                    <tr>
                        <th>Тип палива</th>
                        <th>Валовий викид (тонн)</th>
                        <th>Показник емісії (k<sub>тв</sub>)</th>
                    </tr>
                </thead>
                <tbody>
                    {fuelData.map((fuel, index) => (
                        <tr key={index}>
                            <td>{fuel.type}</td>
                            <td>{fuel.emission}</td>
                            <td>{fuel.k_tv}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="result-item" style={{ marginTop: '1rem' }}>
                <span><strong>Загальні викиди:</strong></span>
                <span className="bold">{emissions.total}</span>
            </div>
        </div>
    );
}