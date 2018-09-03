import React ,{PureComponent}from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

export default class LottiePage extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
        };
    }

    state = {
        example: EXAMPLES[0],
        duration: 3000,
        isPlaying: true,
        isInverse: false,
        loop: true,
    };


    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
        }).start();
    }

    render() {
        return (
            <LottieView
                source={require('../../animations/LottieLogo1.json')}
                autoPlay
                loop
            />
        );
    }
}