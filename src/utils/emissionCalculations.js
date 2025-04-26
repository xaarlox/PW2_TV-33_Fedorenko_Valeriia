//Функція для розрахунку валових викидів твердих частинок під час спалювання різних видів палива

export function calculateEmissions(formData) {
    const { coalAmount, mazutAmount, gasAmount } = formData

    //Нижча теплота згоряння, МДж/кг
    const Qr_coal = 20.47;
    const Qr_mazut = 39.48;
    const Qr_gas = 33.08;

    //Показник емісії, г/ГДж
    const k_tv_coal = 150;
    const k_tv_mazut = 0.57;
    const k_tv_gas = 0;

    //Густина газу, кг/м^3
    const gas_density = 0.273;

    const B_coal = parseFloat(coalAmount) || 0;
    const B_mazut = parseFloat(mazutAmount) || 0;
    const B_gas = parseFloat(gasAmount) || 0;

    //Валові викиди, т
    const E_coal = 1e-6 * k_tv_coal * Qr_coal * B_coal;
    const E_mazut = 1e-6 * k_tv_mazut * Qr_mazut * B_mazut;
    const E_gas = 1e-6 * k_tv_gas * Qr_gas * B_gas * 1000 * gas_density;

    //Розрахунок загального викиду
    const totalEmissions = E_coal + E_mazut + E_gas;

    return {
        emissions: {
            E_coal: E_coal.toFixed(2),
            E_mazut: E_mazut.toFixed(2),
            E_gas: E_gas,
            total: totalEmissions.toFixed(2)
        },
        constants: {
            k_tv_coal,
            k_tv_mazut,
            k_tv_gas
        }
    };
}