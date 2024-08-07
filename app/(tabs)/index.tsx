import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const SplashScreen = () => {
    return (
       
        <LinearGradient
        colors={[ '#990000','#FFFFFF','#990000' ]}
        style={styles.container}
    >
          <Image
                    source={{
                        uri: 'https://i.pinimg.com/originals/15/28/40/152840a623436d49ebc85093d4e7572c.png',
                    }}
                    style={styles.image}
                />
        
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },


});

export default SplashScreen;

