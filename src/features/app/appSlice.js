import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/routes';

export const createUser = createAsyncThunk(
  'app/createUser',
  //payload: {"name": "Nicolas","email": "nico@gmail.com","password": "1234","avatar": "https://picsum.photos/800"}
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, payload);
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);
export const logInUser = createAsyncThunk(
  'app/logInUser',
  //payload: {"email": "john@mail.com", "password": "changeme"}
  async (payload, thunkAPI) => {
    try {
      const resp = await axios.post(`${BASE_URL}/auth/login`, payload);
      // resp.data: {"access_token": "..","refresh_token": ".."}
      const response = await axios.get(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${resp.data.access_token}`,
        },
      });
      return response.data;
      /* response.data: {"id": 1,"email": "john@mail.com","password": "changeme",
        "name": "Jhon","role": "customer","avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867"} */
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);

const appSlice = createSlice({
  name: 'app',
  initialState: {
    buttonSideBarIsActive: false,
    modalRegistrationIsActive: false,
    bodyLock: false,
    userIsLogIn: false,
    currentUser: {},
    userProductsList: [
      //{ amount: '1', size: '', id: '', product: {},}
    ],
  },
  reducers: {
    changeStateButtonSideBar(state) {
      state.buttonSideBarIsActive = !state.buttonSideBarIsActive;
      return state;
    },
    changeStateModalRegistration(state, action) {
      state.modalRegistrationIsActive = action.payload;
      return state;
    },
    changeStateBodyLock(state, action) {
      state.bodyLock = action.payload;
      return state;
    },
    changeStateUserIsLogIn(state, action) {
      state.userIsLogIn = action.payload;
      return state;
    },
    addProductToUserProductsList(state, { payload }) {
      const product = state.userProductsList.find(item => item.id === payload.product.id);
      if (product) {
        Object.assign(product, { size: payload.size });
      } else {
        state.userProductsList.push({
          amount: '1',
          size: payload.size,
          id: payload.product.id,
          product: { ...payload.product },
        });
      }
      return state;
    },
    deleteProductFromUserProductsList(state, { payload }) {
      //state.userProductsList = state.userProductsList.filter(item => item.id !== payload.id);
      const products = state.userProductsList.filter(item => item.id !== payload.id);
      return { ...state, userProductsList: products };
    },
    upDateProductInUserProductsList(state, { payload }) {
      const product = state.userProductsList.find(item => item.id === payload.id);
      Object.assign(product, { amount: payload.amount });
    },
  },
  extraReducers: builder => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.userIsLogIn = true;
      state.currentUser = action.payload;
      /* action.payload:
        {
            "email": "nico@gmail.com",
            "password": "1234",
            "name": "Nicolas",
            "avatar": "https://i.imgur.com/yhW6Yw1.jpg",
            "role": "customer",
            "id": 24
        } */
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.userIsLogIn = true;
      state.currentUser = action.payload;
    });
  },
});

export default appSlice.reducer;
export const {
  changeStateButtonSideBar,
  changeStateModalRegistration,
  changeStateBodyLock,
  changeStateUserIsLogIn,
  addProductToUserProductsList,
  deleteProductFromUserProductsList,
  upDateProductInUserProductsList,
} = appSlice.actions;
export const stateButtonSadeBar = state => state.app.buttonSideBarIsActive;
export const stateModalRegistration = state => state.app.modalRegistrationIsActive;
export const stateBodyLock = state => state.app.bodyLock;
export const stateUserIsLogIn = state => state.app.userIsLogIn;
export const selectorUserProductsList = state => state.app.userProductsList;
export const selectorCurrentUser = state => state.app.currentUser;
