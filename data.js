import {contents} from "./content.js";
// Data kategori dan daftar judul. Teks ibadah yang belum diverifikasi sengaja tidak dikarang.
export const categories = [
  {id:"wirid", name:"Wirid Harian", count:6, icon:"◉", description:"Kumpulan dzikir dan wirid sehari-hari.", titles:["Wirid Setelah Sholat","Wirid Pagi","Wirid Petang","Istighfar","Tasbih","Tahmid dan Takbir"]},
  {id:"shalawat", name:"Shalawat", count:5, icon:"❋", description:"Berbagai bacaan shalawat.", titles:["Shalawat Nariyah","Shalawat Munjiyat","Shalawat Ibrahimiyah","Shalawat Badar","Shalawat Thibbil Qulub"]},
  {id:"asmaul-husna", name:"Asmaul Husna", count:1, icon:"۞", description:"Nama-nama Allah yang indah.", titles:["99 Asmaul Husna"]},
  {id:"istighotsah", name:"Istighotsah & Mujahadah", count:1, icon:"✧", description:"Susunan bacaan istighotsah dan mujahadah.", titles:["Istighotsah dan Mujahadah"]},
  {id:"ratib", name:"Ratib", count:2, icon:"❈", description:"Kumpulan ratib dan keterangannya.", titles:["Ratib Al-Haddad","Ratib Al-Athas"]},
  {id:"hizib", name:"Hizib", count:1, icon:"▤", description:"Kumpulan bacaan hizib.", titles:["Hizib Pilihan"]},
  {id:"manaqib", name:"Manaqib Syekh Abdul Qadir", count:1, icon:"۩", description:"Bacaan manaqib yang tersusun.", titles:["Manaqib Syekh Abdul Qadir Al-Jailani"]},
  {id:"dalail", name:"Dalailul Khairat", count:1, icon:"❀", description:"Kumpulan shalawat Dalailul Khairat.", titles:["Dalailul Khairat — Pengantar"]}
];
export const navPages = [
  {id:"tahlil",name:"Tahlil",description:"Rangkaian bacaan tahlil untuk mendoakan almarhum/almarhumah.",titles:["Susunan Bacaan Tahlil"]},
  {id:"doa",name:"Doa",description:"Doa-doa harian beserta teks Arab, Latin, terjemahan, dan sumbernya.",titles:["Doa Sebelum Makan","Doa Sesudah Makan","Doa Sebelum Tidur","Doa Bangun Tidur","Doa Masuk Rumah","Doa Keluar Rumah","Doa Sebelum Belajar","Doa Sesudah Belajar","Doa untuk Kedua Orang Tua","Doa Perjalanan"]},
  {id:"wirid",name:"Wirid"},{id:"maulid",name:"Maulid",description:"Kitab maulid untuk memperingati dan mengenang Nabi Muhammad ﷺ.",titles:["Maulid Diba’","Maulid Barzanji","Simthud Durar"]},
  {id:"hadits",name:"Hadits",description:"Hadits-hadits pilihan beserta perawi dan terjemahannya.",titles:["Hadits tentang Niat","Hadits tentang Kebersihan","Hadits tentang Menuntut Ilmu"]},
  {id:"jadwal",name:"Jadwal Sholat",description:"Waktu sholat harian berdasarkan kota."}
];
export const allReadings = [
  ...categories.flatMap(c=>c.titles.map((title,i)=>({id:`${c.id}-${i+1}`,category:c.id,categoryName:c.name,title}))),
  ...navPages.filter(p=>p.titles).flatMap(p=>p.titles.map((title,i)=>({id:`${p.id}-${i+1}`,category:p.id,categoryName:p.name,title})))
].map(item=>{const c=contents[item.id];return {...item,arabic:"",latin:"",translation:"",parts:[],summary:"",intro:"",note:"",source:"Belum dicantumkan. Lengkapi setelah memeriksa sumber bacaan tepercaya.",verified:false,...(c||{}),hasContent:!!c}});
export const categoryById = id => categories.find(c=>c.id===id) || navPages.find(p=>p.id===id);
