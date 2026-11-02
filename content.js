// Konten bacaan untuk menu navbar: Tahlil, Doa, Wirid, Maulid, Hadits.
// Setiap bacaan: { summary, intro, parts:[{title, arabic, latin, translation, repeat, source, note, ref}], source }
// Catatan: teks disusun dari rujukan umum dan dicantumkan sumbernya. Mohon cocokkan dengan mushaf / kitab
// yang Anda pakai sebelum dipublikasikan, terutama untuk harakat dan redaksi tradisi yang berbeda antardaerah.

const p = (title, arabic, latin, translation, extra = {}) => ({ title, arabic, latin, translation, ...extra });

/* ---------- Ayat & surat yang dipakai berulang ---------- */
const FATIHAH = p(
  "Al-Fatihah",
  "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
  "Bismillaahir-rahmaanir-rahiim. Alhamdu lillaahi rabbil-'aalamiin. Ar-rahmaanir-rahiim. Maaliki yawmid-diin. Iyyaaka na'budu wa iyyaaka nasta'iin. Ihdinash-shiraathal-mustaqiim. Shiraathal-ladziina an'amta 'alaihim ghairil-maghdhuubi 'alaihim wa lad-dhaalliin.",
  "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam. Yang Maha Pengasih, Maha Penyayang. Pemilik hari pembalasan. Hanya kepada-Mu kami menyembah dan hanya kepada-Mu kami memohon pertolongan. Tunjukilah kami jalan yang lurus, (yaitu) jalan orang-orang yang telah Engkau beri nikmat, bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat.",
  { source: "QS. Al-Fatihah [1]: 1–7" }
);
const IKHLAS = p(
  "Surat Al-Ikhlas",
  "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
  "Qul huwallaahu ahad. Allaahush-shamad. Lam yalid wa lam yuulad. Wa lam yakul lahuu kufuwan ahad.",
  "Katakanlah (Muhammad), “Dialah Allah, Yang Maha Esa. Allah tempat meminta segala sesuatu. (Allah) tidak beranak dan tidak pula diperanakkan. Dan tidak ada sesuatu yang setara dengan Dia.”",
  { source: "QS. Al-Ikhlas [112]: 1–4" }
);
const FALAQ = p(
  "Surat Al-Falaq",
  "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
  "Qul a'uudzu birabbil-falaq. Min syarri maa khalaq. Wa min syarri ghaasiqin idzaa waqab. Wa min syarrin-naffaatsaati fil-'uqad. Wa min syarri haasidin idzaa hasad.",
  "Katakanlah, “Aku berlindung kepada Tuhan yang menguasai subuh (fajar), dari kejahatan (makhluk yang) Dia ciptakan, dari kejahatan malam apabila telah gelap gulita, dari kejahatan (perempuan-perempuan) penyihir yang meniup pada buhul-buhul (talinya), dan dari kejahatan orang yang dengki apabila dia dengki.”",
  { source: "QS. Al-Falaq [113]: 1–5" }
);
const NAS = p(
  "Surat An-Nas",
  "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",
  "Qul a'uudzu birabbin-naas. Malikin-naas. Ilaahin-naas. Min syarril-waswaasil-khannaas. Alladzii yuwaswisu fii shuduurin-naas. Minal-jinnati wan-naas.",
  "Katakanlah, “Aku berlindung kepada Tuhannya manusia, Raja manusia, sembahan manusia, dari kejahatan (bisikan) setan yang bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia, dari (golongan) jin dan manusia.”",
  { source: "QS. An-Nas [114]: 1–6" }
);
const KURSI = p(
  "Ayat Kursi",
  "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
  "Allaahu laa ilaaha illaa huwal-hayyul-qayyuum. Laa ta'khudzuhuu sinatuw wa laa naum. Lahuu maa fis-samaawaati wa maa fil-ardh. Man dzal-ladzii yasyfa'u 'indahuu illaa bi-idznih. Ya'lamu maa baina aidiihim wa maa khalfahum. Wa laa yuhiithuuna bisyai-im min 'ilmihii illaa bimaa syaa-a. Wasi'a kursiyyuhus-samaawaati wal-ardh. Wa laa ya-uuduhuu hifzhuhumaa, wa huwal-'aliyyul-'azhiim.",
  "Allah, tidak ada tuhan selain Dia. Yang Maha Hidup, Yang terus-menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang di hadapan mereka dan apa yang di belakang mereka, dan mereka tidak mengetahui sesuatu apa pun dari ilmu-Nya melainkan apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi. Dan Dia tidak merasa berat memelihara keduanya, dan Dia Mahatinggi, Mahabesar.",
  { source: "QS. Al-Baqarah [2]: 255" }
);
const IBRAHIMIYAH = p(
  "Shalawat Ibrahimiyah",
  "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
  "Allaahumma shalli 'alaa Muhammadin wa 'alaa aali Muhammad, kamaa shallaita 'alaa Ibraahiima wa 'alaa aali Ibraahiim, innaka hamiidum majiid. Allaahumma baarik 'alaa Muhammadin wa 'alaa aali Muhammad, kamaa baarakta 'alaa Ibraahiima wa 'alaa aali Ibraahiim, innaka hamiidum majiid.",
  "Ya Allah, limpahkanlah shalawat kepada Muhammad dan keluarga Muhammad, sebagaimana Engkau telah melimpahkan shalawat kepada Ibrahim dan keluarga Ibrahim; sesungguhnya Engkau Maha Terpuji lagi Maha Mulia. Ya Allah, limpahkanlah berkah kepada Muhammad dan keluarga Muhammad, sebagaimana Engkau telah melimpahkan berkah kepada Ibrahim dan keluarga Ibrahim; sesungguhnya Engkau Maha Terpuji lagi Maha Mulia.",
  { source: "HR. Bukhari dan Muslim (shalawat dalam tasyahud akhir)" }
);

/* ---------- Isi per bacaan ---------- */
export const contents = {
  /* ===================== TAHLIL ===================== */
  "tahlil-1": {
    summary: "Rangkaian dzikir dan doa untuk mendoakan almarhum/almarhumah",
    intro: "Tahlil adalah rangkaian bacaan Al-Qur'an, dzikir, dan doa yang diamalkan untuk mendoakan orang yang telah wafat, dengan inti kalimat tauhid “Laa ilaaha illallaah”. Susunan di bawah ini adalah susunan yang umum dipakai; urutan dan kelengkapan bisa berbeda antardaerah. Surat Yasin biasanya dibaca terlebih dahulu dari mushaf.",
    parts: [
      p("1. Tawassul / hadiah Fatihah kepada Nabi ﷺ",
        "إِلَى حَضْرَةِ النَّبِيِّ الْمُصْطَفَى مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى آلِهِ وَأَصْحَابِهِ وَأَزْوَاجِهِ وَذُرِّيَّاتِهِ وَأَهْلِ بَيْتِهِ أَجْمَعِينَ، شَيْءٌ لِلَّهِ لَهُمُ الْفَاتِحَةُ",
        "Ilaa hadhratin-nabiyyil-mushthafaa Muhammadin shallallaahu 'alaihi wa sallam, wa 'alaa aalihi wa ash-haabihi wa azwaajihi wa dzurriyyaatihi wa ahli baitihi ajma'iin, syai-un lillaahi lahumul-Faatihah.",
        "Kepada yang mulia Nabi pilihan, Muhammad ﷺ, beserta keluarga, para sahabat, istri-istri, keturunan, dan seluruh ahli baitnya — sesuatu karena Allah, bagi mereka Al-Fatihah.",
        { source: "Susunan tradisi (bukan teks Al-Qur'an/hadits); redaksi bisa berbeda antardaerah", note: "Dilanjutkan membaca Al-Fatihah (bagian 3)." }),
      p("2. Hadiah Fatihah untuk almarhum/almarhumah",
        "ثُمَّ إِلَى رُوحِ ........ (sebut nama) ........ شَيْءٌ لِلَّهِ لَهُ الْفَاتِحَةُ",
        "Tsumma ilaa ruuhi ........ (sebut nama) ........ syai-un lillaahi lahul-Faatihah.",
        "Kemudian kepada ruh ........ (sebut nama) ........ — sesuatu karena Allah, baginya Al-Fatihah.",
        { source: "Susunan tradisi", note: "Gunakan “lahaa” untuk perempuan dan “lahum” untuk beberapa orang. Dilanjutkan membaca Al-Fatihah." }),
      p("3. Al-Fatihah", FATIHAH.arabic, FATIHAH.latin, FATIHAH.translation, { source: FATIHAH.source }),
      p("4. Surat Al-Ikhlas", IKHLAS.arabic, IKHLAS.latin, IKHLAS.translation, { repeat: "3×", source: IKHLAS.source }),
      p("5. Surat Al-Falaq", FALAQ.arabic, FALAQ.latin, FALAQ.translation, { source: FALAQ.source }),
      p("6. Surat An-Nas", NAS.arabic, NAS.latin, NAS.translation, { source: NAS.source }),
      p("7. Al-Baqarah ayat 1–5",
        "الم ۝ ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ ۝ الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ ۝ وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ ۝ أُولَئِكَ عَلَى هُدًى مِنْ رَبِّهِمْ وَأُولَئِكَ هُمُ الْمُفْلِحُونَ",
        "Alif laam miim. Dzaalikal-kitaabu laa raiba fiih, hudal lil-muttaqiin. Alladziina yu'minuuna bil-ghaibi wa yuqiimuunash-shalaata wa mimmaa razaqnaahum yunfiquun. Wal-ladziina yu'minuuna bimaa unzila ilaika wa maa unzila min qablika wa bil-aakhirati hum yuuqinuun. Ulaa-ika 'alaa hudam mir-rabbihim wa ulaa-ika humul-muflihuun.",
        "Alif Lam Mim. Kitab (Al-Qur'an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa, (yaitu) mereka yang beriman kepada yang gaib, melaksanakan salat, dan menginfakkan sebagian rezeki yang Kami anugerahkan kepada mereka, dan mereka yang beriman kepada (Al-Qur'an) yang diturunkan kepadamu (Muhammad) dan (kitab-kitab) yang diturunkan sebelummu, serta mereka yakin akan adanya akhirat. Merekalah yang tetap mendapat petunjuk dari Tuhannya, dan merekalah orang-orang yang beruntung.",
        { source: "QS. Al-Baqarah [2]: 1–5" }),
      p("8. Ayat Kursi", KURSI.arabic, KURSI.latin, KURSI.translation, { source: KURSI.source }),
      p("9. Al-Baqarah ayat 284–286",
        "لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَإِنْ تُبْدُوا مَا فِي أَنْفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُمْ بِهِ اللَّهُ فَيَغْفِرُ لِمَنْ يَشَاءُ وَيُعَذِّبُ مَنْ يَشَاءُ وَاللَّهُ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ۝ آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ۝ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
        "Lillaahi maa fis-samaawaati wa maa fil-ardh. Wa in tubduu maa fii anfusikum aw tukhfuuhu yuhaasibkum bihillaah. Fa-yaghfiru limay yasyaa-u wa yu'adzdzibu may yasyaa'. Wallaahu 'alaa kulli syai-in qadiir. Aamanar-rasuulu bimaa unzila ilaihi mir-rabbihii wal-mu'minuun. Kullun aamana billaahi wa malaa-ikatihii wa kutubihii wa rusulih. Laa nufarriqu baina ahadim mir-rusulih. Wa qaaluu sami'naa wa atha'naa ghufraanaka rabbanaa wa ilaikal-mashiir. Laa yukallifullaahu nafsan illaa wus'ahaa. Lahaa maa kasabat wa 'alaihaa maktasabat. Rabbanaa laa tu-aakhidznaa in nasiinaa aw akhtha'naa. Rabbanaa wa laa tahmil 'alainaa ishran kamaa hamaltahuu 'alal-ladziina min qablinaa. Rabbanaa wa laa tuhammilnaa maa laa thaaqata lanaa bih. Wa'fu 'annaa waghfir lanaa warhamnaa. Anta mawlaanaa fanshurnaa 'alal-qaumil-kaafiriin.",
        "Milik Allah apa yang ada di langit dan apa yang ada di bumi. Jika kamu nyatakan apa yang ada di dalam hatimu atau kamu sembunyikan, niscaya Allah memperhitungkannya (tentang perbuatan itu) bagimu. Dia mengampuni siapa yang Dia kehendaki dan mengazab siapa yang Dia kehendaki. Allah Mahakuasa atas segala sesuatu. Rasul (Muhammad) beriman kepada apa yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang mukmin. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, dan rasul-rasul-Nya. (Mereka berkata), “Kami tidak membeda-bedakan seorang pun dari rasul-rasul-Nya.” Dan mereka berkata, “Kami dengar dan kami taat. Ampunilah kami, ya Tuhan kami, dan kepada Engkaulah tempat kembali.” Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Dia mendapat (pahala) dari (kebajikan) yang dikerjakannya dan mendapat (siksa) dari (kejahatan) yang diperbuatnya. (Mereka berdoa), “Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami melakukan kesalahan. Ya Tuhan kami, janganlah Engkau bebani kami dengan beban yang berat sebagaimana Engkau bebankan kepada orang-orang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tidak sanggup kami memikulnya. Maafkanlah kami, ampunilah kami, dan rahmatilah kami. Engkaulah pelindung kami, maka tolonglah kami menghadapi orang-orang kafir.”",
        { source: "QS. Al-Baqarah [2]: 284–286" }),
      p("10. Istighfar",
        "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ",
        "Astaghfirullaahal-'azhiim.",
        "Aku memohon ampun kepada Allah Yang Maha Agung.",
        { repeat: "3×", source: "Dzikir istighfar (lihat juga halaman Wirid → Istighfar)" }),
      p("11. Shalawat",
        "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
        "Allaahumma shalli 'alaa sayyidinaa Muhammad wa 'alaa aali sayyidinaa Muhammad.",
        "Ya Allah, limpahkanlah shalawat kepada junjungan kami, Nabi Muhammad, dan kepada keluarga junjungan kami, Nabi Muhammad.",
        { repeat: "3×", source: "Shalawat (QS. Al-Ahzab [33]: 56)" }),
      p("12. Kalimat tahlil",
        "لَا إِلَهَ إِلَّا اللَّهُ",
        "Laa ilaaha illallaah.",
        "Tiada tuhan selain Allah.",
        { repeat: "dibaca berulang (mis. 33×, 100×, atau sesuai kebiasaan)", source: "Hadits: “Dzikir yang paling utama adalah Laa ilaaha illallaah” — HR. At-Tirmidzi dan Ibnu Majah" }),
      p("13. Tahlil dengan penyebutan kerasulan",
        "لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
        "Laa ilaaha illallaahu Muhammadur-rasuulullaah shallallaahu 'alaihi wa sallam.",
        "Tiada tuhan selain Allah, Muhammad adalah utusan Allah, semoga shalawat dan salam tercurah kepadanya.",
        { repeat: "3×", source: "Kalimat syahadat" }),
      p("14. Tasbih",
        "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",
        "Subhaanallaahi wa bihamdihi, subhaanallaahil-'azhiim.",
        "Mahasuci Allah dan dengan memuji-Nya; Mahasuci Allah Yang Maha Agung.",
        { repeat: "3×", source: "HR. Bukhari dan Muslim" }),
      p("15. Tasbih malaikat dan Jibril",
        "سُبُّوحٌ قُدُّوسٌ رَبُّنَا وَرَبُّ الْمَلَائِكَةِ وَالرُّوحِ",
        "Subbuuhun qudduusun rabbunaa wa rabbul-malaa-ikati war-ruuh.",
        "Mahasuci, Mahabersih, Tuhan kami dan Tuhan para malaikat serta Jibril.",
        { source: "HR. Muslim (aslinya bacaan ruku' dan sujud); dimasukkan dalam susunan tahlil menurut tradisi" }),
      p("16. Doa untuk almarhum/almarhumah",
        "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ",
        "Allaahummaghfir lahu warhamhu wa 'aafihi wa'fu 'anhu, wa akrim nuzulahu wa wassi' mudkhalahu, waghsilhu bil-maa-i wats-tsalji wal-barad.",
        "Ya Allah, ampunilah dia, rahmatilah dia, selamatkanlah dia, dan maafkanlah dia; muliakanlah tempat singgahnya, luaskanlah tempat masuknya, dan bersihkanlah dia dengan air, salju, dan embun.",
        { source: "HR. Muslim dari ‘Auf bin Malik (doa shalat jenazah)", note: "Untuk perempuan ganti “lahu/hu/‘anhu/nuzulahu/mudkhalahu” dengan “lahaa/haa/‘anhaa/nuzulahaa/mudkhalahaa”; untuk banyak orang gunakan “lahum/hum/‘anhum”." }),
      p("17. Doa sapu jagat",
        "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        "Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa 'adzaaban-naar.",
        "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.",
        { source: "QS. Al-Baqarah [2]: 201" }),
      p("18. Doa untuk saudara-saudara yang telah mendahului",
        "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَحِيمٌ",
        "Rabbanaaghfir lanaa wa li-ikhwaaninal-ladziina sabaquunaa bil-iimaan, wa laa taj'al fii quluubinaa ghillal lil-ladziina aamanuu, rabbanaa innaka ra-uufur-rahiim.",
        "Ya Tuhan kami, ampunilah kami dan saudara-saudara kami yang telah beriman lebih dahulu dari kami, dan janganlah Engkau tanamkan kedengkian dalam hati kami terhadap orang-orang yang beriman. Ya Tuhan kami, sungguh Engkau Maha Penyantun, Maha Penyayang.",
        { source: "QS. Al-Hasyr [59]: 10" }),
      p("19. Penutup: Al-Fatihah", FATIHAH.arabic, FATIHAH.latin, FATIHAH.translation, { source: FATIHAH.source, note: "Ditutup dengan membaca Al-Fatihah sebagaimana pembuka." }),
    ],
    source: "Susunan tradisi yang terdiri dari ayat Al-Qur'an dan dzikir dari hadits (sumber per bagian dicantumkan).",
  },

  /* ===================== DOA ===================== */
  "doa-1": {
    summary: "Basmalah dan doa sebelum menyantap makanan",
    parts: [
      p("Membaca basmalah", "بِسْمِ اللَّهِ", "Bismillaah.", "Dengan menyebut nama Allah.", { source: "HR. Abu Dawud dan At-Tirmidzi" }),
      p("Jika lupa di awal makan", "بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ", "Bismillaahi awwalahu wa aakhirahu.", "Dengan menyebut nama Allah di awal dan di akhirnya.", { source: "HR. Abu Dawud dan At-Tirmidzi" }),
      p("Doa yang masyhur diamalkan", "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ، بِسْمِ اللَّهِ", "Allaahumma baarik lanaa fiimaa razaqtanaa wa qinaa 'adzaaban-naar, bismillaah.", "Ya Allah, berkahilah rezeki yang Engkau berikan kepada kami dan lindungilah kami dari azab neraka. Dengan menyebut nama Allah.", { source: "Masyhur diamalkan; diriwayatkan Ibnu As-Sunni, sebagian ulama hadits menilai sanadnya lemah", note: "Jika ingin berpegang pada riwayat yang paling kuat, cukup membaca basmalah di atas." }),
    ],
    source: "Lihat sumber pada tiap bagian.",
  },
  "doa-2": {
    summary: "Doa syukur setelah selesai makan dan minum",
    parts: [
      p("Doa sesudah makan", "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ", "Alhamdu lillaahil-ladzii ath'amanaa wa saqaanaa wa ja'alanaa muslimiin.", "Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami orang-orang muslim.", { source: "HR. Abu Dawud dan At-Tirmidzi" }),
      p("Doa alternatif", "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ غَيْرَ مَكْفِيٍّ وَلَا مُوَدَّعٍ وَلَا مُسْتَغْنًى عَنْهُ رَبَّنَا", "Alhamdu lillaahi hamdan katsiiran thayyiban mubaarakan fiihi ghaira makfiyyin wa laa muwadda'in wa laa mustaghnan 'anhu rabbanaa.", "Segala puji bagi Allah, pujian yang banyak, baik, dan penuh berkah; (nikmat ini) tidak pernah cukup dari-Nya, tidak ditinggalkan, dan tidak dapat kami lepaskan dari-Nya, wahai Tuhan kami.", { source: "HR. Bukhari" }),
    ],
    source: "Lihat sumber pada tiap bagian.",
  },
  "doa-3": {
    summary: "Doa yang dibaca ketika hendak berbaring tidur",
    intro: "Sebelum tidur disunnahkan berwudhu, membaca Ayat Kursi, serta Al-Ikhlas, Al-Falaq, dan An-Nas (teksnya ada pada halaman Tahlil).",
    parts: [
      p("Doa sebelum tidur", "بِاسْمِكَ اللَّهُمَّ أَحْيَا وَبِاسْمِكَ أَمُوتُ", "Bismika Allaahumma ahyaa wa bismika amuut.", "Dengan nama-Mu ya Allah aku hidup dan dengan nama-Mu aku mati.", { source: "HR. Bukhari dari Hudzaifah" }),
      p("Doa tambahan", "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ", "Allaahumma qinii 'adzaabaka yauma tab'atsu 'ibaadak.", "Ya Allah, lindungilah aku dari azab-Mu pada hari Engkau membangkitkan hamba-hamba-Mu.", { source: "HR. Abu Dawud dan At-Tirmidzi" }),
    ],
    source: "Lihat sumber pada tiap bagian.",
  },
  "doa-4": {
    summary: "Doa syukur ketika terbangun dari tidur",
    parts: [
      p("Doa bangun tidur", "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", "Alhamdu lillaahil-ladzii ahyaanaa ba'da maa amaatanaa wa ilaihin-nusyuur.", "Segala puji bagi Allah yang menghidupkan kami setelah mematikan kami, dan kepada-Nya kami dibangkitkan.", { source: "HR. Bukhari dari Hudzaifah" }),
    ],
    source: "HR. Bukhari.",
  },
  "doa-5": {
    summary: "Doa ketika memasuki rumah",
    parts: [
      p("Doa masuk rumah", "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا", "Allaahumma innii as-aluka khairal-mauliji wa khairal-makhraj. Bismillaahi walajnaa, wa bismillaahi kharajnaa, wa 'alallaahi rabbinaa tawakkalnaa.", "Ya Allah, aku memohon kepada-Mu kebaikan tempat masuk dan kebaikan tempat keluar. Dengan nama Allah kami masuk, dengan nama Allah kami keluar, dan kepada Allah, Tuhan kami, kami bertawakal.", { source: "HR. Abu Dawud", note: "Setelah itu ucapkan salam kepada penghuni rumah." }),
    ],
    source: "HR. Abu Dawud.",
  },
  "doa-6": {
    summary: "Doa ketika keluar rumah",
    parts: [
      p("Doa keluar rumah", "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", "Bismillaah, tawakkaltu 'alallaah, wa laa hawla wa laa quwwata illaa billaah.", "Dengan nama Allah, aku bertawakal kepada Allah; tiada daya dan kekuatan kecuali dengan pertolongan Allah.", { source: "HR. Abu Dawud dan At-Tirmidzi" }),
      p("Doa perlindungan ketika keluar", "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ أَوْ أُضَلَّ، أَوْ أَزِلَّ أَوْ أُزَلَّ، أَوْ أَظْلِمَ أَوْ أُظْلَمَ، أَوْ أَجْهَلَ أَوْ يُجْهَلَ عَلَيَّ", "Allaahumma innii a'uudzu bika an adhilla aw udhalla, aw azilla aw uzalla, aw azhlima aw uzhlama, aw ajhala aw yujhala 'alayya.", "Ya Allah, aku berlindung kepada-Mu dari tersesat atau disesatkan, tergelincir atau digelincirkan, berbuat zalim atau dizalimi, berbuat bodoh atau dibodohi.", { source: "HR. Abu Dawud, At-Tirmidzi, dan An-Nasa'i dari Ummu Salamah" }),
    ],
    source: "Lihat sumber pada tiap bagian.",
  },
  "doa-7": {
    summary: "Doa memohon ilmu yang bermanfaat dan kelapangan hati",
    parts: [
      p("Memohon tambahan ilmu", "رَبِّ زِدْنِي عِلْمًا", "Rabbi zidnii 'ilmaa.", "Ya Tuhanku, tambahkanlah ilmu kepadaku.", { source: "QS. Thaha [20]: 114" }),
      p("Memohon kelapangan dada dan kemudahan urusan", "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي", "Rabbisyrah lii shadrii, wa yassir lii amrii, wahlul 'uqdatam mil lisaanii, yafqahuu qaulii.", "Ya Tuhanku, lapangkanlah dadaku, mudahkanlah urusanku, dan lepaskanlah kekakuan dari lidahku agar mereka mengerti perkataanku.", { source: "QS. Thaha [20]: 25–28" }),
      p("Memohon ilmu yang bermanfaat", "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا", "Allaahumman-fa'nii bimaa 'allamtanii, wa 'allimnii maa yanfa'unii, wa zidnii 'ilmaa.", "Ya Allah, berilah aku manfaat dengan ilmu yang Engkau ajarkan kepadaku, ajarkanlah kepadaku apa yang bermanfaat bagiku, dan tambahkanlah ilmu kepadaku.", { source: "HR. At-Tirmidzi dan Ibnu Majah" }),
    ],
    source: "Lihat sumber pada tiap bagian.",
  },
  "doa-8": {
    summary: "Doa penutup majelis ilmu dan permohonan ilmu bermanfaat",
    parts: [
      p("Kafaratul majelis (penutup majelis)", "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ", "Subhaanakallaahumma wa bihamdika, asyhadu al laa ilaaha illaa anta, astaghfiruka wa atuubu ilaik.", "Mahasuci Engkau ya Allah dan dengan memuji-Mu; aku bersaksi bahwa tiada tuhan selain Engkau; aku memohon ampun dan bertobat kepada-Mu.", { source: "HR. At-Tirmidzi dan Abu Dawud" }),
      p("Memohon ilmu, rezeki, dan amal yang diterima", "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا", "Allaahumma innii as-aluka 'ilman naafi'aa, wa rizqan thayyibaa, wa 'amalan mutaqabbalaa.", "Ya Allah, aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang baik, dan amal yang diterima.", { source: "HR. Ibnu Majah dan Ahmad dari Ummu Salamah" }),
    ],
    source: "Lihat sumber pada tiap bagian.",
  },
  "doa-9": {
    summary: "Doa memohonkan ampunan dan rahmat bagi ibu dan ayah",
    parts: [
      p("Rahmat bagi kedua orang tua", "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", "Rabbirhamhumaa kamaa rabbayaanii shaghiiraa.", "Ya Tuhanku, sayangilah keduanya sebagaimana mereka berdua telah mendidik aku pada waktu kecil.", { source: "QS. Al-Isra' [17]: 24" }),
      p("Ampunan bagi orang tua dan kaum mukminin", "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ", "Rabbanaghfir lii wa liwaalidayya wa lil-mu'miniina yauma yaquumul-hisaab.", "Ya Tuhan kami, ampunilah aku, kedua orang tuaku, dan semua orang mukmin pada hari diadakan perhitungan (hari Kiamat).", { source: "QS. Ibrahim [14]: 41" }),
      p("Bentuk gabungan yang populer", "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", "Rabbighfir lii wa liwaalidayya warhamhumaa kamaa rabbayaanii shaghiiraa.", "Ya Tuhanku, ampunilah aku dan kedua orang tuaku, dan sayangilah mereka sebagaimana mereka mendidik aku pada waktu kecil.", { source: "Gabungan populer dari QS. Nuh [71]: 28 dan QS. Al-Isra' [17]: 24" }),
    ],
    source: "Lihat sumber pada tiap bagian.",
  },
  "doa-10": {
    summary: "Doa ketika mulai bepergian",
    parts: [
      p("Doa naik kendaraan", "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ", "Subhaanal-ladzii sakhkhara lanaa haadzaa wa maa kunnaa lahuu muqriniin, wa innaa ilaa rabbinaa lamunqalibuun.", "Mahasuci Allah yang telah menundukkan (kendaraan) ini bagi kami padahal kami sebelumnya tidak mampu menguasainya, dan sungguh, kepada Tuhan kamilah kami akan kembali.", { source: "QS. Az-Zukhruf [43]: 13–14; HR. Muslim, Abu Dawud, At-Tirmidzi" }),
      p("Doa dalam perjalanan", "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ", "Allaahumma innaa nas-aluka fii safarinaa haadzal-birra wat-taqwaa, wa minal-'amali maa tardhaa. Allaahumma hawwin 'alainaa safaranaa haadzaa, wathwi 'annaa bu'dah.", "Ya Allah, kami memohon kepada-Mu dalam perjalanan kami ini kebaikan dan ketakwaan, serta amal yang Engkau ridhai. Ya Allah, mudahkanlah perjalanan kami ini dan dekatkanlah jaraknya bagi kami.", { source: "HR. Muslim dari Ibnu ‘Umar" }),
    ],
    source: "Lihat sumber pada tiap bagian.",
  },

  /* ===================== WIRID ===================== */
  "wirid-1": {
    summary: "Dzikir yang dibaca sesudah salam shalat fardhu",
    parts: [
      p("Istighfar", "أَسْتَغْفِرُ اللَّهَ", "Astaghfirullaah.", "Aku memohon ampun kepada Allah.", { repeat: "3×", source: "HR. Muslim dari Tsauban" }),
      p("Memohon keselamatan", "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", "Allaahumma antas-salaam wa minkas-salaam, tabaarakta yaa dzal-jalaali wal-ikraam.", "Ya Allah, Engkaulah Yang Maha Sejahtera, dari-Mu kesejahteraan, Mahasuci Engkau wahai Pemilik keagungan dan kemuliaan.", { source: "HR. Muslim" }),
      p("Kalimat tauhid", "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ", "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir. Allaahumma laa maani'a limaa a'thaita wa laa mu'thiya limaa mana'ta wa laa yanfa'u dzal-jaddi minkal-jadd.", "Tiada tuhan selain Allah semata, tiada sekutu bagi-Nya; milik-Nya kerajaan dan pujian, dan Dia Mahakuasa atas segala sesuatu. Ya Allah, tidak ada yang dapat mencegah apa yang Engkau berikan dan tidak ada yang dapat memberi apa yang Engkau cegah; dan kekayaan/kedudukan seseorang tidak berguna di hadapan-Mu (kecuali amal salehnya).", { source: "HR. Bukhari dan Muslim dari Al-Mughirah bin Syu'bah" }),
      p("Tasbih", "سُبْحَانَ اللَّهِ", "Subhaanallaah.", "Mahasuci Allah.", { repeat: "33×", source: "HR. Bukhari dan Muslim dari Abu Hurairah" }),
      p("Tahmid", "الْحَمْدُ لِلَّهِ", "Alhamdulillaah.", "Segala puji bagi Allah.", { repeat: "33×", source: "HR. Bukhari dan Muslim dari Abu Hurairah" }),
      p("Takbir", "اللَّهُ أَكْبَرُ", "Allaahu akbar.", "Allah Mahabesar.", { repeat: "33×", source: "HR. Bukhari dan Muslim dari Abu Hurairah" }),
      p("Penggenap seratus", "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir.", "Tiada tuhan selain Allah semata, tiada sekutu bagi-Nya; milik-Nya kerajaan dan pujian, dan Dia Mahakuasa atas segala sesuatu.", { source: "HR. Muslim (menggenapkan 99 menjadi 100)" }),
      p("Ayat Kursi dan tiga surat Qul", "", "", "", { ref: { label: "Baca Ayat Kursi, Al-Ikhlas, Al-Falaq, dan An-Nas pada halaman Tahlil", href: "#baca/tahlil-1" }, source: "Ayat Kursi: HR. An-Nasa'i. Al-Mu'awwidzat: HR. Abu Dawud dan At-Tirmidzi (3× setelah Subuh dan Maghrib, 1× setelah shalat lainnya)." }),
      p("Doa memohon pertolongan beribadah", "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ", "Allaahumma a'innii 'alaa dzikrika wa syukrika wa husni 'ibaadatik.", "Ya Allah, tolonglah aku untuk berdzikir kepada-Mu, bersyukur kepada-Mu, dan beribadah kepada-Mu dengan baik.", { source: "HR. Abu Dawud dan An-Nasa'i dari Mu'adz bin Jabal" }),
    ],
    source: "Lihat sumber pada tiap bagian.",
  },
  "wirid-2": {
    summary: "Dzikir pagi hari setelah Subuh sampai matahari naik",
    parts: [
      p("Ayat Kursi dan tiga surat Qul", "", "", "", { ref: { label: "Baca Ayat Kursi, Al-Ikhlas, Al-Falaq, dan An-Nas pada halaman Tahlil (surat Qul 3×)", href: "#baca/tahlil-1" }, source: "HR. Abu Dawud dan At-Tirmidzi" }),
      p("Memasuki waktu pagi", "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", "Ashbahnaa wa ashbahal-mulku lillaah, walhamdu lillaah, laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir.", "Kami memasuki waktu pagi dan kerajaan hanyalah milik Allah; segala puji bagi Allah. Tiada tuhan selain Allah semata, tiada sekutu bagi-Nya; milik-Nya kerajaan dan pujian, dan Dia Mahakuasa atas segala sesuatu.", { source: "HR. Muslim dari Ibnu Mas'ud" }),
      p("Dengan-Mu kami berpagi hari", "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ", "Allaahumma bika ashbahnaa wa bika amsaynaa wa bika nahyaa wa bika namuutu wa ilaikan-nusyuur.", "Ya Allah, dengan-Mu kami memasuki pagi, dengan-Mu kami memasuki petang, dengan-Mu kami hidup, dengan-Mu kami mati, dan kepada-Mu kebangkitan.", { source: "HR. At-Tirmidzi dan Abu Dawud" }),
      p("Perlindungan dengan nama Allah", "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", "Bismillaahil-ladzii laa yadhurru ma'asmihii syai-un fil-ardhi wa laa fis-samaa-i wa huwas-samii'ul-'aliim.", "Dengan nama Allah yang bersama nama-Nya tidak ada sesuatu pun di bumi dan di langit yang dapat mendatangkan mudarat, dan Dia Maha Mendengar lagi Maha Mengetahui.", { repeat: "3×", source: "HR. Abu Dawud dan At-Tirmidzi dari Utsman bin Affan" }),
      p("Ridha kepada Allah, Islam, dan Nabi", "رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا", "Radhiitu billaahi rabbaa, wa bil-islaami diinaa, wa bi-Muhammadin shallallaahu 'alaihi wa sallama nabiyyaa.", "Aku ridha Allah sebagai Tuhan, Islam sebagai agama, dan Muhammad ﷺ sebagai nabi.", { repeat: "3×", source: "HR. Abu Dawud dan At-Tirmidzi" }),
      p("Sayyidul istighfar", "", "", "", { ref: { label: "Baca Sayyidul Istighfar pada halaman Istighfar", href: "#baca/wirid-4" }, source: "HR. Bukhari" }),
      p("Tasbih seratus kali", "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", "Subhaanallaahi wa bihamdih.", "Mahasuci Allah dan dengan memuji-Nya.", { repeat: "100×", source: "HR. Muslim dari Abu Hurairah" }),
    ],
    source: "Lihat sumber pada tiap bagian.",
  },
  "wirid-3": {
    summary: "Dzikir petang hari, sesudah Ashar hingga Maghrib",
    parts: [
      p("Ayat Kursi dan tiga surat Qul", "", "", "", { ref: { label: "Baca Ayat Kursi, Al-Ikhlas, Al-Falaq, dan An-Nas pada halaman Tahlil (surat Qul 3×)", href: "#baca/tahlil-1" }, source: "HR. Abu Dawud dan At-Tirmidzi" }),
      p("Memasuki waktu petang", "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", "Amsaynaa wa amsal-mulku lillaah, walhamdu lillaah, laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir.", "Kami memasuki waktu petang dan kerajaan hanyalah milik Allah; segala puji bagi Allah. Tiada tuhan selain Allah semata, tiada sekutu bagi-Nya; milik-Nya kerajaan dan pujian, dan Dia Mahakuasa atas segala sesuatu.", { source: "HR. Muslim dari Ibnu Mas'ud" }),
      p("Dengan-Mu kami berpetang hari", "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ", "Allaahumma bika amsaynaa wa bika ashbahnaa wa bika nahyaa wa bika namuutu wa ilaikal-mashiir.", "Ya Allah, dengan-Mu kami memasuki petang, dengan-Mu kami memasuki pagi, dengan-Mu kami hidup, dengan-Mu kami mati, dan kepada-Mu tempat kembali.", { source: "HR. At-Tirmidzi dan Abu Dawud" }),
      p("Berlindung dengan kalimat Allah yang sempurna", "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", "A'uudzu bikalimaatillaahit-taammaati min syarri maa khalaq.", "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk yang Dia ciptakan.", { repeat: "3×", source: "HR. Muslim dan At-Tirmidzi dari Abu Hurairah" }),
      p("Perlindungan dengan nama Allah", "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", "Bismillaahil-ladzii laa yadhurru ma'asmihii syai-un fil-ardhi wa laa fis-samaa-i wa huwas-samii'ul-'aliim.", "Dengan nama Allah yang bersama nama-Nya tidak ada sesuatu pun di bumi dan di langit yang dapat mendatangkan mudarat, dan Dia Maha Mendengar lagi Maha Mengetahui.", { repeat: "3×", source: "HR. Abu Dawud dan At-Tirmidzi" }),
      p("Tasbih seratus kali", "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", "Subhaanallaahi wa bihamdih.", "Mahasuci Allah dan dengan memuji-Nya.", { repeat: "100×", source: "HR. Muslim dari Abu Hurairah" }),
    ],
    source: "Lihat sumber pada tiap bagian.",
  },
  "wirid-4": {
    summary: "Permohonan ampun, termasuk Sayyidul Istighfar",
    intro: "Rasulullah ﷺ bersabda, “Demi Allah, sungguh aku beristighfar dan bertobat kepada Allah dalam sehari lebih dari tujuh puluh kali.” (HR. Bukhari)",
    parts: [
      p("Istighfar", "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ", "Astaghfirullaahal-ladzii laa ilaaha illaa huwal-hayyal-qayyuuma wa atuubu ilaih.", "Aku memohon ampun kepada Allah yang tiada tuhan selain Dia, Yang Maha Hidup lagi terus-menerus mengurus makhluk-Nya, dan aku bertobat kepada-Nya.", { source: "HR. Abu Dawud dan At-Tirmidzi" }),
      p("Sayyidul Istighfar", "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", "Allaahumma anta rabbii laa ilaaha illaa anta, khalaqtanii wa ana 'abduka, wa ana 'alaa 'ahdika wa wa'dika mastatha'tu, a'uudzu bika min syarri maa shana'tu, abuu-u laka bini'matika 'alayya, wa abuu-u bidzanbii faghfir lii, fa-innahu laa yaghfirudz-dzunuuba illaa anta.", "Ya Allah, Engkau Tuhanku; tiada tuhan selain Engkau. Engkau menciptakanku, aku hamba-Mu, dan aku berada di atas perjanjian dan janji-Mu semampuku. Aku berlindung kepada-Mu dari keburukan perbuatanku. Aku mengakui nikmat-Mu kepadaku dan mengakui dosaku, maka ampunilah aku, sebab tiada yang mengampuni dosa selain Engkau.", { source: "HR. Bukhari dari Syaddad bin Aus", note: "Keutamaan: barang siapa membacanya dengan yakin pada pagi hari lalu wafat hari itu sebelum petang, ia termasuk penghuni surga; demikian pula jika dibaca pada petang hari (HR. Bukhari)." }),
      p("Memohon ampun dan tobat diterima", "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ", "Rabbighfir lii wa tub 'alayya innaka antat-tawwaabur-rahiim.", "Ya Tuhanku, ampunilah aku dan terimalah tobatku; sesungguhnya Engkau Maha Penerima tobat lagi Maha Penyayang.", { source: "HR. Abu Dawud dan At-Tirmidzi" }),
    ],
    source: "Lihat sumber pada tiap bagian.",
  },
  "wirid-5": {
    summary: "Kalimat tasbih pilihan dari hadits",
    parts: [
      p("Dua kalimat ringan di lisan", "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ", "Subhaanallaahi wa bihamdihi, subhaanallaahil-'azhiim.", "Mahasuci Allah dan dengan memuji-Nya; Mahasuci Allah Yang Maha Agung.", { source: "HR. Bukhari dan Muslim: dua kalimat yang ringan di lisan, berat di timbangan, dan dicintai Ar-Rahman" }),
      p("Tasbih sebanyak makhluk-Nya", "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ", "Subhaanallaahi wa bihamdihi 'adada khalqihi wa ridhaa nafsihi wa zinata 'arsyihi wa midaada kalimaatih.", "Mahasuci Allah dan dengan memuji-Nya sebanyak bilangan makhluk-Nya, sebanyak keridhaan-Nya, seberat timbangan Arsy-Nya, dan sebanyak tinta kalimat-kalimat-Nya.", { repeat: "3×", source: "HR. Muslim dari Juwairiyah" }),
      p("Empat kalimat yang dicintai Allah", "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ", "Subhaanallaah, walhamdulillaah, wa laa ilaaha illallaah, wallaahu akbar.", "Mahasuci Allah, segala puji bagi Allah, tiada tuhan selain Allah, dan Allah Mahabesar.", { source: "HR. Muslim dari Samurah bin Jundub" }),
      p("Perbendaharaan surga", "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", "Laa hawla wa laa quwwata illaa billaah.", "Tiada daya dan kekuatan kecuali dengan pertolongan Allah.", { source: "HR. Bukhari dan Muslim dari Abu Musa Al-Asy'ari (“perbendaharaan dari perbendaharaan surga”)" }),
    ],
    source: "Lihat sumber pada tiap bagian.",
    note: "Gunakan fitur Tasbih Digital untuk membantu menghitung.",
  },
  "wirid-6": {
    summary: "Kalimat pujian dan pengagungan kepada Allah",
    parts: [
      p("Tahmid", "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", "Alhamdu lillaahi rabbil-'aalamiin.", "Segala puji bagi Allah, Tuhan semesta alam.", { source: "QS. Al-Fatihah [1]: 2" }),
      p("Pujian yang banyak dan penuh berkah", "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ", "Alhamdu lillaahi hamdan katsiiran thayyibam mubaarakan fiih.", "Segala puji bagi Allah, pujian yang banyak, baik, dan penuh berkah.", { source: "HR. Bukhari dan Abu Dawud" }),
      p("Takbir dan tasbih pagi-petang", "اللَّهُ أَكْبَرُ كَبِيرًا، وَالْحَمْدُ لِلَّهِ كَثِيرًا، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا", "Allaahu akbar kabiiraa, walhamdu lillaahi katsiiraa, wa subhaanallaahi bukratan wa ashiilaa.", "Allah Mahabesar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak, dan Mahasuci Allah pada waktu pagi dan petang.", { source: "HR. Muslim dari Ibnu ‘Umar" }),
      p("Takbir", "اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ", "Allaahu akbar, Allaahu akbar, laa ilaaha illallaah, wallaahu akbar, Allaahu akbar wa lillaahil-hamd.", "Allah Mahabesar, Allah Mahabesar, tiada tuhan selain Allah, Allah Mahabesar, Allah Mahabesar, dan bagi Allah segala puji.", { source: "Takbir yang lazim dibaca pada hari raya dan hari-hari tertentu (diriwayatkan dari para sahabat)" }),
    ],
    source: "Lihat sumber pada tiap bagian.",
  },

  /* ===================== MAULID ===================== */
  "maulid-1": {
    summary: "Kitab maulid karya Imam Ad-Diba'i: pembukaan, shalawat, dan mahallul qiyam",
    intro: "Maulid Diba' (Ad-Diba'i) disusun oleh Imam Abdurrahman bin Ali ad-Diba'i asy-Syaibani dari Zabid, Yaman. Isinya berupa sirah (kisah) kelahiran dan akhlak Nabi ﷺ dalam prosa bersajak dan syair pujian. Teks lengkap kitab cukup panjang; di sini ditampilkan bagian-bagian yang umum dibaca. Untuk pembacaan penuh gunakan kitab cetak yang Anda miliki.",
    parts: [
      p("Perintah bershalawat", "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا", "Innallaaha wa malaa-ikatahuu yushalluuna 'alan-nabiyy. Yaa ayyuhal-ladziina aamanuu shallu 'alaihi wa sallimuu tasliimaa.", "Sesungguhnya Allah dan para malaikat-Nya bershalawat untuk Nabi. Wahai orang-orang yang beriman, bershalawatlah kamu untuk Nabi dan ucapkanlah salam dengan penuh penghormatan kepadanya.", { source: "QS. Al-Ahzab [33]: 56" }),
      p("Rahmat bagi semesta alam", "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ", "Wa maa arsalnaaka illaa rahmatal lil-'aalamiin.", "Dan tidaklah Kami mengutus engkau (Muhammad), melainkan sebagai rahmat bagi seluruh alam.", { source: "QS. Al-Anbiya' [21]: 107" }),
      p("Shalawat pengulangan", "يَا رَبِّ صَلِّ عَلَى مُحَمَّدٍ، يَا رَبِّ صَلِّ عَلَيْهِ وَسَلِّمْ", "Yaa rabbi shalli 'alaa Muhammad, yaa rabbi shalli 'alaihi wa sallim.", "Wahai Tuhanku, limpahkanlah shalawat kepada Muhammad; wahai Tuhanku, limpahkanlah shalawat dan salam kepadanya.", { source: "Bait pengulangan yang lazim dibaca dalam pembacaan Maulid Diba' (tradisi)" }),
      p("Mahallul qiyam — salam kepada Nabi ﷺ", "يَا نَبِيْ سَلَامٌ عَلَيْكَ، يَا رَسُوْلُ سَلَامٌ عَلَيْكَ، يَا حَبِيْبُ سَلَامٌ عَلَيْكَ، صَلَوَاتُ اللهِ عَلَيْكَ", "Yaa nabii salaamun 'alaika, yaa rasuulu salaamun 'alaika, yaa habiibu salaamun 'alaika, shalawaatullaahi 'alaika.", "Wahai Nabi, salam atasmu; wahai Rasul, salam atasmu; wahai kekasih, salam atasmu; shalawat Allah atasmu.", { source: "Syair penyambutan yang dibaca berdiri (mahallul qiyam); lagu dan redaksi bisa berbeda antardaerah" }),
      p("Syair penyambutan: Asyraqal badru", "أَشْرَقَ الْبَدْرُ عَلَيْنَا فَاخْتَفَتْ مِنْهُ الْبُدُورُ، مِثْلَ حُسْنِكَ مَا رَأَيْنَا قَطُّ يَا وَجْهَ السُّرُورِ، أَنْتَ شَمْسٌ أَنْتَ بَدْرٌ، أَنْتَ نُورٌ فَوْقَ نُورِ، أَنْتَ إِكْسِيرٌ وَغَالِي، أَنْتَ مِصْبَاحُ الصُّدُورِ", "Asyraqal-badru 'alainaa fakhtafat minhul-buduur, mitsla husnika maa ra-ainaa qaththu yaa wajhas-suruur. Anta syamsun anta badrun, anta nuurun fauqa nuur, anta iksiirun wa ghaalii, anta mishbaahush-shuduur.", "Bulan purnama telah terbit menyinari kami, maka lenyaplah bulan-bulan lainnya. Belum pernah kami melihat keindahan sepertimu, wahai wajah yang menggembirakan. Engkau matahari, engkau bulan purnama, engkau cahaya di atas cahaya, engkau emas yang sangat berharga, engkau pelita hati.", { source: "Syair penyambutan Nabi ﷺ yang masyhur dalam majelis maulid" }),
      { ...IBRAHIMIYAH, title: "Shalawat penutup" },
    ],
    source: "Kitab: Maulid Ad-Diba'i. Bagian di atas berupa pembukaan, shalawat, dan mahallul qiyam; sumber tiap bagian dicantumkan.",
  },
  "maulid-2": {
    summary: "Kitab maulid karya Sayyid Ja'far al-Barzanji: pengantar, ringkasan sirah, dan mahallul qiyam",
    intro: "Maulid Barzanji (‘Iqd al-Jawhar) disusun oleh Sayyid Ja'far bin Hasan al-Barzanji, ulama Madinah. Kitab ini menguraikan nasab, kelahiran, akhlak, dan perjalanan hidup Nabi ﷺ dalam prosa bersajak dan syair. Teks lengkapnya panjang; di sini ditampilkan pengantar, ringkasan sirah, dan bagian yang lazim dibaca. Untuk pembacaan penuh gunakan kitab cetak.",
    parts: [
      p("Pujian bagi akhlak Nabi ﷺ", "وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ", "Wa innaka la'alaa khuluqin 'azhiim.", "Dan sesungguhnya engkau (Muhammad) benar-benar berbudi pekerti yang agung.", { source: "QS. Al-Qalam [68]: 4" }),
      p("Perintah bershalawat", "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا", "Innallaaha wa malaa-ikatahuu yushalluuna 'alan-nabiyy. Yaa ayyuhal-ladziina aamanuu shallu 'alaihi wa sallimuu tasliimaa.", "Sesungguhnya Allah dan para malaikat-Nya bershalawat untuk Nabi. Wahai orang-orang yang beriman, bershalawatlah kamu untuk Nabi dan ucapkanlah salam dengan penuh penghormatan kepadanya.", { source: "QS. Al-Ahzab [33]: 56" }),
      p("Ringkasan sirah kelahiran Nabi ﷺ", "", "", "Nabi Muhammad ﷺ lahir di Makkah pada hari Senin, 12 Rabiul Awal, di tahun Gajah (sekitar 570 M) menurut riwayat yang masyhur; sebagian ulama menyebut tanggal lain. Ayahnya, Abdullah bin Abdul Muthalib, wafat sebelum beliau lahir, dan ibunya, Aminah binti Wahb, wafat ketika beliau masih kecil. Beliau diasuh oleh kakeknya, Abdul Muthalib, lalu pamannya, Abu Thalib. Pada usia 40 tahun beliau menerima wahyu pertama, kemudian berdakwah di Makkah selama sekitar 13 tahun sebelum hijrah ke Madinah, dan wafat di Madinah pada usia 63 tahun.", { source: "Ringkasan sirah nabawiyah (rujuk Sirah Ibnu Hisyam atau Ar-Rahiq Al-Makhtum untuk rincian)" }),
      p("Mahallul qiyam — salam kepada Nabi ﷺ", "يَا نَبِيْ سَلَامٌ عَلَيْكَ، يَا رَسُوْلُ سَلَامٌ عَلَيْكَ، يَا حَبِيْبُ سَلَامٌ عَلَيْكَ، صَلَوَاتُ اللهِ عَلَيْكَ", "Yaa nabii salaamun 'alaika, yaa rasuulu salaamun 'alaika, yaa habiibu salaamun 'alaika, shalawaatullaahi 'alaika.", "Wahai Nabi, salam atasmu; wahai Rasul, salam atasmu; wahai kekasih, salam atasmu; shalawat Allah atasmu.", { source: "Syair penyambutan yang dibaca berdiri (mahallul qiyam); lagu dan redaksi bisa berbeda antardaerah" }),
      p("Syair penyambutan: Asyraqal badru", "أَشْرَقَ الْبَدْرُ عَلَيْنَا فَاخْتَفَتْ مِنْهُ الْبُدُورُ، مِثْلَ حُسْنِكَ مَا رَأَيْنَا قَطُّ يَا وَجْهَ السُّرُورِ، أَنْتَ شَمْسٌ أَنْتَ بَدْرٌ، أَنْتَ نُورٌ فَوْقَ نُورِ، أَنْتَ إِكْسِيرٌ وَغَالِي، أَنْتَ مِصْبَاحُ الصُّدُورِ", "Asyraqal-badru 'alainaa fakhtafat minhul-buduur, mitsla husnika maa ra-ainaa qaththu yaa wajhas-suruur. Anta syamsun anta badrun, anta nuurun fauqa nuur, anta iksiirun wa ghaalii, anta mishbaahush-shuduur.", "Bulan purnama telah terbit menyinari kami, maka lenyaplah bulan-bulan lainnya. Belum pernah kami melihat keindahan sepertimu, wahai wajah yang menggembirakan. Engkau matahari, engkau bulan purnama, engkau cahaya di atas cahaya, engkau emas yang sangat berharga, engkau pelita hati.", { source: "Syair penyambutan Nabi ﷺ yang masyhur dalam majelis maulid" }),
      { ...IBRAHIMIYAH, title: "Shalawat penutup" },
    ],
    source: "Kitab: ‘Iqd al-Jawhar (Maulid Barzanji). Bagian di atas berupa pengantar dan bagian yang lazim dibaca; sumber tiap bagian dicantumkan.",
  },
  "maulid-3": {
    summary: "Kitab maulid karya Habib Ali al-Habsyi: pengantar, shalawat, dan mahallul qiyam",
    intro: "Simthud Durar disusun oleh Al-Habib Ali bin Muhammad bin Husain al-Habsyi (Hadramaut, Yaman). Kitab ini memuat kisah kelahiran, keutamaan, dan akhlak Nabi ﷺ, dan banyak dibaca di majelis maulid, khususnya pada tradisi ulama Hadramaut. Teks lengkapnya panjang; di sini ditampilkan pengantar dan bagian yang lazim dibaca. Untuk pembacaan penuh gunakan kitab cetak.",
    parts: [
      p("Perintah bershalawat", "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا", "Innallaaha wa malaa-ikatahuu yushalluuna 'alan-nabiyy. Yaa ayyuhal-ladziina aamanuu shallu 'alaihi wa sallimuu tasliimaa.", "Sesungguhnya Allah dan para malaikat-Nya bershalawat untuk Nabi. Wahai orang-orang yang beriman, bershalawatlah kamu untuk Nabi dan ucapkanlah salam dengan penuh penghormatan kepadanya.", { source: "QS. Al-Ahzab [33]: 56" }),
      p("Rahmat bagi semesta alam", "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ", "Wa maa arsalnaaka illaa rahmatal lil-'aalamiin.", "Dan tidaklah Kami mengutus engkau (Muhammad), melainkan sebagai rahmat bagi seluruh alam.", { source: "QS. Al-Anbiya' [21]: 107" }),
      p("Mahallul qiyam — salam kepada Nabi ﷺ", "يَا نَبِيْ سَلَامٌ عَلَيْكَ، يَا رَسُوْلُ سَلَامٌ عَلَيْكَ، يَا حَبِيْبُ سَلَامٌ عَلَيْكَ، صَلَوَاتُ اللهِ عَلَيْكَ", "Yaa nabii salaamun 'alaika, yaa rasuulu salaamun 'alaika, yaa habiibu salaamun 'alaika, shalawaatullaahi 'alaika.", "Wahai Nabi, salam atasmu; wahai Rasul, salam atasmu; wahai kekasih, salam atasmu; shalawat Allah atasmu.", { source: "Syair penyambutan yang dibaca berdiri (mahallul qiyam); lagu dan redaksi bisa berbeda antardaerah" }),
      { ...IBRAHIMIYAH, title: "Shalawat penutup" },
    ],
    source: "Kitab: Simthud Durar. Bagian di atas berupa pengantar dan bagian yang lazim dibaca; sumber tiap bagian dicantumkan.",
  },

  /* ===================== HADITS ===================== */
  "hadits-1": {
    summary: "Hadits Arba'in ke-1: amal tergantung niat",
    parts: [
      p("Hadits: Innamal a'maalu binniyyaat",
        "عَنْ أَمِيرِ الْمُؤْمِنِينَ أَبِي حَفْصٍ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ",
        "'An amiril-mu'miniina abii hafshin 'umara bnil-khaththaabi radhiyallaahu 'anhu qaala: sami'tu rasuulallaahi shallallaahu 'alaihi wa sallama yaquul: Innamal-a'maalu bin-niyyaat, wa innamaa likulli-mri-in maa nawaa. Faman kaanat hijratuhuu ilallaahi wa rasuulihii fahijratuhuu ilallaahi wa rasuulih, wa man kaanat hijratuhuu lidunyaa yushiibuhaa awimra-atin yankihuhaa fahijratuhuu ilaa maa haajara ilaih.",
        "Dari Amirul Mukminin Abu Hafsh Umar bin Khattab radhiyallahu ‘anhu, ia berkata: Aku mendengar Rasulullah ﷺ bersabda, “Sesungguhnya setiap amalan tergantung pada niatnya, dan sesungguhnya setiap orang mendapatkan sesuai dengan apa yang ia niatkan. Barang siapa hijrahnya karena Allah dan Rasul-Nya, maka hijrahnya kepada Allah dan Rasul-Nya. Barang siapa hijrahnya karena dunia yang hendak ia raih atau karena perempuan yang hendak ia nikahi, maka hijrahnya kepada apa yang ia tuju.”",
        { source: "HR. Bukhari (no. 1) dan Muslim (no. 1907); Hadits Arba'in An-Nawawi no. 1" }),
      p("Pelajaran", "", "", "Niat menentukan nilai suatu amal: perbuatan yang sama dapat bernilai ibadah atau sekadar kebiasaan tergantung tujuannya. Luruskan niat sebelum memulai pekerjaan, termasuk belajar dan bekerja, agar menjadi ibadah karena Allah.", { source: "Pemahaman umum para ulama atas hadits ini" }),
    ],
    source: "HR. Bukhari dan Muslim.",
  },
  "hadits-2": {
    summary: "Hadits-hadits tentang bersuci, kebersihan, dan fitrah",
    parts: [
      p("Bersuci adalah separuh iman", "الطُّهُورُ شَطْرُ الْإِيمَانِ", "Ath-thuhuuru syathrul-iimaan.", "Bersuci adalah separuh dari iman.", { source: "HR. Muslim dari Abu Malik Al-Asy'ari; Hadits Arba'in An-Nawawi no. 23" }),
      p("Sunnah fitrah", "الْفِطْرَةُ خَمْسٌ: الْخِتَانُ، وَالِاسْتِحْدَادُ، وَقَصُّ الشَّارِبِ، وَتَقْلِيمُ الْأَظْفَارِ، وَنَتْفُ الْآبَاطِ", "Al-fithratu khamsun: al-khitaan, wal-istihdaad, wa qashshusy-syaarib, wa taqliimul-azhfaar, wa natful-aabaath.", "Fitrah itu ada lima: khitan, mencukur bulu kemaluan, memotong kumis, memotong kuku, dan mencabut bulu ketiak.", { source: "HR. Bukhari dan Muslim dari Abu Hurairah" }),
      p("Bersiwak", "لَوْلَا أَنْ أَشُقَّ عَلَى أُمَّتِي لَأَمَرْتُهُمْ بِالسِّوَاكِ عِنْدَ كُلِّ صَلَاةٍ", "Lau laa an asyuqqa 'alaa ummatii la-amartuhum bis-siwaaki 'inda kulli shalaah.", "Seandainya tidak memberatkan umatku, niscaya aku perintahkan mereka bersiwak setiap hendak shalat.", { source: "HR. Bukhari dan Muslim dari Abu Hurairah" }),
      p("Catatan tentang ungkapan populer", "", "", "Ungkapan “Kebersihan sebagian dari iman” (An-nazhaafatu minal iimaan) sangat populer, tetapi lafaz tersebut tidak ditemukan sebagai hadits yang sahih. Makna kebersihan sebagai bagian dari iman terdapat pada hadits sahih “Ath-thuhuru syathrul iman” di atas.", { source: "Penjelasan para ahli hadits; periksa kitab takhrij hadits untuk rinciannya" }),
    ],
    source: "HR. Bukhari dan Muslim.",
  },
  "hadits-3": {
    summary: "Hadits-hadits tentang keutamaan ilmu dan menuntutnya",
    parts: [
      p("Dimudahkan jalan ke surga", "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ", "Man salaka thariiqan yaltamisu fiihi 'ilman sahhalallaahu lahu bihi thariiqan ilal-jannah.", "Barang siapa menempuh suatu jalan untuk mencari ilmu, Allah memudahkan baginya jalan menuju surga.", { source: "HR. Muslim dari Abu Hurairah" }),
      p("Dipahamkan dalam agama", "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ", "Man yuridillaahu bihi khairan yufaqqihhu fid-diin.", "Barang siapa dikehendaki kebaikan oleh Allah, Dia akan memahamkannya dalam urusan agama.", { source: "HR. Bukhari dan Muslim dari Mu'awiyah" }),
      p("Ilmu yang bermanfaat sebagai amal jariyah", "إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ: صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ", "Idzaa maatal-insaanu inqatha'a 'amaluhu illaa min tsalaatsah: shadaqatin jaariyah, aw 'ilmin yuntafa'u bih, aw waladin shaalihin yad'uu lah.", "Apabila manusia meninggal dunia, terputuslah amalnya kecuali tiga perkara: sedekah jariyah, ilmu yang bermanfaat, atau anak saleh yang mendoakannya.", { source: "HR. Muslim dari Abu Hurairah" }),
      p("Catatan tentang ungkapan populer", "", "", "Ungkapan “Tuntutlah ilmu sampai ke negeri Cina” dinilai lemah bahkan tidak sah sebagai hadits oleh para ahli hadits. Adapun “Thalabul ‘ilmi faridhatun ‘ala kulli muslim” diriwayatkan Ibnu Majah; para ulama berbeda dalam menilai sanadnya, sementara maknanya didukung oleh dalil-dalil sahih lain di atas.", { source: "Penjelasan para ahli hadits; periksa kitab takhrij hadits untuk rinciannya" }),
    ],
    source: "HR. Muslim, Bukhari.",
  },
};
