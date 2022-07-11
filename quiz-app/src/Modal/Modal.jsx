import { useGlobalContext } from "../Context/Context.jsx";


const Modal =() =>{
    const{ modal, closeModal, correct, questions} = useGlobalContext();
    return(
        <div className={'${modal ? "modal-container is Open}":"modal-container"}'}>

            <div className="modal-content">
                <h2>Congrats</h2>
                <p>
                    You answered {((correct/questions.length)*100).toFixed(0)}% questions correctly.
                </p>
                <button className="close-btn" onClick={closeModal}>play again</button>
            </div>
        </div>
    );
}

export default Modal;