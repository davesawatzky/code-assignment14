import { useState } from 'react'
import { AccordionProps } from './Accordion.types'
import './Accordion.css'

function AccordionSection({ heading, content }: { heading: string; content: string }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <li key={heading} className='accordion-item'>
      <div className='accordion-toggle' onClick={() => setIsActive(!isActive)}>
        <h3>{heading}</h3>
        <span>{isActive ? '-' : '+'}</span>
      </div>
      {isActive && <div className='accordion-content'>{content}</div>}
    </li>
  )
}

function Accordion({ accordionData }: AccordionProps) {
  return (
    <ul className='accordion'>
      {accordionData.map((accord) => (
        <AccordionSection key={accord.heading} heading={accord.heading} content={accord.content} />
      ))}
    </ul>
  )
}

export default Accordion
