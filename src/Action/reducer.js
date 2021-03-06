const action_types = require('./action_types');
import json from '../../lang.json';


const initialState = {
  content: json.en // Loads default language content (en) as an initial state
};

let reducer = function (state = initialState, action) {
  switch (action.type) {
    case action_types.SWITCH_LANGUAGE:
      return {
        content: json[action.language]
      };
    default:
      return state;
  }
};

module.exports = reducer;
