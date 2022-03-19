import React,{useEffect,useState} from 'react';
import './App.css';
import  ChatListIten from "./components/chatlistIten"
import ChatIntro from './components/chatintro'
import ChatWindow from "./components/chatwindow"
import NewChat from "./components/newChat"
import Login from './components/login'

import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchIcon from '@mui/icons-material/Search';

function App() {
	const [chatlist,setChatlist] = useState([{chatId:1,nome:"Juan"},{chatId:2,nome:"Franskin"},{chatId:3,nome:"creuza"},{chatId:4,nome:"vladimir"}])
	const [activeChat,setActiveChat] = useState({})
	const [user,setUser]=useState(null)
	const [showNewChat,setShowNeewChat] = useState(false)
	const handleNewChat = ()=>{
		setShowNeewChat(true)
	}
	const handleLoginData = async (u)=>{
		console.log("CHEGOU: ",u)

		let newUser = {
			id:u.uid,
			nome: u.displayName,
			avatar:u.photoURL


		}
		setUser(newUser)
		
	}
	if(user == null){
		return (<Login onRecive={handleLoginData} />)
	}
  return (
		<div className="app-window">
			<NewChat show={showNewChat} 
					 user={user} 
					 chatlist={chatlist} 
					 setShow={setShowNeewChat}
			/>
			<div className="sidebar">
				<header>

					<img className='header-havatar' src={user.avatar} />	
					<div className='header-buttons'>
						<div className='header-btn'>
							<DonutLargeIcon style={{color: "#919191"}} />
						</div>
						<div className='header-btn' onClick={handleNewChat}>
							<ChatIcon style={{color: "#919191"}} />
						</div>
						<div className='header-btn'>
							<MoreVertIcon style={{color: "#919191"}} />
						</div>
					</div>	

				</header>

				<div className="search">

					<div className='search-imput'>
						<SearchIcon fontSize='small' style={{color:"#919191"}}/>
						<input type="search" placeholder='Procurar ou começar uma nova conversa' />
					</div>
					
				</div>

				<div className='chatlist'>
					{chatlist.map((iten,key)=>(
						<ChatListIten 
							active={
								activeChat.chatId == chatlist[key].chatId
							}
							data={iten}
							key={key}
							onClick={()=>setActiveChat(chatlist[key])}
						 />

					))}
				</div>
			</div>

			<div className="content-area">
				{activeChat.chatId !== undefined && 
					<ChatWindow 
						user={user}
					/>
				}{
					activeChat.chatId === undefined && <ChatIntro />
				}
									
			</div>

		</div>
  );
}

export default App;
