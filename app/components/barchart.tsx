import {useState} from 'react';
import { BarChart ,barDataItem,PieChart } from "react-native-gifted-charts";
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


function Bar(data: barDataItem[] | ({ value: number; frontColor: string; gradientColor: string; spacing: number; label: string; } | { value: number; frontColor: string; gradientColor: string; spacing?: undefined; label?: undefined; })[] | undefined){
  return(
    <BarChart
      initialSpacing={10}
      showFractionalValues
      barWidth={20}
      barBorderRadius={7}
      showYAxisIndices
      noOfSections={4}
      data={data}
      isAnimated={true}
      yAxisThickness={0}
      xAxisType={'dashed'}
      xAxisColor={'#232B5D'}
      yAxisTextStyle={{color: '#232B5D'}}
      stepValue={1000}
      maxValue={6000}
      yAxisLabelTexts={['0', '1k', '2k', '3k', '4k', '5k', '6k']}
      labelWidth={20}
      xAxisLabelTextStyle={{color: '#232B5D', textAlign: 'center'}}
      showLine
      lineConfig={{
        color: "#0BA5A4",
        thickness: 3,
        curved: true,
        hideDataPoints: true,
        shiftY: 20,
        initialSpacing: -30,
      }}
    />
  )
}

const Barchart = () =>{
  // update data to show on bar chart
  const [data , setData] = useState([ {value: 2500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Toyota'},
    {value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {value: 3500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Fiorino'},
    {value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {value: 4500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Amarok'},
    {value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
    {value: 5000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Hilux'},
    {value: 4500, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
  ]);
return(
   <SafeAreaProvider style={styles.container}>
    <SafeAreaView>
      <View style={{
        padding: 0,
        margin: 1,
        borderRadius: 40,
        backgroundColor: 'white',
      }}>
        <Text style={styles.titleText}>Bar Chart</Text>
        {Bar(data)}
      </View>
      {/* <Button title="Random" onPress={handle_click} color={'blue'}/> */}
    </SafeAreaView>
   </SafeAreaProvider>
  );
}
export default Barchart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 13,
    padding: 4,
    margin: 4,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',

  },
  button: {
    padding: 8,
    margin: 8,
  }
});




