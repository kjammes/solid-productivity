const generateBody = () => {
  fetch(chrome.runtime.getURL('./overlay.html'))
    .then(response => response.text())
    .then(result => {
      document.body.innerHTML = result;
      document.getElementById("social-media-site").innerText = window.location.hostname;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

const generateStyle = () => {
  document.head.innerHTML = `<style></style>`;
};

const blockedHosts = [
  "www.facebook.com", "www.netflix.com", "www.tiktok.com",
  "www.discord.com", "www.instagram.com", "web.whatsapp.com", "www.linkedin.com",
  "www.twitter.com", "www.reddit.com"
]
if (
  blockedHosts.includes(window.location.hostname)
)  {
  generateBody();
  generateStyle();
}