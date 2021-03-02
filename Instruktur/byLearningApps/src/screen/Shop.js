import React from 'react';
import {View, Text} from 'react-native';

function Shop(props) {
    return (
        <View style={{flex: 1, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>Halaman Shop</Text>
        </View>
    );
}

export default Shop;