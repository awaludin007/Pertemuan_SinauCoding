<template>
  <head>
    <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
  </head>
  <body>
    <div class="left">
      <h1>Welcome to Twitter</h1>
      <h2>Happening now, join twitter today</h2>
      <img src="/src/assets/Ilustrator.svg" alt="Ilustrator image" />
      <p class="copyright">&copy; 2022 Twitter, Inc</p>
    </div>
    <div class="right">
      <div class="header">
        <img src="/src/assets/Logo Twitter.svg" alt="logo twitter" />
        <p>Don't have account ?<a href="#" target="_blank" class="sign-up">Sign Up</a></p>
      </div>
      <div class="content">
        <form action="#" method="post" class="form">
          <h1>Login in to Twitter</h1>
          <p class="label">Enter Twitter Account</p>
          <input class="mb-4" type="text" name="username" id="username" placeholder="Phone,email or username" />
          <input class="pass" type="password" name="password" id="password" placeholder="Password" />
          <a href="#" target="_blank" class="forgot-pass">Forgot password ?</a>
          <button type="submit" class="btn-sign-in">Sign In</button>
          <p class="or">or</p>
          <div class="row align-items-end">
            <div class="col">
              <div class="btn">
                <button type="button" class="btn-google"><img src="/src/assets/Logo Google.svg" alt="Logo Google" />Sign with Google</button>
              </div>
            </div>
            <div class="col">
              <div class="btn">
                <button type="button" class="btn-apple"><img src="/src/assets/Logo Apple.svg" alt="Logo Apple" />Sign width Apple</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </body>
</template>
