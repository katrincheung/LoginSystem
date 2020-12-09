import LoginPage from "../../LoginPage";
import WaitingPage from "../../WaitingPage";
import Game from "../../Game";
import React from "react";


const Page = ({ direct, isHost, nameList, roomCode }) => {
    switch(direct) {
        case 'LoginPage':
            return <LoginPage/>
        case 'WaitingPage':
            return <WaitingPage isHost={isHost} nameList={nameList} code={roomCode}/>
        case 'Game':
            return <Game/>
        default:
            return <h2>default</h2>
    }
}

export default Page;