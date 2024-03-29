import { Avatar } from '@mui/material'
import React from 'react'
import InputOptions from './InputOptions'
import "./Post.css"
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
function Post({name,description,message,phtoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar/>
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post__body'>
            <p> {message} </p>
        </div>

        <div className='post__buttons'>
            <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
            <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
            <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray"/>
            <InputOptions Icon={SendOutlinedIcon} title="Comment" color="gray"/>
        </div>
    </div>
  )
}

export default Post