import modalHtml from './render-modal.html?raw';
import './render-modal.css';

let modal;
/**
 * @param {HTMLDivElement}
 */
export const renderModal = (element) => {

    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container';

    element.append(modal);
}