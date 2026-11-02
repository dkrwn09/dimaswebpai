const prayerNames = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
const labels = { Fajr: "Subuh", Sunrise: "Terbit", Dhuhr: "Zuhur", Asr: "Asar", Maghrib: "Magrib", Isha: "Isya" };
const quickCities = [
  ["Bangkalan", "Indonesia"], ["Surabaya", "Indonesia"], ["Jakarta", "Indonesia"], ["Bandung", "Indonesia"],
  ["Yogyakarta", "Indonesia"], ["Medan", "Indonesia"], ["Makassar", "Indonesia"], ["Makkah", "Saudi Arabia"]
];
const LOC_KEY = "mo_prayer_loc";
let timer = null;

const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const loadLoc = () => { try { return { city: "Bangkalan", country: "Indonesia", ...JSON.parse(localStorage.getItem(LOC_KEY) || "{}") }; } catch { return { city: "Bangkalan", country: "Indonesia" }; } };
const saveLoc = (city, country) => { try { localStorage.setItem(LOC_KEY, JSON.stringify({ city, country })); } catch {} };

export function renderPrayer() {
  const loc = loadLoc();
  return `<section class="page-head"><div class="breadcrumbs"><a href="#beranda">Beranda</a> / Jadwal Sholat</div><h1>Jadwal Sholat</h1><p>Periksa jadwal berdasarkan kota yang dipilih. Data diambil dari API Aladhan (metode Kemenag RI).</p></section>
<section class="panel">
  <form class="inline-form" id="prayerForm">
    <input class="field" id="prayerCity" value="${esc(loc.city)}" placeholder="Nama kota" aria-label="Nama kota" required>
    <input class="field" id="prayerCountry" value="${esc(loc.country)}" placeholder="Negara" aria-label="Negara" required>
    <button class="primary-btn">Perbarui jadwal</button>
  </form>
  <div class="chip-row" id="cityChips">${quickCities.map(([c, k]) => `<button type="button" class="chip" data-city="${esc(c)}" data-country="${esc(k)}">${esc(c)}</button>`).join("")}</div>
  <p id="prayerStatus" class="muted">Memuat jadwal…</p>
  <div id="prayerDate" class="muted"></div>
  <div id="prayerCountdown" class="prayer-countdown" aria-live="polite"></div>
  <div id="prayerGrid" class="prayer-grid"></div>
</section>`;
}

// Jam "sekarang" menurut zona waktu kota yang dipilih (bukan zona waktu perangkat).
function minutesNow(tz) {
  try {
    const parts = new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).formatToParts(new Date());
    const g = t => Number(parts.find(p => p.type === t).value) % 24;
    return g("hour") * 60 + g("minute") + g("second") / 60;
  } catch {
    const d = new Date();
    return d.getHours() * 60 + d.getMinutes() + d.getSeconds() / 60;
  }
}
const toMin = str => { const [h, m] = str.split(" ")[0].split(":").map(Number); return h * 60 + m; };

function paint(timings, tz) {
  const grid = document.querySelector("#prayerGrid"), cd = document.querySelector("#prayerCountdown");
  if (!grid) { clearInterval(timer); return; }
  const now = minutesNow(tz);
  const obligatory = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
  let next = obligatory.find(k => toMin(timings[k]) > now), tomorrow = false;
  if (!next) { next = "Fajr"; tomorrow = true; }
  grid.innerHTML = prayerNames.map(k => {
    const [h, m] = timings[k].split(" ")[0].split(":");
    return `<div class="prayer-time ${k === next ? "next" : ""}"><small>${labels[k]} ${k === next ? "· Berikutnya" : ""}</small><strong>${h}:${m}</strong></div>`;
  }).join("");
  let diff = toMin(timings[next]) - now + (tomorrow ? 1440 : 0);
  diff = Math.max(0, diff);
  const h = Math.floor(diff / 60), m = Math.floor(diff % 60);
  cd.textContent = `${labels[next]} ${tomorrow ? "besok " : ""}dalam ${h ? h + " jam " : ""}${m} menit`;
}

async function load(city, country) {
  const status = document.querySelector("#prayerStatus"), grid = document.querySelector("#prayerGrid"), cd = document.querySelector("#prayerCountdown");
  clearInterval(timer);
  status.textContent = "Mengambil jadwal sholat…";
  grid.innerHTML = ""; cd.textContent = "";
  try {
    const url = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=20`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("API tidak merespons");
    const json = await response.json();
    if (json.code !== 200) throw new Error("Data jadwal tidak tersedia");
    const data = json.data, t = data.timings, tz = data.meta?.timezone;
    document.querySelector("#prayerDate").textContent = `${data.date.readable} · ${data.date.hijri.day} ${data.date.hijri.month.en} ${data.date.hijri.year} H · ${city}, ${country}`;
    paint(t, tz);
    timer = setInterval(() => paint(t, tz), 30000);
    saveLoc(city, country);
    status.textContent = "Jadwal berhasil diperbarui dari Aladhan API.";
  } catch (err) {
    status.textContent = "Jadwal gagal dimuat. Periksa koneksi internet dan nama kota, lalu coba lagi. Tidak ada waktu sholat perkiraan yang ditampilkan.";
  }
}

export function initPrayer() {
  const form = document.querySelector("#prayerForm");
  const cityEl = document.querySelector("#prayerCity"), countryEl = document.querySelector("#prayerCountry");
  form?.addEventListener("submit", e => { e.preventDefault(); load(cityEl.value.trim(), countryEl.value.trim()); });
  document.querySelector("#cityChips")?.addEventListener("click", e => {
    const b = e.target.closest(".chip"); if (!b) return;
    cityEl.value = b.dataset.city; countryEl.value = b.dataset.country;
    load(b.dataset.city, b.dataset.country);
  });
  load(cityEl.value.trim(), countryEl.value.trim()); // langsung muat saat halaman dibuka
}
