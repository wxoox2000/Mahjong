import { useEffect, useRef, useState } from 'react';
import { Field } from '../layer1/Layer1.styled';
import { Card } from '../card/card';

export const Layer1 = ({ getCards, pickPair, deleteCards, pair, clearPair, getCardsFromLayer, allCards, render }) => {
  const [cards, setCards] = useState([]);
  const [isPair, setIsPair] = useState(false);
  const [mount, setMount] = useState(null);
  const layer1Ref = useRef();

  useEffect(() => {
    setCards(getCards(layer1Ref, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log(cards);
    if(cards.length ===0 && !mount) {
      setMount(true)
      return;
    }
    else if(cards.length ===0 && mount){
      getCardsFromLayer(1, ['empty']);
      render(1)
      return
    }
    getCardsFromLayer(1, cards);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards])

  // old effect 
  // useEffect(() => {
  //   if(cards.length ===0) {
  //     getCardsFromLayer(1, cards);
  //     return;
  //   }
  //   getCardsFromLayer(1, cards);
  //       // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cards])
  
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
    setTimeout(() => {
      setCards(deleteCards(pair, cards));
    }, 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pair]);
  return (
    <>
      <Field ref={layer1Ref}>
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
