import SetupForm from "./Form/SetupForm";
import Loading from "./Loading/LoadingScreen";
import Modal from "./Modal/Modal.jsx"

function App(){
  return(
    <>
      <SetupForm/>
      <Modal/>
      <Loading/>
    </>
  );
}

export default App;