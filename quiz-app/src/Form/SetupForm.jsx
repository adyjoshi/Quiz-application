const SetupForm =() =>{
    return(
        <main>
            <section className="quiz quiz-small">
                <form className="setup-form">
                    <h2>Setup quiz</h2>
                    <div className="form-control">
                        <label htmlFor="amount">number of questions</label>
                        <input type="number" name="amount" id="amount" className="form-input"/>
                    </div>
                </form>
            </section>
        </main>
    )
}