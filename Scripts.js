console.log("Ajuda mesmo ele");
function calcularMedia() {
    
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    
    if (isNaN(nota1) || isNaN(nota2)) {
        document.getElementById("resultado").innerText = `Por favor, insira notas válidas!`;
        return;
    }

    
    const media = (nota1 + nota2) / 2;

    
    let resultado;
    if (media === 10) {
        resultado = "Aprovado com Distinção";
    } else if (media >= 7) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }

    
    document.getElementById("resultado").innerText = `Média: ${media.toFixed(1)} - ${resultado}`;
}
