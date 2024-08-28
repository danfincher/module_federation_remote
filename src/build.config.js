const { ModuleFederationPlugin } = require("webpack").container;
const builder = require("@microsoft/azureportal-build").getExtensionBuilder();

console.log("Building extension...");

builder.addPlugin(new ModuleFederationPlugin({
    name: "remote",
    filename: "remoteEntry.js",
    exposes: {
        "./HelloWorld": "./HelloWorld.ReactView",
    },
    shared: {
        // Will probably need to expose our own module fedetraion plugin? Just to make sure that the shared modules are the same. Unless this doesnt matter since we serve up fluent, react, and react-dom..
        // I should try to see what happens when I dont have these lines
        react: {
            singleton: true,
        },
        "react-dom": {
            singleton: true,
        },

        /*
            others:
            
            @microsoft/azureportal-reactview/
            
        */
    }
}));