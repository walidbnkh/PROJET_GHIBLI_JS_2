




// URL de l'API Studio Ghibli
const API_GHIBLI = "https://ghibliapi.vercel.app/films";

fetch(API_GHIBLI) // Utilisation de la fonction fetch pour effectuer une requête
  .then((RESULTAT) => {
    if (!RESULTAT.ok) {
      // Vérifier si la requête a réussi
      throw new Error(`Échec de la requête,  statut : ${RESULTAT.status}`);
    }

    return RESULTAT.json(); // JSON
  })
  .then((data) => {

      // Function to create a card and append it to the container
  function createCard(imageUrl, originalTitle, title , producer ,director) {
    // Create card element
    var card = document.createElement('div');
    card.className = 'card';

    // Create image element
    var img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Card Image';

    // Create card content element
    var cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    // Create original title element
    var originalTitleElement = document.createElement('h2');
    originalTitleElement.innerHTML =  originalTitle ;


    var dir = document.createElement('h3');
    dir.innerHTML =  director ;

    

    // Create title element
    var titleElement = document.createElement('span');
    titleElement.className = 'titleE'
    titleElement.innerHTML =  title ;
   
    var btn_title_container = document.createElement("div")
    btn_title_container.className = 'btn_title';

    // Create "Show Details" button
    var button = document.createElement('button');
    button.className = 'btn';
    button.innerHTML = 'VIEW';
    button.onclick = function() {
      // You can add your logic to show more details here
      alert(` film director is :${director}`);
    };

    // Append elements to card content
    cardContent.appendChild(originalTitleElement);
    cardContent.appendChild(dir)
    btn_title_container.appendChild(button);
    btn_title_container.appendChild(titleElement);
    cardContent.appendChild(btn_title_container)
    // Append elements to card
    card.appendChild(img);
    card.appendChild(cardContent);

    // Append card to container
    document.getElementById('MY_FILMS_SECTION').appendChild(card);
  }

  data.map((film)=>{
    createCard(film.image ,film.title,film.original_title,film.producer,film.director )

 


  })

  console.log(data)


  })
  .catch((erreur) => {
    console.error(`Erreur lors de la récupération  : ${erreur.message}`);
  });