//! Global Variables
const electronicsLink = document.getElementById("electronics");
const jeweleryLink = document.getElementById("jewelery");
const menclothingLink = document.getElementById("mens-clothing");
const womenclothingLink = document.getElementById("womens-clothing");
const display = document.getElementById("display");
const baseURL = `https://fakestoreapi.com/products/1`;

//! Functions
const fakeStore = async (endpoint) => {
    try {
        const response = await fetch(`${baseURL}/${endpoint}`);
        const data = await response.json();
        return data;
    } catch {
        (err => console.error(err));
    };
};

//! Event Listeners
electronicsLink.addEventListener('click', e => {
    e.fakeStore(electronics);
});
jeweleryLink.addEventListener('click', e => {
    e.fakeStore(jewelery);
});
menclothingLink.addEventListener('click', e => {
    e.fakeStore(mens-clothing);
});
womenclothingLink.addEventListener('click', e => {
    e.fakeStore(womens-clothing);
});


function onPageLoad() {
    const endpoint = 'allData?sort=ascending';
    fakeStore(endpoint)
        .then(data => {
            console.log('All Data (Ascending Order):', data);
        })
        .catch(error => {
            console.error('Failed to fetch all data:', error);
        });
};

window.onload = onPageLoad;