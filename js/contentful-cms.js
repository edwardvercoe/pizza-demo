// MASONARY MENU JS
// https://codepen.io/besiw/pen/NwBwNM

// Set nr of columns for different screen-sizes. These settings has to be consistent with css @media
const masonrySettings = {
  sm: {
    width: 430,
    columns: 1
  },
  md: {
    width: 768,
    columns: 1
  },
  lg: {
    width: 992,
    columns: 2
  },
  xl: {
    width: 1500,
    columns: 2
  }
}

//Set child item in columnes, and find highest column
//param: number of columns

function masonary(col) {

  const COL_COUNT = col;

  container = document.getElementById('masonry');

  //get number of child elements
  panels = document.querySelectorAll('.masonry-panel');

  //create array that stores the total height of each 'column'
  let col_heights = [];
  for (let j = 0; j <= COL_COUNT; j++) {
    col_heights.push(0);
  }

  // set css 'order' property for each element
  for (let i = 0; i < panels.length; i++) {

    let order = (i + 1) % COL_COUNT || COL_COUNT; // Example: 10 % 3 = 1

    panels[i].style.order = order; // add div css property: order. Together with Flexbox, this property will define which column the element is listed in.

    //get element height
    let height = panels[i].offsetHeight;

    //Choose the belongin column, add the height of each child to array that stores column height value
    col_heights[order] += parseFloat(height);

  }

  //Set the height of masonry container to the heightest column
  const highest = Math.max.apply(Math, col_heights);
  container.style.maxHeight = highest + 10 + 'px';

}

//set layout depending of window width
function setlayout() {

  window_width = window.innerWidth || document.documentElement.clientHeight || document.body.clientHeight;

  if (window_width <= masonrySettings.sm.width) {

    masonary(masonrySettings.sm.columns);

  } else if (window_width <= masonrySettings.md.width) {

    masonary(masonrySettings.md.columns);

  } else if (window_width <= masonrySettings.lg.width) {

    masonary(masonrySettings.lg.columns);

  } else {

    masonary(masonrySettings.xl.columns);

  }
}


//listen for window resize, and change number of columns accordingly
window.onresize = setlayout;


// END MASONARY MENU END MASONARY MENU END MASONARY MENU


// INIT CONTENTFUL CLIENT
const pizzaPanel = document.querySelector(".pizza-panel");
const pastaPanel = document.querySelector(".pasta-panel");
const risottoPanel = document.querySelector(".risotto-panel");
const mainsPanel = document.querySelector(".mains-panel");
const sidesPanel = document.querySelector(".sides-panel");
const saladsPanel = document.querySelector(".salads-panel");
const coffeePanel = document.querySelector(".coffee-panel");
const dessertPanel = document.querySelector(".dessert-panel");
const gelatoPanel = document.querySelector(".gelato-panel");


const client = contentful.createClient({
  space: 'tisb3kgmtrw9',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'PtPtyHIKwV294MQqHjQGCl1An-JnXjUVRVWQX0xt3uk'
})


function getMenu() {

  // PIZZA MENU

  client.getEntry('3oFcuzeYjsQh2NpoQIJnOE')
    .then((entries) => {
      entries.fields.pizzaOrder.forEach((entry) => {
        pizzaPanel.innerHTML = pizzaPanel.innerHTML +
          `
          <div class=food-wrapper>
          <div class="food-item">
            <h3 class="food-title">${entry.fields.pizzaName ? entry.fields.pizzaName:""}</h3>
            <p class="food-desc">${entry.fields.pizzaDescription ? entry.fields.pizzaDescription:""}</p>
            <div class="sizes">
              <div class="food-sml size">
                <p class="food-size">Sml</p>
                <p>${entry.fields.smallPrice ? entry.fields.smallPrice:""}</p>
              </div>
              <div class="food-med size">
                <p class="food-size">Med</p>
                <p>${entry.fields.mediumPrice ? entry.fields.mediumPrice:""}</p>
              </div>
              <div class="food-lrg size">
                <p class="food-size">Lrg</p>
                <p>${entry.fields.largePrice ? entry.fields.largePrice:""}</p>
              </div>
            </div>
          </div>
        </div>
`
      })
    })
    .then(() => {
      setlayout();
    })
    .catch(console.error)


  // PASTA MENU

  client.getEntry('6gn0Cm2kZ5iTAWjfrX51RY')
    .then((entries) => {
      entries.fields.pastaOrder.forEach((entry) => {
        pastaPanel.innerHTML = pastaPanel.innerHTML +
          `
 <div class=food-wrapper>
<div class="food-item">
<h3 class="food-title">${entry.fields.pastaName}</h3>
<span>$${entry.fields.price}</span>
<p class="food-desc">${entry.fields.pastaDescription}</p>
</div>
</div>
`
      })
    })
    .then(() => {
      setlayout();
    })
    .catch(console.error)

  // RISOTTO MENU

  client.getEntry('1TIiKfXHV1VJz3iminf5yX')
    .then((entries) => {
      entries.fields.risottoOrder.forEach((entry) => {
        risottoPanel.innerHTML = risottoPanel.innerHTML +
          `
          <div class=food-wrapper-oneCol>
<div class="food-item">
<h3 class="food-title">${entry.fields.risottoName}</h3>
<span>$${entry.fields.price}</span>
<p class="food-desc">${entry.fields.risottoDescription ? entry.fields.risottoDescription:""}</p>
</div>
</div>
`
      })
    })
    .then(() => {
      setlayout();
    })
    .catch(console.error)

  // MAINS MENU

  client.getEntry('2T2a6PSVa9tgveibXYQGEx')
    .then((entries) => {
      entries.fields.mainsOrder.forEach((entry) => {
        mainsPanel.innerHTML = mainsPanel.innerHTML +
          `
          <div class="food-wrapper-oneCol">
          <div class="food-item">
            <h3 class="food-title">${entry.fields.mainsName}</h3>
            <div class="sizes">
              <div class="food-sml size">
                <p class="food-size">Sml</p>
                <p>${entry.fields.smallPrice ? entry.fields.smallPrice:"-"}</p>
              </div>
              <div class="food-lrg size">
                <p class="food-size">Lrg</p>
                <p>${entry.fields.largePrice ? entry.fields.largePrice:"-"}</p>
              </div>
            </div>
            <p class="food-desc">${entry.fields.mainsDescription ? entry.fields.mainsDescription:""}</p>

          </div>
        </div>
`
      })
    })
    .then(() => {
      setlayout();
    })
    .catch(console.error)

  // SIDES MENU

  client.getEntry('3u2OEs7MVjhuZ7RoYDHDoy')
    .then((entries) => {
      entries.fields.sidesOrder.forEach((entry) => {
        sidesPanel.innerHTML = sidesPanel.innerHTML +
          `
          <div class=food-wrapper-oneCol>
          <div class="food-item">
            <h3 class="food-title">${entry.fields.sidesName ? entry.fields.sidesName:""}</h3>
            <p class="food-desc">${entry.fields.sidesDescription ? entry.fields.sidesDescription:""}</p>
            <p>${entry.fields.priceSingle ? entry.fields.priceSingle:""}</p>

            ${entry.fields.priceSingle ? "":`
               <div class="sizes">
                      <div class="food-sml size">
                        <p class="food-size">Sml</p>
                        <p>${entry.fields.smallPrice ? entry.fields.smallPrice:"-"}</p>
                      </div>
                      <div class="food-med size">
                        <p class="food-size">Med</p>
                        <p>${entry.fields.mediumPrice ? entry.fields.mediumPrice:"-"}</p>
                      </div>
                      <div class="food-lrg size">
                        <p class="food-size">Lrg</p>
                        <p>${entry.fields.largePrice ? entry.fields.largePrice:"-"}</p>
                      </div>
                    </div>
                  `}

          </div>
        </div>
        `
      })
    })
    .then(() => {
      setlayout();
    })
    .catch(console.error)

  // SALADS MENU

  client.getEntry('1ohOMgjfEBUgOOBfQX0YYC')
    .then((entries) => {
      entries.fields.saladsOrder.forEach((entry) => {
        saladsPanel.innerHTML = saladsPanel.innerHTML +
          `
          <div class="food-wrapper-oneCol">
          <div class="food-item">
            <h3 class="food-title">${entry.fields.saladsName}</h3>
            <div class="sizes underline-dotted">
              <div class="food-sml size">
                <p class="food-size">Sml</p>
                <p>${entry.fields.smallPrice ? entry.fields.smallPrice:"-"}</p>
              </div>
              <div class="food-med size">
                <p class="food-size">Med</p>
                <p>${entry.fields.mediumPrice ? entry.fields.mediumPrice:"-"}</p>
              </div>
              <div class="food-lrg size">
                <p class="food-size">Lrg</p>
                <p>${entry.fields.largePrice ? entry.fields.largePrice:"-"}</p>
              </div>
            </div>
          </div>
        </div>
`
      })
    })
    .then(() => {
      setlayout();
    })
    .catch(console.error)

  // COFFEE MENU

  client.getEntry('3mP7TynCzqQfvtLQs7lrsh')
    .then((entries) => {
      entries.fields.coffeeOrder.forEach((entry) => {
        coffeePanel.innerHTML = coffeePanel.innerHTML +
          `
          <div class=food-wrapper>
<div class="food-item">
<h3 class="food-title">${entry.fields.coffeeName}</h3>
<span>$${entry.fields.price}</span>
<p class="food-desc">${entry.fields.coffeeDescription ? entry.fields.coffeeDescription:""}</p>
</div>
</div>
`
      })
    })
    .then(() => {
      setlayout();
    })
    .catch(console.error)

  // DESSERT MENU

  client.getEntry('4JnJVJ3EDx2PE2CBIUCRzR')
    .then((entries) => {
      entries.fields.dessertOrder.forEach((entry) => {
        dessertPanel.innerHTML = dessertPanel.innerHTML +
          `
<div class=food-wrapper-oneCol>
  <div class="food-item">
    <h3 class="food-title">${entry.fields.dessertName}</h3>
    <p>${entry.fields.singlePrice ? entry.fields.singlePrice:""}</p>

    ${entry.fields.singlePrice ? "":`
       <div class="sizes underline-dotted">
              <div class="food-sml size">
                <p class="food-size">Sml</p>
                <p>${entry.fields.smallPrice ? entry.fields.smallPrice:"-"}</p>
              </div>
              <div class="food-med size">
                <p class="food-size">Med</p>
                <p>${entry.fields.mediumPrice ? entry.fields.mediumPrice:"-"}</p>
              </div>
              <div class="food-lrg size">
                <p class="food-size">Lrg</p>
                <p>${entry.fields.largePrice ? entry.fields.largePrice:"-"}</p>
              </div>
            </div>
          `}

  </div>
</div>
`
      })
    })
    .then(() => {
      setlayout();
    })
    .catch(console.error)

  // GELATO MENU

  client.getEntry('6BVWK2d445x25fpyqcKSf7')
    .then((entries) => {
      entries.fields.gelatoOrder.forEach((entry) => {
        gelatoPanel.innerHTML = gelatoPanel.innerHTML +
          `

<div class="food-item">
<h3 class="food-title">${entry.fields.gelatoName}</h3>
<span>$${entry.fields.price}</span>
<p class="food-desc">${entry.fields.gelatoDescription ? entry.fields.gelatoDescription:""}</p>
</div>

`
      })
    })
    .then(() => {
      setlayout();
    })
    .catch(console.error)

}

getMenu();
