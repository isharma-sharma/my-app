import React, {Component} from 'react';
import {userdetails} from '../actions/index.js';
import _ from 'lodash';
import {connect} from 'react-redux';


class Table extends Component {
    componentDidMount() {
        this.props.userdetails()
    }
    rendertabledetail(){
        return _.map(this.props.userdetails, detail => {
           console.log(detail)

            // <List>{(detail.name)}</List>
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
            {
                // this.state.allData.map((row: IRow) => <List key={row.id} row={row} editAction={this.loadEditForm} deleteAction={this.remove}  />)
            }
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
  