/* INSURANCE COMPANY MODELLING */

import redux from "redux";

/* Action Creators */
//functions that create and return actions (plain JS objects that have type and payload properties)

const createPolicy = (name, amount) => {
  // return an Action
  return {
    type: "CREATE_POLICY",
    payload: {
      name,
      amount,
    },
  };
};

const deletePolicy = (name) => {
  // return an Action
  return {
    type: "DELETE_POLICY",
    payload: {
      name,
    },
  };
};

const createClaim = (name, amountToCollect) => {
  // return an Action
  return {
    type: "CREATE_CLAIM",
    payload: {
      name,
      amountToCollect,
    },
  };
};

/* Reducers */
//take some existing data and some action, and modify and return that data based upon the context of the action

const claimsHistoryDepartment = (oldListOfClaims = [], action) => {
  // Reducer cares about the action
  if (action.type === "CREATE_CLAIM") {
    //Reducers always return new array/object/variable, not modify the existing ones
    return [...oldListOfClaims, action.payload];
  }

  // Reducer doesn't care about the action
  return oldListOfClaims;
};

const accountingDepartment = (bagOfMoney = 100, action) => {
  // Reducer cares about the action
  if (action.type === "CREATE_CLAIM") {
    //Reducers always return new array/object/variable, not modify the existing ones
    return bagOfMoney - action.payload.amountToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }

  // Reducer doesn't care about the action
  return bagOfMoney;
};

const policiesDepartment = (listOfPolicies = [], action) => {
  // Reducer cares about the action
  if (action.type === "CREATE_POLICY") {
    //Reducers always return new array/object/variable, not modify the existing ones
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((x) => x !== action.payload.name);
  }

  // Reducer doesn't care about the action
  return listOfPolicies;
};

/* Store */
//collection of Action Creators and Reducers

const { createStore, combineReducers } = redux;
// combine reducers together (key names will ended up to state object)
const ourDepartments = combineReducers({
  accounting: accountingDepartment,
  claimsHistory: claimsHistoryDepartment,
  policies: policiesDepartment,
});
const store = createStore(ourDepartments);

/* Testing example */
const action = createPolicy("Alex", 20);
store.dispatch(action);
store.dispatch(createPolicy("John", 50));
store.dispatch(createPolicy("Bob", 40));
store.dispatch(createClaim("Alex", 120));
store.dispatch(deletePolicy("Bob"));
console.log(store.getState());
