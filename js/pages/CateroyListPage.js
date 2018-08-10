import React, {PureComponent} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from "react-native";


import PropTypes from 'prop-types';
import {MainColor, WhiteTextColor} from "../style/BaseStyle";
import LinearGradient from "react-native-linear-gradient";
import mainStyles from "../style/Css";
import httpUrl from "../http/HttpUrl";


export default class CateroyListPage extends PureComponent {

    static navigationOptions = {
        header: null,
    };


    static propTypes = {
        title: PropTypes.string,
    };


    constructor(props) {
        super(props);
        this.state = {
            mAList: null,
            mIList: null,
            mHList: null,
            isInitSuccess: true,
        };
    }

    async componentDidMount() {
        this.getList();
    }


    render() {

        if (this.state.mAList == null && this.state.mIList && this.state.mHList) {
            return (
                this.state.isInitSuccess ? (
                    <LinearGradient style={mainStyles.loading_view} colors={[MainColor, WhiteTextColor]}>
                        <ActivityIndicator
                            animating={true}
                            color={this.state.MainColor}
                            size='large'/>
                        <Text style={[mainStyles.loading_text, {color: MainColor}]}>loading</Text>
                    </LinearGradient>
                ) : (
                    <LinearGradient style={mainStyles.loading_view} colors={[MainColor, WhiteTextColor]}>
                        <TouchableOpacity onPress={() => {
                            this.setState({isInitSuccess: true});
                        }}>
                            <Text style={[mainStyles.reload_view, {
                                color: this.state.MainColor,
                                borderColor: this.state.MainColor,
                            }]}>reloading</Text>
                        </TouchableOpacity>
                    </LinearGradient>)
            )
        } else {
            return (
                <Text>CateroyListPage</Text>
            )
        }

    }


    async getList() {
        const title = this.props.title;

        const list = await  httpUrl.getGankTypeContent({
            type: title,
            pagecount: 10,
            page: 1
        });

        let clist = await list.json();

        console.log('clist : ', clist.results);

    }
}
