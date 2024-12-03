import { useState } from 'react';
import oiiaoMp4 from './oiiao-mp4.mp4';
import oiiaoAudio from './oiiao-audio.mp3';
import ReactPlayer from 'react-player';
import SmallOiiao from './SmallOiiao';

function Oiiao() {
    const [playing, setPlaying] = useState(false);
    const [counter, setCounter] = useState(0);
    const audio = new Audio(oiiaoAudio);

    return (
        <span onClick={e => {
            e.preventDefault();
            if (playing) return;
            setCounter(counter + 1)
            setPlaying(true);
            audio.play();
            setTimeout(() => {
                setPlaying(false);
                audio.pause();
            }, 2000);
        }}>
            <ReactPlayer
            url={oiiaoMp4}
            playing={playing}
            loop={false}
            controls={false}
            pip={false}
            width={"1080px"}
            height={"600px"}
             />
             <h1>You've oiiao'd {counter} times.</h1>
            {
                playing ? <SmallOiiao/> : null
            }
            
        </span>
    )
}

export default Oiiao;