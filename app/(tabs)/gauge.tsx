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
    const { lightningChart, Themes } = lcjs
    
    const lc = lightningChart({
      license: "0002-n3Kei2+JqP3mbgcisdTOqyUYkI9dKwBznrJ7kaTi8nYLPWlsFq7MjLj6N0CRKnGEhitt1MItFk92rt167zJjsqiu-MEUCIDmZsdNiMy4uw/r8V7eEl10rvnW8OF+DmWC7itAAEChIAiEA2cNQHKBUzKVR56eimH17WbRLSvoAhWAI7IMSB0PCUyg=",
      licenseInformation: {
        appTitle: "LightningChart JS Trial",
        company: "LightningChart Ltd."
      },
    });
const gauge = lc.Gauge({theme: Themes.cyberSpace,})
gauge.setTitle('Temperature')
gauge.setUnitLabel('°C')
gauge.setInterval(-20, 20)
gauge.setGapBetweenBarAndValueIndicators(2)
gauge.setValue(10)
const valueIndicators = []
const colorPalette = gauge.getTheme().examples.coldHotColorPalette
const intervalStart = -20
const intervalEnd = 20
const stepSize = (intervalEnd - intervalStart) / colorPalette.length
colorPalette.forEach((color, index) => {
    valueIndicators.push({
        start: Math.round(intervalStart + stepSize * index),
        end: Math.round(intervalStart + stepSize * (index + 1)),
        color,
    })
})
gauge.setValueIndicators(valueIndicators)

// Scale the gauge automatically based on screen size
gauge.onResize((_, width, height) => {
    const size = Math.min(width, height)
    gauge
        .setBarThickness(size / 10)
        .setNeedleLength(gauge.getBarThickness() * 2)
        .setValueIndicatorThickness(gauge.getBarThickness() / 3)
        .setNeedleThickness(gauge.getBarThickness() / 10)
    const fontSizeBig = Math.round(size / 10)
    const fontSizeSmaller = Math.round(size / 20)
    gauge.setUnitLabelFont((font) => font.setSize(fontSizeSmaller))
    gauge.setTickFont((font) => font.setSize(fontSizeSmaller))
    gauge.setValueLabelFont((font) => font.setSize(fontSizeBig))
})
// Randomize gauge value every 2 seconds
setInterval(() => {
    gauge.setValue(Math.random() * 40 - 20)
}, 2000)

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
