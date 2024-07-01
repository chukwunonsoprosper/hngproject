function build() {
  document.getElementById('load').innerHTML = 'loading...'
  async function fetchInfo() {
    let username = document.querySelector("input").value;
    let url = `https://corsproxy.io/?https://alchemistschnews.000webhostapp.com/?visitor_name=${username}`;

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


        console.log(ip + ' ' + country)

        //sendtobackend

        async function sendover() {
            let url1 =  `https://corsproxy.io/?https://alchemistschnews.000webhostapp.com/trainapi.php?ip=${ip}&country=${country}`;
            try {
                let send = await fetch(url1);
                let okay = await send.text();
                console.log(okay);

            } catch (error) {
                console.log(error)
            }
        }

        sendover()
    } catch (error) {
        console.log(error)
    }
}

load()
