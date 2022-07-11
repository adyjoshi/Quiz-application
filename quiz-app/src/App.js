import SetupForm from "./Form/SetupForm";
import Loading from "./Loading/LoadingScreen";
import Modal from "./Modal/Modal.jsx"
import {useGlobalContext} from "./Context/Context.jsx"

function App(){
  const {
    waiting, loading, questions, index, correct, nextQuestions, checkAnswer
  } = useGlobalContext();
  if(waiting){
    return <SetupForm/>;
  }
  if(loading){
    return <loading/>;
  }

  const{incorrect_answers, correct_answer, question} =questions[index]
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(math.random()*4) //we are shuffling up the answers 
  if(tempIndex ===3){
    answers.push(correct_answer)
  }else{
      answers.push(answers[tempIndex]);
      answers[tempIndex] = correct_answer;
  }

  return(
  <main>
    <section className="quiz">
      <p className="correct-answers">correct answers: 3</p>
      <article className="container">
        <h2>Text</h2>
        <div className="btn-container"></div>
      </article>
      <button className="next-question">next questions</button>
    </section>
  </main>
  );
}

export default App;