import { useEffect, useRef, useState } from 'react';
import { Field } from '../layer4/layer4.styled';
import { Card } from '../card/card';
import { useTheme } from '../App';


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
