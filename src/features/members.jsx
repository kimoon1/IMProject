import { createSlice } from '@reduxjs/toolkit';

export const membersSlice = createSlice({
  name: 'members',
  initialState: {
    members: [],
  },
  reducers: {
    setMembers: (state, action) => {
      state.members.concat(action.payload);
    },
  },
});

export const { setMembers } = membersSlice.actions;

export default membersSlice.reducer;
