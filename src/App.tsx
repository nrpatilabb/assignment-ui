import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Question } from './types/Question';
import Popup from './popup';

function App() {

  const [questions, updateQuestions] = useState<Question[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [selectedQuestion, setQuestion] = useState<Question>();

  useEffect(() => {
    axios.get("http://localhost:3001/services/question")
      .then((result) => {
        console.log(result);
        updateQuestions(result.data);
      })
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      {questions.map(question => {
        return <div className="App__question-container">
          <div>
            {question.owner.display_name}
          </div>
          <div onClick={() => { setQuestion(question); handleOpen() }}>
            {question.title}
          </div>
          <div>
            {question.creation_date}
          </div>
        </div>
      })}
      {
        selectedQuestion ?
          <Popup handleClose={handleClose} isOpen={isOpen} title={selectedQuestion.title} link={selectedQuestion.link} /> :
          null
      }
    </div>
  );
}

export default App;
