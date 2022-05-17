(function collapsibleMenu() {
    let getCollapsibleClass = document.querySelector(
        '.hamburger > #check'
    );
    let getMenuItems = document.querySelectorAll(
        '.navigation > ul > li'
    );
    let getStatusOfHamburgerInput =
        document.querySelector('#check');
    function chceckInputStatus() {
        getStatusOfHamburgerInput =
            document.querySelector('#check');
    }

    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;
    let myWidth;

    function displayWindowSize() {
        myWidth = window.innerWidth;
        getMenuItems.forEach((element) => {
            if (myWidth < 767) {
                element.classList.add('hidden');
            } else {
                element.classList.remove('hidden');
            }
        });
    }

    getCollapsibleClass.addEventListener('click', (e) => {
        getMenuItems.forEach((element) => {
            if (getStatusOfHamburgerInput !== null) {
                if (element.classList.contains('hidden')) {
                    element.classList.remove('hidden');
                } else {
                    element.classList.add('hidden');
                }
            }
            chceckInputStatus();
        });
    });
})();
