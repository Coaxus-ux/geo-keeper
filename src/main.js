import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-native';
import { Text, View } from "react-native";
import { skeleton } from './styles/skeleton';
import { mainButtons, fontButtons } from './styles/buttons';
import * as Location from 'expo-location';
export default function main() {
    return (
        <View style={skeleton.container}>
            <Link
                to="/addPosition"
                style={mainButtons.add}
            >
                <Text style={fontButtons.fontButtons}>ADD POSITION</Text>
            </Link>
            <Link
                to="/findPosition"
                style={mainButtons.find}
            >
                <Text style={fontButtons.fontButtons}>FIND POSITION</Text>
            </Link>
        </View>
    );
}
