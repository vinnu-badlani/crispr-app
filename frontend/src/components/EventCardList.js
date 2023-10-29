import React from "react";
import { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/EventCardList.scss";
import EventCardIcon from "./EventCardIcon";

class EventCardList extends Component 
{
    
    constructor(props) 
    {
        super(props)
        this.state = 
        {
            items: this.props.items,
            active: this.props.active,
            direction: ''
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    generateItems() 
    {
        var items = []
        var level
        console.log(this.state.active)
        for (var i = this.state.active - 2; i < this.state.active + 3; i++) 
        {
            var index = i
            if (i < 0) 
            {
                index = this.state.items.length + i
            } 
            else if (i >= this.state.items.length) 
            {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            items.push(<Item key={index} id={this.state.items[index]} level={level} />)
        }
        return items
    }
    
    moveLeft() 
    {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }
    
    moveRight() 
    {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }
    
    render() 
    {
        return(
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left" onClick={this.leftClick}>
                    <i class="fa-sharp fa-solid fa-arrow-left"></i>
                </div>
                <CSSTransition transitionName={this.state.direction}>
                    <>{this.generateItems()}</>
                </CSSTransition>
                <div className="arrow arrow-right" onClick={this.rightClick}>
                    <i class="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
            </div>
        )
    }
}

class Item extends Component 
{
    
    constructor(props) 
    {
        super(props)
        this.state = 
        {
            level: this.props.level
        }
    }
    
    render() 
    {
        const className = 'item level' + this.props.level
        return(
            <div className={className}>
                <EventCardIcon/>
            </div>
        )
    }
}


export default EventCardList;