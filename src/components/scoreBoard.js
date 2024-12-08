import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Scoreboard = ({ teamA, teamB }) => {
    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const [winner, setWinner] = useState(null);

    const increaseScoreA = () => {
        if (scoreA < 10 && !winner) setScoreA(scoreA + 1);
    };

    const decreaseScoreA = () => {
        if (scoreA > 0 && !winner) setScoreA(scoreA - 1);
    };

    const increaseScoreB = () => {
        if (scoreB < 10 && !winner) setScoreB(scoreB + 1);
    };

    const decreaseScoreB = () => {
        if (scoreB > 0 && !winner) setScoreB(scoreB - 1);
    };

    const resetScores = () => {
        setScoreA(0);
        setScoreB(0);
        setWinner(null);
    };

    useEffect(() => {
        if (scoreA === 10) {
        setWinner(teamA);
        }
        if (scoreB === 10) {
        setWinner(teamB);
        }
    }, [scoreA, scoreB, teamA, teamB]);

    return (
        <View style={styles.container}>
        <Text style={styles.header}>Pertandingan Futsal</Text>
        <Text style={styles.teamName}>
            {teamA}: {scoreA}
        </Text>
        <Text style={styles.teamName}>
            {teamB}: {scoreB}
        </Text>

        <View style={styles.buttonContainer}>
            <Button title="+" onPress={increaseScoreA} />
            <Button title="-" onPress={decreaseScoreA} />
        </View>

        <View style={styles.buttonContainer}>
            <Button title="+" onPress={increaseScoreB} />
            <Button title="-" onPress={decreaseScoreB} />
        </View>

        {winner && <Text style={styles.winner}>Pemenang: {winner}</Text>}

        <Button title="Reset Pertandingan" onPress={resetScores} />
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    teamName: {
        fontSize: 20,
        marginVertical: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        marginVertical: 10,
    },
    winner: {
        fontSize: 18,
        color: "green",
        marginVertical: 20,
    },
    });

export default Scoreboard;
