import React from 'react';
import Preloader from '../Preloader/Preloader';
import {withRouter} from 'react-router-dom';
import './itemList.scss';
class ItemListContainer extends React.Component{
    state={
        allPeople: [],
        isPreloader: true
    }
    componentDidMount(){
        this.getAllItem()
        this.renderItemList()
    }
    getAllItem = ()=>{
        this.props.getData().then((data)=>{
            this.setState((state)=>{
                return{
                    ...state,
                    allPeople: data.results,
                    isPreloader: false
                }
            })
        })
    }
    renderItemList = ()=>{
         return   this.state.allPeople.map((e)=>{
             let reg = /\/([0-9]*)\/$/;
             let key = e.url.match(reg)[1];
            let addLink = ()=>{
                this.props.history.push(key)
            }
            return (
                <li onClick={()=> addLink()} className="container list-group-item list-group-item-action" key={key}>{e.name}</li>
            )
            })
    }
    render(){
        console.log(this.props)
        let itemOrPreload = this.state.isPreloader ? <Preloader/> : this.renderItemList();
        return(
            <ul className="container col-12 col-lg-4 mb">
                {itemOrPreload}
            </ul>
        )
    }
}
let ItemList = withRouter(ItemListContainer);
export default ItemList;
