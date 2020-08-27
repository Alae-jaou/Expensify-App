import React from 'react';
import Modal from 'react-modal';

// const OptionModal = ()=> (
//     <div>
//         some text
//     </div>
// );

const OptionModal = (props) =>( 
<Modal
    contentLabel="Example Modal"
    isOpen={!!props.clicked}
    onRequestClose={props.removeIt}
    ariaHideApp={false}
    closeTimeoutMS={500}
    className="modale"
 
>
<p className="modale__header" >Selected Option</p>
<h1 className="modale__body" >{props.clicked}</h1>
<button className="small-button" onClick={props.removeIt} > close</button>
</Modal>
);
export default OptionModal;