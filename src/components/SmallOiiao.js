import catGif from './cat-meme-hd.gif';
import catGifGold from './cat-meme-hd-gold.gif';

function SmallOiiao(props) {

    const keyArr = [];
    for(var i = props.counter; i > 0; i--) {
        keyArr.push(i);
    }

    var gold = 0;

    return (
        keyArr.map(key => {
            const style = {
                position: 'absolute',
                zIndex: 1000,
                left: (1200 * Math.random()),
                bottom: (600 * Math.random()),
            };

            const chance = Math.random() > 0.99;
            if (chance) {
                gold+=1;
            }


            return <div key={key} style={style} >
                <img src={chance && gold===1 ? catGifGold : catGif} width={400 * Math.random()} alt="oiiao"/>
            </div>
        })
        
    ) 
}

export default SmallOiiao;