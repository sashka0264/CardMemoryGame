
export const INITIALIZE = 'INITIALIZE';
export const OPEN_CARD = 'OPEN-CARD';
export const RESTART = 'RESTART';

export const initializeAC = (useGrids) => ({ type: INITIALIZE, useGrids });
export const openCardAC = (id, color) => ({ type: OPEN_CARD, id, color });
export const restartAC = () => ({ type: RESTART });