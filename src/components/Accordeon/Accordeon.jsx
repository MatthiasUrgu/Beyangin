
import { useState } from 'react';
import data from '../../Data/data'
import AccordeonItem from './AccordeonItem';

function Accordeon(){
    
    const [questions, setQuestions] = useState(data)

  return (
    <div>
      
        <section>
          {questions.map((data) => (
            <AccordeonItem key={data.id} {...data} />
          ))}
        </section>
     
    </div>
  )
          }
export default Accordeon;