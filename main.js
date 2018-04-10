// Define the database as an object
const HomeInventoryDatabase = {

}

HomeInventoryDatabase.gifts = [] //key (gifts) whose value is a blank [array]
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.antiques = []

//gifts
//   .gifts is adding a property to the object (ex.skillets)
const skillets = {
    name: "Iron Skillets",
    location: "Oven Plate Warming Drawer",
    description: "I love my iron skillets because they were given to me from family members.",
}
const woodPieces = {
    name: "Wood Pieces",
    location: "Kitchen Display Shelves",
    description: "My wooden vase and basket are special to me because they were a gift from my grandfather."   
}
const postcards = {
    name: "Postcards",
    location: "Leather-bound Journal",
    description: "When I'm travelling I send out postcards to my friends and family. They in turn send them to me when they are travelling."
}
const heartPendant = {
    name: "Mom's Gold Heart Pendant",
    location: "Jewelry Box",
    description: "My dad gifted my mom the pendant and necklace years ago. She loves it but doesn't wear it anymore."
}
HomeInventoryDatabase.gifts.push(skillets) //adding object to "gifts" array
HomeInventoryDatabase.gifts.push(woodPieces)
HomeInventoryDatabase.gifts.push(postcards)
HomeInventoryDatabase.gifts.push(heartPendant)

//crafts
const galaxyPainting = {
    name: "Black Galaxy",
    location: "Living Room Wall",
    description: "Kayla, my best friend, paints in her spare time. She panted a black galazy with splashes of purple and teal."
}
const emmanuelePainting = {
    name: "The Persecution of Emmanuele",
    location: "Living Room Wall",
    description: "My favorite artist painted an abstract with the idea of a joyous woman being discussed negatively."
}
const cubanPainting = {
    name: "Red Car in Cuba",
    location: "Kitchen Wall",
    description: "My mother visited Cuba and bought a painting by a street artist."
}

HomeInventoryDatabase.crafts.push(galaxyPainting)
HomeInventoryDatabase.crafts.push(emmanuelePainting)
HomeInventoryDatabase.crafts.push(cubanPainting)

//antiques
const stetson = {
    name: "Papaw's Stetson",
    location: "Original Stetson Box, closet",
    description: "When my papaw heard I moved to Nashville he said I'd need a cowboy hat. He sent me his."
}
const watchFace = {
    name: "Maternal Great-grandmother's Watch Face",
    location: "Paternal Great-grandmother's Jewelry Box",
    description: "My mother and I were sorting through old boxes of my grandmother's. We found her mother's watch face. I decided to keep it to one day have it cleaned and repaired."
}
const owls = {
    name: "Grandma's Owl Statues",
    location: "Dresser Top",
    description: "My grandmother loved owls and collected statues of them. When she died, I asked to keep two."
}

HomeInventoryDatabase.antiques.push(stetson)
HomeInventoryDatabase.antiques.push(watchFace)
HomeInventoryDatabase.antiques.push(owls)

//console.log(HomeInventoryDatabase) //Arrays are present!

// Persist the database to localStorage (localStorageKey is what we call it in local storage--dev tools)
const saveDatabase = function (databaseObject, localStorageKey) {
//JSON stringify is how local storage can read the data
    const stringifiedDatabase = JSON.stringify(databaseObject)
    //Create a key in local storage, and store the string version of your inventory database as the value
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(HomeInventoryDatabase, "HomeInventory")

//Create DOM components
const inventoryEl = document.querySelector("#my-inventory")
//HomeInventoryDatabase is an object. Also objects:  furniture: [], crafts: [], electronics: []       type used below is referencing one of those objects. store the current array in 'currentTypeArray'.   Element will store the current item being iterated over

//FYI never declare functions inside a for loop

for (let type in HomeInventoryDatabase) {
    const currentTypeArray = HomeInventoryDatabase[type]
//forEach is used on arrays
    currentTypeArray.forEach(itemInArray => {
        const itemSection = document.createElement("section")

        for (let prop in itemInArray) {
            //prop = name, location, description
            const pComponent = document.createElement("p")
            pComponent.textContent = itemInArray[prop]
            itemSection.appendChild(pComponent)
            inventoryEl.appendChild(itemSection)
        }

//Long way to write 'p' for each element
        // const nameP = document.createElement("p")
        // nameP.textContent = itemInArray.name
        // itemSection.appendChild(nameP)

        // const locationP = document.createElement("p")
        // nameP.textContent = itemInArray.name
        // itemSection.appendChild(nameP)
        
        // const descP = document.createElement("p")
        // nameP.textContent = itemInArray.name
        // itemSection.appendChild(nameP)
        
        inventoryEl.appendChild(itemSection)
    });
}