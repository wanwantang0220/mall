import {StyleSheet} from "react-native";
import {BackgroundColorLight} from "./BaseStyle";
import {width} from '../util/ScreenUtil';

const mainStyles = StyleSheet.create({
    line: {
        height: 0.5,
        width: width - 20,
        backgroundColor: BackgroundColorLight,
        marginTop: 5,
        marginEnd: 5
    }
});

export default mainStyles;
