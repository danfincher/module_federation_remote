import * as React from "react";

export const SharedComponent2 = () => {
    
    React.useEffect(() => {
        console.log("I'm shared component2!");
    }, []);

    return <div>Federated module component 2!</div>;
}; 