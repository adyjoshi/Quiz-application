import { useState , useContext , createContext } from "react";
import axios from "axios";

const table ={
    sports:19, history:23, politics:24
};

const AppContext = createContext();
const AppProvider =({children}) =>{
    
    const [waiting, setwaiting] = useState(true) //waiting
    const [loading, setLoading] = useState(false) //loading
    const [questions, setQuestions] = useState([]) //questions
    const [index, setIndex] = useState(0) //index
    const [correct, setCorrect] = useState(0) //correct
    const [error, setError] = useState(false)//error
    const [quiz, setQuiz] = useState({
        amount:10,
        category:"sports",
        difficuty:"easy"
    }); //quiz
    const [modal, setModal] = useState(false)//Modal
    //fetchquestions

    const fetchQuestions =async(url) =>{
        setLoading(true);
        setwaiting(false);
        const response = await axios(url).catch((err)=> console.log(err))
        if(response){
            const data = response.data.results;
            if(data.length){
                setQuestions(data);
                setLoading(false);
                setwaiting(false);
                setError(false);
            }else{
                setwaiting(true);
                setLoading(true);
            }

        }else{
            setwaiting(true);
        }
    }

    const openModal = ()=> {
        setModal(true);
    };
    const closeModal = ()=> {
        setModal(false);
        setwaiting(true);
        setCorrect(0);
    };

    const nextQuestion = () =>{
        setIndex((oldIndex)=>{
            const index = oldIndex+1;
            if(index > oldIndex.length -1){
                openModal()
                return 0;
            }else{
                return index;
            }
        })
    }

    const checkAnswers = (value) => {
        if(value) {
            setCorrect((oldState) => oldState +1);
        }
        nextQuestion();
    }

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.taget.value;
        setQuiz({...quiz,[name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {amount, difficulty,category} = quiz;
        const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
        fetchQuestions(url)
    }


    return <AppContext.Provider value={{
        waiting, loading, questions, index, correct, error, modal, nextQuestion, checkAnswers, closeModal, quiz, handleChange, handleSubmit
    }}> {children} </AppContext.Provider>
    
};

export const useGlobalContext= () =>{
    return useContext(AppContext);
};

export { AppContext, AppProvider};