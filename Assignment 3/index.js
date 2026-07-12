let parent = document.getElementById('parent');
let image = document.getElementById('bg-img');
let season = prompt(`Which season you like most ?
  Select:
  summer
  winter
  Autumn
  Spring
  `)?.toLowerCase();

// console.log(season.toLowerCase());
// console.log(season.toUpperCase());

if (season === 'summer') {


parent.innerHTML = `

 <img id="bg-img" src="image/summerBackgroundimage.gif" alt="bg image">

 <div class="product-card">
      <div class="badge">Hot</div>
      <div class="product-tumb">
        <img src="image/summer.gif"
          alt="summer">
      </div>
      <div class="product-details">
        <span class="product-catagory">Summer Season</span>
        <h4><a href="">Summer</a></h4>
        <p>The hottest season, perfect for beach trips and long, sunny days.</p>
        <div class="product-bottom-details">
            <button class="buy-btn">View Summer</button>
          </div>
        </div>
      </div>
    </div>

`


}else if (season === 'winter') {

parent.innerHTML = `

 <img id="bg-img" src="image/winterBackgroundimage.gif" alt="bg image">

 <div class="product-card">
      <div class="badge">Cold</div>
      <div class="product-tumb">
        <img src="image/winter.gif"
          alt="winter">
      </div>
      <div class="product-details">
        <span class="product-catagory">Winter Season</span>
        <h4><a href="">Winter </a></h4>
        <p>The coldest time of the year, known for snow, frost, and short days.</p>
        <div class="product-bottom-details">
            <button class="buy-btn">View Winter</button>
          </div>
        </div>
      </div>
    </div>

`


} else if (season === 'autumn') {

parent.innerHTML = `

<img id="bg-img"  width: 100%;height: 100%; src="image/autumnBackgroundimage.gif" alt="bg image">
 <div class="product-card">
      <div class="badge">leaves changing</div>
      <div class="product-tumb">
        <img src="image/autumn.gif"
          alt="Autumn">
      </div>
      <div class="product-details">
        <span class="product-catagory">Autumn Season</span>
        <h4><a href="">Autumn </a></h4>
        <p>The transition to winter, famous for cooling temperatures and leaves changing color</p>
        <div class="product-bottom-details">
            <button class="buy-btn">View Autumn</button>
          </div>
        </div>
      </div>
    </div>

`


} else if (season === 'spring') {

parent.innerHTML = `

 <img id="bg-img"  width: 100%;height: 100%; src="image/springBackgroundimage.gif " alt="bg image">

 <div class="product-card">
      <div class="badge">flowers bloom</div>
      <div class="product-tumb">
        <img src="image/spring.gif"
          alt="Spring">
      </div>
      <div class="product-details">
        <span class="product-catagory">Spring Season</span>
        <h4><a href="">Spring </a></h4>
        <p>The season of rebirth, where flowers bloom and the weather gets warmer.</p>
        <div class="product-bottom-details">
            <button class="buy-btn">View Spring</button>
          </div>
        </div>
      </div>
    </div>

`


}else{
  parent.innerHTML = `

 <img id="bg-img" src=" image/errorBackgroundimage.gif" alt="bg image">

 <div class="product-card">
      <div class="badge">OOPs</div>
      <div class="product-tumb">
        <img src=" image/404.gif">
    </div>

`

}