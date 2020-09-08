import React, { Component } from 'react'
import axios from 'axios'
export class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             coVid:[]
        }
    }

    componentDidMount  =  () =>{
        axios.get('https://corona.lmao.ninja/v2/countries/gh').then((res) => {
            // console.log(res);
            this.setState({
                coVid: res.data,
            });
        }).catch((err) =>{
            console.log(err)
        })
    }


    render() {
        return (
            <div>
                <div className="header">
                    <div>
                        <p id="logo">P</p>
                    </div>
                    <div className="text">
                        <p>PaSE covid-19 App</p>
                    </div>
                </div>
                <div className="dashboard">
                   
                    <div className="cases">
                        <p><b>Cases</b><i className="fa fa-caret-up" /></p>
                        <span> { this.state.coVid.cases } </span>
                    </div>
                    <div className="cases">
                        <p><b>Deaths</b><i className="fa fa-caret-down fa-1.5x" /></p>
                        <span>{this.state.coVid.deaths} </span>
                    </div>
                    <div className="cases">
                        <p><b>Active</b><i className="fa fa-caret-up" /></p>
                        <span>{this.state.coVid.active} </span>
                    </div>
                    <div className="cases">
                        <p><b>Recovered</b><i className="fa fa-caret-up" /></p>
                        <span >{this.state.coVid.recovered} </span>
                    </div>
                </div>
            </div>
        )
    }
}


export default Cards
