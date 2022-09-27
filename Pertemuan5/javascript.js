var a;
for (a = 1; a <= 10; a++) {
  if (a <= 6) {
    console.log("Bus Transjakarta " + a + " Beroprasi Dengan Baik ");
  } else {
    if (a == 8) {
      console.log("Bus Transjakarta " + a + " Sedang Lembur");
    } else {
      console.log("Bus Transjakarta " + a + " Tidak Beroprasi Dengan Baik ");
    }
  }
}
