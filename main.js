const backdropEl = document.getElementById("backdrop");
const sidebarEl = document.getElementById("sidebar");
const sidebarOpenBtnEl = document.getElementById("sidebarOpenBtn");
const sidebarCloseBtnEl = document.getElementById("sidebarCloseBtn")

backdropEl?.addEventListener("click", e => {
  backdropEl?.classList.add("hidden");
});

sidebarEl?.addEventListener("click", e => {
  if(e.target.closest("a")) {
    backdropEl?.classList.add("hidden");
    backdropEl?.removeEventListener("click", closeSidebar);
    closeSidebar();
  }
});

sidebarOpenBtnEl?.addEventListener("click", e => {
  backdropEl?.classList.remove("hidden");
  backdropEl?.addEventListener("click", closeSidebar);
  openSidebar();
});

sidebarCloseBtnEl?.addEventListener("click", e => {
  backdropEl?.classList.add("hidden");
  backdropEl?.removeEventListener("click", closeSidebar);
  closeSidebar();
});

function openSidebar() {
  sidebarEl?.classList.remove("translate-x-full");
  sidebarEl.classList.add("translate-x-0");
}

function closeSidebar() {
  sidebarEl?.classList.remove("translate-x-0");
  sidebarEl.classList.add("translate-x-full");
}