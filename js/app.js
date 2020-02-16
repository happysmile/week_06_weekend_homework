document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const addForm = document.querySelector('#add-a-movie');

  // define function to create a new list item
  const addMovie = function(event) {
    event.preventDefault();

    // create new list item
    const newListItem = document.createElement('li');

    // create html elements with the contents of the form
    const title = document.createElement('h2');
    title.classList.add("title");
    title.textContent = event.target.title.value;

    const director = document.createElement('p');
    director.classList.add("director");
    director.textContent = "Director: " + event.target.director.value;

    const year = document.createElement('p');
    year.classList.add("year");
    year.textContent = "Year: " + event.target.year.value;

    const genre = document.createElement('p');
    genre.classList.add("genre");
    genre.textContent = "Genre: " + event.target.genre.value;

    const rating = document.createElement('p');
    rating.classList.add("rating");
    rating.textContent = "Rating: "+ event.target.rating.value;

    // appent the elements to the list item
    newListItem.appendChild(title);
    newListItem.appendChild(director);
    newListItem.appendChild(genre);
    newListItem.appendChild(year);
    newListItem.appendChild(rating);


    // append the list item to the list
    const list = document.querySelector('#films-list');
    list.appendChild(newListItem);

    // clears up the form fields after submit
    event.target.reset();
  };

  // calls the addEntry function on submit
  addForm.addEventListener('submit', addMovie);

  // delete form
  const deleteForm = document.querySelector('#delete-all');

  // define function that deletes all list items
  const deleteAllListItems = function(event) {
    event.preventDefault();
    // select the list
    const list = document.querySelector('#films-list');
    // delete all list items from list
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  };

  // calls the deleteAllListItems function when the delete button is pressed
  deleteForm.addEventListener('submit', deleteAllListItems);

  // // sort the list by year to start with
  // const sortFormBy = function (){
  //   const dates = document.querySelectorAll('year');
  // }
  //
  // //calls the sort function when the Sort button is pressed
  // sortForm.addEventListener('submit', sortItems);

})
