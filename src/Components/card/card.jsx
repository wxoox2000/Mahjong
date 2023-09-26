import { useEffect, useRef, useState } from 'react';
import { MojangCard } from './card.styled';
import { useTheme } from "../App";

export const Card = ({ color, id, pickPair, isPair, pos, layer, allCards }) => {
  const highestLayer = allCards.map(item => item.layer).sort()[
    allCards.length - 1
  ];
  // console.log(highestLayer);
  const { theme } = useTheme();
  const [clicked, setClicked] = useState(false);
  const [curPair, setCurPair] = useState(null);
  const [allow, setAllow] = useState(layer === highestLayer ? true : false);
  const cardRef = useRef();
  const choosedCard = () => {
    setClicked(!clicked);
    setCurPair(true);
    pickPair(color, id);
  };
  const allowCardPick = (layer, position) => {
    const getHigherLayers = allCards.filter(item => item.layer > layer);
    if (getHigherLayers.length === 0) {
      setAllow(true);
      return;
    }
    const left = parseInt(position.left);
    const top = parseInt(position.top);
    const sharedPos = (arr, layer) => {
      // let topShift = 0;
      // let leftShift = 0;
      // switch (layer) {
      //   case 1:
      //     break;
      //   case 2:
      //     topShift = 50;
      //     leftShift = 25;
      //     break;
      //     case 3:
      //     topShift = 100;
      //     leftShift = 50;
      //     break;
      //   default:
      //     break;
      // }
      let entrance = [];
      for (let i = 0; i < arr.length; i++) {
        if (
          top <= parseInt(arr[i].positionToCalc.top) &&
          top + 100 >= parseInt(arr[i].positionToCalc.top)
        ) {
          if (
            left <= parseInt(arr[i].positionToCalc.left) &&
            left + 50 >= parseInt(arr[i].positionToCalc.left)
          ) {
            entrance.push(arr[i]);
          } else if (
            left >= parseInt(arr[i].positionToCalc.left) &&
            left <= parseInt(arr[i].positionToCalc.left) + 50
          ) {
            entrance.push(arr[i]);
          }
        } else if (
          top >= parseInt(arr[i].positionToCalc.top) &&
          top <= parseInt(arr[i].positionToCalc.top) + 100
        ) {
          if (
            left <= parseInt(arr[i].positionToCalc.left) &&
            left + 50 >= parseInt(arr[i].positionToCalc.left)
          ) {
            entrance.push(arr[i]);
          } else if (
            left >= parseInt(arr[i].positionToCalc.left) &&
            left <= parseInt(arr[i].positionToCalc.left) + 50
          ) {
            entrance.push(arr[i]);
          }
        }
      }
      return entrance;
    };
    const coverCheck = getHigherLayers.filter(
      ({ layer, cardsArr }) => sharedPos(cardsArr, layer).length !== 0
    );
    setAllow(coverCheck.length === 0);
  };
  useEffect(() => {
    if (!isPair) {
      return;
    }
    setCurPair(false);
    setTimeout(() => {
      setClicked(false);
      setCurPair(null);
    }, 700);
  }, [isPair]);
  useEffect(() => {
    allowCardPick(layer, pos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCards]);
  return (
    <MojangCard
      $cur_theme={theme}
      ref={cardRef}
      className={clicked && 'choosed'}
      onClick={choosedCard}
      $choosed={clicked}
      $wrongpair={curPair}
      $pos={pos}
      $allow={allow}
    >
      <img src={`${color}`} alt="" width="50px" />
    </MojangCard>
  );
};
