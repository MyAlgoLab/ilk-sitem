// Türkiye'nin 81 İli (API'mizin dağıtacağı veri)
const iller = [
    { plaka: "01", ad: "Adana" }, { plaka: "02", ad: "Adıyaman" }, { plaka: "03", ad: "Afyonkarahisar" },
    { plaka: "04", ad: "Ağrı" }, { plaka: "05", ad: "Amasya" }, { plaka: "06", ad: "Ankara" },
    { plaka: "07", ad: "Antalya" }, { plaka: "08", ad: "Artvin" }, { plaka: "09", ad: "Aydın" },
    { plaka: "10", ad: "Balıkesir" }, { plaka: "11", ad: "Bilecik" }, { plaka: "12", ad: "Bingöl" },
    { plaka: "13", ad: "Bitlis" }, { plaka: "14", ad: "Bolu" }, { plaka: "15", ad: "Burdur" },
    { plaka: "16", ad: "Bursa" }, { plaka: "17", ad: "Çanakkale" }, { plaka: "18", ad: "Çankırı" },
    { plaka: "19", ad: "Çorum" }, { plaka: "20", ad: "Denizli" }, { plaka: "21", ad: "Diyarbakır" },
    { plaka: "22", ad: "Edirne" }, { plaka: "23", ad: "Elazığ" }, { plaka: "24", ad: "Erzincan" },
    { plaka: "25", ad: "Erzurum" }, { plaka: "26", ad: "Eskişehir" }, { plaka: "27", ad: "Gaziantep" },
    { plaka: "28", ad: "Giresun" }, { plaka: "29", ad: "Gümüşhane" }, { plaka: "30", ad: "Hakkari" },
    { plaka: "31", ad: "Hatay" }, { plaka: "32", ad: "Isparta" }, { plaka: "33", ad: "Mersin" },
    { plaka: "34", ad: "İstanbul" }, { plaka: "35", ad: "İzmir" }, { plaka: "36", ad: "Kars" },
    { plaka: "37", ad: "Kastamonu" }, { plaka: "38", ad: "Kayseri" }, { plaka: "39", ad: "Kırklareli" },
    { plaka: "40", ad: "Kırşehir" }, { plaka: "41", ad: "Kocaeli" }, { plaka: "42", ad: "Konya" },
    { plaka: "43", ad: "Kütahya" }, { plaka: "44", ad: "Malatya" }, { plaka: "45", ad: "Manisa" },
    { plaka: "46", ad: "Kahramanmaraş" }, { plaka: "47", ad: "Mardin" }, { plaka: "48", ad: "Muğla" },
    { plaka: "49", ad: "Muş" }, { plaka: "50", ad: "Nevşehir" }, { plaka: "51", ad: "Niğde" },
    { plaka: "52", ad: "Ordu" }, { plaka: "53", ad: "Rize" }, { plaka: "54", ad: "Sakarya" },
    { plaka: "55", ad: "Samsun" }, { plaka: "56", ad: "Siirt" }, { plaka: "57", ad: "Sinop" },
    { plaka: "58", ad: "Sivas" }, { plaka: "59", ad: "Tekirdağ" }, { plaka: "60", ad: "Tokat" },
    { plaka: "61", ad: "Trabzon" }, { plaka: "62", ad: "Tunceli" }, { plaka: "63", ad: "Şanlıurfa" },
    { plaka: "64", ad: "Uşak" }, { plaka: "65", ad: "Van" }, { plaka: "66", ad: "Yozgat" },
    { plaka: "67", ad: "Zonguldak" }, { plaka: "68", ad: "Aksaray" }, { plaka: "69", ad: "Bayburt" },
    { plaka: "70", ad: "Karaman" }, { plaka: "71", ad: "Kırıkkale" }, { plaka: "72", ad: "Batman" },
    { plaka: "73", ad: "Şırnak" }, { plaka: "74", ad: "Bartın" }, { plaka: "75", ad: "Ardahan" },
    { plaka: "76", ad: "Iğdır" }, { plaka: "77", ad: "Yalova" }, { plaka: "78", ad: "Karabük" },
    { plaka: "79", ad: "Kilis" }, { plaka: "80", ad: "Osmaniye" }, { plaka: "81", ad: "Düzce" }
];

exports.handler = async function(event, context) {
    // Sadece GET isteklerine izin verelim, diğer metotlara kapatalım
    if (event.httpMethod !== "GET") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Yalnızca GET istekleri desteklenmektedir." })
        };
    }

    // CORS başlıklarını ekliyoruz (Böylece başka siteler veya mobil uygulamalar da bizim API'ye istek atabilir)
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET"
    };

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(iller)
    };
};