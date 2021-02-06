import { actions } from '../../store';
import React, { Component, createRef  } from 'react';
import { CommonActions } from '@react-navigation/native';
import { connect } from  'react-redux';

import { StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, View, Text, ScrollView, Alert, Animated, TouchableWithoutFeedback } from 'react-native';
import { Colors, Fonts, Functions, Metrics } from '../../themes';



import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { Modalize } from 'react-native-modalize';

import HeaderTitleBack from '../components/HeaderTitleBack';
import DeviceItem from '../components/DeviceItem';
import HeaderMarvel from '../components/HeaderMarvel';


import Icon from 'react-native-vector-icons/SimpleLineIcons';

const HEADER_MIN_HEIGHT = 90;
const HEADER_MAX_HEIGHT = 500;


class DetailsComicMarvel extends Component{

    modalDetails = React.createRef(null);

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        };
        this.scrollYAnimatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.setState({isLoading: true});
        console.log(this.props.route.params);
    }

    goBack = () => {
        this.props.navigation.goBack();
    };


    render(){
        const Month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const Data = this.props.route.params;
        const DateFormat = new Date(Data.dates[0].date);
        const headerHeight = this.scrollYAnimatedValue.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });
        const headerBackgroundColor = this.scrollYAnimatedValue.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: ['rgba(52, 52, 52, 0.8)', '#FFFFFF'],
            extrapolate: 'clamp',
        });

        const HideOpacityHeader = this.scrollYAnimatedValue.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });

        const ShowOpacityHeader = this.scrollYAnimatedValue.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });

        return(
            <>
                <View style={{backgroundColor: 'white', flex: 1,}}>
                    
                    {/* <HeaderMarvel descripcion={'Comic Details'} onClick={() => this.props.navigation.goBack()} /> */}
                    <Animated.View
                        style={[
                            styles.animatedHeaderContainer,
                            {
                            height: headerHeight,
                            backgroundColor: Colors.marvelPrimary,
                            zIndex: 1,
                            },
                        ]}>
                        <TouchableWithoutFeedback
                            headerBackgroundColor
                            onPress={this.goBack}>
                            <Animated.View
                            style={[
                                {
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                position: 'absolute',
                                left: 15,
                                top: 40,
                                zIndex: 999,
                                padding: 10,
                                paddingHorizontal: 13,
                                opacity: HideOpacityHeader,
                                elevation : 2,
                                backgroundColor: Colors.marvelPrimary,
                                borderRadius: 30
                                },
                            ]}>
                            <Icon
                                reverse
                                name='arrow-left'
                                size={20}
                                color={'white'}
                                style={{marginLeft: -3}}
                                />
                            </Animated.View>
                        </TouchableWithoutFeedback>

                        <Animated.View
                            style={[
                            {
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                position: 'absolute',
                                left: 5,
                                top: 30,
                                zIndex: 999,
                                padding: 15,
                                opacity: ShowOpacityHeader,
                                width: Metrics.screenWidth,
                            },
                            ]}>
                            <TouchableWithoutFeedback
                                headerBackgroundColor
                                onPress={this.goBack}>
                                <View style={{padding: 5}}>
                                    <Icon
                                        name='arrow-left'
                                        size={20}
                                        color={'white'}
                                        />
                                </View>
                            </TouchableWithoutFeedback>

                            <Text
                                style={{
                                    ...Fonts.fontBold,
                                    color: 'white',
                                    fontSize: 16,
                                    marginLeft: 0,
                                    marginRight: 25,
                                }}
                                numberOfLines={1}>
                                {Data.title}
                            </Text>

                        </Animated.View>

                        <Animated.Image
                            source={{
                                uri: Data.images[0].path + '.' + Data.images[0].extension,
                            }}
                            style={{
                                width: Metrics.screenWidth,
                                height: headerHeight,
                                opacity: HideOpacityHeader,
                            }}
                        />
                    </Animated.View>
                    {/* FIN HEADER */}

                    <ScrollView
                        contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT, }}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                            {
                                nativeEvent: {
                                contentOffset: {y: this.scrollYAnimatedValue},
                                },
                            },
                            ],
                            {useNativeDriver: false},
                        )}>
                            <View style={{margin: 16, minHeight: 800}}>
                                <Animated.View
                                    style={{
                                        opacity: HideOpacityHeader,
                                        maxWidth: Metrics.screenWidth,
                                    }}>
                                    <Text style={{ ...Fonts.fontBold, color: Colors.marvelBlack, fontSize: 20 }} numberOfLines={2}>{Data.title}</Text>
                                </Animated.View>
                                

                                <View style={{flexDirection: 'row', marginVertical: 5}}>
                                    <Text style={{...Fonts.fontSemiBold, fontSize: 14}}>Published:</Text>
                                    <Text style={{...Fonts.fontRegular, fontSize: 14}}> {`${Month[DateFormat.getMonth()]} ${DateFormat.getDate()}, ${DateFormat.getFullYear()}`}</Text>
                                </View>

                                <View style={{marginVertical: 10}}>
                                    <Text style={{...Fonts.fontRegular, fontSize: 14, textAlign: 'justify', marginBottom: 5}}>
                                    {(Data.description == null) ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et varius velit. Aenean non erat non sem cursus finibus quis non ante. Donec consequat sed eros sed facilisis. In ac euismod orci, sed mattis enim. Nulla eu maximus velit. Aenean commodo massa sed sapien vulputate dignissim. Etiam auctor nisl et faucibus rutrum. Donec molestie leo velit, sit amet porttitor mi laoreet quis. Vivamus eu ipsum id dui dictum fringilla a sit amet elit. Proin ac odio sagittis dui ornare molestie vitae a dolor. Praesent venenatis ex nec neque iaculis, nec mattis orci vehicula. Donec faucibus neque non metus molestie semper. Integer eu velit quis quam lacinia varius. Sed dictum augue nulla, vel eleifend ante ultricies ac.' : Data.description}
                                    </Text>
                                    <Text style={{...Fonts.fontRegular, fontSize: 14, textAlign: 'justify', marginBottom: 5}}>
                                        Fusce justo tortor, ultrices mattis consequat vel, volutpat nec ipsum. Sed mattis, magna sed auctor vulputate, purus lacus blandit felis, nec tincidunt nunc est non orci. Donec dui lacus, molestie sed imperdiet ac, mattis vel est. Sed mattis tellus a eros euismod, id ultricies nunc aliquet. Nullam mollis vehicula lectus ut dignissim. Nulla facilisi. Curabitur pharetra a urna placerat eleifend. Phasellus dignissim elit urna, at fermentum risus facilisis quis. Maecenas a feugiat nisl, in ullamcorper lacus. Sed mattis ex eu sollicitudin facilisis. In ornare, felis eu pulvinar tempor, lorem neque bibendum quam, ut iaculis diam nisl sed elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat risus vitae sem molestie, ut egestas odio posuere. Mauris ac odio ullamcorper, commodo nisl nec, eleifend tortor. Praesent nibh ipsum, consectetur dictum posuere eu, interdum ut dolor. Integer in diam bibendum,  lacinia turpis in, gravida ante.
                                    </Text>
                                </View>
                                
                                    {Data.creators.items.map((data, i) => (
                                        <View style={{flexDirection: 'row', marginVertical: 2.5}}>
                                            <Text style={{...Fonts.fontSemiBold, fontSize: 14,  textTransform: 'capitalize'}}>{data.role}:</Text>
                                            <Text style={{...Fonts.fontRegular, fontSize: 14}}> {data.name}</Text>
                                        </View>
                                    ))}

                            </View>

                            <View style={{height: 80}}/>

                    </ScrollView>

                    <View style={{flex: 1, backgroundColor: 'transparents', padding: 16, position: 'absolute', bottom: 0, left: 0, right: 0}}>
                        <TouchableOpacity style={{flex: 1, borderRadius: 10, backgroundColor: Colors.marvelPrimary, paddingVertical: 16, elevation: 4, paddingHorizontal: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text style={{...Fonts.fontBold, fontSize: 16, color: 'white'}}>Buy now: </Text>
                            <Text style={{...Fonts.fontBold, fontSize: 16, color: 'white'}}>$ {Data.prices[0].price}</Text>
                        </TouchableOpacity>
                    </View>

                    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    safContainer: { flex: 1 },
    animatedHeaderContainer: {
        // zIndex: 100,
        position: 'absolute',
        // top: (Platform.OS == 'ios') ? 20 : 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        opacity: 1,
      },
});


function mapStateToProps(state) {
    return {
        userData: state.user.dataUser,
        tokenData: state.user.token,
        modules: state.user.modules,
    }
}



const mapDispatchToProps = dispatch => ({
    aDataComics: (limit, offest) => 
        dispatch(actions.marvelapi.aDataComics(limit, offest)),
    dispatch
});

  
export default connect(mapStateToProps, mapDispatchToProps)(DetailsComicMarvel);