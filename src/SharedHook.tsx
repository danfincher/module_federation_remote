import * as React from "react";

const SharedHook = () => {
    React.useEffect(() => {
        console.log("I'm a shared hook!");
    }, []);
};

export default SharedHook;