const form = document.getElementById("searchForm");
const usernameInput = document.getElementById("username");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  if (!username) return;
  showLoader();
  try {
    // Fetch user profile
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (!userRes.ok) throw new Error("User not found");
    const user = await userRes.json();

    // Fetch repos (for stars)
    let stars = 0;
    let page = 1,
      repos = [];
    // GitHub API paginates repos at 100 per page
    while (true) {
      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`
      );
      const repoPage = await repoRes.json();
      if (!Array.isArray(repoPage) || repoPage.length === 0) break;
      repos = repos.concat(repoPage);
      if (repoPage.length < 100) break;
      page++;
    }
    stars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);

    showCard({
      avatar_url: user.avatar_url,
      login: user.login,
      name: user.name,
      public_repos: user.public_repos,
      following: user.following,
      stars,
    });
  } catch (err) {
    showError(err.message || "Could not fetch user");
  }
});

function showLoader() {
  resultDiv.innerHTML = `<div class="loader"></div>`;
}

function showError(msg) {
  resultDiv.innerHTML = `<div class="error">${msg}</div>`;
}

function showCard({ avatar_url, login, name, public_repos, following, stars }) {
  resultDiv.innerHTML = `
        <div class="card">
          <img class="profile-img" src="${avatar_url}" alt="${login}'s avatar" />
          <div class="username">@${login}</div>
          ${name ? `<div class="realname">${name}</div>` : ""}
          <div class="info-list">
            <div class="info-item">
              ${public_repos}
              <span class="info-label">Repos</span>
            </div>
            <div class="info-item">
              ${stars}
              <span class="info-label">Stars</span>
            </div>
            <div class="info-item">
              ${following}
              <span class="info-label">Following</span>
            </div>
          </div>
        </div>
      `;
}
