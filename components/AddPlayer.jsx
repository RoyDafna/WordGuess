import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";

const AddPlayer = observer(({ game }) => {
  const imageLinks = [
    "https://media.4-paws.org/5/b/8/b/5b8bca3f74342210ccca652c651f2d7e23288753/VIER%20PFOTEN_2019-12-13_209-2890x2000.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/neva-masquerade-royalty-free-image-1674509896.jpg",
    "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg",
    "https://humanepro.org/sites/default/files/styles/article_new/public/images/post/cat-portrait.jpg",
    "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=11e949fc5d06576bc8b80ec192896753",
  ];
  const [playerName, setPlayerName] = useState("");
  const [imageSrc, setImageSrc] = useState(imageLinks.at(0));
  const imgIndexRef = useRef(0);

  return (
    <>
      <div>
        <img height={200} src={imageSrc} />
        <br />
        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Name"
        ></input>
        <button
          onClick={() =>
            setImageSrc(
              imageLinks.at(++imgIndexRef.current % imageLinks.length)
            )
          }
        >
          New Picture
        </button>
        <button onClick={() => game.addPlayer(playerName, imageSrc)}>Save</button>
      </div>
    </>
  );
});

export default AddPlayer;
