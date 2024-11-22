import React,{useState} from 'react';
import { View, Text, StyleSheet, FlatList,Modal,Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './components/barchart';

const driverData = [
    {
        id: '1',
        name: 'Fedora',
        DailyDistance: 120,
        travelHours: 8,
        startTime: '08:00 AM',
        endTime: '04:00 PM',
        dailyFuel: 50,
        IdleHours: 1,
        refillsNumber: 2,
        litersFilled: 100,
        maxTravelHours: 10,
        averageSpeed: 60,
        regulatorUsageMinutes: '30 mins',
        maxSpeed: 120,
        score: 85,
        NombreFatime: 2,
        nbHardBraking: 3,
        nbHardAcceleration: 4,
        fuel_cost: 200,
        stop_count: 5,
        stop_duration: '1 hour',
        engine_working_hours: 9,
        chartData: [10, 20, 30, 40, 50, 60, 70],
    },
    {
        id: '2',
        name: 'Debian',
        DailyDistance: 150,
        travelHours: 10,
        startTime: '07:00 AM',
        endTime: '05:00 PM',
        dailyFuel: 60,
        IdleHours: 2,
        refillsNumber: 3,
        litersFilled: 120,
        maxTravelHours: 12,
        averageSpeed: 70,
        regulatorUsageMinutes: '40 mins',
        maxSpeed: 130,
        score: 90,
        NombreFatime: 3,
        nbHardBraking: 4,
        nbHardAcceleration: 5,
        fuel_cost: 250,
        stop_count: 6,
        stop_duration: '2 hours',
        engine_working_hours: 10,
        chartData: [20, 30, 40, 50, 60, 70, 80],
    },
    {
        id: '3',
        name: 'Ubuntu',
        DailyDistance: 100,
        travelHours: 6,
        startTime: '09:00 AM',
        endTime: '03:00 PM',
        dailyFuel: 40,
        IdleHours: 0.5,
        refillsNumber: 1,
        litersFilled: 80,
        maxTravelHours: 8,
        averageSpeed: 50,
        regulatorUsageMinutes: '20 mins',
        maxSpeed: 110,
        score: 80,
        NombreFatime: 1,
        nbHardBraking: 2,
        nbHardAcceleration: 3,
        fuel_cost: 150,
        stop_count: 4,
        stop_duration: '30 mins',
        engine_working_hours: 7,
        chartData: [30, 40, 50, 60, 70, 80, 90],
    },
    {
        id: '4',
        name: 'Mint',
        DailyDistance: 130,
        travelHours: 9,
        startTime: '07:30 AM',
        endTime: '04:30 PM',
        dailyFuel: 55,
        IdleHours: 1.5,
        refillsNumber: 2,
        litersFilled: 110,
        maxTravelHours: 11,
        averageSpeed: 65,
        fuel_cost: 150,
        stop_count: 4,
        stop_duration: '30 mins',
        engine_working_hours: 7,
        chartData: [10, 20, 3, 20, 70, 80, 10],
    }
    // Add more driver data as needed
];

const Analytics = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    function toggleModal(){
        if(isModalVisible){
            setIsModalVisible(false);
        }
        else{
            setIsModalVisible(true);
        }
    }
    const renderItem = ({ item }: { item: typeof driverData[0] }) => (
        <View style={styles.card}>
            <View style={styles.header}>
                <Icon name="account" size={30} color="#4CAF50" />
                <Text style={styles.name} onPress={toggleModal}>{item.name}</Text>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <Icon name="car-speed-limiter" size={20} color="#4CAF50" />
                    <Text style={styles.statText}>Hard Acceleration: {item.nbHardAcceleration}</Text>
                </View>
                <View style={styles.stat}>
                    <Icon name="currency-usd" size={20} color="#4CAF50" />
                    <Text style={styles.statText}>Fuel Cost: ${item.fuel_cost}</Text>
                </View>
                <View style={styles.stat}>
                    <Icon name="stop-circle-outline" size={20} color="#4CAF50" />
                    <Text style={styles.statText}>Stop Count: {item.stop_count}</Text>
                </View>
                <View style={styles.stat}>
                    <Icon name="timer-sand" size={20} color="#4CAF50" />
                    <Text style={styles.statText}>Stop Duration: {item.stop_duration}</Text>
                </View>
                <View style={styles.stat}>
                    <Icon name="engine" size={20} color="#4CAF50" />
                    <Text style={styles.statText}>Engine Working Hours: {item.engine_working_hours} hrs</Text>
                </View>
            </View>
            <Home/>
            <View>

      {/* Driver Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal} // Handles Android back button
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Driver Details</Text>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Driver Info */}
            <View style={styles.modalBody}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.value}>Driver One</Text>

              <Text style={styles.label}>Current Location:</Text>
              <Text style={styles.value}>123 Main St, Springfield</Text>

              <Text style={styles.label}>Status:</Text>
              <Text style={styles.value}>On Duty</Text>

              <Text style={styles.label}>Last Trip Duration:</Text>
              <Text style={styles.value}>2 hours 15 minutes</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
    </View>
 
    );

    return (
        <FlatList
            data={driverData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    card: {
        backgroundColor: '#fff',
        padding: 40,
        marginVertical: 8,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
    },
    statsContainer: {
        marginBottom: 30,
        backfaceVisibility: 'hidden',
        borderRadius:20,
    },
    stat: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    statText: {
        fontSize: 16,
        color: '#666',
        marginLeft: 10,
        fontWeight: "bold"
    },
    openButton: {
        backgroundColor: '#3BE9DE',
        padding: 15,
        borderRadius: 5,
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },
      modalContainer: {
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
      },
      modalContent: {
        fontSize: 14,
        color: '#333333',
        marginBottom: 20,
        textAlign: 'center',
      },
      modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#333',
        marginBottom: 30,
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
      },
      closeButton: {
        fontSize: 18,
        color: '#ff5c5c',
        fontWeight: 'bold',
      },
      modalBody: {
        marginTop: 2,
        marginBottom: 2,
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 0,
      },
      value: {
        fontSize: 16,
        color: '#333',
        marginBottom: 12,
        fontWeight: 'bold',
      },
});

export default Analytics;