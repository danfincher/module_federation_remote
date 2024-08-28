import * as Az from "@microsoft/azureportal-reactview/Az";
import * as React from "react";
import { Text } from "@fluentui/react/lib/Text";
import { HelloWorldStrings } from "./HelloWorldStrings.resjson";

Az.setTitle(HelloWorldStrings.HelloWorldTitle);

const HelloWorld = () => {
    return <Text data-testid="helloworld-text-testid">{HelloWorldStrings.HelloWorldMessage}</Text>;
};

export default HelloWorld;
