import { useEffect, useRef, useState } from 'react';
import { Field } from '../layer4/layer4.styled';
import { Card } from '../card/card';
import { useTheme } from '../App';

// import Hatsu from "../../assets/tiles/Export/Regular/Hatsu.png";
// import Chun from "../../assets/tiles/Export/Regular/Chun.png";
// import Sou1 from "../../assets/tiles/Export/Regular/Sou1.png";
// import Sou2 from "../../assets/tiles/Export/Regular/Sou2.png";
// import Sou3 from "../../assets/tiles/Export/Regular/Sou3.png";
// import Sou4 from "../../assets/tiles/Export/Regular/Sou4.png";
// import Sou5 from "../../assets/tiles/Export/Regular/Sou5.png";
// import Sou6 from "../../assets/tiles/Export/Regular/Sou6.png";
// import Sou7 from "../../assets/tiles/Export/Regular/Sou7.png";
// import Sou8 from "../../assets/tiles/Export/Regular/Sou8.png";
// import Sou9 from "../../assets/tiles/Export/Regular/Sou9.png";
// import Sou5Dora from "../../assets/tiles/Export/Regular/Sou5-Dora.png";
// import Man1 from "../../assets/tiles/Export/Regular/Man1.png";
// import Man2 from "../../assets/tiles/Export/Regular/Man2.png";
// import Man3 from "../../assets/tiles/Export/Regular/Man3.png";
// import Man4 from "../../assets/tiles/Export/Regular/Man4.png";
// import Man5 from "../../assets/tiles/Export/Regular/Man5.png";
// import Man6 from "../../assets/tiles/Export/Regular/Man6.png";
// import Man7 from "../../assets/tiles/Export/Regular/Man7.png";
// import Man8 from "../../assets/tiles/Export/Regular/Man8.png";
// import Man9 from "../../assets/tiles/Export/Regular/Man9.png";
// import Man5Dora from "../../assets/tiles/Export/Regular/Man5-Dora.png";
// import Nun from "../../assets/tiles/Export/Regular/Nan.png";
// import Pei from "../../assets/tiles/Export/Regular/Pei.png";
// import Pin1 from "../../assets/tiles/Export/Regular/Pin1.png";
// import Pin2 from "../../assets/tiles/Export/Regular/Pin2.png";
// import Pin3 from "../../assets/tiles/Export/Regular/Pin3.png";
// import Pin4 from "../../assets/tiles/Export/Regular/Pin4.png";
// import Pin5 from "../../assets/tiles/Export/Regular/Pin5.png";
// import Pin6 from "../../assets/tiles/Export/Regular/Pin6.png";
// import Pin7 from "../../assets/tiles/Export/Regular/Pin7.png";
// import Pin8 from "../../assets/tiles/Export/Regular/Pin8.png";
// import Pin9 from "../../assets/tiles/Export/Regular/Pin9.png";
// import Pin5Dora from "../../assets/tiles/Export/Regular/Pin5-Dora.png";
// import Ton from "../../assets/tiles/Export/Regular/Ton.png";
// import Shaa from "../../assets/tiles/Export/Regular/Shaa.png";


export const Layer4 = ({ getCards, pickPair, deleteCards, pair, clearPair, getCardsFromLayer, allCards, render, start }) => {
  const [cards, setCards] = useState([]);
  const [isPair, setIsPair] = useState(false);
  const [mount, setMount] = useState(null);
  const layer4Ref = useRef();
  const {wrongPairFX} = useTheme()
  useEffect(() => {
    setCards(getCards(layer4Ref, 4));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if(cards.length === 120){
      const deleteLast = cards.filter(({position}) =>position.top !== '700px' );
      setCards(deleteLast)  ;
    }
    if(cards.length ===0 && !mount) {
      setMount(true)
      return;
    }
    else if(cards.length ===0 && mount){
      getCardsFromLayer(4, ['empty']);
      render(4)
      return
    }
    getCardsFromLayer(4, cards);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards])
  useEffect(() => {
    if (pair.length !== 2) {
      setIsPair(false);
      return;
    }
    else if(pair[0].color !== pair[1].color){
      setCards(cards => [...cards]);
      setIsPair(true);
      clearPair()
      wrongPairFX()
      return;
    }
    setCards(deleteCards(pair, cards));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pair]);
  return (
    <>
      <Field ref={layer4Ref} onClick={start}>
        {cards.map(card => {
            return (
              <Card
                id={card.id}
                key={card.id}
                color={card.color}
                pickPair={pickPair}
                isPair={isPair}
                pos={card.position}
                layer={card.layer}
                allCards={allCards}
              />
            );
        })}
      </Field>
    </>
  );
};
