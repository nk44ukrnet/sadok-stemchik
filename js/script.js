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
    //expand-collapse
    let expandHeading = document.querySelectorAll('.expand-heading'),
        expandContent = document.querySelectorAll('.expand-content'),
        expandContainer = document.querySelectorAll('.expand-container');
    if(expandHeading && expandContent && expandContainer) {
        expandHeading.forEach(item=>{
            item.addEventListener('click', e=>{
                let current = e.target;
                current.closest('.expand-container').classList.toggle('active');
            })
        })
    }
});