import { Text, View } from "react-native";
import { useEffect, useState, useContext } from "react";

import { Link } from 'react-router-native';
import { skeleton } from '../styles/skeleton';
import positionContext from '../context/position/positionContext';

import { globalButtons, fontButtons } from '../styles/buttons';
export default function findPosition() {
    const { getPositions } = useContext(positionContext);
    const [position, setPosition] = useState();
    useEffect(() => {
        (async () => {
            let cor = await getPositions();
            setPosition(cor);
        })();
        console.log(position);
    }, []);
    return (
        <View style={skeleton.container}>
            <Text>"saved positions"</Text>
            {
                position &&
                position.map((cor) => {
                    return (
                        <Text key={cor.timestamp} >{cor.coords.latitude}</Text>
                    )
                })
            }
            <Link
                to="/"
                style={globalButtons.backButton}
            >
                <Text style={fontButtons.fontButtons}>Home</Text>
            </Link>
        </View>
    )
}