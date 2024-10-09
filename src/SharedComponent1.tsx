import * as React from "react";

export const SharedComponent1 = () => {

    React.useEffect(() => {
        console.log("I'm shared component1!");
    }, []);

    return <div>Federated module component 1!</div>;
}; 