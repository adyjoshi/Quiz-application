const Modal =() =>{
    return(
        <div className="modal-container isOpen">
            <div className="Modal-content">
                <h2>Congrats</h2>
                <p>
                    You answered n questions correctly.
                </p>
                <button className="close-btn">play again</button>
            </div>
        </div>
    );
}

export default Modal;