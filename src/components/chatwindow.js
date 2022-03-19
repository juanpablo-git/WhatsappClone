import React,{useState,useEffect,useRef} from 'react'
import "./chatwindow.css"


import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import EmojiPicker from "emoji-picker-react"

import MessageItem from './messageIten';

export default ({user})=>{
        const body = useRef()
        
       const [list,setList] = useState([
        {author:123, body:"sfefefew"},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:456 , body:`,"sd","sdcs","sfe","",""`},
        {author:123, body:"sfefefew"}
        
])

        useEffect(()=>{
                if(body.current.scrollHeight > body.current.offsetHeight){
                        body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
                }
        },[list])
        const [listening,setListening] = useState(false)      
        const [emojiOpen,setEmojiOpen] = useState(false)
        const [text,setTesxt] = useState('')
        const handleEmojiClick = (e,emojiObject)=>{
                setTesxt(text+emojiObject.emoji)

        }
        const hadleOpenEmoji = ()=>{
                setEmojiOpen(true)
        }
        const handleCloseEmoji = ()=>{
                setEmojiOpen(false)

        }
        const handleMicClick = ()=>{
             setListening(true)

        }
        const handleSendClick = ()=>{
                
        }
        return(
                <div className='chatwindow'>
                        <div className="chatWindow-header">
                                <div className="chatWhindow-header-info">
                                        <img className="chatWindow-havatar" src='https://avatars.githubusercontent.com/u/67269430?v=1'  />
                                        <div className="chatWindow-name">Juan</div>
                                </div>
                                <div className="chatWindow-headerButton">
                                        <div className="chatWindow-btn">
                                                <SearchIcon style={{color: '#919191'}} />

                                        </div>
                                        <div className="chatWindow-btn">
                                                <AttachFileIcon style={{color: '#919191'}} />

                                        </div>
                                        <div className="chatWindow-btn">
                                                <MoreVertIcon style={{color: '#919191'}} />

                                        </div>
                                </div>

                        </div>
                        <div ref={body} className="chatWindow-body" >
                          {
                                  list.map((iten,key)=>(
                                        <MessageItem key={key} data={iten} user={user}/>
                                  ))
                                 
                                
                          }
                        </div>
                        <div className="chatWhindow-emoji-area" style={{height: emojiOpen?'200px':'0px'}}>
                                <EmojiPicker

                                       pickerStyle={{
                                       width: "auto",
                                       background:"none",
                                 }}                               
                                        onEmojiClick={handleEmojiClick} 
                                        disableSearchBar
                                        disableSkinTonePicker
                                />

                        </div>
                        <div className="chatWindow-footer">

                                <div className="chatWindow-pre">
                                        <div className="chatWindow-btn" style={{width: emojiOpen?40:0 }} onClick={handleCloseEmoji}>
                                                <CloseIcon style={{color: '#919191'}} />
                                        </div>
                                        <div className="chatWindow-btn" onClick={hadleOpenEmoji}>
                                                <EmojiEmotionsIcon style={{color:emojiOpen? '#009688':'#919191'}} />
                                        </div>

                                </div>
                                <div className="chatWindow-inputArea">
                                        <input 
                                        type="text" 
                                        className="chatWindow-input" 
                                        placeholder="digite uma mensagem"
                                        value={text} 
                                        onChange={e=>setTesxt(e.target.value)}   />
                                </div>
                                <div className="chatWindow-pos">
                                      { text == '' && 
                                <div onClick={handleMicClick} className="chatWindow-btn">
                                                <MicIcon style={{color: listening ? "#009688" :  '#919191'}} />
                                        </div>
                                        }
                                        {text !== '' &&

                                        <div onClick={handleSendClick} className="chatWindow-btn">
                                                <SendIcon style={{color: '#919191'}} />
                                        </div>
                                        }

                                </div>
                                

                        </div>
                </div>

        )
}