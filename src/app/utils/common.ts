import { OOMICard } from '../models/enums';


export function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function getShortNameOfCard(card: OOMICard) {
  const split = card.toString().split('_');
  return split[0][0] + '_' + split[1];
}

export function getErrorTextFromError(error: Error) {
  // remove 'Error' text from error as well
  return error.toString().substr(7, error.toString().length);
}
