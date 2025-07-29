
    // const accesskey ="EajP_0DkoHhNNNSIl72BQIRcX5jZ9ccpseqSAl_scyw"
    // const formE1 = document.querySelector("form");
    // const inputE1 = document.getElementById("search-input");
    // const searchResults=document.querySelector(".search-results");
    // const showmore=document.getElementById("show");
    
    // let inputdata ="";
    // let page=1;
    
    // async function searchimages( ) {
    
    // inputdata=inputE1.value;
    // const url= `https://Api.unsplash.com/search/photos?page=${page}&Query=${inputdata}&client_id=${accesskey}`
    
    // const response=await fetch(url);
    // const data =await response.json();
    // console.log(data);
    
    // // const results=data.results;
    // // console.log(results);
    
    // // if(page ===1)
      
    // //     {
    // //         searchResults.innerHTML="";
        
    // //     }
    // //     results.map((result)=>
    // //     {
    // // const imagewrapper=document.createElement("div");
    // // imagewrapper.classList.add("search-result");
    // // const image=document.createElement("img");
    // // image.src=result.urls.small;
    // // image.alt=result.alt_description;
    // // const imagelink=document.createElement("a");
    // // imagelink.href=result.links.html;
    // // imagelink.target="_blank";
    // // imagelink.textContent=result.alt_description;
    
    // // imagewrapper.appendChild(image);
    // // imagewrapper.appendChild(imagelink);
    // // searchResults.appendChild(imagewrapper);
    
    // //     });
        
        
    // //     page++;
    // //     if (page>1)
    // //         {
    // // showmore.test.display="block";
    
    // //         }
        
    // }
    // formE1.addEventListener("submit", (event)=> {
    // event.preventDefault();
    // page=1;
    // searchimages();
    
    // });
    // showmore.addEventListener("click", ()=> {
    
        
    //     searchimages();
        
    //     });
const accesskey = "EajP_0DkoHhNNNSIl72BQIRcX5jZ9ccpseqSAl_scyw";
const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showmore = document.getElementById("show");

let inputdata = "";
let page = 1;

async function searchimages() {
  inputdata = inputE1.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;
  
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
console.log(data);

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  results.forEach((result) => {
    console.log(result.url);
    
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description || "View Image";
 imageWrapper.appendChild(imageLink);
    imageLink.appendChild(image);
   
    searchResults.appendChild(imageWrapper);
  });

  page++;
  if (page > 1) {
    showmore.style.display = "block";
  }
}

formE1.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchimages();
});

showmore.addEventListener("click", () => {
  searchimages();
});
