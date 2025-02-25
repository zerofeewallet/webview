import React,{Component} from 'react';
import {
  Image,
  View,
  Button,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  Linking,
  StatusBar, StyleSheet,
  ScrollView, ActivityIndicator, BackHandler
} from "react-native";
import WebView from "react-native-webview";
import loadingVideo from "../images/loading.mp4"
import Video from "react-native-video";

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  hideSpinner() {
    this.setState({ visible: false });
  }
  handleBackButton = () => {
    this.props.navigation.goBack(null);
    return true;
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    return (
      <View flex={1} style={{marginTop:0,backgroundColor: '#D0E1F1',marginBottom:0}} >
        <StatusBar hidden = {false} backgroundColor="#D0E1F1" translucent = {true}/>
        {/*<WebView onLoad={() => this.hideSpinner()}
                 source={{ uri: "https://app.zeroswallet.com/" }} />*/}

        <View flex={1}  style={{marginTop:40,backgroundColor: '#D0E1F1',marginBottom:43}}>
          <WebView onLoad={() =>
                   this.hideSpinner()}
                   source={{ uri: "https://app.zeroswallet.com/" }}
                   scalesPageToFit={false}
                   scrollEnabled={false}
                   setBuiltInZoomControls={false}
                   javaScriptEnabled={true}
                   />
        </View>

        {this.state.visible ==true?
          <Video
            // Can be a URL or a local file.
            source={loadingVideo}
            repeat={true}
            style={styles.backgroundVideo}
            onBack={() => this.state.visible}
            fullscreen={false}
          />:""
        }

      </View>
    );
  }
};

var styles = StyleSheet.create({
  backgroundVideo: {
    height:"100%",
    width:"100%",
    position: "relative",
  },
});

export default FirstPage;
