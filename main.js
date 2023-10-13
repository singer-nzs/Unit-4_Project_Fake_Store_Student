//! Global Variables
const electronicsLink = document.getElementById("electronics");
const jeweleryLink = document.getElementById("jewelery");
const menclothingLink = document.getElementById("mens-clothing");
const womenclothingLink = document.getElementById("womens-clothing");
const display = document.getElementById("display");
const baseURL = `https://fakestoreapi.com/products/1`;

//! Functions
async function fakeStore (endpoint) {
    try {
    const response = await fetch(`${baseURL}/${endpoint}`);
        console.log(response);
    } catch {
        (err => console.error(err));
    };
};