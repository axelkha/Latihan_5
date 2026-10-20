import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan massa benda (m): ", (massa) => {
    rl.question("Masukkan gaya benda (F): ", (gaya) => {
        rl.question("Masukkan perpindahan benda (s): ", (perpindahan) => {
            rl.question("Masukkan sudut antar perpindahan dan gaya (a): ", (sudut) => {

                const m = Number(massa);
                const F = Number(gaya);
                const s = Number(perpindahan);
                const a = Number(sudut);

                // Rumus usaha: W = F × cos(a) × s
                const W = F * Math.cos(a * Math.PI / 180) * s;

                console.log("Nilai usaha (W) adalah " + W.toFixed(1) + " Joule");

                rl.close();
            });
        });
    });
});