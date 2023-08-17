let url = "https://kontests.net/api/v1/all"
let response = fetch(url);
response.then((v) => {
    return v.json();
}).then((v) => {
    console.log(v);
    ihtml = ""

    const q = async() => {
        let b = await p();
        b = b.toString()
        console.log(b);
        let a = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=M3w0OTA0MTN8MHwxfHNlYXJjaHwxfHxjb2Rpbmd8ZW58MHx8fHwxNjkyMjk5NDUwfDA&ixlib=rb-4.0.3"
        for (item in v) {
            console.log(v[item]);
            ihtml += `
        <div class="card" style="width: 18rem;">
            <img src="${b}" class="card-img-top" alt="..." >
            <div class="card-body">
                <h5 class="card-title">${v[item].name}</h5>
                <p class="card-text">Visit Here</p>
                <p>Start at: ${v[item].start_time}</p>
                <p>End at: ${v[item].end_time}</p>
                <a href="${v[item].url}"class="btn btn-primary">Learn More</a>
            </div>
        </div>`

            cardContainer.innerHTML = ihtml
        }
    }
    q(v)
})
const todo = async() => {
    let ab = Math.floor(Math.random() * 230);
    console.log(ab.valueOf())
    let url1 = `https://api.unsplash.com/search/photos?page=${ab}&query=coding&client_id=6pejYuQHRJJNhdq4UvKzuR1UvDAJL1d0_hnNvhei2fs`
    let response1 = await fetch(url1);
    let response2 = await response1.json();
    return response2;
}
const p = async() => {
    let b = await todo();
    //console.log(b.results[0].urls.raw);
    let ab = Math.floor(Math.random() * 8);
    return b.results[ab].urls.raw;
}