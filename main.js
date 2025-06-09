const jeux = ["jeu1", "jeu2", "jeu3", "jeu4", "jeu5"];
let jeuxRestants = [...jeux];

function spinWheel() {
  if (jeuxRestants.length === 0) jeuxRestants = [...jeux];
  const index = Math.floor(Math.random() * jeuxRestants.length);
  const selection = jeuxRestants.splice(index, 1)[0];
  window.location.href = "jeux/" + selection + ".html";
}

function updateLifeBars() {
  ['life1', 'life2'].forEach(id => {
    const val = localStorage.getItem(id) || 100;
    const el = document.getElementById(id);
    if (el) el.style.width = val + "%";
  });
}

function updateJauges() {
  document.querySelectorAll('.life-fill').forEach((bar, index) => {
    const id = 'life' + (index + 1);
    const value = localStorage.getItem(id) || 100;
    bar.style.width = value + '%';
  });
}

window.onload = () => {
  updateLifeBars();
  updateJauges();
};
