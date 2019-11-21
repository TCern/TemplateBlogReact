const initialState = {
    blogs: [
      {
        id:"0", 
        title: "Mamma mia", 
        author:"Pasta la vista",
        headline: "Pineapple pizza",
        content: "Greek-Canadian Sam Panopoulos claimed that he created the first Hawaiian pizza at the Satellite Restaurant in Chatham, Ontario, Canada in 1962. Inspired in part by his experience preparing Chinese dishes which commonly mix sweet and savoury flavours, Panopoulos experimented with adding pineapple, ham, bacon and other toppings which were not initially very popular.[1][2][3][4][5] The addition of pineapple to the traditional mix of tomato sauce and cheese, sometimes with ham or sometimes with bacon, soon became popular locally and eventually became a staple offering of pizzerias around the world.[6] Panopoulos chose the name Hawaiian after the brand of canned pineapple they used."
      }, 
      {
        id:"1", 
        title:"Lorem ipsum", 
        author:"Dolores",
        headline: "Dolor sit amet",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      }]
  };
  function rootReducer(state = initialState, action) {
    if(action.type === "ADD_BLOG"){
      return Object.assign({}, state, {
        blogs: state.blogs.concat(action.payload)
      });
    }
    if(action.type === "DELETE_BLOG"){
      const id = action.payload;
      const newBlogs = state.blogs.filter(blog => blog.id !== id);
      return Object.assign({}, state, {
        blogs: newBlogs
      })
    }
    return state;
  };
  export default rootReducer;