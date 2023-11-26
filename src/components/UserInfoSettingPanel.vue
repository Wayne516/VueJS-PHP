<template>
   <div class="panel text-center">
      <p class="text-xl">資料修改</p>
      <hr />
      <div class="flex justify-center">
         <img class="user-icon" src="../assets/vue.svg" alt="">
      </div>
      <p class="mt-3 mb-3">使用者名稱</p>
      <div class="grid grid-cols-3 px-3 gap-3">
         <div>
            <p class="text-left">帳號名</p>
         </div>
         <div class="col-span-2">
            <input class="w-full" type="text">
         </div>
         <div>
            <p class="text-left">信箱</p>
         </div>
         <div class="col-span-2">
            <input class="w-full" type="text">
         </div>
         <div>
            <p class="text-left">個人簡介</p>
         </div>
         <div class="col-span-2">
            <textarea class="w-full" type="text"></textarea>
         </div>
         <div>
            <p class="text-left">密碼</p>
         </div>
         <div class="col-span-2">
            <input class="w-full" type="text">
         </div>
      </div>
   </div>
</template>