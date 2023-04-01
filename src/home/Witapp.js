import React, { Fragment, useEffect, useState } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import API from "../core/api";
const Witapp = () => {
  const [dataNoit, setDataNoti] = useState(null);

  useEffect(() => {
    // GetAPI();
  }, []);

  const GetAPI = async () => {
    const params = {};
    const res = await API.gitNoit(params);
    setDataNoti(res);
  };
  return (
    <Fragment>
      <SafeAreaView>
        <StatusBar barStyle={"default"} />
        <View>
          <Text>test By Wit App</Text>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default Witapp;
