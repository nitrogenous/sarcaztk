import { useState } from 'react';
import './App.css';

function App() {
  var [ message, setMessage ] = useState('');

  const createSarcasticMsg = (message) => {
    let sarcasticMessage = '';

    message.split('').forEach((value, key) => {
      if (key % 2) {
        sarcasticMessage += value.toUpperCase();
      }
      else {
        sarcasticMessage += value.toLowerCase();
      }

    });

    return sarcasticMessage;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(createSarcasticMsg(message));
  };

  return (
    <div className='sarcastic-app'>
      <input className='sarcastic-input' onChange={(e) => setMessage(e.target.value)} placeholder='say something ' />
      <div className='sarcastic-result'>
        <p className='sarcastic-text'>
          {createSarcasticMsg(message)}
        </p>
        {
          !!message && <button className='sarcastic-button' onClick={copyToClipboard} >
            <i className="fa fa-copy"></i>
          </button>
        }
      </div>
      <a  className='sarcastic-mail' href='mailto:hello@toprak.dev?subject=sarcaz.tk'>hello[at]toprak.dev</a>
    </div>
  );
}

export default App;
