import appState from "./appstates";
import Actions from "./actions";

const reducers = (appstates, Action) => {
    switch (Action.type) {
        case Actions.Login.type:
            appstates = {
                ...appstates,
                user: Action.payload
            }

            break;
        case Actions.LogOut.type:
            appstates = {
                ...appstates,
                user: {}
            }

            break;
        default :


    }
    return appstates


}
export default reducers