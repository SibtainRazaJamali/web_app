//helper functions
var h = {
  rando: function (arr) 
  {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  getTime: function () {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var d = new Date();
    var mon = month[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    var dateAll = mon + " " + day + ", " + year;

    return dateAll;
  },
  getTaggedName: function () 
  {
    var adjectives = ['trusted', 'secure', 'hot', 'new', 'interesting', 'best practice', 'exciting'];
    var nouns = ['es6', 'browserify', 'webpack', 'gulp', 'reactDOM', 'devTools'];
    return this.rando(adjectives) + ' ' + this.rando(nouns);
  }
};


// App
var App = React.createClass({ displayName: "App",
  getInitialState: function () {
    return {posts: {} };
  },
  addPost: function (post) {
    var timestamp = new Date().getTime();
    // update the state object
    this.state.posts['post-' + timestamp] = post;
    // set the state
    this.setState({ posts: this.state.posts });
  },
  renderPost: function (key) {
    return /*#__PURE__*/React.createElement(NewPost, { key: key, index: key, details: this.state.posts[key] });
  },
  render: function () {
    var imgOne = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Balaton_Hungary_Landscape.jpg/1024px-Balaton_Hungary_Landscape.jpg";
    var imgTwo = "https://c2.staticflickr.com/8/7432/9087815445_1a14743549_b.jpg";
    var imgThree = "https://c2.staticflickr.com/6/5738/23929500196_b6a1ce1dfb_b.jpg";
    var imgFour = "https://pixabay.com/static/uploads/photo/2015/09/14/19/15/aerial-landscape-939963_960_720.jpg";
    var dummyPost = "Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.";
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Banner, null), /*#__PURE__*/
      React.createElement("div", { className: "row medium-8 large-7 columns" }, /*#__PURE__*/
      React.createElement(Post, { ptitle: "Flux flack", pimg: imgOne, date: "Nov 2, 2015", postbody: dummyPost, author: "Fred Armisen", comments: "2", tags: "" }), /*#__PURE__*/
      /*React.createElement(Post, { ptitle: "Inline Styles Aren't Necessary", pimg: imgTwo, postbody: dummyPost, date: "Aug 15, 2015", author: "Amy Schumer", comments: "5" }), #__PURE__
      React.createElement(Post, { ptitle: "Webpack and ES6", pimg: imgThree, date: "Mar 9, 2015", postbody: dummyPost, author: "Victoria Bell", comments: "3" }), #__PURE__
      React.createElement(Post, { ptitle: "No More Goobers", pimg: imgFour, date: "Jan 11, 2015", postbody: dummyPost, author: "Jack Sherlock", comments: "7" }), #__PURE__*/
      React.createElement("div", { className: "list-of-posts" },
      Object.keys(this.state.posts).map(this.renderPost)), /*#__PURE__*/

      React.createElement(AddPostForm, { addPost: this.addPost }))));



  } });



/*
  Add Post Form
  <AddPostForm />
*/
var AddPostForm = React.createClass({ displayName: "AddPostForm",
  createPost: function (event) {
    event.preventDefault();
    // take the data from the form and create an object
    var post = {
      title: this.refs.title.value,
      name: this.refs.name.value,
      desc: this.refs.desc.value,
      image: this.refs.image.value };

    // add the post to the App State
    this.props.addPost(post);
    this.refs.postForm.reset();
  },
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "callout secondary form-area" }, /*#__PURE__*/
      React.createElement("h5", null, "Add a Post to the React Blog"), /*#__PURE__*/
      React.createElement("form", { className: "post-edit", ref: "postForm", onSubmit: this.createPost }, /*#__PURE__*/
      React.createElement("label", null, "Post Title", /*#__PURE__*/
      React.createElement("input", { type: "text", ref: "title", placeholder: "Post Title", required: true })), /*#__PURE__*/

      React.createElement("label", null, "Author Name", /*#__PURE__*/
      React.createElement("input", { type: "text", ref: "name", placeholder: "Full Name required", required: true })), /*#__PURE__*/

      React.createElement("label", null, "Post Body", /*#__PURE__*/
      React.createElement("textarea", {
        ref: "desc",
        placeholder: "Write your post here", required: true })), /*#__PURE__*/

      React.createElement("label", null, "Image URL - ", /*#__PURE__*/React.createElement("span", { className: "highlight" }, "use this one to test 'https://bit.ly/1P9prpc'"), /*#__PURE__*/
      React.createElement("input", { type: "url", ref: "image", placeholder: "The URL of the featured image for your post", required: true })), /*#__PURE__*/

      React.createElement("button", { type: "submit", class: "button" }, "Add Post"))));



  } });



/*
  NewPost
  <NewPost />
*/
var NewPost = props => {
  var details = props.details;
  return /*#__PURE__*/(
    React.createElement("div", { className: "blog-post" }, /*#__PURE__*/
    React.createElement("h3", { className: "ptitle" }, details.title, /*#__PURE__*/React.createElement("small", null, h.getTime())), /*#__PURE__*/
    React.createElement("img", { className: "thumbnail", src: details.image, alt: details.name }), /*#__PURE__*/
    React.createElement("p", null, details.desc), /*#__PURE__*/
    React.createElement("div", { className: "callout callout-post" }, /*#__PURE__*/
    React.createElement("ul", { className: "menu simple" }, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Author: ", details.name)), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Comments: 0")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Tags: ", h.getTaggedName()))))));




};


// Nav component
var Nav = React.createClass({ displayName: "Nav",

  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "top-bar" }, /*#__PURE__*/
      React.createElement("div", { className: "top-bar-left" }, /*#__PURE__*/
      React.createElement("ul", { className: "menu" }, /*#__PURE__*/
      React.createElement("li", { className: "menu-text" }, "React Blog"), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Login")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Register")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "View"))))));
  } });




// Banner component
var Banner = () => 
  React.createElement("div", null,
  React.createElement(Nav, null),
  React.createElement("div", { className: "big-banner" },
  React.createElement("div", { className: "callout large primary" },
  React.createElement("div", { className: "row column text-center" },
  React.createElement("h1", null, "React Blog")))));







// Blog Post
var Post = props => {
  const tryClick = function () {
    alert('just trying out click events lalala');
  };

  var com = "Comments";
  return (
    React.createElement("div", { className: "blog-post" }, 
    React.createElement("h3", { className: "ptitle" }, props.ptitle, /*#__PURE__*/React.createElement("small", null, props.date)), /*#__PURE__*/
    React.createElement("img", { className: "thumbnail", src: props.pimg }), /*#__PURE__*/
    React.createElement("p", null, props.postbody), /*#__PURE__*/
    React.createElement("div", { className: "callout callout-post" }, /*#__PURE__*/
    React.createElement("ul", { className: "menu simple" }, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#", onClick: tryClick }, "Author: ", props.author)), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, com, ": ", props.comments)), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Tags: ", h.getTaggedName()))))));




};

ReactDOM.render( React.createElement(App, null), document.querySelector("#main"));

//polyfill for key
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
/*
if (!Object.keys) {
  Object.keys = function () {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
    hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString'),
    dontEnums = [
    'toString',
    'toLocaleString',
    'valueOf',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'constructor'],

    dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [],prop,i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }();
}

//header scroll stuff
window.onscroll = function (e) {
  var nav = document.getElementsByClassName("top-bar")[0],
  banner = document.getElementsByClassName("big-banner")[0],
  range = 70,
  scrollTop = document.body.scrollTop;

  if (scrollTop > range) {
    nav.classList.add("scrollNav");
    banner.classList.add("blurred");
  } else
  {
    nav.classList.remove("scrollNav");
    banner.classList.remove("blurred");
  }
};
*/