function build() {
  document.getElementById('load').innerHTML = 'loading...'
  async function fetchInfo() {
    let username = document.querySelector("input").value;
    let url = `https://corsproxy.io/?https://alchemistschnews.000webhostapp.com/api/hello?visitor_name=${username}`;

    try {
      let res = await fetch(url);
      let result = await res.text();
      document.write(result);
      document.getElementById('load').innerHTML = 'sent'
    } catch (error) {
      console.log(error);
    }
  }

  fetchInfo();
}

async function load() {
    let url =  'https://ipinfo.io/json';
    try {
        let req = await fetch(url);
        let res = await req.json()
        let ip = res['ip'];
        let country = res['city'];


        async function getWeather() {
          const city = 'lagos';
          const apiKey = '4db2a2adbdd4dc4ceff76ab4135f9bd2';
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

          try {
              const response = await fetch(url);

              const data = await response.json();
              const temp = data.main.temp;

              async function sendover() {
                let url1 =  `https://corsproxy.io/?https://alchemistschnews.000webhostapp.com/api/trainapi?ip=${ip}&country=${country}?weather=${temp}`;
                try {
                    let send = await fetch(url1);
                    let okay = await send.text();
                    console.log(okay);
    
                } catch (error) {
                    console.log(error)
                }
            }
    
            sendover()
              console.log(temp)

          } catch (error) {
              console.log(error)
          }
      }

getWeather()

        //sendtobackend


    } catch (error) {
        console.log(error)
    }
}

load()
