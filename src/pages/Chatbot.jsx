import React, { useState } from 'react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleChat=()=> setIsOpen(!isOpen)
  return (
    <div className='chatbot-container'>
      <button className='chatbot-toggle-btn'onClick={toggleChat}> {!isOpen ?(<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>):(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<line x1="18" y1="6" x2="6" y2="18"></line>
<line x1="6" y1="6" x2="18" y2="18"></line>
</svg>)}
      </button>
    </div>
  )
}

export default Chatbot