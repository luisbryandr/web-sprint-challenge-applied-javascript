const Header = (title, date, temp) => {
  
  const div = document.createElement('div')
  div.className = 'header'

  const span = document.createElement('span')
  span.className = 'date'
  span.textContent = date

  const heading = document.createElement('h1')
  heading.textContent = title

  const secondSpan = document.createElement('span') 
  secondSpan.className = 'temp'
  secondSpan.textContent = temp

  document.body.appendChild(div)
  div.appendChild(span)
  div.appendChild(heading)
  div.appendChild(secondSpan)

  return div 
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

}

console.log('yo')

const headerAppender = (selector) => {
    const cssSelect = document.querySelectorAll(selector)
    cssSelect.forEach(element => {element.appendChild(Header())
    });






  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
