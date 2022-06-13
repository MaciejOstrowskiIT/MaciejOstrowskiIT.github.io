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

(function sectionWithHref() {
    let getSourceSectionId = document.querySelector(
        '#react_banking_section'
    );

    let goToGithubReact = document.querySelector(
        '#react_banking_app_section'
    );
    let goToGithubVanilla = document.querySelector(
        '#vanilla_section'
    );
    let goToWordpress = document.querySelector(
        '#wordpress_section'
    );

    getSourceSectionId.addEventListener('click', () => {
        window.location = '#react_banking_app_section';
    });

    goToGithubReact.addEventListener('click', () => {
        window.open(
            'https://github.com/MaciejOstrowskiIT/React_banking_app'
        );
    });
    goToGithubVanilla.addEventListener('click', () => {
        window.open(
            'https://github.com/MaciejOstrowskiIT/MaciejOstrowskiIT.github.io'
        );
    });
    goToWordpress.addEventListener('click', () => {
        window.open('https://maciej-ostrowski.netlify.app');
    });
})();
