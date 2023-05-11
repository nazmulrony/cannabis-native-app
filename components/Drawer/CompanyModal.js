import {
    View,
    Text,
    Pressable,
    Dimensions,
    Modal,
    StyleSheet,
    Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useSwitchCompanyQuery } from "../../ApiServices/company.service";
import { useDispatch, useSelector } from "react-redux";
import { addUser, authSelector } from "../../redux/slices/auth.slice";

const CompanyModal = ({
    setCompanyModalIsOpen,
    companyModalIsOpen,
    companies,
    currentCompanyId,
}) => {
    const dispatch = useDispatch();
    const [switchedCompanyId, setSwitchedCompanyId] =
        useState(currentCompanyId);
    const { data } = useSwitchCompanyQuery(switchedCompanyId);
    // console.log(data);
    useEffect(() => {
        if (data) {
            dispatch(addUser(data));
        }
    }, [data]);
    return (
        <Modal
            transparent={true}
            visible={companyModalIsOpen}
            animationType="fade"
            onRequestClose={() => {
                setCompanyModalIsOpen(false);
            }}
        >
            <Pressable
                onPress={() => {
                    setCompanyModalIsOpen(false);
                }}
                style={{
                    flex: 1,
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    backgroundColor: "rgba(0,0,0,0.0)",
                }}
            >
                <Pressable
                    onPress={() => {
                        //console.log("pressed inside");
                    }}
                    style={{
                        //height: HEIGHT / 4,
                        width: 240,
                        backgroundColor: "white",
                        borderRadius: 10,
                        //paddingHorizontal: 10,
                        paddingVertical: 10,
                        alignItems: "center",
                        marginTop: 60,
                        marginLeft: 20,
                        elevation: 2,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "flex-end",
                            justifyContent: "space-between",
                            width: "100%",
                            paddingHorizontal: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: Colors.light500,
                            paddingBottom: 10,
                        }}
                    >
                        <Text>Switch Companies</Text>
                        <Pressable
                            onPress={() => {
                                setCompanyModalIsOpen(false);
                            }}
                            style={{
                                flex: 0.5,
                                alignItems: "flex-end",
                            }}
                        >
                            <AntDesign name="close" size={16} color="black" />
                        </Pressable>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            paddingRight: 10,
                            //paddingVertical: 10,
                        }}
                    >
                        <View style={{ width: "100%" }}>
                            <View style={{ flexDirection: "column" }}>
                                {companies?.map((d, index) => (
                                    <Pressable
                                        onPress={() => {
                                            setCompanyModalIsOpen(false);
                                            setSwitchedCompanyId(d._id);
                                        }}
                                        key={d._id}
                                        style={
                                            index !== companies.length - 1
                                                ? [
                                                      currentCompanyId === d._id
                                                          ? styles.selectedCompanySection
                                                          : styles.companySection,
                                                  ]
                                                : [
                                                      currentCompanyId === d._id
                                                          ? [
                                                                styles.selectedCompanySection,
                                                                {
                                                                    borderBottomWidth: 0,
                                                                },
                                                            ]
                                                          : [
                                                                styles.companySection,
                                                                {
                                                                    borderBottomWidth: 0,
                                                                },
                                                            ],
                                                  ]
                                        }
                                    >
                                        <Image
                                            source={{
                                                uri: `${
                                                    d?.business_logo
                                                        ? d.business_logo
                                                        : "https://i.ibb.co/DDLbd1H/depositphotos-53326267-stock-illustration-legalize-stamp.webp"
                                                }`,
                                            }}
                                            style={{
                                                width: 30,
                                                height: 30,
                                                marginRight: 10,
                                            }}
                                        />
                                        <View style={{ flex: 1 }}>
                                            <Text
                                                style={
                                                    currentCompanyId === d._id
                                                        ? [
                                                              styles.radioText,
                                                              {
                                                                  color: Colors.green500,
                                                              },
                                                          ]
                                                        : styles.radioText
                                                }
                                            >
                                                {d.business_name}
                                            </Text>
                                            <Text
                                                style={
                                                    currentCompanyId === d._id
                                                        ? {
                                                              fontSize: 10,
                                                              fontWeight: "400",
                                                              color: Colors.green500,
                                                          }
                                                        : {
                                                              fontSize: 10,
                                                              fontWeight: "400",
                                                              color: "#6D6D6D",
                                                          }
                                                }
                                            >
                                                {d.license_type}
                                            </Text>
                                        </View>
                                    </Pressable>
                                ))}
                            </View>
                        </View>
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    radioText: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "600",
        color: "#6D6D6D",
    },
    inner: {
        width: 8,
        height: 8,
        borderRadius: 2,
        backgroundColor: Colors.green500,
    },
    outer: {
        width: 16,
        height: 16,
        borderRadius: 4,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 6,
    },
    radioRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 11,
    },
    pressed: {
        opacity: 0.6,
    },
    companySection: {
        borderBottomColor: Colors.light500,
        borderBottomWidth: 1,
        marginLeft: 10,
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    selectedCompanySection: {
        borderBottomColor: Colors.light500,
        borderBottomWidth: 1,
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        borderLeftWidth: 5,
        paddingLeft: 5,
        marginRight: -10,
        borderLeftColor: Colors.green500,
        backgroundColor: "#f0fdf4",
    },
});

export default CompanyModal;
