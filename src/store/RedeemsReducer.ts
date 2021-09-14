import {RedeemInt} from "../components/RedeemCard/RedeemCard";
export const REDEEM_SELECTED = "REDEEM_SELECTED";

export interface RedeemAction{
    type: string;
    payload: RedeemInt | null;
}

export const RedeemReducer = ( state: RedeemInt | null = null, action: RedeemAction): RedeemInt | null => {
    switch (action.type){
        case REDEEM_SELECTED:
            return action.payload;
        default:
            return state;
    }
}