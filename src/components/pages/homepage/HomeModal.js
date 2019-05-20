import React from 'react';

export const success = ()=> {
    return (
        <div className="header__modal modal">
        <div className="modal__close"> x </div>
        <p className="modal__paragraph">Yours request was submitted successfully</p>
        <p className="modal__paragraph">You will be contacted shortly</p>
        </div>
    )
}

export const failure = ()=> {
    return (
        <div className="header__modal modal">
        <div class="modal__close">x</div>
        <p className="modal__paragraph">Yours request was submitted successfully</p>
        <p className="modal__paragraph">You will be contacted shortly</p>
        </div>
    )
}

