// src/redux/slices/bookingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookedKitchen {
  id: string;
  title: string;
  price: string;
  duration: string;
  image: any;
  bookedDate: string;
  bookedTime: string;
}

interface BookingState {
  selectedDate: string;
  bookedKitchens: BookedKitchen[];
}

const initialState: BookingState = {
  selectedDate: '',
  bookedKitchens: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    addBookedKitchen: (state, action: PayloadAction<BookedKitchen>) => {
      state.bookedKitchens.push(action.payload);
    },
    clearBookedKitchens: state => {
      state.bookedKitchens = [];
    },
  },
});

export const { setSelectedDate, addBookedKitchen, clearBookedKitchens } =
  bookingSlice.actions;
export default bookingSlice.reducer;
