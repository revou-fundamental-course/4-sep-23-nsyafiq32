function hitung(){
    var sisi, L, K; 
    sisi = parseInt(document.getElementById("inputField").value);

    L = sisi * sisi;
    K = 4 * sisi;

    // console.log(L, K);
    document.getElementById("Luas").value = L;
    document.getElementById("Keliling").value = K;
}

function reset(){
    document.getElementById("inpurField").reset();
}