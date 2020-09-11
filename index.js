const SWAPIUrl = 'https://swapi.dev/api/people';
    var p = document.getElementById('para1');
        function loadDoc() {
            var ourRequest = new XMLHttpRequest();
            const randomNum = Math.random();
            console.log(randomNum);
            ourRequest.open("GET", './stranger-things.json', true);
            ourRequest.onload = function(){
            var data = JSON.parse(this.responseText);
            console.log(data[0]);
            for (let i = 0; i < data.results.length; i++){
                console.log(data.results[i])
            }
        }
    ourRequest.send();
}