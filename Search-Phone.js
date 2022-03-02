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

const displyPhone = elements => { 
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    
    // Showing Phone is not found
    const alertshow = document.getElementById('alert-show');
    if(elements.length == 0){
        const alert = document.createElement('h1');
        alert.innerHTML =`
        <h1 class ="text-center alert-title">Sorry!</h1>
        <h1 class ="text-center alert-title"> This Phone is not found </h1>`
        alertshow.appendChild(alert);    
    }

    
        for(const element of elements) {
            console.log(elements.length);
                        
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card w-75 mx-auto ">
                    <img src="${element.image}" class="card-img-top w-50 h-50 " alt="">
                    <div class="card-body w-75">
                    <h3 class="">${element.phone_name}</h3>
                    <h3 class="">${element.brand}</h3>
                    <button id="details" type="button" class="btn btn-primary btn-lg"> Show Details </button>
                    </div>
                </div>
            `
            searchResult.appendChild(div);
        };
}