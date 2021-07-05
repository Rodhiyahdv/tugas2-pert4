// Soal No. 1
// Buat conditional IF .. ELSE IF yang menggambarkan divisi pada STARTUP. 
// (CEO, CTO, HR, PROGRAMMER)
//     * Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru

// Jawaban No. 1
let divisi = "CEO";
if (divisi === "CEO"){
    console.log ("Jika saya sebagai CEO maka tugas saya adalah membangun hubungan dengan investor");
} else if (divisi === "CTO"){
    console.log ("Jika saya sebagai CTO maka tugas saya adalah mengelola pengembangan produk");
} else if (divisi === "HR"){
    console.log ("Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru");
} else if (divisi === "PROGRAMMER"){
    console.log ("Jika saya sebagai PROGRAMMER maka tugas saya adalah menciptakan sebuah kode");
} else {
    console.log ("Divisi belum terdaftar");
}


// Soal No. 2
// Buat conditional untuk membandingkan 2 buah nilai. Tampilkan apakah salah satu nilai misal a lebih besar dari b,
// a lebih kecil dari b, dan a sama dengan b.

// Jawaban No. 2
let nilai1 = 5;
let nilai2 = 8;
if (nilai1 > nilai2){
    console.log (nilai1 + " lebih besar dari " + nilai2);
} else if (nilai1 < nilai2){
    console.log (nilai1 + " lebih kecil dari " + nilai2);
} else {
    console.log (nilai1 + " sama dengan " + nilai2);
}

// Soal No. 3
// Gunakan switch case untuk mengetahui nama hari berdasarkan angka.
//      * Hari minggu dimulai dari angka 1 dan seterusnya

// Jawaban No. 3
let hari = 1;
switch (hari){
    case 1: {
        console.log ("Hari ini adalah hari Minggu");
        break;
    }
    case 2: {
        console.log ("Hari ini adalah hari Senin");
        break;
    }
    case 3: {
        console.log ("Hari ini adalah hari Selasa");
        break;
    }
    case 4: {
        console.log ("Hari ini adalah hari Rabu");
        break;
    }
    case 5: {
        console.log ("Hari ini adalah hari Kamis");
        break;
    }
    case 6: {
        console.log ("Hari ini adalah hari Jumat");
        break;
    }
    case 7: {
        console.log ("Hari ini adalah hari Sabtu");
        break;
    }
    default: {
        console.log ("Tidak ada nama hari untuk angka " + hari);
    }
}

// Soal No. 4
// Gunakan switch case untuk membuat sebuah game sederhana.
// UP => Karakter berjalan keatas.
// RIGHT => Karakter berjalan kekanan.
// BOTTOM => Karakter berjalan kebawah.
// LEFT => Karakter berjalan kekiri.

// Jawaban No. 4
let arah = "UP";
switch (arah){
    case "UP": {
        console.log ("Karakter berjalan keatas");
        break;
    }
    case "RIGHT": {
        console.log ("Karakter berjalan kekanan");
        break;
    }
    case "BOTTOM": {
        console.log ("Karakter berjalan kebawah");
        break;
    }
    case "LEFT": {
        console.log ("Karakter berjalan kekiri");
        break;
    }
    default : {
        console.log ("Arah tidak diketahui")
    }
}