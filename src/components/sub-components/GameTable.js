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
            setFiveScores,
            countPlayers,
            setRollCount,
            setDiceState,
            setClicked,
        }) => {


    const nextTurn = () => {
        setRollCount(3);
        setDiceState({
            dieOne: 0,
            dieTwo: 0,
            dieThree: 0,
            dieFour: 0,
            dieFive: 0
        });
        setClicked({
            one: false,
            two: false,
            three: false,
            four: false,
            five: false
        });
    }


    const acesCheck = (plNum) => {

        const isOne = (el) => {
            return (el === 1);
        }
        
        const aces = diceArray.filter(isOne);
        console.log(aces);
    
        let sum;
    
        const score = () => {
            if (aces === []) {
                return sum = 0;
            } else if (aces.length >= 1) {
                return sum = aces.reduce((acc, curr) => acc + curr);
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.acesSaved) {
            setOneScores({
                ...oneScores,
                aces: sum,
                acesSaved: true,
                sum: sum + oneScores.twos + oneScores.threes + oneScores.fours + oneScores.fives + oneScores.sixes + oneScores.bonus
            })
        } else if (plNum === 2 && !twoScores.acesSaved) {
            setTwoScores({
                ...twoScores,
                aces: sum,
                acesSaved: true,
                sum: sum + twoScores.twos + twoScores.threes + twoScores.fours + twoScores.fives + twoScores.sixes + twoScores.bonus
            })
        } else if (plNum === 3 && !threeScores.acesSaved) {
            setThreeScores({
                ...threeScores,
                aces: sum,
                acesSaved: true,
                sum: sum + threeScores.twos + threeScores.threes + threeScores.fours + threeScores.fives + threeScores.sixes + threeScores.bonus
            })
        } else if (plNum === 4 && !fourScores.acesSaved) {
            setFourScores({
                ...fourScores,
                aces: sum,
                acesSaved: true,
                sum: sum + fourScores.twos + fourScores.threes + fourScores.fours + fourScores.fives + fourScores.sixes + fourScores.bonus
            })
        } else if (plNum === 5 && !fiveScores.acesSaved) {
            setFiveScores({
                ...fiveScores,
                aces: sum,
                acesSaved: true,
                sum: sum + fiveScores.twos + fiveScores.threes + fiveScores.fours + fiveScores.fives + fiveScores.sixes + fiveScores.bonus
            })
        }

        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.twosSaved) {
            setOneScores({
                ...oneScores,
                twos: sum,
                twosSaved: true,
                sum: oneScores.aces + sum + oneScores.threes + oneScores.fours + oneScores.fives + oneScores.sixes + oneScores.bonus
            })
        } else if (plNum === 2 && !twoScores.twosSaved) {
            setTwoScores({
                ...twoScores,
                twos: sum,
                twosSaved: true,
                sum: twoScores.aces + sum + twoScores.threes + twoScores.fours + twoScores.fives + twoScores.sixes + twoScores.bonus
            })
        } else if (plNum === 3 && !threeScores.twosSaved) {
            setThreeScores({
                ...threeScores,
                twos: sum,
                twosSaved: true,
                sum: threeScores.aces + sum + threeScores.threes + threeScores.fours + threeScores.fives + threeScores.sixes + threeScores.bonus
            })
        } else if (plNum === 4 && !fourScores.twosSaved) {
            setFourScores({
                ...fourScores,
                twos: sum,
                twosSaved: true,
                sum: fourScores.aces + sum + fourScores.threes + fourScores.fours + fourScores.fives + fourScores.sixes + fourScores.bonus
            })
        } else if (plNum === 5 && !fiveScores.twosSaved) {
            setFiveScores({
                ...fiveScores,
                twos: sum,
                twosSaved: true,
                sum: fiveScores.aces + sum + fiveScores.threes + fiveScores.fours + fiveScores.fives + fiveScores.sixes + fiveScores.bonus
            })
        }

        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.threesSaved) {
            setOneScores({
                ...oneScores,
                threes: sum,
                threesSaved: true,
                sum: oneScores.aces + oneScores.twos + sum + oneScores.fours + oneScores.fives + oneScores.sixes + oneScores.bonus
            })
        } else if (plNum === 2 && !twoScores.threesSaved) {
            setTwoScores({
                ...twoScores,
                threes: sum,
                threesSaved: true,
                sum: twoScores.aces + twoScores.twos + sum + twoScores.fours + twoScores.fives + twoScores.sixes + twoScores.bonus
            })
        } else if (plNum === 3 && !threeScores.threesSaved) {
            setThreeScores({
                ...threeScores,
                threes: sum,
                threesSaved: true,
                sum: threeScores.aces + threeScores.twos + sum + threeScores.fours + threeScores.fives + threeScores.sixes + threeScores.bonus
            })
        } else if (plNum === 4 && !fourScores.threesSaved) {
            setFourScores({
                ...fourScores,
                threes: sum,
                threesSaved: true,
                sum: fourScores.aces + fourScores.twos + sum + fourScores.fours + fourScores.fives + fourScores.sixes + fourScores.bonus
            })
        } else if (plNum === 5 && !fiveScores.threesSaved) {
            setFiveScores({
                ...fiveScores,
                threes: sum,
                threesSaved: true,
                sum: fiveScores.aces + fiveScores.twos + sum + fiveScores.fours + fiveScores.fives + fiveScores.sixes + fiveScores.bonus
            })
        }
        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.foursSaved) {
            setOneScores({
                ...oneScores,
                fours: sum,
                foursSaved: true,
                sum: oneScores.aces + oneScores.twos + oneScores.threes + sum + oneScores.fives + oneScores.sixes + oneScores.bonus
            })
        } else if (plNum === 2 && !twoScores.foursSaved) {
            setTwoScores({
                ...twoScores,
                fours: sum,
                foursSaved: true,
                sum: twoScores.aces + twoScores.twos + twoScores.threes + sum + twoScores.fives + twoScores.sixes + twoScores.bonus
            })
        } else if (plNum === 3 && !threeScores.foursSaved) {
            setThreeScores({
                ...threeScores,
                fours: sum,
                foursSaved: true,
                sum: threeScores.aces + threeScores.twos + threeScores.threes + sum + threeScores.fives + threeScores.sixes + threeScores.bonus
            })
        } else if (plNum === 4 && !fourScores.foursSaved) {
            setFourScores({
                ...fourScores,
                fours: sum,
                foursSaved: true,
                sum: fourScores.aces + fourScores.twos + fourScores.threes + sum + fourScores.fives + fourScores.sixes + fourScores.bonus
            })
        } else if (plNum === 5 && !fiveScores.foursSaved) {
            setFiveScores({
                ...fiveScores,
                fours: sum,
                foursSaved: true,
                sum: fiveScores.aces + fiveScores.twos + fiveScores.threes + sum + fiveScores.fives + fiveScores.sixes + fiveScores.bonus
            })
        }
        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.fivesSaved) {
            setOneScores({
                ...oneScores,
                fives: sum,
                fivesSaved: true,
                sum: oneScores.aces + oneScores.twos + oneScores.threes + oneScores.fours + sum + oneScores.sixes + oneScores.bonus
            })
        } else if (plNum === 2 && !twoScores.fivesSaved) {
            setTwoScores({
                ...twoScores,
                fives: sum,
                fivesSaved: true,
                sum: twoScores.aces + twoScores.twos + twoScores.threes + twoScores.fours + sum + twoScores.sixes + twoScores.bonus
            })
        } else if (plNum === 3 && !threeScores.fivesSaved) {
            setThreeScores({
                ...threeScores,
                fives: sum,
                fivesSaved: true,
                sum: threeScores.aces + threeScores.twos + threeScores.threes + threeScores.fours + sum + threeScores.sixes + threeScores.bonus
            })
        } else if (plNum === 4 && !fourScores.fivesSaved) {
            setFourScores({
                ...fourScores,
                fives: sum,
                fivesSaved: true,
                sum: fourScores.aces + fourScores.twos + fourScores.threes + fourScores.fours + sum + fourScores.sixes + fourScores.bonus
            })
        } else if (plNum === 5 && !fiveScores.fivesSaved) {
            setFiveScores({
                ...fiveScores,
                fives: sum,
                fivesSaved: true,
                sum: fiveScores.aces + fiveScores.twos + fiveScores.threes + fiveScores.fours + sum + fiveScores.sixes + fiveScores.bonus
            })
        }
        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.sixesSaved) {
            setOneScores({
                ...oneScores,
                sixes: sum,
                sixesSaved: true,
                sum: oneScores.aces + oneScores.twos + oneScores.threes + oneScores.fours + oneScores.fives + sum + oneScores.bonus
            })
        } else if (plNum === 2 && !twoScores.sixesSaved) {
            setTwoScores({
                ...twoScores,
                sixes: sum,
                sixesSaved: true,
                sum: twoScores.aces + twoScores.twos + twoScores.threes + twoScores.fours + twoScores.fives + sum + twoScores.bonus
            })
        } else if (plNum === 3 && !threeScores.sixesSaved) {
            setThreeScores({
                ...threeScores,
                sixes: sum,
                sixesSaved: true,
                sum: threeScores.aces + threeScores.twos + threeScores.threes + threeScores.fours + threeScores.fives + sum + threeScores.bonus
            })
        } else if (plNum === 4 && !fourScores.sixesSaved) {
            setFourScores({
                ...fourScores,
                sixes: sum,
                sixesSaved: true,
                sum: fourScores.aces + fourScores.twos + fourScores.threes + fourScores.fours + fourScores.fives + sum + fourScores.bonus
            })
        } else if (plNum === 5 && !fiveScores.sixesSaved) {
            setFiveScores({
                ...fiveScores,
                sixes: sum,
                sixesSaved: true,
                sum: fiveScores.aces + fiveScores.twos + fiveScores.threes + fiveScores.fours + fiveScores.fives + sum + fiveScores.bonus
            })
        }
        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.pairSaved) {
            setOneScores({
                ...oneScores,
                pair: sum,
                pairSaved: true,
                total: oneScores.sum + sum + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
        } else if (plNum === 2 && !twoScores.pairSaved) {
            setTwoScores({
                ...twoScores,
                pair: sum,
                pairSaved: true,
                total: twoScores.sum + sum + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
        } else if (plNum === 3 && !threeScores.pairSaved) {
            setThreeScores({
                ...threeScores,
                pair: sum,
                pairSaved: true,
                total: threeScores.sum + sum + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
        } else if (plNum === 4 && !fourScores.pairSaved) {
            setFourScores({
                ...fourScores,
                pair: sum,
                pairSaved: true,
                total: fourScores.sum + sum + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
        } else if (plNum === 5 && !fiveScores.pairSaved) {
            setFiveScores({
                ...fiveScores,
                pair: sum,
                pairSaved: true,
                total: fiveScores.sum + sum + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
        }
        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.twoPairSaved) {
            setOneScores({
                ...oneScores,
                twoPair: sum,
                twoPairSaved: true,
                total: oneScores.sum + oneScores.pair + sum + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
        } else if (plNum === 2 && !twoScores.twoPairSaved) {
            setTwoScores({
                ...twoScores,
                twoPair: sum,
                twoPairSaved: true,
                total: oneScores.sum + oneScores.pair + sum + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
        } else if (plNum === 3 && !threeScores.twoPairSaved) {
            setThreeScores({
                ...threeScores,
                twoPair: sum,
                twoPairSaved: true,
                total: threeScores.sum + threeScores.pair + sum + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
        } else if (plNum === 4 && !fourScores.twoPairSaved) {
            setFourScores({
                ...fourScores,
                twoPair: sum,
                twoPairSaved: true,
                total: fourScores.sum + fourScores.pair + sum + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
        } else if (plNum === 5 && !fiveScores.twoPairSaved) {
            setFiveScores({
                ...fiveScores,
                twoPair: sum,
                twoPairSaved: true,
                total: fiveScores.sum + fiveScores.pair + sum + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
        }
        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.threeOfKindSaved) {
            setOneScores({
                ...oneScores,
                threeOfKind: sum,
                threeOfKindSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + sum + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
        } else if (plNum === 2 && !twoScores.threeOfKindSaved) {
            setTwoScores({
                ...twoScores,
                threeOfKind: sum,
                threeOfKindSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + sum + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
        } else if (plNum === 3 && !threeScores.threeOfKindSaved) {
            setThreeScores({
                ...threeScores,
                threeOfKind: sum,
                threeOfKindSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + sum + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
        } else if (plNum === 4 && !fourScores.threeOfKindSaved) {
            setFourScores({
                ...fourScores,
                threeOfKind: sum,
                threeOfKindSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + sum + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
        } else if (plNum === 5 && !fiveScores.threeOfKindSaved) {
            setFiveScores({
                ...fiveScores,
                threeOfKind: sum,
                threeOfKindSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + sum + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
        }
        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.fourOfKindSaved) {
            setOneScores({
                ...oneScores,
                fourOfKind: sum,
                fourOfKindSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + sum + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
        } else if (plNum === 2 && !twoScores.fourOfKindSaved) {
            setTwoScores({
                ...twoScores,
                fourOfKind: sum,
                fourOfKindSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + sum + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
        } else if (plNum === 3 && !threeScores.fourOfKindSaved) {
            setThreeScores({
                ...threeScores,
                fourOfKind: sum,
                fourOfKindSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + sum + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
        } else if (plNum === 4 && !fourScores.fourOfKindSaved) {
            setFourScores({
                ...fourScores,
                fourOfKind: sum,
                fourOfKindSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + sum + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
        } else if (plNum === 5 && !fiveScores.fourOfKindSaved) {
            setFiveScores({
                ...fiveScores,
                fourOfKind: sum,
                fourOfKindSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + sum + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
        }
        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.largeStraightSaved) {
            setOneScores({
                ...oneScores,
                largeStraight: sum,
                largeStraightSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + sum + oneScores.full + oneScores.chance
            })
        } else if (plNum === 2 && !twoScores.largeStraightSaved) {
            setTwoScores({
                ...twoScores,
                largeStraight: sum,
                largeStraightSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + sum + twoScores.full + twoScores.chance
            })
        } else if (plNum === 3 && !threeScores.largeStraightSaved) {
            setThreeScores({
                ...threeScores,
                largeStraight: sum,
                largeStraightSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + sum + threeScores.full + threeScores.chance
            })
        } else if (plNum === 4 && !fourScores.largeStraightSaved) {
            setFourScores({
                ...fourScores,
                largeStraight: sum,
                largeStraightSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + sum + fourScores.full + fourScores.chance
            })
        } else if (plNum === 5 && !fiveScores.largeStraightSaved) {
            setFiveScores({
                ...fiveScores,
                largeStraight: sum,
                largeStraightSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + sum + fiveScores.full + fiveScores.chance
            })
        }
        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.smallStraightSaved) {
            setOneScores({
                ...oneScores,
                smallStraight: sum,
                smallStraightSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + sum + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
        } else if (plNum === 2 && !twoScores.smallStraightSaved) {
            setTwoScores({
                ...twoScores,
                smallStraight: sum,
                smallStraightSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + sum + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
        } else if (plNum === 3 && !threeScores.smallStraightSaved) {
            setThreeScores({
                ...threeScores,
                smallStraight: sum,
                smallStraightSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + sum + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
        } else if (plNum === 4 && !fourScores.smallStraightSaved) {
            setFourScores({
                ...fourScores,
                smallStraight: sum,
                smallStraightSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + sum + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
        } else if (plNum === 5 && !fiveScores.smallStraightSaved) {
            setFiveScores({
                ...fiveScores,
                smallStraight: sum,
                smallStraightSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + sum + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
        }
        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.fullSaved) {
            setOneScores({
                ...oneScores,
                full: sum,
                fullSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + sum + oneScores.chance
            })
        } else if (plNum === 2 && !twoScores.fullSaved) {
            setTwoScores({
                ...twoScores,
                full: sum,
                fullSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + sum + twoScores.chance
            })
        } else if (plNum === 3 && !threeScores.fullSaved) {
            setThreeScores({
                ...threeScores,
                full: sum,
                fullSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + sum + threeScores.chance
            })
        } else if (plNum === 4 && !fourScores.fullSaved) {
            setFourScores({
                ...fourScores,
                full: sum,
                fullSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + sum + fourScores.chance
            })
        } else if (plNum === 5 && !fiveScores.fullSaved) {
            setFiveScores({
                ...fiveScores,
                full: sum,
                fullSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + sum + fiveScores.chance
            })
        }
        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.chanceSaved) {
            setOneScores({
                ...oneScores,
                chance: sum,
                chanceSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + sum
            })
        } else if (plNum === 2 && !twoScores.chanceSaved) {
            setTwoScores({
                ...twoScores,
                chance: sum,
                chanceSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + sum
            })
        } else if (plNum === 3 && !threeScores.chanceSaved) {
            setThreeScores({
                ...threeScores,
                chance: sum,
                chanceSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + sum
            })
        } else if (plNum === 4 && !fourScores.chanceSaved) {
            setFourScores({
                ...fourScores,
                chance: sum,
                chanceSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + sum
            })
        } else if (plNum === 5 && !fiveScores.chanceSaved) {
            setFiveScores({
                ...fiveScores,
                chance: sum,
                chanceSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + sum
            })
        }

        nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.fiveOfKindSaved && sum > 0) {
            setOneScores({
                ...oneScores,
                fiveOfKind: sum + 50,
                fiveOfKindSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + sum + 50 + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
        } else if (plNum === 2 && !twoScores.fiveOfKindSaved && sum > 0) {
            setTwoScores({
                ...twoScores,
                fiveOfKind: sum + 50,
                fiveOfKindSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + sum + 50 + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
        } else if (plNum === 3 && !threeScores.fiveOfKindSaved && sum > 0) {
            setThreeScores({
                ...threeScores,
                fiveOfKind: sum + 50,
                fiveOfKindSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + sum + 50 + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
        } else if (plNum === 4 && !fourScores.fiveOfKindSaved && sum > 0) {
            setFourScores({
                ...fourScores,
                fiveOfKind: sum + 50,
                fiveOfKindSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + sum + 50 + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
        } else if (plNum === 5 && !fiveScores.fiveOfKindSaved && sum > 0) {
            setFiveScores({
                ...fiveScores,
                fiveOfKind: sum + 50,
                fiveOfKindSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + sum + 50 + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
        } else if (plNum === 1 && !oneScores.fiveOfKindSaved && sum === 0) {
            setOneScores({
                ...oneScores,
                fiveOfKind: sum,
                fiveOfKindSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + sum + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
        } else if (plNum === 2 && !twoScores.fiveOfKindSaved && sum === 0) {
            setTwoScores({
                ...twoScores,
                fiveOfKind: sum,
                fiveOfKindSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + sum + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
        } else if (plNum === 3 && !threeScores.fiveOfKindSaved && sum === 0) {
            setThreeScores({
                ...threeScores,
                fiveOfKind: sum,
                fiveOfKindSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + sum + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
        } else if (plNum === 4 && !fourScores.fiveOfKindSaved && sum === 0) {
            setFourScores({
                ...fourScores,
                fiveOfKind: sum,
                fiveOfKindSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + sum + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
        } else if (plNum === 5 && !fiveScores.fiveOfKindSaved && sum === 0) {
            setFiveScores({
                ...fiveScores,
                fiveOfKind: sum,
                fiveOfKindSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + sum + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
        }

        nextTurn();
    }

    const bonusCheck = (plNum) => {

        if (plNum === 1 && !oneScores.bonusSaved && oneScores.sum >= 63) {
            setOneScores({
                ...oneScores,
                bonus: 50,
                bonusSaved: true,
                sum: oneScores.sum + 50
            })
        } else if (plNum === 2 && !twoScores.bonusSaved && twoScores.sum >= 63) {
            setTwoScores({
                ...twoScores,
                bonus: 50,
                bonusSaved: true,
                sum: twoScores.sum + 50
            })
        } else if (plNum === 3 && !threeScores.bonuseSaved && twoScores.sum >= 63) {
            setThreeScores({
                ...threeScores,
                bonus: 50,
                bonusSaved: true,
                sum: threeScores.sum + 50
            })
        } else if (plNum === 4 && !fourScores.bonusSaved && twoScores.sum >= 63) {
            setFourScores({
                ...fourScores,
                bonus: 50,
                bonusSaved: true,
                sum: fourScores.sum + 50
            })
        } else if (plNum === 5 && !fiveScores.bonusSaved && twoScores.sum >= 63) {
            setFiveScores({
                ...fiveScores,
                bonus: 50,
                bonusSaved: true,
                sum: fiveScores.sum + 50
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
                        <td onClick={() => acesCheck(1)}>{oneScores.acesSaved ? oneScores.aces : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>II</td>
                        <td onClick={() => twosCheck(1)}>{oneScores.twosSaved ? oneScores.twos : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>III</td>
                        <td onClick={() => threesCheck(1)}>{oneScores.threesSaved ? oneScores.threes : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>IV</td>
                        <td onClick={() => foursCheck(1)}>{oneScores.foursSaved ? oneScores.fours : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>V</td>
                        <td onClick={() => fivesCheck(1)}>{oneScores.fivesSaved ? oneScores.fives : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>VI</td>
                        <td onClick={() => sixesCheck(1)}>{oneScores.sixesSaved ? oneScores.sixes : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr className="bonus-row">
                        <td>BONUS</td>
                        <td onClick={() => bonusCheck(1)}>{oneScores.bonusSaved ? oneScores.bonus : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr className="sum-row">
                        <td>SUM</td>
                        <td>{(oneScores.sum > 0) ? oneScores.sum : 0}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>Pair</td>
                        <td onClick={() => pairCheck(1)}>{oneScores.pairSaved ? oneScores.pair : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>2xPair</td>
                        <td onClick={() => twoPairCheck(1)}>{oneScores.twoPairSaved ? oneScores.twoPair : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>3X</td>
                        <td onClick={() => threeOfKindCheck(1)}>{oneScores.threeOfKindSaved ? oneScores.threeOfKind : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>4X</td>
                        <td onClick={() => fourOfKindCheck(1)}>{oneScores.fourOfKindSaved ? oneScores.fourOfKind : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>S straight</td>
                        <td onClick={() => smallStraightCheck(1)}>{oneScores.smallStraightSaved ? oneScores.smallStraight : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>L straight</td>
                        <td onClick={() => largeStraightCheck(1)}>{oneScores.largeStraightSaved ? oneScores.largeStraight : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>Full</td>
                        <td onClick={() => fullCheck(1)}>{oneScores.fullSaved ? oneScores.full : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>Chance</td>
                        <td onClick={() => chanceCheck(1)}>{oneScores.chanceSaved ? oneScores.chance : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                    <tr>
                        <td>5X</td>
                        <td onClick={() => fiveOfKindCheck(1)}>{oneScores.fiveOfKindSaved ? oneScores.fiveOfKind : ""}</td>
                        <td style={{display: playersArray.length < 2 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 3 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 4 ? "none" : ""}}>0</td>
                        <td style={{display: playersArray.length < 5 ? "none" : ""}}>0</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="sum-row">
                        <td className="total-cell">TOTAL</td>
                        <td>{(oneScores.total > 0) ? oneScores.total : 0}</td>
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