// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("axios-example JS imported successfully!");
});

const getImageBtn = document.querySelector("#get-image");
const sayHiBtn = document.querySelector("#say-hi");

getImageBtn.addEventListener("click", async () => {
  const { data } = await axios({
    method: "get",
    baseURL: "http://localhost:3000/image",
  });

  console.log(data);

  const img = document.createElement("img");
  img.src = data.image;

  document.body.append(img);
});

sayHiBtn.addEventListener("click", async () => {
  const { data } = await axios({
    method: "post",
    baseURL: "http://localhost:3000/message",
    data: { msg: "hello" }
  });


  console.log(data);
});