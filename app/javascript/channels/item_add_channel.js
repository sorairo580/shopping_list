window.addEventListener('load', function(){

  const submit = document.getElementById("item-add");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // const form = document.getElementById("item-name");
    // const formData = new FormData(form);
    // const XHR = new XMLHttpRequest();
    // XHR.open("POST", "/posts", true);
    // XHR.responseType = "json";
    // XHR.send(formData);
    // XHR.onload = () => {
    //   if (XHR.status != 200) {
    //     alert(`Error ${XHR.status}: ${XHR.statusText}`);
    //     return null;
    //   };
    //   const list = document.getElementById("list");
    //   const formText = document.getElementById("content");
    //   list.insertAdjacentHTML("afterend", buildHTML(XHR));
    //   formText.value = "";
    // };
 });
})