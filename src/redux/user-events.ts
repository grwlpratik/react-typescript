import { AnyAction } from "redux";

interface UserEvent {
    id: number,
    title: string,
    dateStart: string,
    dateEnd: string 
}

interface UserEventState {
    byIds: Record<UserEvent['id'], UserEvent>,
    allIds: UserEvent['id'][];
}

const initialState: UserEventState = {
    byIds: {},
    allIds: []
}

const eventUserReducer = (state: UserEventState = initialState, action: any) => {
    switch(action.type){
        default:
            return state;
    }
};

export default eventUserReducer;