function getComputerChoice(){
    let pobjednik;
    let randomBroj= Math.floor(Math.random()*3)
        if(randomBroj===0){
            pobjednik = "Kamen";
        }
        else if(randomBroj===1) {
            pobjednik = "Škare";
        }
        else if(randomBroj===2) {
            pobjednik = "Papir";
        }
        return pobjednik;
    }
    
document.write(getComputerChoice())