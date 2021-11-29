import React from "react";

const GameTable = ( { playersArray } ) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr className="turn-mark">
                        <td className="turn-mark"></td>
                        <td className="turn-mark">V</td>
                        <td className="turn-mark" style={{display: playersArray.length < 2 ? "none" : ""}}></td>
                        <td className="turn-mark" style={{display: playersArray.length < 3 ? "none" : ""}}></td>
                        <td className="turn-mark" style={{display: playersArray.length < 4 ? "none" : ""}}></td>
                        <td className="turn-mark" style={{display: playersArray.length < 5 ? "none" : ""}}></td>
                    </tr>
                    <tr>
                        <td className="blank-cell"></td>
                        <td>{playersArray[0]}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>{playersArray[1]}</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>{playersArray[2]}</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>{playersArray[3]}</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>{playersArray[4]}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>I</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>II</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>III</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>IV</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>V</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>VI</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr className="bonus-row">
                        <td>BONUS</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr className="sum-row">
                        <td>SUMA</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>Para</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>2xPara</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>3X</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>4X</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>M strit</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>D strit</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>Full</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>Szansa</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>5X</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="sum-row">
                        <td className="total-cell">TOTAL</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default GameTable;