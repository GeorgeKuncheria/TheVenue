
import React from 'react';
import { scroller } from 'react-scroll'

import { Drawer, List, ListItem } from '@mui/material'

const SideDrawer = (props) => {
    const links = [
        { where:'featured',value:'To top'},
        { where:'venueInfo',value:'Venue INFO'},
        { where:'highlights',value:'Highlights'},
        { where:'pricing',value:'Pricing'},
        { where:'location',value:'Location'}
    ]


    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth: true,
            offset:-80
        });
        props.onClose(false)
    }

    const renderItem = (item) => (
        <ListItem button onClick={()=> scrollToElement(item.where)} key={item.where}>
            {item.value}
        </ListItem>
    )


    return(
        <Drawer
            anchor={"right"}
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                { links.map((item)=> renderItem(item) )}
                
            </List>
        </Drawer>
    )

}

export default SideDrawer;
