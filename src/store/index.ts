import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import gameReducer from "../component/GameEngineStore";

export const store = configureStore({
    reducer: {
        gameEngineReducer: gameReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<String>>