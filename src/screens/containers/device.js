import { actions } from '../../store';
import React, { Component, createRef  } from 'react';
import { CommonActions } from '@react-navigation/native';
import { connect } from  'react-redux';

import { StyleSheet, SafeAreaView, StatusBar, FlatList, View, Text, ActivityIndicator, Alert, Animated } from 'react-native';
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { Colors, Fonts, Functions, Metrics, } from '../../themes';



import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { Modalize } from 'react-native-modalize';

import HeaderTitleMaps from '../components/HeaderTitleMaps';
import HeaderSearchBar from '../components/HeaderSearchBar';
import DeviceItem from '../components/DeviceItem';

class DeviceScreen extends Component{

    modalDetails = React.createRef(null);

    constructor(props){
        super(props);
        this.state = {
            data: [],
            page: 3,
            isLoading: true,
            error: null,
            limit: 10,
            offest: 0,
            search: '',
            refreshing: false,
            showSearch: false,
            headerWidth: new Animated.Value(0),
            device: {
                name: '',
                serial: '',
                modelo: '',
                estructuras: '',
                tipomarcaje: '',
                tipoacceso: ''
            },
            array_structure_type: [{"id_structure_type":26,"structure_type":"APARTAMENTO","is_logic":0,"ask_location":0,"settings_structure_type":{"has_parking":1},"status":1},{"id_structure_type":5,"structure_type":"CARGO","is_logic":1,"ask_location":0,"settings_structure_type":[],"status":1},{"id_structure_type":4,"structure_type":"DEPARTAMENTO","is_logic":1,"ask_location":0,"settings_structure_type":[],"status":1},{"id_structure_type":28,"structure_type":"EDIFICIO","is_logic":0,"ask_location":0,"settings_structure_type":[],"status":1},{"id_structure_type":2,"structure_type":"EMPRESA","is_logic":0,"ask_location":0,"settings_structure_type":[],"status":1},{"id_structure_type":1,"structure_type":"ORGANIZACION","is_logic":0,"ask_location":0,"settings_structure_type":[],"status":1},{"id_structure_type":6,"structure_type":"PAIS","is_logic":0,"ask_location":0,"settings_structure_type":[],"status":1},{"id_structure_type":25,"structure_type":"PARQUEADERO","is_logic":0,"ask_location":0,"settings_structure_type":[],"status":1},{"id_structure_type":7,"structure_type":"PUERTA","is_logic":0,"ask_location":0,"settings_structure_type":{"device_access_control":1},"status":1},{"id_structure_type":3,"structure_type":"SEDE","is_logic":0,"ask_location":0,"settings_structure_type":[],"status":1},{"id_structure_type":8,"structure_type":"TORNIQUETE","is_logic":0,"ask_location":0,"settings_structure_type":{"device_access_control":1},"status":1},{"id_structure_type":12,"structure_type":"TORRE","is_logic":0,"ask_location":0,"settings_structure_type":[],"status":1},{"id_structure_type":13,"structure_type":"ZONA","is_logic":0,"ask_location":0,"settings_structure_type":[],"status":1}],
            array_type_access: [{"id_device_action_type":1,"device_action":"ONLY_ACCESS","id_device_type":1},{"id_device_action_type":2,"device_action":"ONLY_TIME_ATTENDANCE","id_device_type":1},{"id_device_action_type":3,"device_action":"ACCESS_AND_TIME_ATTENDANCE","id_device_type":1}],
            // array_access_type:[
            //     {
            //         id: 
            //     }
            // ]
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        this._fetchDevices();
    }

    _fetchDevices = () => {
        const { page, limit, offest, search } = this.state;
        const { aDevice , tokenData} = this.props;
        console.log(page, limit, offest, search);
        //limit, offest, searcj
        const raDevice = aDevice(tokenData, limit, offest, search)
                .then((data) => data.json())
                .then((dataJson) => {
                    console.log(dataJson);
                    if(dataJson.message == 'SUCCESSFUL'){
                        this.setState((prevState, nextProps) => ({
                            data:
                            offest === 0
                                ? Array.from(dataJson.data.results)
                                : [...this.state.data, ...dataJson.data.results],
                            isLoading: false,
                            refreshing: false
                        }));
                    }else{
                        if(dataJson.status == 'et401'){
                            this.logoutHandlePress();
                        }else{
                            this.setState({isLoading: false});
                            Functions.alertOK('Advertencia', "Error: "+dataJson.message, true);
                        }
                    }
                })
                .catch((error) => {
                    this.setState({isLoading: false});
                    console.error("erroraa");
                    console.error(error);
                });
           
    };

    _handleLoadMore = () => {
        console.log('_handleLoadMore');
        const { limit,  } = this.state;
        this.setState(
            (prevState, nextProps) => (
                {
                offest: prevState.offest + limit,
                loadingMore: true
            }),
            () => {
                this._fetchDevices();
            }
        );
    };

    _handleRefresh = () => {
        const { limit } = this.state;
        this.setState(
            {
                offest: limit,
                refreshing: true
            },
            () => {
                this._fetchDevices();
            }
        );
    };
    
    _updateSearch = (search) => {
        this.setState({ search, offest: 0, limit: 10 });
        this._fetchDevices(search);
    };

    _showInputSearch = () => {
        this.setState({showSearch: true})
    }

    _hideInputSearch = () => {
        this.setState({showSearch: false})
    }

    openDetailsItem = (name, serial, modelo, structure) => {
        const ne = (structure ? this.state.array_structure_type.find(x => x.id_structure_type === structure) : null);
        this.setState({
            device: {
                name,
                serial,
                modelo,
                estructuras:  (ne ? ne.structure_type : 'SIN ESTRUCTURAS'),
                tipomarcaje: '',
                tipoacceso: ''
            }
        });
        this.modalDetails.current.open();
    }

    logoutHandlePress = () => {

        Alert.alert(
            "La sesión ha caducado",
            "Por favor, vuelve a iniciar sesión.",
            [
                {text: 'Aceptar', onPress: 

                () => {
                    
                    this.props.dispatch({
                        type: 'SET_TOKEN',
                        payload: {
                            token: undefined
                        }
                    })
                    this.props.dispatch({
                        type: 'SET_USER',
                        payload: false,
                    });
                    this.props.dispatch({
                        type: 'SET_MODULES',
                        payload: false
                    })
                    this.props.dispatch({
                        type: 'SET_ALL',
                        payload: false
                    })
                    this.props.navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [
                            {
                                name: 'Loading',
                                params: { user: 'init' },
                            },
                            ],
                        })
                    );
                    
                }
                },
            ],
            {cancelable: true},
        );
    }

    render(){
        return(
            <>
            {(this.state.showSearch == true) 
            ?
            (
                <HeaderSearchBar _updateSearch={(e) => this._updateSearch(e)} search={this.state.search} onCancel={() => this._hideInputSearch()}/>
            )
            :
            (
                <HeaderTitleMaps 
                    descripcion={'Dispositivos'} 
                    onClick={() => this.props.navigation.goBack()} goToMaps={() => this.props.navigation.push('Maps')}
                    onClickSearch={() => this._showInputSearch()}
                    />
            )}
            <SafeAreaView style={[styles.safContainer, { backgroundColor: 'white' }]}>

            {(this.state.isLoading) ? 
            (
                <SkeletonPlaceholder>
                    <SkeletonPlaceholder.Item flexDirection="column" margin={25}>

                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        
                        
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
            )
            :
            (
                <FlatList
                    contentContainerStyle={{
                        margin: 16,
                    }}
                    keyExtractor={item => item.id}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <DeviceItem {...item} key={item.id_device} onClick={() => this.openDetailsItem(item.device_name, item.device_model, item.settings_device.serial, item.settings_device.id_structure) }/>
                    )}
                    emp
                    onEndReached={this._handleLoadMore}
                    onEndReachedThreshold={0.5}
                    initialNumToRender={10}
                    ListFooterComponent={
                        <View
                            style={{
                                position: 'relative',
                                width: 50,
                                height: 50,
                                paddingVertical: 20,
                                borderTopWidth: 1,
                                marginTop: 10,
                                marginBottom: 10,
                                borderColor: Colors.primaryDark
                            }}
                            >
                            <ActivityIndicator animating size="large" />
                        </View>
                    }
                    ListEmptyComponent={<View style={{alignItems: 'center', justifyContent: 'center', padding: 16}}><Text style={{...Fonts.fontSemiBold, fontSize: 18}}>No se encontraron registros</Text></View>}
                    onRefresh={this._handleRefresh}
                    refreshing={this.state.refreshing}
                    />
            )}

                    
            {/* MODAL YA TIENES PRODUCTOS DE OTRO RESTAURANTE */}
            <Modalize ref={this.modalDetails} snapPoint={400}>
                <View style={{backgroundColor: 'white', alignItems: 'center', borderRadius: 14, marginTop: 15, paddingHorizontal: 16}}>
                    <Text style={{...Fonts.fontBold, color: Colors.primaryDark, fontSize: 20, marginBottom: 10}}>Detalle de dispositivo</Text>

                    <View style={styles.itemDetails}>  
                        <Text style={styles.titleDetails}>Nombre:</Text>
                        <Text style={styles.descriptionDetails}>{this.state.device.name}</Text>
                    </View>
                    <View style={styles.itemDetails}>  
                        <Text style={styles.titleDetails}>Serial:</Text>
                        <Text style={styles.descriptionDetails}>{this.state.device.serial}</Text>
                    </View>
                    <View style={styles.itemDetails}>  
                        <Text style={styles.titleDetails}>Modelo:</Text>
                        <Text style={styles.descriptionDetails}>{this.state.device.modelo}</Text>
                    </View>
                    <View style={styles.itemDetails}>  
                        <Text style={styles.titleDetails}>Estructuras:</Text>
                        <Text style={styles.descriptionDetails}>{this.state.device.estructuras}</Text>
                    </View>
                    <View style={styles.itemDetails}>  
                        <Text style={styles.titleDetails}>Tipo de marcaje:</Text>
                        <Text style={styles.descriptionDetails}>{this.state.device.tipomarcaje}</Text>
                    </View>
                    <View style={styles.itemDetails}>  
                        <Text style={styles.titleDetails}>Tipo de aceso:</Text>
                        <Text style={styles.descriptionDetails}>{this.state.device.tipoacceso}</Text>
                    </View>

                    
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',  borderColor: Colors.grisHr, borderTopWidth: .5, width: '100%', padding: 10, marginHorizontal: 16}}>  
                        <TouchableNativeFeedback onPress={() => this.modalDetails.current.close()} style={{width: Metrics.screenWidth/2-16, backgroundColor: Colors.primaryDark, borderWidth: .5}}>
                            <Text style={{ ...Fonts.fontMedium, color: 'white', fontSize: 16, paddingVertical: 10, textAlign: 'center' }}>OK</Text>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </Modalize>
        


            <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark}/>
            </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    safContainer: { flex: 1 },
    itemDetails: {alignItems: 'flex-start', justifyContent: 'center',  borderColor: Colors.grisHr, borderTopWidth: .5, width: '100%', padding: 10, marginHorizontal: 16},
    titleDetails:{...Fonts.fontBold, color: Colors.gris, fontSize: 16},
    descriptionDetails: {...Fonts.fontRegular, color: Colors.gris, fontSize: 13}
});


function mapStateToProps(state) {
    return {
        userData: state.user.dataUser,
        tokenData: state.user.token,
        modules: state.user.modules,
    }
}



const mapDispatchToProps = dispatch => ({
    aDevice: (token, limit, offest, search) => 
        dispatch(actions.intelliapi.aDevice(token, limit, offest, search)),
    dispatch
});

  
export default connect(mapStateToProps, mapDispatchToProps)(DeviceScreen);