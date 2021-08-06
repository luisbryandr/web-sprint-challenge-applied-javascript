import axios from "axios";

const Card = (article) => {
  const cardDiv = document.createElement('div')
  cardDiv.className = 'card'
  document.body.appendChild(cardDiv)

  const headlineDiv = document.createElement('div')
  headlineDiv.className = 'headline'
  headlineDiv.textContent = article.headline
  cardDiv.appendChild(headlineDiv)

  const authorDiv = document.createElement('div')
  authorDiv.className= 'author'
  cardDiv.appendChild(authorDiv)

  const imageCont = document.createElement('div')
  imageCont.className = 'img-container'
  authorDiv.appendChild(imageCont)


  const image = document.createElement('img')
  image.setAttribute('src',`${article.authorPhoto}`)
  imageCont.appendChild(image)

  const span = document.createElement('span')
  span.textContent = `By ${article.authorName}`
  authorDiv.appendChild(span)

  cardDiv.addEventListener('click', event =>{
    console.log(articleobject.headline)
  })
  

  return cardDiv
  
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  const cssSelect = document.querySelectorAll(selector)
  axios.get('http://localhost:5000/api/articles')
  .then((response) => {
    // deal with the response data in here
   const jsCard = Card(response.data.articles.javascript)
   jsCard.forEach(element => {
     cssSelect.appendChild(Card(element))
   });
    
  })
  .catch((err) => {
     console.log(err) // deal with the error in here
 
 
 
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  })
}

export { Card, cardAppender }
