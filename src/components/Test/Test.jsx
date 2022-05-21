import React from "react";
import {createContext, useContext} from "react";

const MyContext = createContext("without provider");

const Test = () => {

    function f() {
        return this
    }
    const obj = { name: 'Oleksandr'}
    const newF = f.bind(obj)
    console.log(newF())


    return (
        <MyContext.Provider value={'Hello'}>
            <Intermediate/>
        </MyContext.Provider>
    );
};

const Intermediate = () => {
    return <Internal/>;
};

const Internal = () => {
    const context = useContext(MyContext);


    return (
        <div>
            <p>`I am Internal component. I have got the message from External: "${context}"`;</p>

            <br/>
            <input  type="file" />
        </div>
    )
};

export default Test