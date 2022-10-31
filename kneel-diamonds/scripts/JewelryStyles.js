import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener("change", (event) => {
    if (event.target.name === "styles") {
      setStyle(parseInt(event.target.value));
    }
  });


export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const liFunc = (array) => {
        let liarray= `<li><input type="radio" name="styles" value="${array.id}" />${array.style}</li>`
        return liarray
    }
    
    
    const listItemsArray = styles.map(liFunc)
    

    // Join all of the strings in the array into a single string
    
    
    html += listItemsArray.join("")
    
    html += "</ul>"
    return html
}

