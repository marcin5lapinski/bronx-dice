import React from "react";

const RollingButton = ( { 
                setDiceState,
                clicked,
                diceArray,
                rollCount,
                setRollCount,
                oneScores,
                setOneScores,
                twoScores,
                setTwoScores,
                threeScores,
                setThreeScores,
                fourScores,
                setFourScores,
                fiveScores,
                setFiveScores,
            } ) => {

    const isUpperFilled = () => {
        if (!oneScores.upperFilled && oneScores.acesSaved && oneScores.twosSaved && oneScores.threesSaved && oneScores.foursSaved && oneScores.fivesSaved && oneScores.sixesSaved) {
            setOneScores({
                ...oneScores,
                upperFilled: true
            })
        } else if (!twoScores.upperFilled && twoScores.acesSaved && twoScores.twosSaved && twoScores.threesSaved && twoScores.foursSaved && twoScores.fivesSaved && twoScores.sixesSaved) {
            setTwoScores({
                ...twoScores,
                upperFilled: true
            })
        } else if (!threeScores.upperFilled && threeScores.acesSaved && threeScores.twosSaved && threeScores.threesSaved && threeScores.foursSaved && threeScores.fivesSaved && threeScores.sixesSaved) {
            setThreeScores({
                ...threeScores,
                upperFilled: true
            })
        } else if (!fourScores.upperFilled && fourScores.acesSaved && fourScores.twosSaved && fourScores.threesSaved && fourScores.foursSaved && fourScores.fivesSaved && fourScores.sixesSaved) {
            setFourScores({
                ...fourScores,
                upperFilled: true
            })
        } else if (!fiveScores.upperFilled && fiveScores.acesSaved && fiveScores.twosSaved && fiveScores.threesSaved && fiveScores.foursSaved && fiveScores.fivesSaved && fiveScores.sixesSaved) {
            setFiveScores({
                ...fiveScores,
                upperFilled: true
            })
        }
    }

    const isTotalSaved = () => {
        if (!oneScores.totalSaved && oneScores.pairSaved && oneScores.twoPairSaved && oneScores.threeOfKindSaved && oneScores.fourOfKindSaved && oneScores.smallStraightSaved && oneScores.largeStraightSaved && oneScores.fullSaved && oneScores.chanceSaved && oneScores.fiveOfKindSaved) {
            setOneScores({
                ...oneScores,
                totalSaved: true
            })
        } else if (!twoScores.totalSaved && twoScores.pairSaved && twoScores.twoPairSaved && twoScores.threeOfKindSaved && twoScores.fourOfKindSaved && twoScores.smallStraightSaved && twoScores.largeStraightSaved && twoScores.fullSaved && twoScores.chanceSaved && twoScores.fiveOfKindSaved) {
            setTwoScores({
                ...twoScores,
                totalSaved: true
            })
        } else if (!threeScores.totalSaved && threeScores.pairSaved && threeScores.twoPairSaved && threeScores.threeOfKindSaved && threeScores.fourOfKindSaved && threeScores.smallStraightSaved && threeScores.largeStraightSaved && threeScores.fullSaved && threeScores.chanceSaved && threeScores.fiveOfKindSaved) {
            setThreeScores({
                ...threeScores,
                totalSaved: true
            })
        } else if (!fourScores.totalSaved && fourScores.pairSaved && fourScores.twoPairSaved && fourScores.threeOfKindSaved && fourScores.fourOfKindSaved && fourScores.smallStraightSaved && fourScores.largeStraightSaved && fourScores.fullSaved && fourScores.chanceSaved && fourScores.fiveOfKindSaved) {
            setFourScores({
                ...fourScores,
                totalSaved: true
            })
        } else if (!fiveScores.totalSaved && fiveScores.pairSaved && fiveScores.twoPairSaved && fiveScores.threeOfKindSaved && fiveScores.fourOfKindSaved && fiveScores.smallStraightSaved && fiveScores.largeStraightSaved && fiveScores.fullSaved && fiveScores.chanceSaved && fiveScores.fiveOfKindSaved) {
            setFiveScores({
                ...fiveScores,
                totalSaved: true
            })
        }
    }
    
    
    const diceRollAction = () => {
    
        isUpperFilled();
        isTotalSaved();
        console.log("total saved 1 " + oneScores.totalSaved, "total saved 2 " + twoScores.totalSaved);

        setDiceState({
            dieOne: (!clicked.one) ? Math.floor(Math.random() * (6 - 1 + 1)) + 1 : diceArray[0],
            dieTwo: (!clicked.two) ? Math.floor(Math.random() * (6 - 1 + 1)) + 1 : diceArray[1],
            dieThree: (!clicked.three) ? Math.floor(Math.random() * (6 - 1 + 1)) + 1 : diceArray[2],
            dieFour: (!clicked.four) ? Math.floor(Math.random() * (6 - 1 + 1)) + 1 : diceArray[3],
            dieFive: (!clicked.five) ? Math.floor(Math.random() * (6 - 1 + 1)) + 1 : diceArray[4],
        })
        
        rollCount--;
        setRollCount(rollCount);
    }
    
    return (
        <div className="rolling-button">
            <button className="roll-btn btn" onClick={diceRollAction} disabled={(rollCount === 0) ? true : false}>Roll</button>
            <h2 className="rolls-left">rolls left: <span>{rollCount}</span></h2>
        </div>
    )
}

export default RollingButton;