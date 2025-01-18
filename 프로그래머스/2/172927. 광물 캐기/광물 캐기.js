const mineralStrength = {
    stone: [1,1,1],
    iron: [1,1,5],
    diamond: [1,5,25]
}

const pickIndex = {
    diamond: 0,
    iron: 1,
    stone: 2,
}

function getRequiredEnergy(pickType, minerals) {
    return minerals.reduce((acc, mineral) => acc + mineralStrength[mineral][pickType], 0)
}

function useState(initState) {
    let state = initState;
    
    const get = () => state;
    
    const set = (newState) => state = typeof newState === 'function' ? newState(state) : newState;
    
    return [get, set];
}

function solution(picks, minerals) {
    const accPicks = picks.reduce((acc, pick) => acc + pick * 5, 0);
    minerals = minerals.slice(0, accPicks);
    const [getMinEnergy, setMinEnergy] = useState(0);
    const [getPicks, setPicks] = useState([...picks]);
    const [getChunks, setChunks] = useState(Array.from({
        length: Math.ceil(minerals.length / 5),
    }, (_, i) => ({
        id: i,
        requiredEnergy: 0,
        minerals: []
    })));
    
    minerals.forEach((mineral, i) => {
        const chunkIndex = Math.floor(i / 5);
        
        setChunks((prev) => prev.map((chunk) => {
            if (chunk.id !== chunkIndex) return chunk;
            
            return {
                ...chunk,
                requiredEnergy: chunk.requiredEnergy + getRequiredEnergy(2, [mineral]),
                minerals: [...chunk.minerals, mineral]
            }
        })); 
    });
    
    setChunks((prev) => {
        return prev.sort((a, b) => b.requiredEnergy - a.requiredEnergy)
    });
    
    getChunks().forEach((chunk) => {
        if (chunk.requiredEnergy > 25 || chunk.requiredEnergy === 25 && chunk.minerals.length === 1) {
            for (let i of [0,1,2]) {
                if (getPicks()[i] > 0) {
                    setPicks((prevPicks) => prevPicks.map((pick, pickIndex) => {
                        if (i !== pickIndex) return pick;

                        return --pick;
                    }));

                    setMinEnergy((prev) => prev + getRequiredEnergy(i, chunk.minerals));

                    break;
                }
            }
        } else if (chunk.requiredEnergy > 5 || chunk.requiredEnergy === 5 && chunk.minerals.length === 1) {
            for (let i of [1,0,2]) {
                if (getPicks()[i] > 0) {
                    setPicks((prevPicks) => prevPicks.map((pick, pickIndex) => {
                        if (i !== pickIndex) return pick;

                        return --pick;
                    }));

                    setMinEnergy((prev) => prev + getRequiredEnergy(i, chunk.minerals));

                    break;
                }
            }
        } else {
            for (let i of [2,1,0]) {
                if (getPicks()[i] > 0) {
                    setPicks((prevPicks) => prevPicks.map((pick, pickIndex) => {
                        if (i !== pickIndex) return pick;

                        return --pick;
                    }));

                    setMinEnergy((prev) => prev + getRequiredEnergy(i, chunk.minerals));

                    break;
                }
            }
            
        }
    })
    
    return getMinEnergy();
}