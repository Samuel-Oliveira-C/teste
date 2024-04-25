function numeroDoCelular(numeroCelular=5511961836915){
    let converterNumero= String(numeroCelular);
    let formatarNumero = ` (${converterNumero.slice(2,4)}) ${converterNumero.slice(4,9)}-${converterNumero.slice(9,13)} `;
    return formatarNumero;
}

function numeroDoCelular2(numeroCelular=5511961836915){
    let formatarNumero = ` (${String(numeroCelular).slice(2,4)}) ${String(numeroCelular).slice(4,9)}-${String(numeroCelular).slice(9,13)} `;
    return formatarNumero;
}




console.log(numeroDoCelular());


console.log(numeroDoCelular2());
