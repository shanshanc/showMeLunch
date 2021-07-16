const ADJECTIVE_LIST = require('./constants/adjectives');
const NOUN_LIST = require('./constants/nouns');

const getRandomIndex = len => {
  const index = Math.floor(Math.random(len) * len);
  return index;
}

const getRandomItem = () => {
  const selectedAdj = ADJECTIVE_LIST[getRandomIndex(ADJECTIVE_LIST.length)];
  const seelctedNoun = NOUN_LIST[getRandomIndex(NOUN_LIST.length)]
  return `${selectedAdj}${seelctedNoun}`;
}

const checkIfAskingForLunch = input => {
  const lunchStrEn = /[l|L]unch.*$/g;
  const lunchStrZhTw = /^午餐.*$/g;

  const askInEn = input.match(lunchStrEn) !== null;
  const askInZhTw = input.match(lunchStrZhTw) !== null;

  if (askInEn || askInZhTw) {
    return true;
  }
  return false;
}

module.exports = {
  getRandomItem,
  checkIfAskingForLunch
}