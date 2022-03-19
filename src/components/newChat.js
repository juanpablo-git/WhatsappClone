import React,{useState} from 'react'
import './newChat.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default ({show,user,chatlist,setShow})=>{
    const [list,setList] = useState([
        {id:123,avatar:"https://avatars.githubusercontent.com/u/67269430?v=1",name:"Tester ever"},
        {id:123,avatar:"https://avatars.githubusercontent.com/u/67269430?v=1",name:"Tester silva"},
        {id:123,avatar:"https://avatars.githubusercontent.com/u/67269430?v=1",name:"Tester evart"},

        ])
    const handleCLose = ()=>{
        setShow(false)
    }
       
    return (
    <div className='newChat' style={{left: show ? 0 :-500}}>
        <div className='newChatHead'>
            <div onClick={handleCLose} className="newChatBackButton">
                <ArrowBackIcon style={{color:'#ffffff'}}/>
            </div>
            <div className="newChatHeadTitle">
               new chat
            </div>

        </div>
        <div className='newChatList'>
            {list.map((item,key)=>(
                <div className='newChatIten' key={key}>
                    <img className='newChatItenAvatar' src={item.avatar}/>
                    <div className='newChatItenName'>{item.name}</div>
                </div>
            ))}
        </div>
    </div>)
}