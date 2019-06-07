import React, {Component} from 'react';
import {userdetails} from './../action/index';
import _ from 'lodash';
import {connect} from 'react-redux';

class Table extends Component {
    componentDidMount() {
        this.props.userdetails();
        console.log("this.props.userdetails()" + this.props.userdetails())
    }
    rendertabledetail(){
        return _.map(this.props.userdetails, detail => {
           console.log("detail", detail.id)
            //  <tbody>{detail}</tbody>
        })
    }
    render(){
        return(
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
            {this.rendertabledetail()}
            {console.log(this.rendertabledetail())}
            </tbody>
        </table>

        )
    }
}
function mapStateToProps(state){
    console.log(state.userdetails)
    return{
        userdetails: state.userdetails
    }
  }
  export default connect(mapStateToProps,
    {userdetails})(Table)
