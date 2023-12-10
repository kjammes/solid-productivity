const generateHTML = () => {
  fetch('overlay.txt')
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    //   }
    //   return response.text();
    // })
    // .then(htmlContent => {
    //   console.log('HTML content ', htmlContent);
    //   document.body.innerHTML = htmlContent;
    // })
    // .catch(error => console.error('Error fetching HTML file:', error));

  document.body.innerHTML = `
  <h2>DON'T WASTE TIME ON <span>${window.location.hostname}</span></h2>
  <h1>Below are the websites you should be visiting... 🙂</h1>
  <ul>
    <li>
      <a href="https://leetcode.com/">LeetCode</a>
    </li>
    <li>
      <a href="https://hashnode.com/">HashNode</a>
    </li>
    <li>
      <a href="https://www.udemy.com/">Udemy</a>
    </li>
    <li>
      <a href="https://pgexercises.com/">SQL Exercises</a>
    </li>
  </ul>
  `
};

const generateSTYLING = () => {
  document.head.innerHTML = `<style></style>`;
};

const blockedHosts = [
  "www.youtube.com", "www.facebook.com", "www.netflix.com", "www.tiktok.com",
  "www.discord.com", "www.instagram.com", "web.whatsapp.com", "www.linkedin.com",
  "www.twitter.com", "www.reddit.com"
]
if (
  blockedHosts.includes(window.location.hostname)
)  {
  generateSTYLING();
  generateHTML();
}