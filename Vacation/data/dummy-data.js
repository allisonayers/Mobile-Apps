import State from "../models/states";
import Destination from "../models/destinations";


export const STATES = [
  new State("s1", "Japan", "#f44336"), 
  new State("s2", "Italy", "#2196f3"), 
  new State("s3", "Australia", "#4caf50"), 
  new State("s4", "France", "#ff9800"), 
  new State("s5", "Canada", "#9c27b0"), 
  new State("s6", "South Africa", "#ffeb3b"), 
  new State("s7", "Brazil", "#03a9f4"), 
  new State("s8", "India", "#8bc34a"), 
  new State("s9", "Greece", "#ff5722"), 
  new State("s10", "Iceland", "#673ab7"), 
];

export const DESTINATIONS = [
  new Destination(
    "c1",
    "s1",
    "Tokyo",
    "Japan's bustling capital is known for its vibrant food scene, cutting-edge technology, and a mix of modern and traditional architecture.",
    1603,
    4.7,
    "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
    3000
  ),
  new Destination(
    "c2",
    "s1",
    "Kyoto",
    "A city that embodies the heart of traditional Japan with its ancient temples, tea houses, and beautiful geisha district.",
    794,
    4.3,
    "https://boutiquejapan.com/wp-content/uploads/2019/07/yasaka-pagoda-higashiyama-kyoto-japan.jpg",
    2700
  ),
  new Destination(
    "c3",
    "s2",
    "Rome",
    "The historic heart of Italy, famous for ancient ruins like the Colosseum and the Vatican City.",
    753,
    4.4,
    "https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp",
    2500
  ),
  new Destination(
    "c4",
    "s2",
    "Venice",
    "Known for its romantic canals, stunning architecture, and the unique experience of traveling by gondola.",
    421,
    4.8,
    "https://cdn.britannica.com/62/153462-050-3D4F41AF/Grand-Canal-Venice.jpg",
    2500
  ),
  new Destination(
    "c5",
    "s3",
    "Sydney",
    "Famous for its Sydney Opera House, beautiful beaches, and the vibrant Darling Harbour.",
    1788,
    3.9,
    "https://i.natgeofe.com/n/bd48279e-be5a-4f28-9551-5cb917c6766e/GettyImages-103455489cropped.jpg",
    3000
  ),
  new Destination(
    "c6",
    "s3",
    "Melbourne",
    "Known for its cultural diversity, excellent coffee, street art, and dynamic food scene.",
    1835,
    4.1,
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Melburnian_Skyline.jpg",
    2800
  ),
  new Destination(
    "c7",
    "s4",
    "Paris",
    "The city of love, renowned for its art museums like the Louvre, landmarks like the Eiffel Tower, and charming cafés.",
    250,
    4.3,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    3000
  ),
  new Destination(
    "c8",
    "s4",
    "Nice",
    "Located on the French Riviera, known for its stunning coastline, vibrant markets, and the Promenade des Anglais.",
    350,
    4.6,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nizza-C%C3%B4te_d%27Azur.jpg/800px-Nizza-C%C3%B4te_d%27Azur.jpg",
    2800
  ),
  new Destination(
    "c9",
    "s5",
    "Vancouver",
    "Offers a mix of urban modernity and natural beauty, with close proximity to both beaches and mountains.",
    1886,
    3.9,
    "https://res.cloudinary.com/simpleview/image/upload/v1589990523/clients/vancouverbc/Vancouver_Aerial_2017_1__72115131-4a31-42dc-b369-7a5ccec8273f.jpg",
    2400
  ),
  new Destination(
    "c10",
    "s5",
    "Quebec City",
    "A slice of European charm in North America, famous for its historic architecture and the Winter Carnival.",
    1608,
    3.8,
    "https://i.natgeofe.com/n/720ceef5-db9c-4531-b164-aa091c133b0f/upper-town-winter-old-quebec-city-canada_4x3.jpg",
    2300
  ),
  new Destination(
    "c11",
    "s6",
    "Cape Town",
    "Known for its picturesque landscapes, Table Mountain, and Robben Island.",
    1652,
    4.2,
    "https://media-cdn.tripadvisor.com/media/photo-c/768x250/14/10/2e/1e/cape-town.jpg",
    2000
  ),
  new Destination(
    "c12",
    "s6",
    "Johannesburg",
    "The heart of South Africa's safari industry, offering a rich history and the gateway to Kruger National Park.",
    1886,
    4.3,
    "https://www.andbeyond.com/wp-content/uploads/sites/5/Johannesburg-Skyline.jpg",
    2000
  ),
  new Destination(
    "c13",
    "s7",
    "Rio de Janeiro",
    "Famous for its Carnival, stunning beaches like Copacabana, and the iconic Christ the Redeemer statue.",
    1565,
    4.6,
    "https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg",
    2600
  ),
  new Destination(
    "c14",
    "s7",
    "Salvador",
    "Known for its Afro-Brazilian culture, colonial architecture, and vibrant music scene.",
    1549,
    4.0,
    "https://cdn.britannica.com/58/142658-050-8FF3D665/Street-district-Pelourinho-Brazil-Salvador.jpg",
    2000
  ),
  new Destination(
    "c15",
    "s8",
    "New Delhi",
    "The capital city, offering a mix of historical sites like the Red Fort and India Gate, alongside bustling markets.",
    1911,
    4.5,
    "https://media.cntraveller.com/photos/611bed6df902cc2d167b42bc/4:3/w_2664,h_1998,c_limit/gettyimages-962826702.jpg",
    1700
  ),
  new Destination(
    "c16",
    "s8",
    "Jaipur",
    "Known as the Pink City, famous for its stunning forts, palaces, and rich history in the heart of Rajasthan.",
    1727,
    4.7,
    "https://bombaytrooper.com/wp-content/uploads/2024/02/Jaipur-log-BT.jpeg",
    1600
  ),
  new Destination(
    "c17",
    "s9",
    "Athens",
    "The cradle of Western civilization, known for its ancient ruins like the Acropolis and the Parthenon.",
    508,
    3.8,
    "https://cdn.britannica.com/66/102266-050-FBDEFCA1/acropolis-city-state-Greece-Athens.jpg",
    2500
  ),
  new Destination(
    "c18",
    "s9",
    "Santorini",
    "Famous for its breathtaking sunsets, white-washed buildings, and crystal-clear waters.",
    1600,
    4.9,
    "https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg",
    3300
  ),
  new Destination(
    "c19",
    "s10",
    "Reykjavik",
    "Known for its vibrant arts scene, geothermal pools, and as the starting point for exploring Iceland's natural wonders.",
    874,
    3.8,
    "https://content.icelandtravel.is/wp-content/uploads/2019/03/Reykjavik.jpg",
    3000
  ),
  new Destination(
    "c20",
    "s10",
    "Akureyri",
    "A gateway to the natural beauty of northern Iceland, including the Northern Lights, waterfalls, and volcanic landscapes.",
    1562,
    3.4,
    "https://adventures.is/media/232616/akureyri-in-summer.jpg?anchor=center&mode=crop&width=970&height=645&rnd=133274879380000000&quality=80&format=jpg",
    2900
  ),
];
