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

// დაწერეთ ფუნქცია, რომელიც შემთხვევითობის პრინციპით (random) დააგენერირებს arrays -ს სადაც იქნება object -ები.

    
let getRandom = Math.floor(Math.random() * 3 ) 
let randomNum = Math.floor(Math.random()* 2 )


let arrayRandom = osArray[getRandom]
let processorsRandom = processors[getRandom]
let graphicsRandom = graphicsCards[getRandom]
let memoriesRandom = memories[randomNum]
let storagesRandom = storages[randomNum]

console.log("total price: " +  Math.floor(processors[getRandom].price + graphicsCards[getRandom].price + memories[randomNum].price + storages[randomNum].price))

function randomComputer (user){
    console.log(user)
}


randomComputer(`os: ${arrayRandom}`)
randomComputer(processorsRandom)
randomComputer(graphicsRandom)
randomComputer(memoriesRandom)
randomComputer(storagesRandom)

console.log("-".repeat(100))


// ყველაზე ძვირიანი კომპიუტერი


let mostProcessor = processors[0]
let mostExpGraphicsCard = graphicsCards[1]
let mostMemories = memories[1]
let mostStorages = storages[1]

function printExpPC (pc) {
    console.log(pc)
}

console.log("Most expensive PC")
console.log("total price: " + Math.floor(mostProcessor.price + mostExpGraphicsCard.price + mostMemories.price + mostStorages.price))



printExpPC(mostProcessor)
printExpPC(mostExpGraphicsCard)
printExpPC(mostMemories)
printExpPC(mostStorages)

console.log("-".repeat(100))

// ყველაზე მეტ ბირთვიანი პროცესორი რომელ კომპიუტერს აქვს (processor.core)

let maxCore = processors[0];

for (let i = 1; i < processors.length; i++) {
  if (processors[i].cores > maxCore.cores) {
    maxCore = processors[i];
  }
}

console.log("Processor with the most cores:"); 
console.log(`${maxCore.cores} cores.`);

console.log("-".repeat(100))



// საშუალო ფასი აწყობილი კომპუტერების 



function randomComputer (user){
    console.log(user)
    
}


randomComputer(`os: ${arrayRandom}`)
randomComputer(processorsRandom)
randomComputer(graphicsRandom)
randomComputer(memoriesRandom)
randomComputer(storagesRandom)

console.log("-".repeat(100))

// იპოვეთ კომპიუტერი, რომელსაც ყველაზე დიდი ვიდეო მეხსიერება აქვს (graphics.memory), მაგრამ ყველაზე ნაკლები პროცესორის ბირთვი (processor.core)

let maxGraphicsCard = graphicsCards[0]

for (let i = 1; i < graphicsCards.length; i++) {
  if (graphicsCards[i].memory > maxGraphicsCard.memory) {
    maxGraphicsCard = graphicsCards[i];
  }
}

let minCore = processors[0];

for (let i = 1; i < processors.length; i++) {
  if (processors[i].cores < minCore.cores) {
    minCore = processors[i];
  }
}

console.log(`Maximum graphicscard memory is ${maxGraphicsCard.memory} with lowest core which is ${minCore.cores}`)

console.log("-".repeat(100))


// იპოვეთ კომპიუტერი, რომელსაც ყველაზე დიდი ვიდეო მეხსიერება აქვს, ყველაზე მეტი ბირთვი აქვს და ყველაზე დიდი მყარი მეხსერება (storage.size)


let maxStorages = storages[0]

for( i = 1; i < storages.length; i++){
    if (storages[i].size > maxStorages.size){
        maxStorages = storages[i]
    }
}
console.log(`Maximum size in storages is ${maxStorages.size}`)