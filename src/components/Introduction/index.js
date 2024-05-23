import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './index.css';

const Introduction = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [warning, setWarning] = useState('');

    const handleSubmit = () => {
        if (!name || !email || !mobile) {
            setWarning('All fields are required.');
            return;
        }
        setWarning('');
        setName('');
        setEmail('');
        setMobile('');

        setIsDialogOpen(true);

        setTimeout(() => {
            setIsDialogOpen(false);
        }, 3000);
    };

    return (
        <div className='content'>
            <div className='first-content'>
                <h1>Become ACCA in 18 months</h1>
                <p>Acquire globally recognized accountancy qualification, ACCA (also called as Global CA), and get placed in top MNCs & Big4s.</p>
                <div className='buttons'>
                    <button className='download-btn'>Download Brouchere</button>
                    <button className='silver-btn'>
                        <div className='silver-text'>SILVER LEARNING PARTNER</div> 
                        <span className='span'>ACCA</span>
                    </button>
                </div>
                <div>
                    <ReactPlayer 
                        width='400px'
                        height='300px'
                        className='video-player' 
                        url='https://www.youtube.com/watch?v=mvC9NNIDaxY&ab_channel=1FINbyIndigoLearn-CAFoundation%2CInter%26Final' 
                    />
                </div>
            </div>
            <div className='second-content'>
                <div className='form'>
                    <h2 className='question'>Aspiring to be an ACCA?</h2>
                    
                    <input 
                        placeholder='NAME' 
                        type='text' 
                        className='input-field'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        placeholder='EMAIL' 
                        type='email' 
                        className='input-field'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder='MOBILE NUMBER*' 
                        type='text' 
                        className='input-field'
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    {warning && <p className='warning'>{warning}</p>}
                    <button className='submit-btn' onClick={handleSubmit}>Request Callback</button>
                </div>
            </div>
            {isDialogOpen && (
                <div className='dialog'>
                    <div className='dialog-content'>
                        <p className='message'>Success! Your information has been submitted.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Introduction;
