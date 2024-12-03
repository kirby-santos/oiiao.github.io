import catGif from './cat-meme-hd.gif';

function SmallOiiao() {
    const style = {
        position: 'absolute',
        zIndex: 1000,
        left: (1200 * Math.random()),
        bottom: (600 * Math.random()),
    };

    return (
        <div style={style} >
            <img src={catGif} width={400 * Math.random()} alt="oiiao"/>
        </div>
    ) 
}

export default SmallOiiao;