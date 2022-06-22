window.addEventListener('DOMContentLoaded', function () {
    //hamburger
    const hamburgerBtn = document.querySelector('.header__hamburger');
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', e => {
            let headerEl = e.target.closest('.header');
            if (headerEl) {
                headerEl.classList.toggle('menu_active');
            }
        })
    }
});