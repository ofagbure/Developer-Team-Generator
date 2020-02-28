const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
<nav class="navbar navbar-light bg-warning text-lg-center">
  <span class="navbar-brand mb-0 h1 text-lg-center">MY TEAM</span>
</nav>
    {Placeholder}
    <script src="https://kit.fontawesome.com/71a24ccb38.js" crossorigin="anonymous"></script>
</body>
</html>`; 


let newPlaceholder = '';

newPlaceholder += engineer;

const finalHtml = html.replace('{Placeholder}', newPlaceholder)

