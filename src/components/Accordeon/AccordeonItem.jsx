import s from './style.module.scss'
import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
function AccordeonItem({ title, info,id }){
  const [expanded, setExpanded] = useState(false)

  return (
    <article className={s.question}>
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className='question-title'>
          {title}
        </h4>
        <button className={s.btn} onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p className={s.info}>{info}</p>}
    </article>
  )
}

export default AccordeonItem