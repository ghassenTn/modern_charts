import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const lightningChartHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/@lightningchart/lcjs@6.1.1/dist/lcjs.iife.js"></script>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    h1 {
      margin: 0;
      text-align: center;
      background-color: #f4f4f4; /* Optional for styling */
      padding: 10px;
    }
    #chart {
      flex: 1;
      width: 100%;
    }
  </style>
</head>
<body>
  <div id="chart"></div>
  <script>
const { lightningChart, Themes, AxisScrollStrategies, AxisTickStrategies, emptyFill, emptyLine } = lcjs
const exampleContainer = document.getElementById('chart') || document.body
if (exampleContainer === document.body) {
    exampleContainer.style.width = '100vw'
    exampleContainer.style.height = '100vh'
    exampleContainer.style.margin = '0px'
}
exampleContainer.style.display = 'flex'
exampleContainer.style.flexDirection = 'row'
const gaugeLayout = document.createElement('div')
exampleContainer.append(gaugeLayout)
gaugeLayout.style.width = '40%'
gaugeLayout.style.height = '100%'
const xyContainer = document.createElement('div')
exampleContainer.append(xyContainer)
xyContainer.style.width = '90%'
xyContainer.style.height = '100%'
    const lc = lightningChart({
      license: "0002-n3Kei2+JqP3mbgcisdTOqyUYkI9dKwBznrJ7kaTi8nYLPWlsFq7MjLj6N0CRKnGEhitt1MItFk92rt167zJjsqiu-MEUCIDmZsdNiMy4uw/r8V7eEl10rvnW8OF+DmWC7itAAEChIAiEA2cNQHKBUzKVR56eimH17WbRLSvoAhWAI7IMSB0PCUyg=",
      licenseInformation: {
        appTitle: "LightningChart JS Trial",
        company: "LightningChart Ltd."
      },
    });

const gaugeChartArray = []
const lineSeriesArray = []
const xyChart = lc
    .ChartXY({
        container: xyContainer,
        theme: Themes.cyberSpace,
    })
    .setTitle('Line chart with gauges')
    .setCursor((cursor) => cursor.setTickMarkerXVisible(false))
xyChart
    .getDefaultAxisX()
    .setTickStrategy(AxisTickStrategies.Empty)
    .setThickness(0)
    .setStrokeStyle(emptyLine)
    .setScrollStrategy(AxisScrollStrategies.progressive)
    .setInterval({ start: 0, end: 10_000, stopAxisAfter: false })
xyChart.getDefaultAxisY().dispose()
// Create dashboard rows
for (let iCh = 0; iCh < 4; iCh++) {
    const axisY = xyChart
        .addAxisY({ iStack: 4 - iCh })
        .setMargins(10, 10)
        .setInterval({ start: 0, end: 100 })
    const lineSeries = xyChart
        .addPointLineAreaSeries({ axisY, dataPattern: 'ProgressiveX' })
        .setMaxSampleCount(10_000)
        .setAreaFillStyle(emptyFill)
    lineSeriesArray.push(lineSeries)

    const gaugeContainer = document.createElement('div')
    gaugeLayout.append(gaugeContainer)
    gaugeContainer.style.height = '25%'
    const gauge = lc
        .Gauge({
            container: gaugeContainer,
            theme: Themes.cyberSpace,
        })
        .setTitle('')
        .setInterval(0, 100)
        .setUnitLabel('kmh')
        .setAngleInterval(180, 0)
        .setRoundedEdges(false)
        .setBarThickness(40)
        .setNeedleLength(20)
        .setNeedleThickness(2)
        .setValueIndicatorThickness(2)
        .setGapBetweenBarAndValueIndicators(1)
        .setTickFormatter((tick) => tick.toFixed(0))
        .setValueLabelFont((font) => font.setSize(14))
        .setUnitLabelFont((font) => font.setSize(16))
        .setTickFont((font) => font.setSize(16))
        .setAngleInterval(180, 0)
        .setRoundedEdges(false)

    gaugeChartArray.push(gauge)
}
// Construct value indicator array from a color palette
const valueIndicators = []
const colorPalette = gaugeChartArray[0].getTheme().examples.badGoodColorPalette
const intervalStart = 0
const intervalEnd = 100
const stepSize = (intervalEnd - intervalStart) / colorPalette.length
colorPalette.forEach((color, index) => {
    valueIndicators.push({
        start: intervalStart + stepSize * index,
        end: intervalStart + stepSize * (index + 1),
        color,
    })
})
gaugeChartArray.forEach((gauge) => gauge.setValueIndicators(valueIndicators))

// Generate random real-time data
const prevValues = lineSeriesArray.map((_) => Math.random() * 100)
setInterval(() => {
    const currentTime = performance.now()
    for (let iCh = 0; iCh < 4; iCh++) {
        const prev = prevValues[iCh]
        const currentValue = Math.max(Math.min(prev + 5 * (Math.random() * 2 - 1), 100), 0)
        prevValues[iCh] = currentValue
        lineSeriesArray[iCh].add({ x: currentTime, y: currentValue })
        gaugeChartArray[iCh].setValue(currentValue)
    }
}, 1000 / 60)

  </script>
</body>
</html>
`;
  return (
    <View style={styles.container}>
     <WebView
      originWhitelist={['*']}
      javaScriptEnabled={true} // This enables JavaScript execution
      domStorageEnabled={true} // Enables DOM storage if needed
      source={{ html: lightningChartHTML }}
      style={{ flex: 1 , backgroundColor: 'transparent'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
