   
   // API data load Function
const searchPhone = () => {
    const input = document.getElementById('searchInput');
    const value = input.value;
    input.value='';
    
    const url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
    
    fetch(url)
     .then(res => res.json())
     .then(data => displyPhone(data.data));
     
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

        // Loop 
        for(const element of elements) {
         
        // create new div
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card w-75 mx-auto ">
                <img src="${element.image}" class="card-img-top w-50 h-50 " alt="">
                <div class="card-body w-75">
                <h3 class="">${element.phone_name}</h3>
                <h3 class="">${element.brand}</h3> 
                <button id="details" onclick="detailShow('${element.slug}')" type="button" class="btn btn-primary btn-lg"> Show Details </button>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    };
}

    // URL for detail information
const detailShow = slug =>{
    const url =`https://openapi.programming-hero.com/api/phone/${slug}`
    fetch(url)
    .then(res => res.json())
    .then(data => phoneDetail(data)); 
}

    // Function for detail information
const phoneDetail = name => {
    
    const detailInformation = document.getElementById('detail-information');
    detailInformation.textContent='';
    
    // Create div for detail information 
    const div = document.createElement('div');
    div.innerHTML= `
    <div id="detail-div" class="card" style="width: 18rem;">
        <img src="${name.data.image}" class="card-img-top" alt="">

        <div class="card-body">
            <h5 class="card-title fw-bold">${name.data.name}</h5>
            <h5 class="card-text">${name.data.releaseDate}</h5>
        </div>
            <h5 class="fw-bold ms-1"> Main Features </h5>
        <ul>
            <li><span class="fw-bold">Storage:</span> ${name.data.mainFeatures.storage}</li>
            <li><span class="fw-bold">Disply Size:</span> ${name.data.mainFeatures.displaySize}</li>
            <li><span class="fw-bold">Chip Set:</span> ${name.data.mainFeatures.chipSet}</li>
            <li><span class="fw-bold">Memory:</span> ${name.data.mainFeatures.memory}</li>
        </ul>
        <h5 class="fw-bold ms-1"> Sensors </h5>
        <ul>
            <li>${name.data.mainFeatures.sensors[0]}</li>
            <li>${name.data.mainFeatures.sensors[1]}</li>
            <li>${name.data.mainFeatures.sensors[2]}</li>
            <li>${name.data.mainFeatures.sensors[3]}</li>
            <li>${name.data.mainFeatures.sensors[4]}</li>
        </ul>
        <h5 class="fw-bold ms-1"> Others </h5>
        <ul>
            <li><span class="fw-bold">WLAN:</span>${name.data.others.WLAN}</li>
            <li><span class="fw-bold">Bluetooth:</span>${name.data.others.Bluetooth}</li>
            <li><span class="fw-bold">GPS:</span>${name.data.others.GPS}</li>
            <li><span class="fw-bold">NFC:</span>${name.data.others.NFC}</li>
            <li><span class="fw-bold">USB:</span>${name.data.others.USB}</li>
        </ul>

    </div>
    `
    detailInformation.appendChild(div);
}