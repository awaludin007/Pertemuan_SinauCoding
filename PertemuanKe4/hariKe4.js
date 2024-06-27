var totalBus = 10;
var busBeroperasi = 6;
var busLembur = 8;
var count = 1;

for(count ;count <= totalBus; count++ ){
    if(count == busLembur) {
        console.log("Bus transjakarta" + count + "sedang lembur.");
    }else if(count <= busBeroperasi){
        console.log("Bus transjakarta" + count + "beroperasi dengan baik.");
    }else{
        console.log("Bus transjakarta" + count + "sedang tidak beroperasi.");
    }
}

while(count <= totalBus){
    if(count == busLembur){
        console.log("Bus Transjakarta " + count + " sedang lembur");
    }else if (count <= busBerperasi) {
        console.log("Bus Transjakarta " + count + " sedang beroperasi denagn baik");
    } else {
        console.log("Bus Transjakarta " + count + " sedang tidak beroperasi");
    }   
    count++;
}