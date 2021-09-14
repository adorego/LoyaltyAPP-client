import {combineReducers} from "redux";
import {RedeemReducer} from "./RedeemsReducer";

export const rootReducer = combineReducers({
    redeem: RedeemReducer
})

export type AppState = ReturnType<typeof rootReducer>;