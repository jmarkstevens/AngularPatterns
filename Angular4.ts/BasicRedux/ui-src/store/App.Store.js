"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_logger_1 = require("redux-logger");
var middleware = [];
var useLogger = 1;
if (useLogger)
    middleware.push(redux_logger_1.default);
var initState = {
    data1: {
        name: 'Hello Redux',
        setDateTime: new Date().toLocaleString()
    },
    data2: {
        name: 'Hello Redux child',
        setDateTime: new Date().toLocaleString()
    }
};
function mainReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case 'GetData1Done':
            return Object.assign({}, state, { data1: action.payload });
        case 'GetData2Done':
            return Object.assign({}, state, { data2: action.payload });
        default:
            return state;
    }
}
exports.store = redux_1.createStore(mainReducer, redux_1.applyMiddleware.apply(void 0, middleware));
//# sourceMappingURL=App.Store.js.map