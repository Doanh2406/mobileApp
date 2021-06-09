import * as React from "react";
import { Text, Searchbar, Button, Card, Divider } from "react-native-paper";
<<<<<<< HEAD
import { StyleSheet, View, Image, Alert } from "react-native";
=======
import { StyleSheet, View, Image ,TouchableOpacity} from "react-native";
>>>>>>> 1c43cb5b6557e5e6a8e9d00408c90e2aea6b628e
import Avar from "../../assets/avar.png";
import firebase from "../../firebase";
//test


const Setting = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <View style={styles.search}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 15,
            marginTop: 5,
          }}
        >
          Menu
        </Text>
        <View style={{ marginLeft: "auto", marginRight: 5 }}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ width: 200, height: 30, borderRadius: 6, marginTop: 5 }}
          />
        </View>
      </View>

      <View style={styles.profile}>
        <Image
          source={Avar}
          style={{ height: 80, width: 60, marginLeft: 15 }}
        ></Image>
        <View style={styles.profileTitle}>
          <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 10 }}>
            Nguyễn Bảo Minh Doanh
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LiLish")}>
            <Text style={{ marginTop: 15, fontSize: 10 }}>
              Xem lí lịch sinh viên
            </Text>

          </TouchableOpacity>
         
        </View>
        <View style={{ marginTop: 20, marginLeft: "auto" }}>
          <Button
            icon="logout"
            mode="text"
            onPress={() =>
              firebase
                .auth()
                .signOut()
                .catch((error) => {
                  Alert.alert(error.message);
                })
            }
          >
            Đăng Xuất
          </Button>
        </View>
      </View>

      <Divider
        style={{
          backgroundColor: "#0066ff",
          marginTop: 20,
          width: "80%",
          alignSelf: "center",
        }}
      />

      <View style={styles.menu}>
        
        <Card style={styles.card}>
          <Card.Actions>
            <Button
              icon="account-details"
              mode="text"
              onPress={() => navigation.navigate("DKTC")}
            >
              Đăng ký Tc
            </Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Actions>
            <Button
              icon="calendar-check"
              mode="text"
              onPress={() => navigation.navigate("IndexKetQua")}
            >
              Kết Quả
            </Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Actions>
            <Button
              icon="cash-register"
              mode="text"
              onPress={() => navigation.navigate("IndexHocPhi")}
            >
              Học Phí
            </Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Actions>
            <Button
              icon="calendar-alert"
              mode="text"
              onPress={() => navigation.navigate("LichThi")}
            >
              Lịch thi
            </Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Actions>
            <Button
              icon="account-search"
              mode="text"
              onPress={() => navigation.navigate("GioiThieu")}
            >
              Giới thiệu
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
  },
  profile: {
    marginTop: 20,
    flexDirection: "row",
  },
  profileTitle: {
    marginLeft: 10,
  },
  menu: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",

    justifyContent: "center",
  },
  card: {
    marginTop: 10,
    width: 150,
    height: 60,
    marginLeft: 10,
  },
});
export default Setting;
