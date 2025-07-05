import './App.css'
import Freefire from './components/Freefire'
import { useState } from 'react';

function App() {
  const [showEntryConfirm, setShowEntryConfirm] = useState(true);
  const [entryCancelled, setEntryCancelled] = useState(false);

  return (
    <>
      {showEntryConfirm && !entryCancelled && (
        <div className="entry-confirm-overlay ffindia">
          <div className="entry-confirm-box ffindia">
            <div className="ffindia-header">
              <span className="ffindia-title">FREE FIRE INDIA</span>
              <button className="ffindia-close" onClick={() => setEntryCancelled(true)} aria-label="Close">×</button>
            </div>
            <div className="ffindia-message">
              <div>You are about to be redirected using the following ff rules:</div>
              <div className="ffindia-question">Are you sure you want to proceed?</div>
            </div>
            <div className='btn-container'>
              <button className="ffindia-confirm-btn" onClick={() => setShowEntryConfirm(false)}>Confirm</button>
            </div>
          </div>
        </div>
      )}
      {entryCancelled && (
        <div className="entry-cancelled-message">You have cancelled entry.</div>
      )}
      {!showEntryConfirm && !entryCancelled && (
        <Freefire />
      )}
    </>
  )
}

export default App
