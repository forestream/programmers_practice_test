function React() {
    let renderCount = 0;
    
    let renderer;
    const rendererQueue = [];
    const enqueueRenderer = (renderer) => rendererQueue.push(renderer);
    const dequeueRenderer = () => rendererQueue.shift();
    
    const states = [];
    let stateIndex = 0;

    function useState(initState) {
        const currentIndex = stateIndex++;
        
        if (renderCount === 0) states.push(typeof initState === 'function' ? initState() : initState);
        
        const setState = (newState) => {
            states[currentIndex] = typeof newState === 'function' ? newState(states[currentIndex]) : newState;
            
            enqueueRenderer(renderer);
        }
        
        return [states[currentIndex], setState];
    }    
    
    const effects = [];
    let effectIndex = 0;
    const effectsQueue = [];
    const enqueueEffect = (effect) => effectsQueue.push(effect);
    const dequeueEffect = () => effectsQueue.shift();
    
    function useEffect(callback, deps) {
        const currentIndex = effectIndex++;
        
        if (renderCount === 0) {
            effects[currentIndex] = [callback, deps];
            enqueueEffect(effects[currentIndex][0]);
            return;
        }
        
        const prevDeps = effects[currentIndex][1];
        const hasSameDeps = Array.isArray(prevDeps) && prevDeps.every((prevDep, i) => prevDep === deps[i]);
        
        if (hasSameDeps) return;
        
        effects[currentIndex] = [callback, deps];
        enqueueEffect(effects[currentIndex][0]);
    }
    
    function render(newRenderer) {
        if (!renderer) {
            renderer = () => {
                console.log(states);
                stateIndex = 0;
                effectIndex = 0;
                newRenderer();
            }
        }
        
        enqueueRenderer(renderer);
        
        while (rendererQueue.length) {
            dequeueRenderer()();
            
            while (effectsQueue.length) {
                dequeueEffect()();
            }
            
            renderCount++;
        }
        
        return states;
    }
    
    return { render, useState, useEffect };
}

const MINERAL_STRENGTH = {
    stone: [1,1,1],
    iron: [1,1,5],
    diamond: [1,5,25]
}

function getRequiredEnergy(pickType, minerals) {
    return minerals.reduce((acc, mineral) => acc + MINERAL_STRENGTH[mineral][pickType], 0)
}

function main(initPicks, initMinerals, useState, useEffect) {
    const totalPicks = initPicks.reduce((acc, pick) => acc + pick * 5, 0);
    const maxMinerals = initMinerals.slice(0, totalPicks);
    const [minEnergy, setMinEnergy] = useState(0);
    const [picks, setPicks] = useState([...initPicks]);
    const [chunks, setChunks] = useState(
        Array.from({
            length: Math.ceil(maxMinerals.length / 5),
        }, (_, i) => ({
            id: i,
            requiredEnergy: 0,
            minerals: []
        }))
    );
    
    useEffect(() => {
        maxMinerals.forEach((mineral, i) => {
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
    
        setChunks((prev) => prev.sort((a, b) => b.requiredEnergy - a.requiredEnergy));
    }, []);
    
    useEffect(() => {
        chunks.forEach((chunk) => {
            if (chunk.requiredEnergy > 25 || chunk.requiredEnergy === 25 && chunk.minerals.length === 1) {
                for (let i of [0,1,2]) {
                    if (picks[i] > 0) {
                        setPicks((prevPicks) => [
                            ...prevPicks.slice(0, i), 
                            --picks[i], 
                            ...prevPicks.slice(i + 1, prevPicks.length)
                        ]);

                        setMinEnergy((prev) => prev + getRequiredEnergy(i, chunk.minerals));

                        break;
                    }
                }
            } else if (chunk.requiredEnergy > 5 || chunk.requiredEnergy === 5 && chunk.minerals.length === 1) {
                for (let i of [1,0,2]) {
                    if (picks[i] > 0) {
                        setPicks((prevPicks) => [
                            ...prevPicks.slice(0, i), 
                            --picks[i], 
                            ...prevPicks.slice(i + 1, prevPicks.length)
                        ]);

                        setMinEnergy((prev) => prev + getRequiredEnergy(i, chunk.minerals));

                        break;
                    }
                }
            } else if (chunk.requiredEnergy > 0) {
                for (let i of [2,1,0]) {
                    if (picks[i] > 0) {
                        setPicks((prevPicks) => [
                            ...prevPicks.slice(0, i), 
                            --picks[i], 
                            ...prevPicks.slice(i + 1, prevPicks.length)
                        ]);

                        setMinEnergy((prev) => prev + getRequiredEnergy(i, chunk.minerals));

                        break;
                    }
                }

            }
        });
    }, [chunks])
    
    return minEnergy;
}

function solution(picks, minerals) {
    const {useState, render, useEffect} = React();
    
    const answer = render(() => main(picks, minerals, useState, useEffect));
    
    return answer[0];
}