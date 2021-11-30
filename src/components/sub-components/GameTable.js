import React from "react";


const GameTable = ({ 
            playersArray,
            diceArray,
            oneScores,
            setOneScores,
            twoScores,
            setTwoScores,
            threeScores,
            setThreeScores,
            fourScores,
            setFourScores,
            fiveScores,
            setFiveScores
        }) => {


    const acesCheck = (plNum) => {

        const isOne = (el) => {
            return (el === 1);
        }
        
        const ones = diceArray.filter(isOne);
        console.log(ones);
    
        let sum;
    
        const score = () => {
            if (ones === []) {
                return sum = 0;
            } else if (ones.length >= 1) {
                return sum = ones.reduce((acc, curr) => acc + curr);
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                aces: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                aces: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                aces: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                aces: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                aces: sum
            })
        }
    }

    const twosCheck = (plNum) => {

        const isTwo = (el) => {
            return (el === 2);
        }
        
        const twos = diceArray.filter(isTwo);
        console.log(twos);
    
        let sum;
    
        const score = () => {
            if (twos === []) {
                return sum = 0;
            } else if (twos.length >= 1) {
                return sum = twos.reduce((acc, curr) => acc + curr);
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                twos: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                twos: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                twos: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                twos: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                twos: sum
            })
        }
    }

    const threesCheck = (plNum) => {

        const isThree = (el) => {
            return (el === 3);
        }
        
        const threes = diceArray.filter(isThree);
        console.log(threes);
    
        let sum;
    
        const score = () => {
            if (threes === []) {
                return sum = 0;
            } else if (threes.length >= 1) {
                return sum = threes.reduce((acc, curr) => acc + curr);
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                threes: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                threes: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                threes: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                threes: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                threes: sum
            })
        }
    }

    const foursCheck = (plNum) => {

        const isFour = (el) => {
            return (el === 4);
        }
        
        const fours = diceArray.filter(isFour);
        console.log(fours);
    
        let sum;
    
        const score = () => {
            if (fours === []) {
                return sum = 0;
            } else if (fours.length >= 1) {
                return sum = fours.reduce((acc, curr) => acc + curr);
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                fours: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                fours: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                fours: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                fours: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                fours: sum
            })
        }
    }

    const fivesCheck = (plNum) => {

        const isFive = (el) => {
            return (el === 5);
        }
        
        const fives = diceArray.filter(isFive);
        console.log(fives);
    
        let sum;
    
        const score = () => {
            if (fives === []) {
                return sum = 0;
            } else if (fives.length >= 1) {
                return sum = fives.reduce((acc, curr) => acc + curr);
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                fives: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                fives: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                fives: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                fives: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                fives: sum
            })
        }
    }

    const sixesCheck = (plNum) => {

        const isSix = (el) => {
            return (el === 6);
        }
        
        const sixes = diceArray.filter(isSix);
        console.log(sixes);
    
        let sum;
    
        const score = () => {
            if (sixes === []) {
                return sum = 0;
            } else if (sixes.length >= 1) {
                return sum = sixes.reduce((acc, curr) => acc + curr);
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                sixes: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                sixes: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                sixes: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                sixes: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                sixes: sum
            })
        }
    }

    const pairCheck = (plNum) => {
        
        const pair = diceArray.filter((el) => diceArray.indexOf(el) !== diceArray.lastIndexOf(el)) 
        console.log(pair);
    
        let sum;
    
        const score = () => {
            if (pair === []) {
                return sum = 0;
            } else if (pair.length >= 1 && pair.length < 3) {
                return sum = pair.reduce((acc, curr) => acc + curr);
            } else if (pair.length <= 3) {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                pair: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                pair: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                pair: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                pair: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                pair: sum
            })
        }
    }

    const twoPairCheck = (plNum) => {
        
        const twoPair = diceArray.filter((el) => diceArray.indexOf(el) !== diceArray.lastIndexOf(el));
        console.log(twoPair);
    
        let sum;
    
        const score = () => {
            if (twoPair === []) {
                return sum = 0;
            } else if (twoPair.length === 4) {
                return sum = twoPair.reduce((acc, curr) => acc + curr);
            } else if (twoPair.length !== 4) {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                twoPair: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                twoPair: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                twoPair: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                twoPair: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                twoPair: sum
            })
        }
    }

    const threeOfKindCheck = (plNum) => {
        
        const threeOfKind = diceArray.filter((el) => diceArray.indexOf(el) !== diceArray.lastIndexOf(el));
        console.log(threeOfKind);
    
        let sum;
    
        const score = () => {
            if (threeOfKind === []) {
                return sum = 0;
            } else if (threeOfKind.length === 3) {
                return sum = threeOfKind.reduce((acc, curr) => acc + curr);
            } else if (threeOfKind.length !== 3) {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                threeOfKind: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                threeOfKind: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                threeOfKind: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                threeOfKind: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                threeOfKind: sum
            })
        }
    }

    const fourOfKindCheck = (plNum) => {
        
        const fourOfKind = diceArray.filter((el) => diceArray.indexOf(el) !== diceArray.lastIndexOf(el));
        console.log(fourOfKind);
    
        let sum;
    
        const score = () => {
            if (fourOfKind === []) {
                return sum = 0;
            } else if (fourOfKind.length === 4 && fourOfKind[0] === fourOfKind[1] && fourOfKind[1] === fourOfKind[3]) {
                return sum = fourOfKind.reduce((acc, curr) => acc + curr);
            } else if (fourOfKind.length !== 4) {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                fourOfKind: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                fourOfKind: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                fourOfKind: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                fourOfKind: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                fourOfKind: sum
            })
        }
    }

    const largeStraightCheck = (plNum) => {
        
        const largeStraight = diceArray.map(el => el);
        console.log(largeStraight);
    
        let sum;
    
        const score = () => {
            if (largeStraight === []) {
                return sum = 0;
            } else if (largeStraight.includes(6) && largeStraight.includes(2) && largeStraight.includes(3) && largeStraight.includes(4) && largeStraight.includes(5)) {
                return sum = largeStraight.reduce((acc, curr) => acc + curr);
            } else if (largeStraight.includes(1)) {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                largeStraight: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                largeStraight: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                largeStraight: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                largeStraight: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                largeStraight: sum
            })
        }
    }

    const smallStraightCheck = (plNum) => {
        
        const smallStraight = diceArray.map(el => el);
        console.log(smallStraight);
    
        let sum;
    
        const score = () => {
            if (smallStraight === []) {
                return sum = 0;
            } else if (smallStraight.includes(1) && smallStraight.includes(2) && smallStraight.includes(3) && smallStraight.includes(4) && smallStraight.includes(5)) {
                return sum = smallStraight.reduce((acc, curr) => acc + curr);
            } else if (smallStraight.includes(6)) {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                smallStraight: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                smallStraight: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                smallStraight: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                smallStraight: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                smallStraight: sum
            })
        }
    }

    const fullCheck = (plNum) => {
        
        const full = diceArray.filter((el) => diceArray.indexOf(el) !== diceArray.lastIndexOf(el));
        const isFull = diceArray.filter((el, index) => diceArray.indexOf(el) === index);
        console.log(full);
    
        let sum;
    
        const score = () => {
            if (full === []) {
                return sum = 0;
            } else if (full.length === 5 && isFull.length === 2) {
                return sum = full.reduce((acc, curr) => acc + curr);
            } else if (full.length !== 5) {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                full: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                full: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                full: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                full: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                full: sum
            })
        }
    }

    const chanceCheck = (plNum) => {
        
        const chance = diceArray.map(el => el);
        console.log(chance);
    
        let sum;
    
        const score = () => {
            if (chance === []) {
                return sum = 0;
            } else if (chance.length === 5) {
                return sum = chance.reduce((acc, curr) => acc + curr);
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                chance: sum
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                chance: sum
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                chance: sum
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                chance: sum
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                chance: sum
            })
        }
    }

    const fiveOfKindCheck = (plNum) => {
        
        const fiveOfKind = diceArray.filter((el) => diceArray.indexOf(el) !== diceArray.lastIndexOf(el));
        const isFiveOfKind = diceArray.filter((el, index) => diceArray.indexOf(el) === index);
        console.log(fiveOfKind);
    
        let sum;
    
        const score = () => {
            if (fiveOfKind === []) {
                return sum = 0;
            } else if (fiveOfKind.length === 5 && isFiveOfKind.length === 1) {
                return sum = fiveOfKind.reduce((acc, curr) => acc + curr);
            } else if (fiveOfKind.length !== 5 || isFiveOfKind.length !== 1) {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1) {
            setOneScores({
                ...oneScores,
                fiveOfKind: sum + 50
            })
        } else if (plNum === 2) {
            setTwoScores({
                ...twoScores,
                fiveOfKind: sum + 50
            })
        } else if (plNum === 3) {
            setThreeScores({
                ...threeScores,
                fiveOfKind: sum + 50
            })
        } else if (plNum === 4) {
            setFourScores({
                ...fourScores,
                fiveOfKind: sum + 50
            })
        } else if (plNum === 5) {
            setFiveScores({
                ...fiveScores,
                fiveOfKind: sum + 50
            })
        }
    }

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
                        <td onClick={() => acesCheck(1)}>{(oneScores.aces > 0) ? oneScores.aces : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>II</td>
                        <td onClick={() => twosCheck(1)}>{(oneScores.twos > 0) ? oneScores.twos : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>III</td>
                        <td onClick={() => threesCheck(1)}>{(oneScores.threes > 0) ? oneScores.threes : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>IV</td>
                        <td onClick={() => foursCheck(1)}>{(oneScores.fours > 0) ? oneScores.fours : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>V</td>
                        <td onClick={() => fivesCheck(1)}>{(oneScores.fives > 0) ? oneScores.fives : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>VI</td>
                        <td onClick={() => sixesCheck(1)}>{(oneScores.sixes > 0) ? oneScores.sixes : 0}</td>
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
                        <td>SUM</td>
                        <td>0</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>Pair</td>
                        <td onClick={() => pairCheck(1)}>{(oneScores.pair > 0) ? oneScores.pair : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>2xPair</td>
                        <td onClick={() => twoPairCheck(1)}>{(oneScores.twoPair > 0) ? oneScores.twoPair : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>3X</td>
                        <td onClick={() => threeOfKindCheck(1)}>{(oneScores.threeOfKind > 0) ? oneScores.threeOfKind : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>4X</td>
                        <td onClick={() => fourOfKindCheck(1)}>{(oneScores.fourOfKind > 0) ? oneScores.fourOfKind : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>S straight</td>
                        <td onClick={() => smallStraightCheck(1)}>{(oneScores.smallStraight > 0) ? oneScores.smallStraight : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>L straight</td>
                        <td onClick={() => largeStraightCheck(1)}>{(oneScores.largeStraight > 0) ? oneScores.largeStraight : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>Full</td>
                        <td onClick={() => fullCheck(1)}>{(oneScores.full > 0) ? oneScores.full : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>Chance</td>
                        <td onClick={() => chanceCheck(1)}>{(oneScores.chance > 0) ? oneScores.chance : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>5X</td>
                        <td onClick={() => fiveOfKindCheck(1)}>{(oneScores.fiveOfKind > 0) ? oneScores.fiveOfKind : 0}</td>
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