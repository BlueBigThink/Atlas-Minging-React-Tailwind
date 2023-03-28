import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance : null
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    saveBalance: (state, action) => {
      return { balance: action.payload };
    },
    clearBalance: () => {
      return { balance: null };
    },
  },
});

const { reducer, actions } = balanceSlice;

export const { saveBalance, clearBalance } = actions;
export default reducer;