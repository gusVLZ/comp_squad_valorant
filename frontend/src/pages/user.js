import React from "react";
import { Tab, TabList, Tabs } from "@mui/joy";
import { useParams } from "react-router-dom";
export default function UserPage() {
    let { id } = useParams();
    return (
        <Tabs
            orientation="vertical">
            <TabList>
                <Tab>Hello There</Tab>
                <Tab>Hello There</Tab>
                <Tab>Hello There</Tab>
            </TabList>
        </Tabs>
    );
}