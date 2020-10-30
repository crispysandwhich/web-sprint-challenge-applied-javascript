// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerContainer = document.querySelector('.header-container');

function Header() {
    
    const header = document.createElement('div');
    header.classList.add('header')

    const spanDate = document.createElement('span')
    spanDate.classList.add('date')
    spanDate.textContent = 'March 28,2020'
    header.append(spanDate)

    const h1 = document.createElement('h1')
    h1.textContent = 'Lambda Times'
    header.append(h1)

    const spanTemp = document.createElement('span')
    spanTemp.classList.add('temp')
    spanTemp.textContent = '98'
    header.append(spanTemp)

    return header
}

headerContainer.append(Header())