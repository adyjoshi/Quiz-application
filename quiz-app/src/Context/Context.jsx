import { useState , useContext , createContext } from "react";
import axios from 'axios';

const AppContext = createContext();
const AppProvider =({children}) =>{
    
    const [waiting, setwaiting] = useState(true) //waiting
    const [loading, setLoading] = useState(false) //loading
    const [question, setQuestions] = useState([]) //questions
    const [index, setIndex] = useState(0) //index
    const [correct, setCorrect] = useState(0) //correct
    const [error, setError] = useState(false)//error
    const [quiz, setQuiz] = useState({
        amount:10,
        category:"sports",
        difficuty:"ease"
    }); //quiz
    const [modal, setModal] = useState(false)//Modal
    //fetchquestions

    const fetchQuestions =async() =>{
        setLoading(true);
        setwaiting(false);
        const response = await axios("https://opentdb.com/api.php?amount=10").catch((err)=> console.log(err))
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

    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext= () =>{
    return useContext(AppContext);
};

export { AppContext, AppProvider};