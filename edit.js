let sout;
sout = "<table border='1' width='1000' cellspacing='0' cellpadding='3'>"
for (let i = 1; i <= 10; i++) {
    sout = sout + "<tr>";
    for (let j = 2; j <= 9; j++) {
        sout = sout + "<td>" + j +" x "+ i +" = " + i*j + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);