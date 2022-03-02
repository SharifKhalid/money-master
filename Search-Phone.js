    // API data load Function
const searchPhone = () => {
    const input = document.getElementById('searchInput');
    const value = input.value;
    input.value='';
    
    const url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
    
    fetch(url)
     .then(res => res.json())
     .then(data => displyPhone(data.data));
     console.log(data);
}

    // data disply function
const displyPhone = elements => { 
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    
    // Showing Phone is not found
    const alertshow = document.getElementById('alert-show');
    alertshow.textContent = '';
    if(elements.length == 0){
        const alert = document.createElement('h1');
        alert.innerHTML =`
        <h1 class ="text-center alert-title">Sorry!</h1>
        <h1 class ="text-center alert-title"> This Phone is not found </h1>`
        alertshow.appendChild(alert);    
    }

    // if( elements.length <=20){
    //     console.log('working');
    // }
    // else{
    //     console.log('larger than 20');
    // }
        for(const element of elements) {
            
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card w-75 mx-auto ">
                    <img src="${element.image}" class="card-img-top w-50 h-50 " alt="">
                    <div class="card-body w-75">
                    <h3 class="">${element.phone_name}</h3>
                    <h3 class="">${element.brand}</h3>
                    <h4> Sensors </h4> 
                    
                    <button id="details" onclick="detailShow('${element.slug}')" type="button" class="btn btn-primary btn-lg"> Show Details </button>
                    </div>
                </div>
            `
            searchResult.appendChild(div);
        };
}

const detailShow = slug =>{
    console.log(slug);

    const url =`https://openapi.programming-hero.com/api/phone/${slug}`
    fetch(url)
    .then(res => res.json())
    .then(data => phoneDetail(data)); 
}

const phoneDetail = name => {
    
  
    const detailInformation = document.getElementById('detail-information');
    detailInformation.textContent='';
    
    // Create div for detail information 
    const div = document.createElement('div');
    div.innerHTML= `
    <div class="card" style="width: 18rem;">
        <img src="${name.data.image}" class="card-img-top" alt="">

        <div class="card-body">
            <h5 class="card-title">${name.data.name}</h5>
            <h5 class="card-text">${name.data.releaseDate}</h5>
        </div>
            <h5> Main Features </h5>
        <ul>
            <li><span class="fw-bold">Storage:</span> ${name.data.mainFeatures.storage}</li>
            <li><span class="fw-bold">Disply Size:</span> ${name.data.mainFeatures.displaySize}</li>
            <li><span class="fw-bold">Chip Set:</span> ${name.data.mainFeatures.chipSet}</li>
            <li><span class="fw-bold">Memory:</span> ${name.data.mainFeatures.memory}</li>
        </ul>
    </div>
    `
    detailInformation.appendChild(div);
}