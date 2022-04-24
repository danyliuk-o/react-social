
import React from "react";
import {createContext, useContext} from "react";

const MyContext = createContext("without provider");

const Test = (props) => {

    console.log('Context props', props)
    return (
        <MyContext.Provider value={'Hello'}>
            <Intermediate />
        </MyContext.Provider>
    );
};

const Intermediate = () => {
    return <Internal />;
};

const Internal = () => {
    const context = useContext(MyContext);

    return `I am Internal component. I have got the message from External: "${context}"`;
};

export default Test