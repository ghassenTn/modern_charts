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
    const { lightningChart } = lcjs;

    const lc = lightningChart({
      license: "0002-n3Kei2+JqP3mbgcisdTOqyUYkI9dKwBznrJ7kaTi8nYLPWlsFq7MjLj6N0CRKnGEhitt1MItFk92rt167zJjsqiu-MEUCIDmZsdNiMy4uw/r8V7eEl10rvnW8OF+DmWC7itAAEChIAiEA2cNQHKBUzKVR56eimH17WbRLSvoAhWAI7IMSB0PCUyg=",
      licenseInformation: {
        appTitle: "LightningChart JS Trial",
        company: "LightningChart Ltd."
      },
    });

    const spiderChart = lc.Spider()
    // Every axis range from 0 to 100.
spiderChart.setAxisInterval(100, 0)
// Add series
const series = spiderChart.addSeries()
    .setName('Product A')
    .addPoints(
        { axis: 'Amarok', value: 70 },
        { axis: ' Fiorino', value: 50 },
        { axis: 'Iveco', value: 80 },
        { axis: 'Symbole', value: 30 },
        { axis: 'Toyota', value: 60 },
        { axis: 'Fiat ', value: 40 },
    )
    series.setFillStyle(new SolidFill({ color: ColorRGBA(255, 0, 0) }))
    series.setPointFillStyle(new SolidFill({ color: ColorRGBA(0, 255, 0) }))
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
