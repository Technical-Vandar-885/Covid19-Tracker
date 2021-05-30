fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "53009286a0mshdc8ec356f7aa205p1e0e80jsn5858f548ed53"
    }
})

.then(response=>response.json().then(data=>{
    // console.log(data);
    let countries_stat=data.countries_stat;
    for(let i=0;i<countries_stat.length;i++){
        console.log(countries_stat[40]);

        document.getElementById('country_name').innerHTML=countries_stat[40].country_name;
        document.getElementById('cases').innerHTML=countries_stat[40].cases;
        document.getElementById('deaths').innerHTML=countries_stat[40].deaths;
        document.getElementById('recovered').innerHTML=countries_stat[40].total_recovered;
        document.getElementById('new_deaths').innerHTML=countries_stat[40].new_deaths;
        document.getElementById('new_cases').innerHTML=countries_stat[40].new_cases;
        document.getElementById('critical').innerHTML=countries_stat[40].serious_critical;
        document.getElementById('total_test').innerHTML=countries_stat[40].total_tests;
    }
}))