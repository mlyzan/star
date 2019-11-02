import React from 'react';
import './itemDetail.scss';
import Preloader from '../Preloader/Preloader';
import {withRouter} from 'react-router-dom';
class ItemDetailContainer extends React.Component{
    state={
        name: null,
        data: null,
        isPreloader: true
    }
    componentDidMount(){
        this.getItemDetail()
    }
    componentDidUpdate(prevProps){
        if(prevProps != this.props){
            this.getItemDetail()
        }
    }
    getItemDetail = ()=>{
        this.setState((state)=>{
            return{
                isPreloader: true
            }
        })
        this.props.getData(this.props.match.params.id).then((data)=>{
            this.setState((state)=>{
                return{
                    ...state,
                    name: data.name,
                    data: data,
                    isPreloader: false
                }
            })
        })
    }
   render(){
        if(this.state.isPreloader){
            return <Preloader/>
        }
        return(
            <section className="container row jumbotron description col-12 col-lg-6">
                <div className="col-12 " >
                    <img className="people_img"src={`https://starwars-visualguide.com/assets/img/${this.props.img()}/${this.props.match.params.id}.jpg`} alt="Characters"/>
                </div>
                <div className="col-12 ">
                    <div>
                        <h2 className="display-7">{this.state.name}</h2>
                        <span className="lead">{this.props.descr1(this.state.data)}</span>
                        <hr className="my-2"></hr>
                        <span className="lead">{this.props.descr2(this.state.data)}</span>
                        <hr className="my-2"></hr>
                        <span className="lead">{this.props.descr3(this.state.data)}</span>
                    </div>
                </div>
            </section>
    )
   }
}
let ItemDetail = withRouter(ItemDetailContainer);
export default ItemDetail;

