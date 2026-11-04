// Fungsi untuk navigasi Pop-up Awal (abc, abcd, huha)
function nextPopup(currentStep) {
  document.getElementById(`popup-${currentStep}`).classList.add('hidden');
  document.getElementById(`popup-${currentStep + 1}`).classList.remove('hidden');
}

function closePopups() {
  document.getElementById('popup-overlay').classList.add('hidden');
}

// Fungsi Pindah Halaman
function goToPage(pageNumber) {
  // Sembunyikan semua page
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
  });
  // Tampilkan page tujuan
  document.getElementById(`page-${pageNumber}`).classList.remove('hidden');
}

// Modal Wish
function openWishModal() {
  document.getElementById('wish-overlay').classList.remove('hidden');
}

function submitWish() {
  const wish = document.getElementById('wish-input').value;
  if(wish.trim() !== "") {
    alert("Wish sent! ⋆‧°𓏲ּ𝄢");
  }
  document.getElementById('wish-overlay').classList.add('hidden');
  // Lanjut ke Page 3 (Foto & Beaver Seal)
  goToPage(3);
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");
  
  if (music.paused) {
    music.play();
    btn.textContent = "🔇 Mute Music";
  } else {
    music.pause();
    btn.textContent = "🎵 Play Music";
  }
}
