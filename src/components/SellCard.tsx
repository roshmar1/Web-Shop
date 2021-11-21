import React from "react";
import '../css/Store.css';
import { connect } from "react-redux";
import { Iteam } from "../app/Iteam";

 export function SellCard(props:Iteam) {
    return (
        <div >
            <template id="card-teamplate">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img-wrapper">
                            <img src={props.file.fileReader == "string" ? props.file.fileReader : 'https://hotline.ua/img/tx/305/3051705865.jpg'} alt="" className="card-img" />
                        </div>

                        <div className="card-description-wrapper">
                            <span className="card-description">
                                {props.description}
                            </span>
                        </div>

                        <div className="card-btn-wrapper">
                            <button className="" type="button"  >
                                Add to baasket
                            </button>
                        </div>
                    </div>
                </div>
            </template>           
        </div>
    );
}


