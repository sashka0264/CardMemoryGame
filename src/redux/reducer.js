import {
  INITIALIZE,
  OPEN_CARD,
  RESTART
} from './actions';
import { colorsGenerator, mapGenerator } from '../helpers/initialize';

export const initialState = {
  initialized: false,
  gridMap: null,
  lastCard: {
    id: null,
    color: null
  }
};

const reducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case INITIALIZE: 
      const colors = colorsGenerator( (action.useGrids ** 2) / 2);
      const map = mapGenerator(colors, action.useGrids);
      return {
        ...state,
        initialized: true,
        gridMap: map
      }
    case OPEN_CARD: 
      let newLastCard = {
        id: action.id,
        color: action.color
      }

      let newGridMap = state.gridMap
        .map((item) => {
          if (item.opened && item.id !== action.id) return {...item, opened: false}
          if (item.id === action.id && !state.lastCard.id && !state.lastCard.color) return {...item, opened: true}
          return item;
        });
        
      if (action.color === state.lastCard.color) newGridMap = newGridMap.filter((item) => item.color !== action.color);
    
      if (state.lastCard.id && state.lastCard.color) {
        newLastCard.id = null;
        newLastCard.color = null;
      }
      
      return {
        ...state,
        gridMap: newGridMap,
        lastCard: newLastCard
      }
    case RESTART:
      return {
        ...state,
        initialized: false,
        gridMap: null,
        lastCard: {
          id: null,
          color: null
        }
      }
    default: 
      return state;
  }
};

export default reducer;

