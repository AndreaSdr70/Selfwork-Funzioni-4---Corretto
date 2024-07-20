function controlstring(stringa) {
    stringa = stringa.replace(/\W/g, "");
    
    let reversed = stringa.split('').reverse().join('')
    

    if(stringa == reversed){
        return true
    }else {
        return false
    }
}
console.log(controlstring('i topi non avevano nipoti'));

