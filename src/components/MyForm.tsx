import React from "react";
import {addNewIteam} from "../ts/addNewIteam";
import '../css/AddNewItem.css';

export function MyForm()
{
    return(
        <main>
        <div className="item-wrapper">
            <div className="iteam-container">
                <div className="iteam">
                    <h2 className="iteam-header">UPLOAD YOUR ITEAM</h2>
                    <form className="iteam-form">

                        <div className="iteam-input-wrapper">
                            <label htmlFor="ItemName" className="iteam-lable">Name:</label>
                            <input type="text" className="iteam-input" id="ItemName" required/>
                        </div>
                        <div className="iteam-input-wrapper">
                            <label htmlFor="ItemDescrimption" className="iteam-lable">Descrimption:</label>
                            <input type="text" className="iteam-input" id="ItemDescrimption" required/>
                        </div>
                        <div className="iteam-input-wrapper">
                            <label htmlFor="ItemCategory" className="iteam-lable" >Category:</label>         

                            <select name="ItemCategory" className="iteam-input" id="ItemCategory" required>
                                <option value="" selected disabled hidden></option>
                                <option value="Phone">Phone</option>
                                <option value="Whatch">Whatch</option>
                                <option value="Audio">Audio</option>
                                <option value="Game gadget">Game gadget</option>
                              </select>
                        </div>

                        <div className="iteam-file-drop-area">
                            <span className="iteam-choose-file-button">Choose files</span>
                            <span className="iteam-file-message">or drag and drop files here</span>
                            <input className="iteam-file-input" type="file" multiple id="ItemFile"/>
                        </div>
                        <div className="iteam-form-btn-wrapper">
                            <button className="iteam-form-btn" type="reset">Clear</button>
                            <button className="iteam-form-btn" type="submit"  value="Upload" >Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
    );
}