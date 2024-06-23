let dataHandler = async () => {
  let city = cityName.value;
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7220418ad86e0ad885330c69054f6518`
  );
  response
    .json()
    .then((data) => {
      console.log(data);
      if (data.cod >= 200 && data.cod < 300) {
        dataContainer.innerHTML = `
        <div class="w-100">
        <h2 class="text-success text-center mb-3">${data.name}</h2>
        <div class="row rounded-3 bg-success">
            <div class="col-md-4 py-3">
              <div class="d-flex align-items-center">
              <img
                  src="https://openweathermap.org/img/wn/${
                    data.weather[0].icon
                  }@2x.png"
                  alt="icon"
                  id="dataIcon"
                />
                <div class="px-5">
                  <h3>${(data.main.temp - 273.15).toFixed(1)}</h3>
                  <h6>Really Feels: <span>${(
                    data.main.feels_like - 273.15
                  ).toFixed(1)}</span></h6>
                </div>
              </div>
              <h3 class="mt-5 text-center">${data.weather[0].main}</h3>
              </div>
            <div class="col-md-2"></div>
            <div class="col-md-6 py-3">
            <h6 class ="mt-4 mb-4">Real Feel : <span>${(
              data.main.feels_like - 273.15
            ).toFixed(1)}</span></h6>
              <h6 class ="mb-4">Wind : <span>${
                (data.wind.speed * 3600) / 1000
              }</span></h6>
              <h6 class ="mb-4">Humidity : <span>${
                data.main.humidity
              }</span></h6>
                </div>
                </div>
                </div>`;
      } else {
        dataContainer.innerHTML = `<div>
        <h2 class="text-success">${data.message}</h2>
        </div>`;
      }
    })
    .catch((err) => console.log(err));
};
