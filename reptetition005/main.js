const osArray = ["Linux", "Windows 10", "Windows 11"];
const processors = [
    {
        brand: "Intel",
        name: "Core i9 13900K",
        cores: 24,
        price: 589
    },
    {
        brand: "Intel",
        name: "Core i9 13900KF",
        cores: 24,
        price: 564
    },
    {
        brand: "Intel",
        name: "Core i7 13700K",
        cores: 16,
        price: 409
    },
];

const graphicsCards = [
    {
        brand: "Nvidia",
        name: "NVIDIA GeForce RTX 4080",
        memory: 16,
        price: 1199
    },
    {
        brand: "Nvidia",
        name: "NVIDIA GeForce RTX 4090",
        memory: 24,
        price: 1599
    },
    {
        brand: "Nvidia",
        name: "NVIDIA GeForce RTX 4070",
        memory: 24,
        price: 599
    }
];

const memories = [
    {
        brand: "Corsair",
        name: "VENGEANCE® RGB",
        size: 32,
        price: 114.99
    },
    {
        brand: "Corsair",
        name: "DOMINATOR® PLATINUM RGB",
        size: 32,
        price: 184.99
    }
];

const storages = [
    {
        brand: "Samsung",
        name: "860 EVO SATA 2.5 SSD",
        size: 500,
        price: 89.99,
    },
    {
        brand: "Samsung",
        name: "990 PRO PCIe®4.0 NVMe™ SSD",
        size: 1000,
        price: 99.99,
    }, 
];


/// uhgiushgdjn real code

function getRandom(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

function getRandomComputer(){
    const processor = getRandom(processors);
    const memory = getRandom(memories);
    const storage = getRandom(storages);
    const graphics = getRandom(graphicsCards);
    const os = getRandom(osArray);
    
    
    const totalPrice = processor.price + memory.price + storage.price + graphics.price;

    return {
        processor,
        memory,
        storage,
        graphics,
        os,
        totalPrice
    }
}
console.log(JSON.stringify(getRandomComputer(), ",", 2))
console.log("-".repeat(100))

// highestPCprice 

function getHighestComputer() {
    const processorHighest = processors.reduce(function (acc, curr) {
        return curr.price > acc.price ? curr : acc;
    });

    const memoryHighest = memories.reduce(function (acc, curr) {
        return curr.price > acc.price ? curr : acc;
    });

    const storageHighest = storages.reduce(function (acc, curr) {
        return curr.price > acc.price ? curr : acc;
    });

    const graphicsCardHighest = graphicsCards.reduce(function (acc, curr) {
        return curr.price > acc.price ? curr : acc;
    });

    const osHighest = osArray[2];

    const highestPcPrice =
        processorHighest.price +
        memoryHighest.price +
        storageHighest.price +
        graphicsCardHighest.price;

    return {
        processorHighest,
        memoryHighest,
        storageHighest,
        graphicsCardHighest,
        osHighest,
        highestPcPrice,
    };
}
console.log(JSON.stringify(getHighestComputer(), " ", 2 ))
console.log("-".repeat(100))

//  highest processor core

function getHighestCore() {
    const processorCore = processors.reduce(function(acc, curr){
        return curr.cores > acc.cores ? curr : acc 
    });
    return processorCore
}
console.log(JSON.stringify(getHighestCore(), "," , 2))



// 

function getLowPC() {
    let pc;
    do {
        pc = getRandomComputer();
    } while (pc.totalPrice >= 1600);
    return pc;
}

console.log(JSON.stringify(getLowPC(), null, 2));
console.log("-".repeat(100))

// 

function getHighestMemoryAndLowestCore() {
    const graphicsMemory = graphicsCards.reduce(function(acc, curr){
        return curr.memory > acc.memory ? curr : acc
    })
    const processorCore = processors.reduce(function(acc, curr){
        return curr.cores > acc.cores ? acc : curr
    })
    return {
        graphicsMemory,
        processorCore,
    }
}
console.log(JSON.stringify(getHighestMemoryAndLowestCore(), ",", 2))
console.log("-".repeat(100))

// 
function getHighestEverything(){
    const graphicsMemory = graphicsCards.reduce(function(acc, curr){
        return curr.memory > acc.memory ? curr : acc
    })
    const processorCore = processors.reduce(function(acc, curr){
        return curr.cores > acc.cores ? curr: acc
    })
    const storageSize = storages.reduce(function(acc, curr){
        return curr.size > acc.size ? curr : acc
    })
    return{
        graphicsMemory,
        processorCore,
        storageSize,
    }
}
console.log(JSON.stringify(getHighestEverything(), ",", 2))