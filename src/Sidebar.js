import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Storefront from '@mui/icons-material/Storefront';
import ExpandMore from '@mui/icons-material/ExpandMore';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';



function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow src="https://avatars.githubusercontent.com/u/103242662?s=400&u=be6ecc523e07708488a902e618e72f1def293149&v=4" title="Bhanuka Pannipitiya"/>
        <SidebarRow Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"/>
        <SidebarRow Icon={EmojiFlagsIcon}
        title="Pages"/>
        <SidebarRow Icon={PeopleIcon}
        title="Friends"/>
        <SidebarRow Icon={ChatIcon}
        title="Messenger"/>
        <SidebarRow Icon={Storefront}
        title="Marketplace"/>
        <SidebarRow Icon={VideoLibraryIcon}
        title="Videos"/>
        <SidebarRow Icon={ExpandMore}
        title="Messenger"/>
    </div>
  )
}

export default Sidebar
