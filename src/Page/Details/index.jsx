import React from 'react'


export default class Details extends React.Component{
    render(){
        return(
            <div>
                Details:{ this.props.params.type }
            </div>
        )
    }
}