<template>
  <div class="container">
    <div class="flex flex-row">
      <div class="basis-3/4 h-screen bg-slate-300"></div>
      <div class="basis-1/4 h-screen bg-slate-600">
        <div class="messages h-95v"></div>
        <input placeholder="Type your text here" class="w-full" />
      </div>
      <!-- <div class="basis-1/2">03</div> -->
    </div>
    <div class="relative">
      <div class="fixed bottom-8 left-8 bg-white h-48 w-72">
        <video autoplay="true" id="videoElement"></video>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  outline: 1px solid red;
}
</style>
<script>
// var video = document.querySelector("#videoElement");

// if (navigator.mediaDevices.getUserMedia) {
//   navigator.mediaDevices
//     .getUserMedia({ video: true })
//     .then(function (stream) {
//       video.srcObject = stream;
//     })
//     .catch(function (err0r) {
//       console.log("Something went wrong!");
//     });
// }
console.log("yo");
</script>
