<script>
  import { onMount } from 'svelte';

  function initializeSDK() {
    AlanChat.setUrl('https://webchat.cxsuite.cloud/?secret=Xkf7OI9VhkvryvX3dLJjcKYbxwDcYb63xKx&name=Jhon&email=jhon@hikko.dev&bot=test&authenticated=true');
    AlanChat.setTitle('<img class="img-hide" src="/images/FEDE.webp" style="width: 30px;"> FEDE');
    AlanChat.setAccentColor('#007550');
    AlanChat.setFabType('<img src="images/Chat.png" class="img-hide" style="width: 40px;">'); // images/Chat.png
    AlanChat.start();
    AlanChat.setCallBackFunc(function(data) {
      console.log('callback called', data);
    });
  }

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://static.alan.sh/sdk/sdk.js';
    script.onload = initializeSDK;
    document.body.appendChild(script);

    const waitForButton = setInterval(() => {
      const chat = document.querySelector('#alanActionButton');
      if (chat) {
        chat.innerHTML = `
          <img src="images/Chat.png" class="img-hide" style="width: 21px;">  
          <h3 class="img-show" id="alanHeaderText">
            <img src="/images/FEDE.webp" style="width: 21px;"> FEDE
          </h3>
        `;
        clearInterval(waitForButton);
      }
    }, 500);
  });
</script>

<!-- Puedes añadir clases Tailwind globales en tu layout o app.css -->
<style>
 /* Ocultar el botón flotante redondo por defecto */
 #alanActionButton > button {
    display: none !important;
  }

  .alanOverlay { 
    display: none !important; 
  }
  
</style>