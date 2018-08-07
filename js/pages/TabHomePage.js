import {createStackNavigator} from "react-navigation";
import NewDetailPage from "./NewDetailPage";
import HomePage from "./HomePage";


const TabHomePage = createStackNavigator({
    Home: {
        screen: HomePage,
    },
    NewDetail: {
        screen: NewDetailPage
    }
});
export default TabHomePage;