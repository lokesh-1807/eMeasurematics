var data = [

    {

        id: 10,

        name: "PARCEL1",

        sequence: 1,

        group: "Mumbai"

    },

    {

        id: 11,

        name: "PARCEL2",

        sequence: 2,

        group: "Mumbai"

    },

    {

        id: 13,

        name: "PARCEL3",

        sequence: 3,

        group: "Mumbai"

    },

    {

        id: 19,

        name: "PARCEL4",

        sequence: 4,

        group: "Delhi"

    },

    {

        id: 18,

        name: "PARCEL5",

        sequence: 5,

        group: "Delhi"

    },

    {

        id: 21,

        name: "PARCEL6",

        sequence: 6,

        group: "Kolkata"

    },

    {

        id: 12,

        name: "PARCEL7",

        sequence: 7,

        group: "Kolkata"

    },

    {

        id: 22,

        name: "PARCEL8",

        sequence: 8,

        group: "Kolkata"

    },

    {

        id: 23,

        name: "PARCEL9",

        sequence: 9,

        group: "Kolkata"

    },

    {

        id: 24,

        name: "PARCEL10",

        sequence: 10,

        group: "Mumbai"

    },

    {

        id: 25,

        name: "PARCEL11",

        sequence: 11,

        group: "Mumbai"

    },

    {

        id: 31,

        name: "PARCEL12",

        sequence: 12,

        group: "Mumbai"

    },

    {

        id: 34,

        name: "PARCEL13",

        sequence: 13,

        group: "Mumbai"

    },

    {

        id: 35,

        name: "PARCEL14",

        sequence: 14,

        group: "Delhi"

    },

    {

        id: 41,

        name: "PARCEL15",

        sequence: 15,

        group: "Delhi"

    },

    {

        id: 42,

        name: "PARCEL16",

        sequence: 16,

        group: "Delhi"

    },

    {

        id: 43,

        name: "PARCEL17",

        sequence: 17,

        group: "Delhi"

    },

    {

        id: 44,

        name: "PARCEL18",

        sequence: 18,

        group: "Kolkata"

    },

    {

        id: 53,

        name: "PARCEL19",

        sequence: 19,

        group: "Kolkata"

    },

    {

        id: 57,

        name: "PARCEL20",

        sequence: 20,

        group: "Kolkata"

    }

];

const loadData = () => {
    data.sort(function (a, b) {
        var data1 = a.group.toLowerCase();
        var data2 = b.group.toLowerCase();
        if (data1 < data2) {
            return -1;
        }
        if (data1 > data2) {
            return 1;
        }
        return 0;
    });
    const parcelContainer = document.getElementById("json-data");
    parcelContainer.innerHTML = "";
    var iteration = 0;
    for (const parcel of data) {
        const parcelElement = document.createElement("div");
        parcelElement.classList.add("parcel")
        if (parcel.group == "Mumbai") {
            parcelElement.classList.add("parcel-mumbai");
            parcelElement.innerText = iteration + 1;
        } else if (parcel.group == "Delhi") {
            parcelElement.classList.add("parcel-delhi");
            parcelElement.innerText = iteration + 1;
        } else {
            parcelElement.classList.add("parcel-kolkata");
            parcelElement.innerText = iteration + 1;
        }
        const parcelCard = document.createElement("div");
        parcelCard.classList.add("parcel-card");
        parcelCard.classList.add(parcel.group.toLowerCase().replace(" ", "-"));
        parcelCard.innerText = parcel.name;
        parcelElement.addEventListener("click", () => {
            selectParcel(parcel);
        });
        parcelContainer.appendChild(parcelElement);
        iteration++;
    }
}

const selectParcel = (parcel) => {
    const selectedParcelName = document.getElementById("selectedParcelName");
    if (selectedParcelName.innerText === parcel.name) {
        selectedParcelName.innerText = "";
        return;
    }
    selectedParcelName.innerText = parcel.name
    return;
}

const addParcelAfter = () => {
    const selectedParcelName = document.getElementById("selectedParcelName");
    if (selectedParcelName.innerText == "") {
        alert("Please select a parcel")
    } else {
        const parcelName = document.getElementById("parcelName").value;
        const group = document.getElementById("groupLocation").value;
        var index = data.findIndex(function (element) {
            return element.name === selectedParcelName.innerText;
        });
        let newObject = {
            id: generateRandomId(),
            name: parcelName,
            sequence: index + 2,
            group: group
        }
        data.splice(index + 1, 0, newObject);
        loadData();
    }
}

const addParcelBefore = () => {
    const selectedParcelName = document.getElementById("selectedParcelName");
    if (selectedParcelName.innerText == "") {
        alert("Please select a parcel")
    } else {
        const parcelName = document.getElementById("parcelName").value;
        const group = document.getElementById("groupLocation").value;
        var index = data.findIndex(function (element) {
            return element.name === selectedParcelName.innerText;
        });
        let newObject = {
            id: generateRandomId(),
            name: parcelName,
            sequence: index + 2,
            group: group
        }
        data.splice(index - 1, 0, newObject);
        loadData();
    }
}

const replaceParcel = () => {
    const selectedParcelName = document.getElementById("selectedParcelName");
    if (selectedParcelName.innerText == "") {
        alert("Please select a parcel")
    } else {
        const parcelName = document.getElementById("parcelName").value;
        const group = document.getElementById("groupLocation").value;
        var index = data.findIndex(function (element) {
            return element.name === selectedParcelName.innerText;
        });
        let newObject = {
            id: generateRandomId(),
            name: parcelName,
            sequence: index + 2,
            group: group
        }
        data.splice(index, 1, newObject);
        loadData();
    }
}

const deleteParcel = () => {
    const selectedParcelName = document.getElementById("selectedParcelName");
    if (selectedParcelName.innerText == "") {
        alert("Please select a parcel")
    } else {
        const parcelName = document.getElementById("parcelName").value;
        const group = document.getElementById("groupLocation").value;
        var index = data.findIndex(function (element) {
            return element.name === selectedParcelName.innerText;
        });
        data.splice(index, 1);
        loadData();
    }
}

const showFinal = () => {
    console.log({data})
}

function generateRandomId() {
    var randomId = Math.floor(Math.random() * 90) + 10; // Generate a random two-digit number

    // Check if the generated ID already exists in the array
    var idExists = data.some(function (element) {
        return element.id === randomId;
    });
    if (idExists) {
        return generateRandomId(); // If ID exists, recursively generate a new one
    } else {
        return randomId; // Return the generated ID if it doesn't exist in the array
    }
}
