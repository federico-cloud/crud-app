import modalHtml from './render-modal.html?raw';
import './render-modal.css';

let modal;
let form;

export const showModal = () =>{
    modal?.classList.remove('hide-modal');
};

export const hideModal = () =>{
    modal?.classList.add('hide-modal');
    form?.reset();
}

/**
 * @param {HTMLDivElement}
 */
export const renderModal = (element) => {

    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form');

    modal.addEventListener('click', (event) => {
        if(event.target.className === 'modal-container'){
            hideModal();
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const userData = {};

        for (const [key, value] of formData) {
            if(key === 'balance'){
                userData[key] = value * 1;
                continue;
            }

            if(key === 'isActive'){
                userData[key] = value === on ? true : false;
            }

            userData[key] = value;
        }

    })

    element.append(modal);
}