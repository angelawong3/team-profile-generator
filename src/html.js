// Template of the HTML page
const templateHTML = (data) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <header>
          <nav class="navbar bg-danger py-4">
            <span class="navbar-brand mb-0 h1 text-white mx-auto">My Team</span>
          </nav>
        </header>
        <main>
           <div class="p-5 m-5">
           <div class="row row-cols-1 row-cols-md-3">
           ${newDiv(data)}
           </div>
           </div>
           </main>
        </body>
      </html>`;
};

// Manager card
const manager = (managerData) => {
  return `<div class="col mb-4">
  <div class="card h-100">
    <div class="bg-info">
      <h5 class="pl-3 pt-3">${managerData.getName()}</h5>
      <h5 class="pl-3 pb-2">☕&nbsp;${managerData.getRole()}</h5>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group list-group-flush border">
        <li class="list-group-item">ID:&nbsp;${managerData.getId()}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a>
        </li>
        <li class="list-group-item">Office number:&nbsp;${managerData.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
</div>`;
};

// Engineer card
const engineer = (engineerData) => {
  return `<div class="col mb-4">
  <div class="card h-100">
    <div class="bg-info">
      <h5 class="pl-3 pt-3">${engineerData.getName()}</h5>
      <h5 class="pl-3 pb-2">👓&nbsp;${engineerData.getRole()}</h5>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group list-group-flush border">
        <li class="list-group-item">ID:&nbsp;${engineerData.getId()}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a>
        </li>
        <li class="list-group-item">
          GitHub:
          <a
            href="https://github.com/${engineerData.getGithub()}"
            target="_blank"
          >https://github.com/${engineerData.getGithub()}</a>
        </li>
      </ul>
    </div>
  </div>
</div>`;
};

// Intern card
const intern = (internData) => {
  return `<div class="col mb-4">
  <div class="card h-100">
    <div class="bg-info">
      <h5 class="pl-3 pt-3">${internData.getName()}</h5>
      <h5 class="pl-3 pb-2">🎓&nbsp;${internData.getRole()}</h5>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group list-group-flush border">
        <li class="list-group-item">ID:&nbsp;${internData.getId()}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a>
        </li>
        <li class="list-group-item">School:&nbsp;${internData.getSchool()}</li>
      </ul>
    </div>
  </div>
</div>`;
};

// Create cards for employees
const newDiv = (newArray) => {
  let newHtml = "";

  for (i = 0; i < newArray.length; i++) {
    if (newArray[i].getRole() === "Manager") {
      newHtml = newHtml + manager(newArray[i]);
    }
    if (newArray[i].getRole() === "Engineer") {
      newHtml = newHtml + engineer(newArray[i]);
    }
    if (newArray[i].getRole() === "Intern") {
      newHtml = newHtml + intern(newArray[i]);
    }
  }
  return newHtml;
};

module.exports = templateHTML;
