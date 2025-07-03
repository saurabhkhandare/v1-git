# 🚀 GitHub Profile Finder

A modern, responsive web app to search for any GitHub user's profile and quickly view their key stats—built with pure HTML, CSS, and JavaScript.

---

## ✨ Features

- **Instant Search:** Enter any GitHub username and view their profile instantly.
- **Profile Overview:** Displays avatar, username, real name, public repos, total stars (across all public repos), and following count.
- **Live Data:** Fetches up-to-date data directly from the GitHub API.
- **Loading Indicator:** Shows a spinner while fetching data.
- **Error Handling:** Friendly error messages for invalid usernames or network issues.
- **Responsive Design:** Looks great on both desktop and mobile devices.
- **No Dependencies:** Entirely self-contained—no frameworks or libraries required.

---

## 🚀 Getting Started

1. **Clone or Download the Repository**

git clone https://github.com/saurabhkhandare/v1-git.git

2. **Open the App**

- Open the `index.html` file in your web browser.

---

## 🕹️ How to Use

1. Enter a GitHub username in the search box.
2. Click the **Search** button.
3. View the user's profile information, including:

- Avatar
- Username
- Real name (if available)
- Public repositories count
- Total stars (across all public repos)
- Following count

If the username is not found, an error message will be displayed.

---

## 📁 File Structure

v1-git/
└── index.html # Main application file (contains HTML, CSS, and JS)

---

## 🛠️ How It Works

- **API Calls:**
  - Fetches user details from `https://api.github.com/users/{username}`.
  - Fetches all public repositories (handles pagination) to calculate the total star count.
- **UI Updates:**
  - Shows a loading spinner while fetching.
  - Displays a card with user info or an error message.
- **No Backend:**
  - All logic runs in the browser.

---

## 🎨 Customization

- **Styling:**
  - Easily adjust colors, fonts, or layout by editing the CSS in the `<style>` section.
- **Displayed Data:**
  - Add more fields from the GitHub API as needed.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

- [Saurabh Khandare](https://github.com/saurabhkhandare)

---

Enjoy exploring GitHub profiles! 🌟
