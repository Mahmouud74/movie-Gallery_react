export const middleWare = (store) => (next) => (action) => {
    console.log("stateBeforeAction", action, store.getState());
    return next(action);
}

