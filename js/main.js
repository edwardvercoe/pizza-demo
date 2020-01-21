const progressTag = document.querySelector("div.progress")
const bodyTag = document.querySelector("body")

// scroll progression bar
document.addEventListener("scroll", function() {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = (pixels / totalScrollableDistance) * 100
  progressTag.style.width = `${percentage}%`

})




// MASONARY MENU JS
// https://codepen.io/besiw/pen/NwBwNM

// Set nr of columns for different screen-sizes. These settings has to be consistent with css @media
const masonrySettings = {
  sm:{width: 430,columns: 1},
  md:{width: 768,columns: 1},
  lg:{width: 992,columns: 2},
  xl:{width: 1500,columns: 2}
}

//Set child item in columnes, and find highest column
//param: number of columns

function masonary (col){

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
    let height=panels[i].offsetHeight;

    //Choose the belongin column, add the height of each child to array that stores column height value
    col_heights[order] += parseFloat(height);

  }

  //Set the height of masonry container to the heightest column
  const highest = Math.max.apply(Math, col_heights);
  container.style.maxHeight = highest+10+'px';

}

//set layout depending of window width
function setlayout(){
  window_width=window.innerWidth || document.documentElement.clientHeight || document.body.clientHeight;

  if (window_width<=masonrySettings.sm.width){

    masonary (masonrySettings.sm.columns);

  } else if (window_width<=masonrySettings.md.width){

    masonary (masonrySettings.md.columns);

  } else if (window_width<=masonrySettings.lg.width){

    masonary (masonrySettings.lg.columns);

  }  else{

    masonary (masonrySettings.xl.columns);

  }
}
//initiate layout on page load;
setlayout();

//listen for window resize, and change number of columns accordingly
window.onresize = setlayout;


// END MASONARY MENU END MASONARY MENU END MASONARY MENU
