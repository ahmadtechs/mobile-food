import PaystackWebView from 'react-native-paystack-webview';
import React, {Component} from 'react';
import {View} from 'react-native';
 
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <PaystackWebView
          buttonText="Pay Now"
          showPayButton={true}
          paystackKey="pk_test_26e2b7b29472360a267970418bc01e8c28ee74f5"
          paystackSecretKey="sk_test_3f7f55847c347142338b4fec54f6cf1033d79835"
          amount={120000}
          billingEmail="paystackwebview@something.com"
          billingMobile="09787377462"
          billingName="Oluwatobi Shokunbi"
          ActivityIndicatorColor="green"
          SafeAreaViewContainer={{marginTop: 5}}
          SafeAreaViewContainerModal={{marginTop: 5}}
          onCancel={(e) => {
            // handle response here
          }}
          onSuccess={(e) => {
            // handle response here
          }}
          autoStart={false}
        />
      </View>
    );
  }
}