const content = `
<body>
<header>
<div class="container">
    <h1>Awesome App</h1>
    <h2>This app will change your life!</h2>
    <a class="btn">Download Now</a>
</div>
</header>
<section class="features">
    <div class="container">
      
    <div class="feature">
        <img src="https://www.sololearn.com/uploads/img_blue_pin.png" alt=""/>
        <p>An awesome feature</p>
      </div>
  
      <div class="feature">
        <img src="https://www.sololearn.com/uploads/img_blue_chart.png" alt=""/>
        <p>An awesome feature</p>
      </div>
  
      <div class="feature">
        <img src="https://www.sololearn.com/uploads/img_blue_msg.png" alt=""/>
        <p>An awesome feature</p>
      </div>
  
    </div>
  </section>  

<section class="quote">
    <blockquote class="container">
      <p>"Some great quote!"</p>
      <cite>Satisfied Customer</cite>
    </blockquote>
</section>   
<footer>
    <div class="container">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
        <p>&copy; All rights reserved.</p>
      </div>
</footer>
</body>`;
document.write(content);
var btn = document.getElementsByClassName(container);
console.log(btn.length);