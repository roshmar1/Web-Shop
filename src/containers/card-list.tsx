import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {SellCard} from '../components/SellCard';
import {addCard} from '../ts/storage';

class CardList extends Component{
    showList(){
        let iteam:Iteam = addCard;
        return(
            <SellCard name={iteam.name} description={iteam.description} category={iteam.category} file={{
                fileName: iteam.,
                fileReader: null
            }} {...iteam}/>
        );
    }
   
}

function mapStateToProps(state: { card: any; }){
    return{
       card: state.card 
    };
}

export default connect (mapStateToProps)(CardList);