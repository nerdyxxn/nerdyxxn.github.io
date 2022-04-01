$(function () {
    /*---Dropdown---*/
    let dropdownFunction = () => {
        const dropdownArray = document.getElementsByClassName('dropdown-container')
        for (let i = 0; i < dropdownArray.length; i++) {
            let dropdown = dropdownArray[i]
            // dropdown clicked
            dropdown.addEventListener('click', (e) => {
                let target = e.currentTarget
                target.classList.toggle('dropdown-focus')

                // set drowdown value to selected option velue
                let dropdownValue = dropdown.querySelector('.dropdown-value')
                let dropdownMenu = dropdown.querySelector('.dropdown-menu')
                let dropdownItemArray = dropdown.getElementsByClassName('dropdown-item')
                // looping options
                for (let i = 0; i < dropdownMenu.childElementCount; i++) {
                    let dropdownItem = dropdownItemArray[i]
                    dropdownItem.addEventListener('click', () => {
                        dropdownValue.textContent = dropdownItem.textContent;
                    })
                }
            })

            // close if clicked outside of dropdown
            window.addEventListener('click', function (event) {
                if (!dropdown.contains(event.target)) {
                    dropdown.classList.remove('dropdown-focus')
                }
            });
        }
    }
    dropdownFunction()
});