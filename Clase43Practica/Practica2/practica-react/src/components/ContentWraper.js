import React from 'react';
import SideBar from './SideBar';
import ContentRowTop from './ContentRowTop';
function ContentWraper(){
    return(
        <div>
            <ContentRowTop/>
            <SideBar/>
        </div>   
    )
}
export default ContentWraper