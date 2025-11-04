import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import { MarkedDates } from "react-native-calendars/src/types";

// import Icon from "react-native-vector-icons/Ionicons";
import styles from "./style";
import { images } from "../../constant";

const AvailabilityScreen = () => {
    // Example booked dates (you can fetch from API in future)
    const [bookedDates] = useState([
        "2025-08-01",
        "2025-08-02",
        "2025-08-03",
        "2025-08-07",
        "2025-08-08",
        "2025-08-09",
        "2025-08-21",
        "2025-08-22",
        "2025-08-23",
        "2025-08-24",
        "2025-08-25",
    ]);

    // Generate markedDates dynamically
    const markedDates: MarkedDates = bookedDates.reduce((acc, date) => {
        acc[date] = {
            selected: true,
            customStyles: {
                container: {
                    backgroundColor: "#0D284A",
                    borderRadius: 6,
                },
                text: {
                    color: "white",
                    fontWeight: "600",
                },
            },
        };
        return acc;
    }, {} as MarkedDates);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Image source={images.backImage} />
                </TouchableOpacity>
                <Text style={styles.title}>Availability</Text>
            </View>

            {/* Calendar */}
            <Calendar
                markingType={"custom"}
                markedDates={markedDates}
                theme={{
                    textMonthFontWeight: "700",
                    textMonthFontSize: 18,
                    monthTextColor: "#0D284A",
                    arrowColor: "#0D284A",
                    textDayFontSize: 16,
                    todayTextColor: "#0D284A",
                }}
                renderHeader={(date) => (
                    <Text style={styles.monthText}>
                        {date.toString("MMMM yyyy")}
                    </Text>
                )}
            />

            {/* Legend */}
            <View style={styles.legend}>
                <View style={styles.legendItem}>
                    <View style={[styles.circle, { backgroundColor: "#0D284A" }]} />
                    <Text style={styles.legendText}>Booked</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.circle, { backgroundColor: "#E5E5E5" }]} />
                    <Text style={styles.legendText}>Available</Text>
                </View>
            </View>
        </View>
    );
};

export default AvailabilityScreen;

