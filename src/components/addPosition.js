import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-native';

import { Text, View, Pressable } from "react-native";
import * as Location from 'expo-location';

import positionContext from '../context/position/positionContext';

import { skeleton } from '../styles/skeleton';
import { globalButtons, fontButtons } from '../styles/buttons';
export default function addPosition() {
    const { putPosition, position, getPositions } = useContext(positionContext);
    const [prePosition, setPrePosition] = useState({
        latitude: 0,
        longitude: 0,
    });
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })();

    }, []);

    const onPressButton = async () => {
        let location = await Location.getCurrentPositionAsync({});
        setPrePosition({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        })
        putPosition(location);
    }


    let text = "Add Position";
    if (errorMsg) {
        text = errorMsg;
    } else if (position) {
        const datos = getPositions();
        text = JSON.stringify(datos);
    }
    return (
        <View style={skeleton.container}>
            <Text>"This was the position that the application saved"</Text>
            <Text>{prePosition.latitude}</Text>
            <Text>{prePosition.longitude}</Text>

            <Pressable

                onPress={onPressButton}
                style={globalButtons.setPositionButton}
            >
                <Text style={fontButtons.fontButtons}>Put position on memory </Text>
            </Pressable>
            <Link
                to="/"
                style={globalButtons.backButton}
            >

                <Text style={fontButtons.fontButtons}>HOME</Text>
            </Link>


        </View>
    )
}
