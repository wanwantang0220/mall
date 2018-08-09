import {StyleSheet} from "react-native";
import {BackgroundColorLight, MainBg, White} from "./BaseStyle";
import {width} from '../util/ScreenUtil';

const mainStyles = StyleSheet.create({
    line: {
        height: 0.5,
        width: width - 20,
        backgroundColor: BackgroundColorLight,
        marginTop: 5,
        marginEnd: 5
    },
    container: {
        // backgroundColor: 'transparent',
        position: 'relative',
        flex: 1,
        backgroundColor: White
    },
    loading_view: {
        flex: 1,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MainBg,
    },
    loading_text: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 6,
        backgroundColor: 'transparent',
    },
    reload_view: {
        padding: 8,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        borderWidth: 3,
        borderRadius: 6,
    },
    toolbar: {
        height: 56,
        width: width,
        alignItems: 'center',
        flexDirection: 'row',
    },
    toolbar_left_img: {
        width: 26,
        height: 26,
        alignSelf: 'center',
        marginLeft: 20,
    },
    toolbar_middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingEnd: 20
    },
    toolbar_middle_text: {
        fontSize: 18,
        fontWeight: '600',
        color: White
    },
    toolbar_right_img: {
        width: 26,
        height: 26,
        alignSelf: 'center',
        marginRight: 20,
    },
    scrollview_container: {
        flex: 1,
    },
});

export default mainStyles;
