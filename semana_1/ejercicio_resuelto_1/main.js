function calcular(){
    let pc1 = parseInt(document.getElementById("pc_1").value || 0);
    let pc2 = parseInt(document.getElementById("pc_2").value || 0);
    let pc3 = parseInt(document.getElementById("pc_3").value || 0);
    let ef = parseInt(document.getElementById("ef_").value || 0);
    let promedioFinal = (pc1 + pc2 + pc3 + ef) / 4;
    console.log(promedioFinal);
    document.getElementById("resul").innerHTML = promedioFinal;  
    return promedioFinal;
}