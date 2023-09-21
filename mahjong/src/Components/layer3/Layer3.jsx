import { useEffect, useRef, useState } from 'react';
import { Field } from '../layer3/Layer3.styled';
import { Card } from '../card/card';

export const Layer3 = ({ getCards, pickPair, deleteCards, pair, clearPair, getCardsFromLayer, allCards, render }) => {
  const [cards, setCards] = useState([]);
  const [isPair, setIsPair] = useState(false);
  const [mount, setMount] = useState(null);
  const layer3Ref = useRef();
  useEffect(() => {
    setCards(getCards(layer3Ref, 3));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log(cards);
    if(cards.length ===0 && !mount) {
      setMount(true)
      return;
    }
    else if(cards.length ===0 && mount){
      getCardsFromLayer(3, ['empty']);
      render(3)
      return
    }
    getCardsFromLayer(3, cards);
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

      return;
    }
    setCards(deleteCards(pair, cards));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pair]);
  return (
    <>
      <Field ref={layer3Ref}>
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
