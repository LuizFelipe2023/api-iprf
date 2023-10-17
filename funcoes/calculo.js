const retornaInss = (salarioBruto) => {
    const salario = parseFloat(salarioBruto);
    if (salario <= 1320) {
        return salario * (7.5 / 100);
    } else if (salario > 1320 && salario <= 2571.29) {
        return salario * (9 / 100);
    } else if (salario > 2571.29 && salario <= 3856.94) {
        return salario * (12 / 100);
    } else if (salario > 3856.94 && salario <= 7507.49) {
        return salario * (14 / 100);
    } else {
        return 7507.49 * (14 / 100);
    }
};

const retornaIPRF = (salarioBruto) => {
    const salario = parseFloat(salarioBruto);
    if (isNaN(salario) || salario === null) {
        return { error: "O parametro do salario bruto e invalido" };
    } else if (salario < 2112) {
        return 0;
    } else if (salario >= 2112 && salario <= 2826.65) {
        return (salario * 0.075) - retornaInss(salario);
    } else if (salario > 2826.65 && salario <= 3751.05) {
        return (salario * 0.15) - retornaInss(salario);
    } else if (salario > 3751.05 && salario <= 4664.68) {
        return (salario * 0.225) - retornaInss(salario);
    } else {
        return (salario * 0.275) - retornaInss(salario);
    }
};


export { retornaInss, retornaIPRF };
