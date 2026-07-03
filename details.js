
const items = {

    frieren:{

        title:"Frieren: Beyond Journey's End",

        image:"images/frieren.jpg",

        rating:"⭐⭐⭐⭐⭐ 10/10",

        reason:"Frieren taught me that time makes memories more valuable.",

        story:"After defeating the Demon King, Frieren begins a journey to understand humans and the emotions she once overlooked.",

        info:"Genre: Fantasy | Episodes: 28 | Studio: Madhouse",

        trailer:"https://www.youtube.com/results?search_query=Frieren+official+trailer"

    },

    violet:{

        title:"Violet Evergarden",

        image:"images/violet.jpg",

        rating:"⭐⭐⭐⭐⭐ 10/10",

        reason:"Every episode was filled with unforgettable emotions.",

        story:"A former soldier learns the meaning of love while writing letters for others.",

        info:"Genre: Drama | Episodes: 13 | Studio: Kyoto Animation",

        trailer:"https://www.youtube.com/results?search_query=Violet+Evergarden+official+trailer"

    },

    anohana:{

        title:"Anohana",

        image:"images/anohana.jpg",

        rating:"⭐⭐⭐⭐⭐ 10/10",

        reason:"It taught me that the people we love never truly leave us.",

        story:"A group of childhood friends reunite after the ghost of their friend appears.",

        info:"Genre: Drama | Episodes: 11",

        trailer:"https://www.youtube.com/results?search_query=Anohana+official+trailer"

    },

    yourlie:{

        title:"Your Lie in April",

        image:"images/yourlie.jpg",

        rating:"⭐⭐⭐⭐⭐ 10/10",

        reason:"Its music and emotions stayed with me long after it ended.",

        story:"A piano prodigy discovers hope again through an inspiring violinist.",

        info:"Genre: Romance | Episodes: 22",

        trailer:"https://www.youtube.com/results?search_query=Your+Lie+in+April+official+trailer"

    },

    drawing:{

        title:"Drawing Closer",

        image:"images/drawingcloser.jpg",

        rating:"⭐⭐⭐⭐⭐ 10/10",

        reason:"One of the most emotional movies I've ever watched.",

        story:"A touching romance about dreams, love, and making every moment count.",

        info:"Genre: Romance | Movie",

        trailer:"https://www.youtube.com/results?search_query=Drawing+Closer+official+trailer"

    },

    fivefeetapart:{

        title:"Five Feet Apart",

        image:"images/fivefeetapart.jpg",

        rating:"⭐⭐⭐⭐⭐ 10/10",

        reason:"It reminded me how precious every moment with someone can be.",

        story:"Two teenagers with cystic fibrosis fall in love while forced to keep their distance.",

        info:"Genre: Romance | Movie",

        trailer:"https://www.youtube.com/results?search_query=Five+Feet+Apart+official+trailer"

    },

    yourname:{

        title:"Your Name",

        image:"images/yourname.jpg",

        rating:"⭐⭐⭐⭐⭐ 10/10",

        reason:"A beautiful story that blends romance, destiny and hope.",

        story:"Two teenagers mysteriously begin swapping bodies and try to find each other.",

        info:"Genre: Romance/Fantasy | Movie",

        trailer:"https://www.youtube.com/results?search_query=Your+Name+official+trailer"

    },

    bewithyou:{

        title:"Be With You",

        image:"images/bewithyou.jpg",

        rating:"⭐⭐⭐⭐⭐ 10/10",

        reason:"Its story about love and family touched my heart.",

        story:"A heartfelt romance about a mother who returns to her family in an unexpected way.",

        info:"Genre: Romance | Movie",

        trailer:"https://www.youtube.com/results?search_query=Be+With+You+official+trailer"

    }

};

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const item = items[id];

if(item){

    document.getElementById("cover").src = item.image;

    document.getElementById("title").innerHTML = item.title;

    document.getElementById("rating").innerHTML = item.rating;

    document.getElementById("reason").innerHTML = item.reason;

    document.getElementById("story").innerHTML = item.story;

    document.getElementById("info").innerHTML = item.info;

    document.getElementById("trailer").href = item.trailer;

}