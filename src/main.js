'use strict'

function start() {
    const links = document.getElementsByTagName('a');
    const array = [];

    for(let i = 0; i < links.length; i++) {
        const link = links.item(i);

        if (i == 0) link.className = 'active';

        array.push(link);
        
        link.addEventListener('click', () => {
            array.forEach(element => {
                if(element != link) {
                    element.className = '';
                }
            });
            link.className = 'active'
        });
    }
}

start();