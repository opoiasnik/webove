(() => {
    const refs = {
      openMobBtn: document.querySelector("[data-mob-open]"),
      closeMobBtn: document.querySelector("[data-mob-close]"),
      mob: document.querySelector("[data-mob]"),
    };
  
    refs.openMobBtn.addEventListener("click", toggleMob);
    refs.closeMobBtn.addEventListener("click", toggleMob);
  
    function toggleMob() {
      refs.mob.classList.toggle("is-hidden");
    }
  })();