import React from 'react'
import Letter from './Letter'
import { useState } from 'react';
import '../App.css'
import herm from '../assets/herm.png'
import harry from '../assets/harry.png'
import ron from '../assets/ron.png'
import house from '../assets/houses.png'

import './MainContent.css'

const MainContent = () => {


    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLetterDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://i.imgur.com/iFflRpD.jpg';
        link.download = 'hogwartsLetter.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePoemDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://i.imgur.com/Mr0QXja.jpg';
        link.download = 'hogwartsLetter.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className='flex justify-center bg-[#001f3f]'>

            {isModalOpen ? (
                <div className=''>
                    <Letter isOpen={isModalOpen} onRequestClose={closeModal} />

                    <button className='bg-red-700 text-white bottom-10 fixed p-3 rounded-lg' onClick={closeModal}>Close</button>
                </div>
            ) : <div className='w-screen text-3xl text-white flex flex-col items-center mb-9' style={{ fontFamily: 'HarryP_' }}>
                <div>
                    <img className='w-[600px] h-[300px]' src={house} alt='houses' />
                </div>

                <div className='studentPhotos'>
                    <img className='w-[180px] h-[200px] mr-10' src={harry} alt='harry' />
                    <img className='lg:w-[200px] h-[200px]' src={herm} alt='hermione' />
                    <img className='w-[200px] h-[200px] ml-10' src={ron} alt='ron' />
                </div>

                <div className='flex flex-row items-center'>

                    <div className='flex flex-col space-y-5 m-10'>
                        <div>
                            <div>When we started meeting, I started liking your nature,</div>
                            <div>The beauty of those eyes I couldn't ever measure. </div>
                        </div>

                        <div>
                            <div>That evening in the college I told you I liked you,</div>
                            <div>Seeing you so happy, it felt as if in the heavens i flew.</div>
                        </div>

                        <div>
                            <div>I was in awe, wanted your attention and embrace,</div>
                            <div>You became someone nobody could replace.</div>
                        </div>

                        <div>
                            <div>I don't know what had happened, still unsure,</div>
                            <div>Could feel a shift, something weird and obscure.</div>
                        </div>

                        <div>
                            <div>The relationship worsened, going downhill,</div>
                            <div>There was sudden turbulence in the tranquil. </div>
                        </div>

                        <div>
                            <div>All the anger cause I didn't want to share,</div>
                            <div>There were never any wrong intentions I swear. </div>
                        </div>

                        <div>
                            <div>Just couldn't look at you as a friend, </div>
                            <div>I did have feelings for you, I couldn't pretend.</div>
                        </div>

                        <div>
                            <div>Can't expect you to come back, of course,</div>
                            <div>Love and care is something I shouldn't enforce.</div>
                        </div>

                        <div>
                            <div>Your sister, Suhas, your dad, and the baby,</div>
                            <div>I took a lot of learnings from and I respect dearly.</div>
                        </div>

                        <div>
                            <div>I still look out for you, if you are doing okay, </div>
                            <div>You doing well, academically and physically, I pray.</div>
                        </div>

                        <div>
                            <div>For this little poem, I only want one return,</div>
                            <div>You forgive me, because its a serious concern. </div>
                        </div>

                        <div>
                            <div>I know our relation might just be in flames,</div>
                            <div>But you know, I am just a call away, always. </div>
                        </div>

                        <div>
                            <div>Lastly wishing you a very very happy birthday,</div>
                            <div>Have your success and joy have everything outweigh!❤️</div>
                        </div>

                    </div>

                </div>

                <div>
                    <button onClick={handleLetterDownload} className='bg-green-900 p-2 rounded-lg mb-3'>
                        <div className='text-yellow-300'>Download Acceptance Letter</div>
                    </button>
                </div>
                <div>
                    <button onClick={handlePoemDownload} className='bg-green-900 p-2 rounded-lg'>
                        <div className='text-yellow-300'>Download Poem</div>
                    </button>
                </div>
            </div>}


        </div>
    );

}

export default MainContent