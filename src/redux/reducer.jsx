import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

export const InitialState={
    dishes:DISHES,
    comments:COMMENTS,
    promotions:PROMOTIONS,
    leaders:LEADERS
}

export const Reducer=(state=InitialState,action)=>{
    return state;
}