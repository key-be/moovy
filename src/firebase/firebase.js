import { initializeApp } from "firebase/app";
//Importamos Firestrore
import { 
  getFirestore, 
  collection, 
  getDocs, 
  doc, 
  getDoc,
  query,
  where,
  addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const FirebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(FirebaseApp)

export async function getItemsFromAPI(){
  try{
  //1. Necesito conectarme a la conexion de movies con Collection
  const collectionMovies = collection(DB, 'movies')
  
  //2. Necesito traer todos los documentos existentes con getDocs
  let response = await getDocs(collectionMovies)
  
  //3. Extraemos la data de las movies y las mapeamos
  const movies = response.docs.map( doc => {
    return {
      id: doc.id,
      ...doc.data()
    } 
  } )

  //4. Retormanos el listado de productos
  return(movies)
  } 
  
  catch(error){
    console.error(error)
  }
}

export async function getSingleItemFromAPI(id){
  const docRef = doc(DB, 'movies' , id)

  const docSnap = await getDoc(docRef)

  if(docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(), 
    }
   
  } else {
    console.error('No existe el docu')
  }
}

export async function getItemFromAPIbyCategory(categoryId){
  const movieRef = collection(DB, 'movies')
  const q = query(movieRef, where('movie_gender', '==', categoryId))

  const movieSnap = await getDocs(q)

  const movie = movieSnap.docs.map(movie => {
    return{
      ...movie.data(),
      id: movie.id
    }
  })

  return movie;
}


//------------- FUNCIONES DE COMPRA--------------------//

export async function createBuyOrderFirebase(buyOrder){
  const newOrder = collection(DB, 'order')

  const docRef = await addDoc(newOrder, buyOrder)

  return(docRef.id)
}





//----------HELPER - SUBIR PRODUCTOS-MOVIES A FIRESTORE---------//

export async function exportItemsToFirestrore() {
  const moviesDB = [
    {
    "movie_img": "https://cdn.posteritati.com/posters/000/000/015/116/once-upon-a-time-in-america-md-web.jpg",
    "movie_gender": "Crimen",
    "movie_title": "Once Upon A Time in America",
    "movie_director": "Sergio Leone",
    "movie_year": 1984,
    "movie_description": "El retrato de Sergio Leone sobre la amistad, la lealtad y las traiciones de un grupo de gángsters judíos en 1920 y 1930.",
    "price": 3.2,
    "stock": 249
  }, {
    "movie_img": "https://www.themoviedb.org/t/p/original/8EnIZT2hrlmMPqnWHOvfBjGNwEp.jpg",
    "movie_gender": "Suspenso",
    "movie_title": "L.A Confidential",
    "movie_director": "Curtis Hanson",
    "movie_year": 1997,
    "movie_description": "Un joven policía es testigo de la era oscura de Hollywood en los 50, mientras lucha contra la corrupción policíaca.",
    "price": 2.00,
    "stock": 500
  }, {
    "movie_img": "https://johnrieber.files.wordpress.com/2018/01/boogie-nights-poster.jpg",
    "movie_gender": "Drama",
    "movie_title": "Boogie Nights",
    "movie_director": "Paul Thomas Anderson",
    "movie_year": 1977,
    "movie_description": "Un productor encumbra a un joven que abandonó la escuela hasta el éxito en la industria porno de los años setenta, pero la avaricia y el egoísmo lo llevan a un descenso a los infiernos en los años ochenta.",
    "price": 0.95,
    "stock": 500
  }, {
    "movie_img": "https://i.ebayimg.com/images/g/HwAAAOSwItJafKPI/s-l1600.jpg",
    "movie_gender": "Romantica",
    "movie_title": "Breakfast at Tiffany's",
    "movie_director": "Blake Edwards",
    "movie_year": 1961,
    "movie_description": "Holly, una joven neoyorquina que aparentemente lleva una vida fácil y alegre, conoce a Paul, un escritor, y sus vidas cambian para siempre. Él se relaciona con una señora mayor adinerada que lo mantiene mientras persigue su sueño de convertirse en escritor. Por su parte, ella vive obsesionada con poder llevar una vida plagada de lujos y bienes materiales. Tras conocerse, ya nada será igual.",
    "price": 5.20,
    "stock": 109
  }, {
    "movie_img": "https://i.pinimg.com/originals/d8/57/c0/d857c0035bbf0e586cdb61a9a2a7aa56.jpg",
    "movie_gender": "Acción",
    "movie_title": "Tango y Cash",
    "movie_director": " Andréi Konchalovski",
    "movie_year": 1989,
    "movie_description": "Dos policías de Los Ángeles se convierten en socios, después de que un narcotraficante los incriminó en un asesinato.",
    "price": 4.72,
    "stock": 250
  }, {
    "movie_img": "data:image/jpeg;base64,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",
    "movie_gender": "Horror",
    "movie_title": "American Psycho",
    "movie_director": "Mary Harron",
    "movie_year": 2000,
    "movie_description": "En la década de 1980, Patrick Bateman es un hombre exitoso y obsesionado por la competencia y por la perfección material, quien utiliza los más caros cosméticos masculinos, equipos de gimnasia, solárium y demás maquinaria estética para lograr un cuerpo atlético y bien acicalado, identificador material del éxito social.",
    "price": 3.70,
    "stock": 300
  }, {
    "movie_img": "https://i.pinimg.com/736x/97/7d/4e/977d4e684cc58d2ba2772c786cc45b8f--giuseppe-tornatore-cinema-paradiso.jpg",
    "movie_gender": "Drama",
    "movie_title": "Cinema Paradiso",
    "movie_director": "Giuseppe Tornatore",
    "movie_year": 1988,
    "movie_description": "Salvatore es un niño de un pueblo italiano, donde el único pasatiempo es ir al cine y Salvatore crece creyendo que el cine es magia.",
    "price": 1.50,
    "stock": 200
  }, {
    "movie_img": "https://cdn.shopify.com/s/files/1/1416/8662/products/tootsie_1982_australian_original_film_art_a.jpg?v=1585402084",
    "movie_gender": "Comedia",
    "movie_title": "Tootsie",
    "movie_director": "Sydney Pollack",
    "movie_year": 1982,
    "movie_description": "Una película ganadora del Óscar. Un actor sin trabajo se disfraza de mujer para conseguir un papel en una telenovela.",
    "price": 1.60,
    "stock": 252
  }, {
    "movie_img": "https://i.pinimg.com/originals/18/cb/1c/18cb1c16bb40ef7d6e3982b324ca00a8.jpg",
    "movie_gender": "Crimen",
    "movie_title": "A Bronx Tale",
    "movie_director": "Robert De Niro",
    "movie_year": 1993,
    "movie_description": "Durante la tensión racial de los sesenta, el hijo (Lillo Brancato) de un conductor (Robert De Niro) de autobús respeta a un jefe (Chazz Palminteri) mafioso.",
    "price": 2.01,
    "stock": 236
  }, {
    "movie_img": "https://http2.mlstatic.com/D_NQ_NP_636403-MLA41920779831_052020-O.jpg",
    "movie_gender": "Crimen",
    "movie_title": "The Godfather",
    "movie_director": "Francis Ford Coppola",
    "movie_year": 1972,
    "movie_description": "Una adaptación ganadora del Premio de la Academia, de la novela de Mario Puzo acerca de la familia Corleone.",
    "price": 1.99,
    "stock": 500
  }, {
    "movie_img": "http://2.bp.blogspot.com/-hk5i_7ZGA9k/Voh-K9vSD8I/AAAAAAAAemE/9Ql_aY4euiI/s1600/Poster-Cartel-Lost-in-Translation-Sofia-Coppola.jpg",
    "movie_gender": "Romantica",
    "movie_title": "Lost In Translation",
    "movie_director": "Sofia Coppola",
    "movie_year": 2003,
    "movie_description": "Un actor de mediana edad que está en Tokio para grabar un comercial conoce a la joven esposa de un fotógrafo de famosos.",
    "price": 2.20,
    "stock": 405
  }, {
    "movie_img": "https://m.media-amazon.com/images/I/51wYGGTylxL._AC_SY580_.jpg",
    "movie_gender": "Drama",
    "movie_title": "Kramer vs Kramer",
    "movie_director": "Robert Benton",
    "movie_year": 1979,
    "movie_description": "Un ejecutivo y su hijo son abandonados por su esposa, quien regresa tras un tiempo y exige la custodia legal del niño.",
    "price": 1.17,
    "stock": 500
  }, {
    "movie_img": "https://movieposters2.com/images/1779314-b.jpg",
    "movie_gender": "Suspenso",
    "movie_title": "Basic Instinct",
    "movie_director": "Paul Verhoeven",
    "movie_year": 1992,
    "movie_description": "̦Una escritora erótica seduce a un detective de San Francisco, quien cree que ella podría ser una asesina.",
    "price": 3.01,
    "stock": 357
  }, {
    "movie_img": "https://i.pinimg.com/originals/82/45/f3/8245f3b185907b7f1fa2fb6fc6a43bf5.jpg",
    "movie_gender": "Suspenso",
    "movie_title": "Raer Window",
    "movie_director": "Alfred Hitchcock",
    "movie_year": 1954,
    "movie_description": "̦Un fotógrafo, sentado en una silla de ruedas y con una pierna enyesada, espía a los vecinos y es testigo de un asesinato.",
    "price": 3.0,
    "stock": 293
  }, {
    "movie_img": "https://i.ytimg.com/vi/jQiGTWHhuIA/movieposter.jpg",
    "movie_gender": "Comedia",
    "movie_title": "Dumb & Dumber",
    "movie_director": "Peter Farrelly",
    "movie_year": 1994,
    "movie_description": "La vida de Lloyd y Harry, dos amigos de una estupidez supina, es un auténtico desastre. Cuando Lloyd se enamora de una chica que olvida un maletín en una limusina, los dos amigos emprenden un viaje por todo el país para devolvérselo.",
    "price": 1.65,
    "stock": 100
  }, {
    "movie_img": "https://i.pinimg.com/originals/39/c5/fc/39c5fcc67f33d8e8a8c691c9d2514907.jpg",
    "movie_gender": "Horror",
    "movie_title": "Halloween",
    "movie_director": "Devland",
    "movie_year": 1978,
    "movie_description": "Un maniático regresa a su ciudad natal para continuar con la plaga de terror que inició hace quince años.",
    "price": 1.88,
    "stock": 100
  },
  {
    "movie_img": "https://cdn.posteritati.com/posters/000/000/063/898/after-hours-md-web.jpg",
    "movie_gender": "Comedia",
    "movie_title": "After Hours",
    "movie_director": "Martin Scorsese",
    "movie_year": 1985,
    "movie_description": "Una sátira de humor negro de Martin Scorsese sobre las aventuras nocturnas de un hombre en el inframundo de Manhattan.",
    "price": 2.88,
    "stock": 100
  },
  {
    "movie_img": "https://i.pinimg.com/originals/1f/12/c8/1f12c8629669cb4d9a3db1f2f7b7f30e.png",
    "movie_gender": "Romantica",
    "movie_title": "Manhattan",
    "movie_director": "Woody Allen",
    "movie_year": 1979,
    "movie_description": "Un escritor de comedias divorciado que sale con una colegiala, se enamora de la amante de su mejor amigo.",
    "price": 2.31,
    "stock": 100
  },
  {
    "movie_img": "https://m.media-amazon.com/images/I/81flC9O6c7L._AC_UF894,1000_QL80_.jpg",
    "movie_gender": "Horror",
    "movie_title": "Carrie",
    "movie_director": "Brian De Palma",
    "movie_year": 1976,
    "movie_description": "Una joven con poderes sobrenaturales decide vengarse de sus compañeros de clase, que se han burlado de ella.",
    "price": 4.51,
    "stock": 100
  },
  {
    "movie_img": "https://es.web.img3.acsta.net/r_1280_720/pictures/14/03/27/13/54/440071.jpg",
    "movie_gender": "Comedia",
    "movie_title": "The Big Lebowski",
    "movie_director": "Coen Bros.",
    "movie_year": 1998,
    "movie_description": "Un desempleado es confundido por unos matones con el millonario Jeff Lebowski, quien se llama igual que él y a cuya esposa han secuestrado. Cuando acude a casa del millonario para quejarse, éste decide contratarlo para rescatar a su esposa a cambio de una recompensa.",
    "price": 1.76,
    "stock": 100
  },
]

  const movieList = collection(DB, 'movies')

  for(let item of moviesDB){
    const docRef = await addDoc(movieList, item)
    console.log('Exporta lista:', docRef.id)
  }
}