(function collapsibleMenu() {
    let getCollapsibleClass = document.querySelector(
        '.hamburger > #check'
    );
    let getMenuItems = document.querySelectorAll(
        '.navigation > ul > li'
    );
    let getMenu = document.querySelector('.navigation ul');
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
        if (myWidth < 767) {
            getMenu.classList.add('visually-hidden');
        } else {
            getMenu.classList.remove('visually-hidden');
        }
    }

    getCollapsibleClass.addEventListener('click', (e) => {
        getMenuItems.forEach((element) => {
            if (getStatusOfHamburgerInput !== null) {
                if (element.classList.contains('hidden')) {
                    element.classList.remove('hidden');
                } else {
                    element.classList.add('hidden');
                }
                if (
                    getMenu.classList.contains(
                        'visually-hidden'
                    )
                ) {
                    getMenu.classList.remove(
                        'visually-hidden'
                    );
                } else {
                    getMenu.classList.add(
                        'visually-hidden'
                    );
                }
            }
            chceckInputStatus();
        });
    });
})();
