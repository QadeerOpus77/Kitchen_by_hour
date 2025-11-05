import React, { useState } from "react";
import { View, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { MarkedDates } from "react-native-calendars/src/types";
import { BackHeader } from "../../Components";
import styles from "./style";

const AvailabilityScreen = () => {
    const [bookedDates] = useState([
        "2025-11-01",
        "2025-11-02",
        "2025-11-03",
        "2025-11-07",
        "2025-11-08",
        "2025-11-09",
        "2025-11-21",
        "2025-11-22",
        "2025-11-23",
        "2025-11-24",
        "2025-11-25",
    ]);

    // Create booked markedDates with "Booked" label inside each booked day
    const markedDates: MarkedDates = bookedDates.reduce((acc, date) => {
        acc[date] = {
            customStyles: {
                container: {
                    backgroundColor: "#0D284A",
                    borderRadius: 6,
                    justifyContent: "center",
                    alignItems: "center",
                },
                text: {
                    color: "white",
                    fontWeight: "600",
                    textAlign: "center",
                },
            },
        };
        return acc;
    }, {} as MarkedDates);

    return (
        <View style={styles.container}>
            {/* Header */}
            <BackHeader
                title="Availability"
                tintColor="black"
                titleColor="#0D284A"
            />

            {/* Calendar */}
            <Calendar
                markingType={"custom"}
                markedDates={markedDates}
                dayComponent={({ date, state, marking }) => {
                    const isBooked = date ? bookedDates.includes(date.dateString) : false;
                    return (
                        <View
                            style={[
                                styles.dayContainer,
                                isBooked && styles.bookedContainer,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.dayText,
                                    state === "disabled" && styles.disabledText,
                                    isBooked && styles.bookedText,
                                ]}
                            >
                                {date?.day ?? ''}
                            </Text>
                            {isBooked && <Text style={styles.bookedTag}>Booked</Text>}
                        </View>
                    );
                }}
                theme={{
                    backgroundColor: "white",
                    calendarBackground: "white",
                    textSectionTitleColor: "#8C8C8C",
                    textMonthFontWeight: "600",
                    textMonthFontSize: 18,
                    monthTextColor: "#0D284A",
                    arrowColor: "#0D284A",
                    textDayFontSize: 16,
                }}
            />

            {/* Legend */}
            {/* <View style={styles.legend}>
                <View style={styles.legendItem}>
                    <View style={[styles.circle, { backgroundColor: "#0D284A" }]} />
                    <Text style={styles.legendText}>Booked</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.circle, { backgroundColor: "#E5E5E5" }]} />
                    <Text style={styles.legendText}>Available</Text>
                </View>
            </View> */}
        </View>
    );
};

export default AvailabilityScreen;
