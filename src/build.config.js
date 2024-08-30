const { ModuleFederationPlugin } = require("webpack").container;
const builder = require("@microsoft/azureportal-build").getExtensionBuilder();

console.log("Building Remote...");

builder.addPlugin(new ModuleFederationPlugin({
    name: "remoteTest2000",
    filename: "remoteEntry.js",
    exposes: {
        "./SharedComponent": "./SharedComponent",
    },
    library: {
        type: "amd",
    },
    shared: {
        react: {
            singleton: true,
            requiredVersion: "17.0.2",
        },
        "react-dom": {
            singleton: true,
            requiredVersion: "17.0.2",
        },
    }
}));