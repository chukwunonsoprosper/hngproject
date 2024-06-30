function build() {
  async function fetchInfo() {
    let username = document.querySelector("input").value;
    let url = `http://localhost/hng/api?visitor_name=${username}`;

    try {
      let res = await fetch(url);
      let result = await res.text();
      document.getElementById('load').innerHTML = 'loading'
      document.write(result);
    } catch (error) {
      console.log(error);
    }
  }

  fetchInfo();
}

function pastlocation() {
  async function getIp() {
    let url = "https://ipinfo.io/json";
    try {
      let response = await fetch(url);
      let result = await response.text();
      let parse = JSON.parse(result);
      let ip = parse["ip"];

      let query = ip;
      async function country() {
        const url = "https://community-neutrino-ip-info.p.rapidapi.com/ip-info";
        const options = {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key":
              "4273ea270amshe9b959a46322d44p1945b1jsn885a1014a2eb",
            "X-RapidAPI-Host": "community-neutrino-ip-info.p.rapidapi.com",
          },
          body: new URLSearchParams({
            ip: query,
            "reverse-lookup": "checked",
          }),
        };

        try {
          const response = await fetch(url, options);
          const result = await response.text();
          let pas = JSON.parse(result);
          let countrydata = pas.country
                async function sendback() {
        let url = `http://localhost/hng/api/trainapi.php?ip=${ip}&country=${countrydata}`;

        try {
          let senddata = await fetch(url);
          let go = await senddata.text();
          console.log(go);
        } catch (error) {
          console.log(error);
        }
      }

      sendback();
        } catch (error) {
          console.log(error);
        }
      }

      country()
    } catch (error) {
      console.log(error);
    }
  }
  getIp();
}

pastlocation();
