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
            rollCount,
            setRollCount,
            setDiceState,
            setClicked,
            queue,
            setQueue
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
        setQueue(queue + 1);

        if (queue >= countPlayers) {
            setQueue(1);
        }

        const bonusCheck = () => {

            if (!oneScores.bonusSaved && oneScores.sum >= 63) {
                setOneScores({
                    ...oneScores,
                    bonus: 50,
                    bonusSaved: true,
                    sum: oneScores.sum + 50
                })
            } else if (!twoScores.bonusSaved && twoScores.sum >= 63) {
                setTwoScores({
                    ...twoScores,
                    bonus: 50,
                    bonusSaved: true,
                    sum: twoScores.sum + 50
                })
            } else if (!threeScores.bonusSaved && threeScores.sum >= 63) {
                setThreeScores({
                    ...threeScores,
                    bonus: 50,
                    bonusSaved: true,
                    sum: threeScores.sum + 50
                })
            } else if (!fourScores.bonusSaved && fourScores.sum >= 63) {
                setFourScores({
                    ...fourScores,
                    bonus: 50,
                    bonusSaved: true,
                    sum: fourScores.sum + 50
                })
            } else if (!fiveScores.bonusSaved && fiveScores.sum >= 63) {
                setFiveScores({
                    ...fiveScores,
                    bonus: 50,
                    bonusSaved: true,
                    sum: fiveScores.sum + 50
                })
            }
        }

        bonusCheck();
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
            nextTurn();
        } else if (plNum === 2 && !twoScores.acesSaved) {
            setTwoScores({
                ...twoScores,
                aces: sum,
                acesSaved: true,
                sum: sum + twoScores.twos + twoScores.threes + twoScores.fours + twoScores.fives + twoScores.sixes + twoScores.bonus
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.acesSaved) {
            setThreeScores({
                ...threeScores,
                aces: sum,
                acesSaved: true,
                sum: sum + threeScores.twos + threeScores.threes + threeScores.fours + threeScores.fives + threeScores.sixes + threeScores.bonus
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.acesSaved) {
            setFourScores({
                ...fourScores,
                aces: sum,
                acesSaved: true,
                sum: sum + fourScores.twos + fourScores.threes + fourScores.fours + fourScores.fives + fourScores.sixes + fourScores.bonus
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.acesSaved) {
            setFiveScores({
                ...fiveScores,
                aces: sum,
                acesSaved: true,
                sum: sum + fiveScores.twos + fiveScores.threes + fiveScores.fours + fiveScores.fives + fiveScores.sixes + fiveScores.bonus
            })
            nextTurn();
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
            nextTurn();
        } else if (plNum === 2 && !twoScores.twosSaved) {
            setTwoScores({
                ...twoScores,
                twos: sum,
                twosSaved: true,
                sum: twoScores.aces + sum + twoScores.threes + twoScores.fours + twoScores.fives + twoScores.sixes + twoScores.bonus
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.twosSaved) {
            setThreeScores({
                ...threeScores,
                twos: sum,
                twosSaved: true,
                sum: threeScores.aces + sum + threeScores.threes + threeScores.fours + threeScores.fives + threeScores.sixes + threeScores.bonus
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.twosSaved) {
            setFourScores({
                ...fourScores,
                twos: sum,
                twosSaved: true,
                sum: fourScores.aces + sum + fourScores.threes + fourScores.fours + fourScores.fives + fourScores.sixes + fourScores.bonus
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.twosSaved) {
            setFiveScores({
                ...fiveScores,
                twos: sum,
                twosSaved: true,
                sum: fiveScores.aces + sum + fiveScores.threes + fiveScores.fours + fiveScores.fives + fiveScores.sixes + fiveScores.bonus
            })
            nextTurn();
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
            nextTurn();
        } else if (plNum === 2 && !twoScores.threesSaved) {
            setTwoScores({
                ...twoScores,
                threes: sum,
                threesSaved: true,
                sum: twoScores.aces + twoScores.twos + sum + twoScores.fours + twoScores.fives + twoScores.sixes + twoScores.bonus
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.threesSaved) {
            setThreeScores({
                ...threeScores,
                threes: sum,
                threesSaved: true,
                sum: threeScores.aces + threeScores.twos + sum + threeScores.fours + threeScores.fives + threeScores.sixes + threeScores.bonus
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.threesSaved) {
            setFourScores({
                ...fourScores,
                threes: sum,
                threesSaved: true,
                sum: fourScores.aces + fourScores.twos + sum + fourScores.fours + fourScores.fives + fourScores.sixes + fourScores.bonus
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.threesSaved) {
            setFiveScores({
                ...fiveScores,
                threes: sum,
                threesSaved: true,
                sum: fiveScores.aces + fiveScores.twos + sum + fiveScores.fours + fiveScores.fives + fiveScores.sixes + fiveScores.bonus
            })
            nextTurn();
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
            nextTurn();
        } else if (plNum === 2 && !twoScores.foursSaved) {
            setTwoScores({
                ...twoScores,
                fours: sum,
                foursSaved: true,
                sum: twoScores.aces + twoScores.twos + twoScores.threes + sum + twoScores.fives + twoScores.sixes + twoScores.bonus
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.foursSaved) {
            setThreeScores({
                ...threeScores,
                fours: sum,
                foursSaved: true,
                sum: threeScores.aces + threeScores.twos + threeScores.threes + sum + threeScores.fives + threeScores.sixes + threeScores.bonus
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.foursSaved) {
            setFourScores({
                ...fourScores,
                fours: sum,
                foursSaved: true,
                sum: fourScores.aces + fourScores.twos + fourScores.threes + sum + fourScores.fives + fourScores.sixes + fourScores.bonus
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.foursSaved) {
            setFiveScores({
                ...fiveScores,
                fours: sum,
                foursSaved: true,
                sum: fiveScores.aces + fiveScores.twos + fiveScores.threes + sum + fiveScores.fives + fiveScores.sixes + fiveScores.bonus
            })
            nextTurn();
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
            nextTurn();
        } else if (plNum === 2 && !twoScores.fivesSaved) {
            setTwoScores({
                ...twoScores,
                fives: sum,
                fivesSaved: true,
                sum: twoScores.aces + twoScores.twos + twoScores.threes + twoScores.fours + sum + twoScores.sixes + twoScores.bonus
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.fivesSaved) {
            setThreeScores({
                ...threeScores,
                fives: sum,
                fivesSaved: true,
                sum: threeScores.aces + threeScores.twos + threeScores.threes + threeScores.fours + sum + threeScores.sixes + threeScores.bonus
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.fivesSaved) {
            setFourScores({
                ...fourScores,
                fives: sum,
                fivesSaved: true,
                sum: fourScores.aces + fourScores.twos + fourScores.threes + fourScores.fours + sum + fourScores.sixes + fourScores.bonus
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.fivesSaved) {
            setFiveScores({
                ...fiveScores,
                fives: sum,
                fivesSaved: true,
                sum: fiveScores.aces + fiveScores.twos + fiveScores.threes + fiveScores.fours + sum + fiveScores.sixes + fiveScores.bonus
            })
            nextTurn();
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
            nextTurn();
        } else if (plNum === 2 && !twoScores.sixesSaved) {
            setTwoScores({
                ...twoScores,
                sixes: sum,
                sixesSaved: true,
                sum: twoScores.aces + twoScores.twos + twoScores.threes + twoScores.fours + twoScores.fives + sum + twoScores.bonus
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.sixesSaved) {
            setThreeScores({
                ...threeScores,
                sixes: sum,
                sixesSaved: true,
                sum: threeScores.aces + threeScores.twos + threeScores.threes + threeScores.fours + threeScores.fives + sum + threeScores.bonus
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.sixesSaved) {
            setFourScores({
                ...fourScores,
                sixes: sum,
                sixesSaved: true,
                sum: fourScores.aces + fourScores.twos + fourScores.threes + fourScores.fours + fourScores.fives + sum + fourScores.bonus
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.sixesSaved) {
            setFiveScores({
                ...fiveScores,
                sixes: sum,
                sixesSaved: true,
                sum: fiveScores.aces + fiveScores.twos + fiveScores.threes + fiveScores.fours + fiveScores.fives + sum + fiveScores.bonus
            })
            nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.pairSaved && oneScores.upperFilled && rollCount === 2) {
            setOneScores({
                ...oneScores,
                pair: sum * 2,
                pairSaved: true,
                total: oneScores.sum + sum * 2 + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.pairSaved && twoScores.upperFilled && rollCount === 2) {
            setTwoScores({
                ...twoScores,
                pair: sum * 2,
                pairSaved: true,
                total: twoScores.sum + sum * 2 + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.pairSaved && threeScores.upperFilled && rollCount === 2) {
            setThreeScores({
                ...threeScores,
                pair: sum * 2,
                pairSaved: true,
                total: threeScores.sum + sum * 2 + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.pairSaved  && fourScores.upperFilled && rollCount === 2) {
            setFourScores({
                ...fourScores,
                pair: sum * 2,
                pairSaved: true,
                total: fourScores.sum + sum * 2 + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.pairSaved  && fiveScores.upperFilled && rollCount === 2) {
            setFiveScores({
                ...fiveScores,
                pair: sum * 2,
                pairSaved: true,
                total: fiveScores.sum + sum * 2 + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
            nextTurn();
        } else if (plNum === 1 && !oneScores.pairSaved && oneScores.upperFilled) {
            setOneScores({
                ...oneScores,
                pair: sum,
                pairSaved: true,
                total: oneScores.sum + sum + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.pairSaved && twoScores.upperFilled) {
            setTwoScores({
                ...twoScores,
                pair: sum,
                pairSaved: true,
                total: twoScores.sum + sum + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.pairSaved && threeScores.upperFilled) {
            setThreeScores({
                ...threeScores,
                pair: sum,
                pairSaved: true,
                total: threeScores.sum + sum + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.pairSaved  && fourScores.upperFilled) {
            setFourScores({
                ...fourScores,
                pair: sum,
                pairSaved: true,
                total: fourScores.sum + sum + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.pairSaved  && fiveScores.upperFilled) {
            setFiveScores({
                ...fiveScores,
                pair: sum,
                pairSaved: true,
                total: fiveScores.sum + sum + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
            nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.twoPairSaved && oneScores.upperFilled && rollCount === 2) {
            setOneScores({
                ...oneScores,
                twoPair: sum * 2,
                twoPairSaved: true,
                total: oneScores.sum + oneScores.pair + sum * 2 + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.twoPairSaved  && twoScores.upperFilled && rollCount === 2) {
            setTwoScores({
                ...twoScores,
                twoPair: sum * 2,
                twoPairSaved: true,
                total: oneScores.sum + oneScores.pair + sum * 2 + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.twoPairSaved && threeScores.upperFilled && rollCount === 2) {
            setThreeScores({
                ...threeScores,
                twoPair: sum * 2,
                twoPairSaved: true,
                total: threeScores.sum + threeScores.pair + sum * 2 + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.twoPairSaved && fourScores.upperFilled && rollCount === 2) {
            setFourScores({
                ...fourScores,
                twoPair: sum * 2,
                twoPairSaved: true,
                total: fourScores.sum + fourScores.pair + sum * 2 + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.twoPairSaved  && fiveScores.upperFilled && rollCount === 2) {
            setFiveScores({
                ...fiveScores,
                twoPair: sum * 2,
                twoPairSaved: true,
                total: fiveScores.sum + fiveScores.pair + sum * 2 + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
            nextTurn();
        } else if (plNum === 1 && !oneScores.twoPairSaved && oneScores.upperFilled) {
            setOneScores({
                ...oneScores,
                twoPair: sum,
                twoPairSaved: true,
                total: oneScores.sum + oneScores.pair + sum + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.twoPairSaved  && twoScores.upperFilled) {
            setTwoScores({
                ...twoScores,
                twoPair: sum,
                twoPairSaved: true,
                total: oneScores.sum + oneScores.pair + sum + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.twoPairSaved && threeScores.upperFilled) {
            setThreeScores({
                ...threeScores,
                twoPair: sum,
                twoPairSaved: true,
                total: threeScores.sum + threeScores.pair + sum + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.twoPairSaved && fourScores.upperFilled) {
            setFourScores({
                ...fourScores,
                twoPair: sum,
                twoPairSaved: true,
                total: fourScores.sum + fourScores.pair + sum + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.twoPairSaved  && fiveScores.upperFilled) {
            setFiveScores({
                ...fiveScores,
                twoPair: sum,
                twoPairSaved: true,
                total: fiveScores.sum + fiveScores.pair + sum + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
            nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.threeOfKindSaved  && oneScores.upperFilled && rollCount === 2) {
            setOneScores({
                ...oneScores,
                threeOfKind: sum * 2,
                threeOfKindSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + sum * 2 + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.threeOfKindSaved && twoScores.upperFilled && rollCount === 2) {
            setTwoScores({
                ...twoScores,
                threeOfKind: sum * 2,
                threeOfKindSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + sum * 2 + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.threeOfKindSaved && threeScores.upperFilled && rollCount === 2) {
            setThreeScores({
                ...threeScores,
                threeOfKind: sum * 2,
                threeOfKindSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + sum * 2 + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.threeOfKindSaved  && fourScores.upperFilled && rollCount === 2) {
            setFourScores({
                ...fourScores,
                threeOfKind: sum * 2,
                threeOfKindSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + sum * 2 + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.threeOfKindSaved && fiveScores.upperFilled && rollCount === 2) {
            setFiveScores({
                ...fiveScores,
                threeOfKind: sum * 2,
                threeOfKindSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + sum * 2 + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
            nextTurn();
        } else if (plNum === 1 && !oneScores.threeOfKindSaved  && oneScores.upperFilled) {
            setOneScores({
                ...oneScores,
                threeOfKind: sum,
                threeOfKindSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + sum + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.threeOfKindSaved && twoScores.upperFilled) {
            setTwoScores({
                ...twoScores,
                threeOfKind: sum,
                threeOfKindSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + sum + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.threeOfKindSaved && threeScores.upperFilled) {
            setThreeScores({
                ...threeScores,
                threeOfKind: sum,
                threeOfKindSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + sum + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.threeOfKindSaved  && fourScores.upperFilled) {
            setFourScores({
                ...fourScores,
                threeOfKind: sum,
                threeOfKindSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + sum + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.threeOfKindSaved && fiveScores.upperFilled) {
            setFiveScores({
                ...fiveScores,
                threeOfKind: sum,
                threeOfKindSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + sum + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
            nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.fourOfKindSaved && oneScores.upperFilled && rollCount === 2) {
            setOneScores({
                ...oneScores,
                fourOfKind: sum * 2,
                fourOfKindSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + sum * 2 + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.fourOfKindSaved && twoScores.upperFilled && rollCount === 2) {
            setTwoScores({
                ...twoScores,
                fourOfKind: sum * 2,
                fourOfKindSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + sum * 2 + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.fourOfKindSaved && threeScores.upperFilled && rollCount === 2) {
            setThreeScores({
                ...threeScores,
                fourOfKind: sum * 2,
                fourOfKindSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + sum * 2 + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.fourOfKindSaved && fourScores.upperFilled && rollCount === 2) {
            setFourScores({
                ...fourScores,
                fourOfKind: sum * 2,
                fourOfKindSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + sum * 2 + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.fourOfKindSaved && fiveScores.upperFilled && rollCount === 2) {
            setFiveScores({
                ...fiveScores,
                fourOfKind: sum * 2,
                fourOfKindSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + sum * 2 + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
            nextTurn();
        } else if (plNum === 1 && !oneScores.fourOfKindSaved && oneScores.upperFilled) {
            setOneScores({
                ...oneScores,
                fourOfKind: sum,
                fourOfKindSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + sum + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.fourOfKindSaved && twoScores.upperFilled) {
            setTwoScores({
                ...twoScores,
                fourOfKind: sum,
                fourOfKindSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + sum + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.fourOfKindSaved && threeScores.upperFilled) {
            setThreeScores({
                ...threeScores,
                fourOfKind: sum,
                fourOfKindSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + sum + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.fourOfKindSaved && fourScores.upperFilled) {
            setFourScores({
                ...fourScores,
                fourOfKind: sum,
                fourOfKindSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + sum + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.fourOfKindSaved && fiveScores.upperFilled) {
            setFiveScores({
                ...fiveScores,
                fourOfKind: sum,
                fourOfKindSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + sum + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
            nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.largeStraightSaved  && oneScores.upperFilled && rollCount === 2) {
            setOneScores({
                ...oneScores,
                largeStraight: sum * 2,
                largeStraightSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + sum * 2 + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.largeStraightSaved && twoScores.upperFilled && rollCount === 2) {
            setTwoScores({
                ...twoScores,
                largeStraight: sum * 2,
                largeStraightSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + sum * 2 + twoScores.full + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.largeStraightSaved && threeScores.upperFilled && rollCount === 2) {
            setThreeScores({
                ...threeScores,
                largeStraight: sum * 2,
                largeStraightSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + sum * 2 + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.largeStraightSaved && fourScores.upperFilled && rollCount === 2) {
            setFourScores({
                ...fourScores,
                largeStraight: sum * 2,
                largeStraightSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + sum * 2 + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.largeStraightSaved && fiveScores.upperFilled && rollCount === 2) {
            setFiveScores({
                ...fiveScores,
                largeStraight: sum * 2,
                largeStraightSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + sum * 2 + fiveScores.full + fiveScores.chance
            })
            nextTurn();
        } else if (plNum === 1 && !oneScores.largeStraightSaved  && oneScores.upperFilled) {
            setOneScores({
                ...oneScores,
                largeStraight: sum,
                largeStraightSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + sum + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.largeStraightSaved && twoScores.upperFilled) {
            setTwoScores({
                ...twoScores,
                largeStraight: sum,
                largeStraightSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + sum + twoScores.full + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.largeStraightSaved && threeScores.upperFilled) {
            setThreeScores({
                ...threeScores,
                largeStraight: sum,
                largeStraightSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + sum + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.largeStraightSaved && fourScores.upperFilled) {
            setFourScores({
                ...fourScores,
                largeStraight: sum,
                largeStraightSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + sum + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.largeStraightSaved && fiveScores.upperFilled) {
            setFiveScores({
                ...fiveScores,
                largeStraight: sum,
                largeStraightSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + sum + fiveScores.full + fiveScores.chance
            })
            nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.smallStraightSaved && oneScores.upperFilled && rollCount === 2) {
            setOneScores({
                ...oneScores,
                smallStraight: sum * 2,
                smallStraightSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + sum * 2 + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.smallStraightSaved && twoScores.upperFilled && rollCount === 2) {
            setTwoScores({
                ...twoScores,
                smallStraight: sum * 2,
                smallStraightSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + sum * 2 + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.smallStraightSaved && threeScores.upperFilled && rollCount === 2) {
            setThreeScores({
                ...threeScores,
                smallStraight: sum * 2,
                smallStraightSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + sum * 2 + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.smallStraightSaved && fourScores.upperFilled && rollCount === 2) {
            setFourScores({
                ...fourScores,
                smallStraight: sum * 2,
                smallStraightSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + sum * 2 + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.smallStraightSaved && fiveScores.upperFilled && rollCount === 2) {
            setFiveScores({
                ...fiveScores,
                smallStraight: sum * 2,
                smallStraightSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + sum * 2 + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
            nextTurn();
        } else if (plNum === 1 && !oneScores.smallStraightSaved && oneScores.upperFilled) {
            setOneScores({
                ...oneScores,
                smallStraight: sum,
                smallStraightSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + sum + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.smallStraightSaved && twoScores.upperFilled) {
            setTwoScores({
                ...twoScores,
                smallStraight: sum,
                smallStraightSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + sum + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.smallStraightSaved && threeScores.upperFilled) {
            setThreeScores({
                ...threeScores,
                smallStraight: sum,
                smallStraightSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + sum + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.smallStraightSaved && fourScores.upperFilled) {
            setFourScores({
                ...fourScores,
                smallStraight: sum,
                smallStraightSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + sum + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.smallStraightSaved && fiveScores.upperFilled) {
            setFiveScores({
                ...fiveScores,
                smallStraight: sum,
                smallStraightSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + sum + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
            nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.fullSaved  && oneScores.upperFilled && rollCount === 2) {
            setOneScores({
                ...oneScores,
                full: sum * 2,
                fullSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + sum * 2 + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.fullSaved && twoScores.upperFilled && rollCount === 2) {
            setTwoScores({
                ...twoScores,
                full: sum * 2,
                fullSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + sum * 2 + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.fullSaved && threeScores.upperFilled && rollCount === 2) {
            setThreeScores({
                ...threeScores,
                full: sum * 2,
                fullSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + sum * 2 + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.fullSaved && fourScores.upperFilled && rollCount === 2) {
            setFourScores({
                ...fourScores,
                full: sum * 2,
                fullSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + sum * 2 + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.fullSaved && fiveScores.upperFilled && rollCount === 2) {
            setFiveScores({
                ...fiveScores,
                full: sum * 2,
                fullSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + sum * 2 + fiveScores.chance
            })
            nextTurn();
        } else if (plNum === 1 && !oneScores.fullSaved  && oneScores.upperFilled) {
            setOneScores({
                ...oneScores,
                full: sum,
                fullSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + sum + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.fullSaved && twoScores.upperFilled) {
            setTwoScores({
                ...twoScores,
                full: sum,
                fullSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + sum + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.fullSaved && threeScores.upperFilled) {
            setThreeScores({
                ...threeScores,
                full: sum,
                fullSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + sum + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.fullSaved && fourScores.upperFilled) {
            setFourScores({
                ...fourScores,
                full: sum,
                fullSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + sum + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.fullSaved && fiveScores.upperFilled) {
            setFiveScores({
                ...fiveScores,
                full: sum,
                fullSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + sum + fiveScores.chance
            })
            nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.chanceSaved && oneScores.upperFilled && rollCount === 2) {
            setOneScores({
                ...oneScores,
                chance: sum * 2,
                chanceSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + sum * 2
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.chanceSaved && twoScores.upperFilled && rollCount === 2) {
            setTwoScores({
                ...twoScores,
                chance: sum * 2,
                chanceSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + sum * 2
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.chanceSaved && threeScores.upperFilled && rollCount === 2) {
            setThreeScores({
                ...threeScores,
                chance: sum * 2,
                chanceSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + sum * 2
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.chanceSaved && fourScores.upperFilled && rollCount === 2) {
            setFourScores({
                ...fourScores,
                chance: sum * 2,
                chanceSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + sum * 2
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.chanceSaved && fiveScores.upperFilled && rollCount === 2) {
            setFiveScores({
                ...fiveScores,
                chance: sum * 2,
                chanceSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + sum * 2
            })
            nextTurn();
        } else if (plNum === 1 && !oneScores.chanceSaved && oneScores.upperFilled) {
            setOneScores({
                ...oneScores,
                chance: sum,
                chanceSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + oneScores.fiveOfKind + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + sum
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.chanceSaved && twoScores.upperFilled) {
            setTwoScores({
                ...twoScores,
                chance: sum,
                chanceSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + twoScores.fiveOfKind + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + sum
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.chanceSaved && threeScores.upperFilled) {
            setThreeScores({
                ...threeScores,
                chance: sum,
                chanceSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + threeScores.fiveOfKind + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + sum
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.chanceSaved && fourScores.upperFilled) {
            setFourScores({
                ...fourScores,
                chance: sum,
                chanceSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + fourScores.fiveOfKind + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + sum
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.chanceSaved && fiveScores.upperFilled) {
            setFiveScores({
                ...fiveScores,
                chance: sum,
                chanceSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + fiveScores.fiveOfKind + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + sum
            })
            nextTurn();
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
            } else if (typeof sum === "undefined") {
                return sum = 0;
            }
        }
    
        score();
    
        if (plNum === 1 && !oneScores.fiveOfKindSaved && sum > 0 && oneScores.upperFilled && rollCount === 2) {
            setOneScores({
                ...oneScores,
                fiveOfKind: sum * 2 + 50,
                fiveOfKindSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + sum * 2 + 50 + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.fiveOfKindSaved && sum > 0 && twoScores.upperFilled && rollCount === 2) {
            setTwoScores({
                ...twoScores,
                fiveOfKind: sum * 2 + 50,
                fiveOfKindSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + sum * 2 + 50 + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.fiveOfKindSaved && sum > 0 && threeScores.upperFilled && rollCount === 2) {
            setThreeScores({
                ...threeScores,
                fiveOfKind: sum * 2 + 50,
                fiveOfKindSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + sum * 2 + 50 + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.fiveOfKindSaved && sum > 0 && fourScores.upperFilled && rollCount === 2) {
            setFourScores({
                ...fourScores,
                fiveOfKind: sum * 2 + 50,
                fiveOfKindSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + sum * 2 + 50 + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.fiveOfKindSaved && sum > 0 && fiveScores.upperFilled && rollCount === 2) {
            setFiveScores({
                ...fiveScores,
                fiveOfKind: sum * 2 + 50,
                fiveOfKindSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + sum * 2 + 50 + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
            nextTurn();
        }else if (plNum === 1 && !oneScores.fiveOfKindSaved && sum > 0 && oneScores.upperFilled) {
            setOneScores({
                ...oneScores,
                fiveOfKind: sum + 50,
                fiveOfKindSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + sum + 50 + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.fiveOfKindSaved && sum > 0 && twoScores.upperFilled) {
            setTwoScores({
                ...twoScores,
                fiveOfKind: sum + 50,
                fiveOfKindSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + sum + 50 + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.fiveOfKindSaved && sum > 0 && threeScores.upperFilled) {
            setThreeScores({
                ...threeScores,
                fiveOfKind: sum + 50,
                fiveOfKindSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + sum + 50 + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.fiveOfKindSaved && sum > 0 && fourScores.upperFilled) {
            setFourScores({
                ...fourScores,
                fiveOfKind: sum + 50,
                fiveOfKindSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + sum + 50 + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.fiveOfKindSaved && sum > 0 && fiveScores.upperFilled) {
            setFiveScores({
                ...fiveScores,
                fiveOfKind: sum + 50,
                fiveOfKindSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + sum + 50 + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
            nextTurn();
        } else if (plNum === 1 && !oneScores.fiveOfKindSaved && sum === 0 && oneScores.upperFilled) {
            setOneScores({
                ...oneScores,
                fiveOfKind: sum,
                fiveOfKindSaved: true,
                total: oneScores.sum + oneScores.pair + oneScores.twoPair + oneScores.threeOfKind + oneScores.fourOfKind + sum + oneScores.smallStraight + oneScores.largeStraight + oneScores.full + oneScores.chance
            })
            nextTurn();
        } else if (plNum === 2 && !twoScores.fiveOfKindSaved && sum === 0 && twoScores.upperFilled) {
            setTwoScores({
                ...twoScores,
                fiveOfKind: sum,
                fiveOfKindSaved: true,
                total: twoScores.sum + twoScores.pair + twoScores.twoPair + twoScores.threeOfKind + twoScores.fourOfKind + sum + twoScores.smallStraight + twoScores.largeStraight + twoScores.full + twoScores.chance
            })
            nextTurn();
        } else if (plNum === 3 && !threeScores.fiveOfKindSaved && sum === 0 && threeScores.upperFilled) {
            setThreeScores({
                ...threeScores,
                fiveOfKind: sum,
                fiveOfKindSaved: true,
                total: threeScores.sum + threeScores.pair + threeScores.twoPair + threeScores.threeOfKind + threeScores.fourOfKind + sum + threeScores.smallStraight + threeScores.largeStraight + threeScores.full + threeScores.chance
            })
            nextTurn();
        } else if (plNum === 4 && !fourScores.fiveOfKindSaved && sum === 0 && fourScores.upperFilled) {
            setFourScores({
                ...fourScores,
                fiveOfKind: sum,
                fiveOfKindSaved: true,
                total: fourScores.sum + fourScores.pair + fourScores.twoPair + fourScores.threeOfKind + fourScores.fourOfKind + sum + fourScores.smallStraight + fourScores.largeStraight + fourScores.full + fourScores.chance
            })
            nextTurn();
        } else if (plNum === 5 && !fiveScores.fiveOfKindSaved && sum === 0 && fiveScores.upperFilled) {
            setFiveScores({
                ...fiveScores,
                fiveOfKind: sum,
                fiveOfKindSaved: true,
                total: fiveScores.sum + fiveScores.pair + fiveScores.twoPair + fiveScores.threeOfKind + fiveScores.fourOfKind + sum + fiveScores.smallStraight + fiveScores.largeStraight + fiveScores.full + fiveScores.chance
            })
            nextTurn();
        }
    }

    const onePlStyle = {
        background: queue === 1 ? "dodgerblue" : "transparent",
    }
    const twoPlStyle = {
        display: playersArray.length < 2 ? "none" : "",
        background: queue === 2 ? "dodgerblue" : "transparent",
    }
    const threePlStyle = {
        display: playersArray.length < 3 ? "none" : "",
        background: queue === 3 ? "dodgerblue" : "transparent",
    }
    const fourPlStyle = {
        display: playersArray.length < 4 ? "none" : "",
        background: queue === 4 ? "dodgerblue" : "transparent",
    }
    const fivePlStyle = {
        display: playersArray.length < 5 ? "none" : "",
        background: queue === 5 ? "dodgerblue" : "transparent",
    }

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr className="turn-mark">
                        <td className="turn-mark"></td>
                        <td className="turn-mark" style={onePlStyle}>{queue === 1 ? "V" : ""}</td>
                        <td className="turn-mark" style={twoPlStyle}>{queue === 2 ? "V" : ""}</td>
                        <td className="turn-mark" style={threePlStyle}>{queue === 3 ? "V" : ""}</td>
                        <td className="turn-mark" style={fourPlStyle}>{queue === 4 ? "V" : ""}</td>
                        <td className="turn-mark" style={fivePlStyle}>{queue === 5 ? "V" : ""}</td>
                    </tr>
                    <tr>
                        <td className="blank-cell"></td>
                        <td style={onePlStyle}>{playersArray[0]}</td>
                        <td style={twoPlStyle}>{playersArray[1]}</td>
                        <td style={threePlStyle}>{playersArray[2]}</td>
                        <td style={fourPlStyle}>{playersArray[3]}</td>
                        <td style={fivePlStyle}>{playersArray[4]}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>I</td>
                        <td style={onePlStyle} onClick={() => acesCheck(1)}>{oneScores.acesSaved ? oneScores.aces : ""}</td>
                        <td style={twoPlStyle} onClick={() => acesCheck(2)}>{twoScores.acesSaved ? twoScores.aces : ""}</td>
                        <td style={threePlStyle} onClick={() => acesCheck(3)}>{threeScores.acesSaved ? threeScores.aces : ""}</td>
                        <td style={fourPlStyle} onClick={() => acesCheck(4)}>{fourScores.acesSaved ? fourScores.aces : ""}</td>
                        <td style={fivePlStyle} onClick={() => acesCheck(5)}>{fiveScores.acesSaved ? fiveScores.aces : ""}</td>
                    </tr>
                    <tr>
                        <td>II</td>
                        <td style={onePlStyle} onClick={() => twosCheck(1)}>{oneScores.twosSaved ? oneScores.twos : ""}</td>
                        <td style={twoPlStyle} onClick={() => twosCheck(2)}>{twoScores.twosSaved ? twoScores.twos : ""}</td>
                        <td style={threePlStyle} onClick={() => twosCheck(3)}>{threeScores.twosSaved ? threeScores.twos : ""}</td>
                        <td style={fourPlStyle} onClick={() => twosCheck(4)}>{fourScores.twosSaved ? fourScores.twos : ""}</td>
                        <td style={fivePlStyle} onClick={() => twosCheck(5)}>{fiveScores.twosSaved ? fiveScores.twos : ""}</td>
                    </tr>
                    <tr>
                        <td>III</td>
                        <td style={onePlStyle} onClick={() => threesCheck(1)}>{oneScores.threesSaved ? oneScores.threes : ""}</td>
                        <td style={twoPlStyle} onClick={() => threesCheck(2)}>{twoScores.threesSaved ? twoScores.threes : ""}</td>
                        <td style={threePlStyle} onClick={() => threesCheck(3)}>{threeScores.threesSaved ? threeScores.threes : ""}</td>
                        <td style={fourPlStyle} onClick={() => threesCheck(4)}>{fourScores.threesSaved ? fourScores.threes : ""}</td>
                        <td style={fivePlStyle} onClick={() => threesCheck(5)}>{fiveScores.threesSaved ? fiveScores.threes : ""}</td>
                    </tr>
                    <tr>
                        <td>IV</td>
                        <td style={onePlStyle} onClick={() => foursCheck(1)}>{oneScores.foursSaved ? oneScores.fours : ""}</td>
                        <td style={twoPlStyle} onClick={() => foursCheck(2)}>{twoScores.foursSaved ? twoScores.fours : ""}</td>
                        <td style={threePlStyle} onClick={() => foursCheck(3)}>{threeScores.foursSaved ? threeScores.fours : ""}</td>
                        <td style={fourPlStyle} onClick={() => foursCheck(4)}>{fourScores.foursSaved ? fourScores.fours : ""}</td>
                        <td style={fivePlStyle} onClick={() => foursCheck(5)}>{fiveScores.foursSaved ? fiveScores.fours : ""}</td>
                    </tr>
                    <tr>
                        <td>V</td>
                        <td style={onePlStyle} onClick={() => fivesCheck(1)}>{oneScores.fivesSaved ? oneScores.fives : ""}</td>
                        <td style={twoPlStyle} onClick={() => fivesCheck(2)}>{twoScores.fivesSaved ? twoScores.fives : ""}</td>
                        <td style={threePlStyle} onClick={() => fivesCheck(3)}>{threeScores.fivesSaved ? threeScores.fives : ""}</td>
                        <td style={fourPlStyle} onClick={() => fivesCheck(4)}>{fourScores.fivesSaved ? fourScores.fives : ""}</td>
                        <td style={fivePlStyle} onClick={() => fivesCheck(5)}>{fiveScores.fivesSaved ? fiveScores.fives : ""}</td>
                    </tr>
                    <tr>
                        <td>VI</td>
                        <td style={onePlStyle} onClick={() => sixesCheck(1)}>{oneScores.sixesSaved ? oneScores.sixes : ""}</td>
                        <td style={twoPlStyle} onClick={() => sixesCheck(2)}>{twoScores.sixesSaved ? twoScores.sixes : ""}</td>
                        <td style={threePlStyle} onClick={() => sixesCheck(3)}>{threeScores.sixesSaved ? threeScores.sixes : ""}</td>
                        <td style={fourPlStyle} onClick={() => sixesCheck(4)}>{fourScores.sixesSaved ? fourScores.sixes : ""}</td>
                        <td style={fivePlStyle} onClick={() => sixesCheck(5)}>{fiveScores.sixesSaved ? fiveScores.sixes : ""}</td>
                    </tr>
                    <tr className="bonus-row">
                        <td>BONUS</td>
                        <td style={onePlStyle}>{oneScores.bonus > 0 ? oneScores.bonus : 0}</td>
                        <td style={twoPlStyle}>{twoScores.bonus > 0 ? twoScores.bonus : 0}</td>
                        <td style={threePlStyle}>{threeScores.bonus > 0 ? threeScores.bonus : 0}</td>
                        <td style={fourPlStyle}>{fourScores.bonus > 0 ? fourScores.bonus : 0}</td>
                        <td style={fivePlStyle}>{fiveScores.bonus > 0 ? fiveScores.bonus : 0}</td>
                    </tr>
                    <tr className="sum-row">
                        <td>SUM</td>
                        <td style={onePlStyle}>{(oneScores.sum > 0) ? oneScores.sum : 0}</td>
                        <td style={twoPlStyle}>{(twoScores.sum > 0) ? twoScores.sum : 0}</td>
                        <td style={threePlStyle}>{(threeScores.sum > 0) ? threeScores.sum : 0}</td>
                        <td style={fourPlStyle}>{(fourScores.sum > 0) ? fourScores.sum : 0}</td>
                        <td style={fivePlStyle}>{(fiveScores.sum > 0) ? fiveScores.sum : 0}</td>
                    </tr>
                    <tr>
                        <td>Pair</td>
                        <td style={onePlStyle} onClick={() => pairCheck(1)}>{oneScores.pairSaved ? oneScores.pair : ""}</td>
                        <td style={twoPlStyle} onClick={() => pairCheck(2)}>{twoScores.pairSaved ? twoScores.pair : ""}</td>
                        <td style={threePlStyle} onClick={() => pairCheck(3)}>{threeScores.pairSaved ? threeScores.pair : ""}</td>
                        <td style={fourPlStyle} onClick={() => pairCheck(4)}>{fourScores.pairSaved ? fourScores.pair : ""}</td>
                        <td style={fivePlStyle} onClick={() => pairCheck(5)}>{fiveScores.pairSaved ? fiveScores.pair : ""}</td>
                    </tr>
                    <tr>
                        <td>2xPair</td>
                        <td style={onePlStyle} onClick={() => twoPairCheck(1)}>{oneScores.twoPairSaved ? oneScores.twoPair : ""}</td>
                        <td style={twoPlStyle} onClick={() => twoPairCheck(2)}>{twoScores.twoPairSaved ? twoScores.twoPair : ""}</td>
                        <td style={threePlStyle} onClick={() => twoPairCheck(3)}>{threeScores.twoPairSaved ? threeScores.twoPair : ""}</td>
                        <td style={fourPlStyle} onClick={() => twoPairCheck(4)}>{fourScores.twoPairSaved ? fourScores.twoPair : ""}</td>
                        <td style={fivePlStyle} onClick={() => twoPairCheck(5)}>{fiveScores.twoPairSaved ? fiveScores.twoPair : ""}</td>
                    </tr>
                    <tr>
                        <td>3X</td>
                        <td style={onePlStyle} onClick={() => threeOfKindCheck(1)}>{oneScores.threeOfKindSaved ? oneScores.threeOfKind : ""}</td>
                        <td style={twoPlStyle} onClick={() => threeOfKindCheck(2)}>{twoScores.threeOfKindSaved ? twoScores.threeOfKind : ""}</td>
                        <td style={threePlStyle} onClick={() => threeOfKindCheck(3)}>{threeScores.threeOfKindSaved ? threeScores.threeOfKind : ""}</td>
                        <td style={fourPlStyle} onClick={() => threeOfKindCheck(4)}>{fourScores.threeOfKindSaved ? fourScores.threeOfKind : ""}</td>
                        <td style={fivePlStyle} onClick={() => threeOfKindCheck(5)}>{fiveScores.threeOfKindSaved ? fiveScores.threeOfKind : ""}</td>
                    </tr>
                    <tr>
                        <td>4X</td>
                        <td style={onePlStyle} onClick={() => fourOfKindCheck(1)}>{oneScores.fourOfKindSaved ? oneScores.fourOfKind : ""}</td>
                        <td style={twoPlStyle} onClick={() => fourOfKindCheck(2)}>{twoScores.fourOfKindSaved ? twoScores.fourOfKind : ""}</td>
                        <td style={threePlStyle} onClick={() => fourOfKindCheck(3)}>{threeScores.fourOfKindSaved ? threeScores.fourOfKind : ""}</td>
                        <td style={fourPlStyle} onClick={() => fourOfKindCheck(4)}>{fourScores.fourOfKindSaved ? fourScores.fourOfKind : ""}</td>
                        <td style={fivePlStyle} onClick={() => fourOfKindCheck(5)}>{fiveScores.fourOfKindSaved ? fiveScores.fourOfKind : ""}</td>
                    </tr>
                    <tr>
                        <td>S straight</td>
                        <td style={onePlStyle} onClick={() => smallStraightCheck(1)}>{oneScores.smallStraightSaved ? oneScores.smallStraight : ""}</td>
                        <td style={twoPlStyle} onClick={() => smallStraightCheck(2)}>{twoScores.smallStraightSaved ? twoScores.smallStraight : ""}</td>
                        <td style={threePlStyle} onClick={() => smallStraightCheck(3)}>{threeScores.smallStraightSaved ? threeScores.smallStraight : ""}</td>
                        <td style={fourPlStyle} onClick={() => smallStraightCheck(4)}>{fourScores.smallStraightSaved ? fourScores.smallStraight : ""}</td>
                        <td style={fivePlStyle} onClick={() => smallStraightCheck(5)}>{fiveScores.smallStraightSaved ? fiveScores.smallStraight : ""}</td>
                    </tr>
                    <tr>
                        <td>L straight</td>
                        <td style={onePlStyle} onClick={() => largeStraightCheck(1)}>{oneScores.largeStraightSaved ? oneScores.largeStraight : ""}</td>
                        <td style={twoPlStyle} onClick={() => largeStraightCheck(2)}>{twoScores.largeStraightSaved ? twoScores.largeStraight : ""}</td>
                        <td style={threePlStyle} onClick={() => largeStraightCheck(3)}>{threeScores.largeStraightSaved ? threeScores.largeStraight : ""}</td>
                        <td style={fourPlStyle} onClick={() => largeStraightCheck(4)}>{fourScores.largeStraightSaved ? fourScores.largeStraight : ""}</td>
                        <td style={fivePlStyle} onClick={() => largeStraightCheck(5)}>{fiveScores.largeStraightSaved ? fiveScores.largeStraight : ""}</td>
                    </tr>
                    <tr>
                        <td>Full</td>
                        <td style={onePlStyle} onClick={() => fullCheck(1)}>{oneScores.fullSaved ? oneScores.full : ""}</td>
                        <td style={twoPlStyle} onClick={() => fullCheck(2)}>{twoScores.fullSaved ? twoScores.full : ""}</td>
                        <td style={threePlStyle} onClick={() => fullCheck(3)}>{threeScores.fullSaved ? threeScores.full : ""}</td>
                        <td style={fourPlStyle} onClick={() => fullCheck(4)}>{fourScores.fullSaved ? fourScores.full : ""}</td>
                        <td style={fivePlStyle} onClick={() => fullCheck(5)}>{fiveScores.fullSaved ? fiveScores.full : ""}</td>
                    </tr>
                    <tr>
                        <td>Chance</td>
                        <td style={onePlStyle} onClick={() => chanceCheck(1)}>{oneScores.chanceSaved ? oneScores.chance : ""}</td>
                        <td style={twoPlStyle} onClick={() => chanceCheck(2)}>{twoScores.chanceSaved ? twoScores.chance : ""}</td>
                        <td style={threePlStyle} onClick={() => chanceCheck(3)}>{threeScores.chanceSaved ? threeScores.chance : ""}</td>
                        <td style={fourPlStyle} onClick={() => chanceCheck(4)}>{fourScores.chanceSaved ? fourScores.chance : ""}</td>
                        <td style={fivePlStyle} onClick={() => chanceCheck(5)}>{fiveScores.chanceSaved ? fiveScores.chance : ""}</td>
                    </tr>
                    <tr>
                        <td>5X</td>
                        <td style={onePlStyle} onClick={() => fiveOfKindCheck(1)}>{oneScores.fiveOfKindSaved ? oneScores.fiveOfKind : ""}</td>
                        <td style={twoPlStyle} onClick={() => fiveOfKindCheck(2)}>{twoScores.fiveOfKindSaved ? twoScores.fiveOfKind : ""}</td>
                        <td style={threePlStyle} onClick={() => fiveOfKindCheck(3)}>{threeScores.fiveOfKindSaved ? threeScores.fiveOfKind : ""}</td>
                        <td style={fourPlStyle} onClick={() => fiveOfKindCheck(4)}>{fourScores.fiveOfKindSaved ? fourScores.fiveOfKind : ""}</td>
                        <td style={fivePlStyle} onClick={() => fiveOfKindCheck(5)}>{fiveScores.fiveOfKindSaved ? fiveScores.fiveOfKind : ""}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="sum-row">
                        <td className="total-cell">TOTAL</td>
                        <td style={onePlStyle}>{(oneScores.total > 0) ? oneScores.total : 0}</td>
                        <td style={twoPlStyle}>{(twoScores.total > 0) ? twoScores.total : 0}</td>
                        <td style={threePlStyle}>{(threeScores.total > 0) ? threeScores.total : 0}</td>
                        <td style={fourPlStyle}>{(fourScores.total > 0) ? fourScores.total : 0}</td>
                        <td style={fivePlStyle}>{(fiveScores.total > 0) ? fiveScores.total : 0}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default GameTable;