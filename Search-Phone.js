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
    if(elements.length == 0){
        console.log('This Phone is not found');
    }
        for(const element of elements) {
            console.log(elements.length);
                        
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card h-100 ">
                    <img src="${element.image}" class="card-img-top w-75 " alt="">
                    <div class="card-body w-75">
                    <h5 class="">${element.phone_name}</h5>
                    <p class="">${element.brand}</p>
                    <button id="details"> Show Details </button>
                    </div>
                </div>
            `
            searchResult.appendChild(div);
        };
}