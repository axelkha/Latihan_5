import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kecepatan awal benda (Vo): ", (voInput) => {
    rl.question("Masukkan percepatan benda (a): ", (aInput) => {
        rl.question("Waktu yang ditempuh benda (t): ", (tInput) => {

            const vo = Number(voInput);
            const a = Number(aInput);
            const t = Number(tInput);

            // Rumus kecepatan akhir: Vt = Vo + a × t
            const vt = vo + a * t;

            // Rumus jarak: s = Vo × t + 1/2 × a × t²
            const s = vo * t + (1 / 2) * a * Math.pow(t, 2);

            console.log(`Kecepatan benda (Vt) adalah ${vt.toFixed(1)} m/s`);
            console.log(`Jarak yang ditempuh benda (s) adalah ${s.toFixed(1)} m`);

            rl.close();
        });
    });
});