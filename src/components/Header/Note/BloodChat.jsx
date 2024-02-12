import React,{useState} from 'react'
import styled from 'styled-components';
import Ellipse22 from "../../../assets/images/Ellipse22.png";
import BloodChatroom from './BloodChatroom';

const ChatContainer =styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    background: var(--black-white-white-1000, #FFF);
`

const ChatBox =styled.div`
    height: 5.4688vw;
    padding: 1.0417vw 1.0417vw 1.0417vw 1.0417vw;
    display: flex;
    flex-direction: row:
`
const ChatPerson= styled.img`
    width: 3.3789vw;
    height: 3.3854vw;
    cursor: pointer;
`
const ChatBoxP =styled.div`
    margin-left: 0.7797vw;
    align-item: center;
`

const ChatName =styled.div`
    display: flex;
    color: var(--Gray-Gray-700, #464A4D);
    width: 18.5938vw;
    height: 1.5104vw;
    font-family: Pretendard;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 500;
    line-height: 0.9375vw;
    letter-spacing: -0.0187vw;
    align-items: center;
`

const ChatP =styled.div`
    display: flex;
    width: 20.8333vw;
    height: 1.5104vw;
    align-items: center;
`
const Rectangle = styled.div`
width: 519px;
height: 5px;
flex-shrink: 0;
background: var(--Gray-Gray-100, #F2F2F2);
`

const BloodChat =()=>{
    const [isChatroom,setIsChatroom]=useState(false);

    const handleChatroom =()=>{
        setIsChatroom(true);
    }
    return (
        <ChatContainer>
            {!isChatroom && (
                <>
                    <ChatBox>
                        <ChatPerson src={Ellipse22} alt="chat_person" />
                        <ChatBoxP>
                            <ChatName onClick={handleChatroom}>채팅방 이름</ChatName>
                            <ChatP>채팅 내용입니다. 최대 1줄 텍스트박스 길이 400px</ChatP>
                        </ChatBoxP>
                    </ChatBox>
                    <Rectangle />
                    <ChatBox>
                        <ChatPerson src={Ellipse22} alt="chat_person" />
                        <ChatBoxP>
                            <ChatName onClick={handleChatroom}>채팅방 이름</ChatName>
                            <ChatP>채팅 내용입니다. 최대 1줄 텍스트박스 길이 400px</ChatP>
                        </ChatBoxP>
                    </ChatBox>
                    <Rectangle />
                    <ChatBox>
                        <ChatPerson src={Ellipse22} alt="chat_person" />
                        <ChatBoxP>
                            <ChatName onClick={handleChatroom}>채팅방 이름</ChatName>
                            <ChatP>채팅 내용입니다. 최대 1줄 텍스트박스 길이 400px</ChatP>
                        </ChatBoxP>
                    </ChatBox>
                    <Rectangle />
                </>
            )}
            {isChatroom && <BloodChatroom />}
        </ChatContainer>
    );
}

export default BloodChat;
