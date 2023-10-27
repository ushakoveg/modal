
import React, { useState } from 'react';

function Modal() {
const [Open, setOpen] = useState(false);

const openModal = () => {
setOpen(true);
};

const closeModal = () => {
setOpen(false);
};

return (
<div>
<button onClick={openModal}>Открыть модальное окно</button>

{Open && (
<div className="modal" >
<div className="modal-content">
<h2>Модальное окно</h2>
<p>Содержимое модального окна...</p>
<button onClick={closeModal}>Закрыть</button>
</div>
</div>
)}
</div>
);
}

export default Modal;
