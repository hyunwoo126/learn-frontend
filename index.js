const e = React.createElement;

class app extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sortBy: 'term',
      asc: true,
      searchTimeout: null,
      searchTerm: '',
      visible: false,
      startHidden: true,
      data: [
        {
          term: 'HTML', 
          def: 'Traditionally, where the content goes. With the popularity of single page webapps, content is written more and more inside javascript, but in the end, it all ends up on HTML since that\'s what browers know how to render.',
          difficulty: 3,
          mastery: 10,
          importance: 10,
        },
        {
          term: 'CSS', 
          def: 'Traditionally, where the style goes. The hardest thing about CSS is layout - how to use display, position, and vertical-align properties to get it to be where you want. CSS is also the primary way to apply "responsive" design.',
          difficulty: 5,
          mastery: 10,
          importance: 10,
        },
        {
            term: 'Media Queries',
            def: 'Introduced in CSS3, media queries in CSS can target styling to specific device type, such as print or screen, but most commonly used to target different CSS to different device sizes. A big part of responsive design.',
            difficulty: 3, mastery: 10, importance: 10,
        },
        {
            term: 'responsive design',
            def: 'A design principle that strives to make web content viewable and usable on a range of device sizes, from desktop to mobile screen. Often times, the same website can have a completely different layout depending on viewing device. Responsive design is often done through CSS and media queries.',
            difficulty: 6, mastery: 10, importance: 10,
        },
        {
          term: 'XML',
          def:  'It is a format to convey information using something similar to HTML tags. You will see this term here and there (XMLHttpRequest, X in AJAX etc.), but most of them are misnomers of sorts because they are not restricted to XML only. The name XML stuck around mostly for legacy reasons. Nowadays, JSON is a much more common format to handle information over the network on the web.',
          difficulty: 2, mastery: 7, importance: 1,
        },
        {
          term: 'JavaScript', icon: 'javascript-original.svg',
          def:  `The de facto programming language of the web frontend. However, the language is increasingly being adopted outside the browser, most notably on the serverside in the form of Node.js. Javascript is also found in native mobile apps made with PhoneGap or NativeScript.`,
            difficulty: 6, mastery: 7, importance: 10,
        },
        {
          term: 'JSON',
          def: `String representation of a javascript object. You can use JSON.stringify() and JSON.encode() functions to convert to JSON and javascript object, respectively. Because of the similarity and ease of conversion with javascript object, JSON is a common format used to pass data on the web.`,
          difficulty: 2, mastery: 10, importance: 10,
        },
        {
          term: 'JQuery', icon: 'jquery-original.svg',
          def:  `One of the oldest javascript libraries around that still enjoys widespread use. 
                It is primarily used to "traverse the DOM tree" and manipulate the DOM (plus some useful tools such as wrapper functions to do AJAX request easily). JQuery has fallen out of favor somewhat in recent years due to frontend development paradigm shifting away from direct manipulation of the DOM in favor of manipulating data, and using libraries/frameworks such as React, Vue.js, and Angular to keep the DOM in sync. However, for smaller applications, JQuery might be all you need. JQuery has been around for decades, and it is very stable, reliable, and its documentation is awesome.`,
            difficulty: 7, mastery: 10, importance: 7,
        },
        {
          term: 'static websites',
          def:  `This refers to the traditional websites where the content does not change much from the initial render. 
                On these sites, javascript use is minimal or even not necessary.
                This is the opposite end of the spectrum from single page webapps.`,
                difficulty: 3, mastery: 10, importance: 8,
        },
        {
          term: 'single page web application',
          def:  `An application on the browser where user can interact with and manipulate the application without reloading the page or going to another URL. Such application typically makes heavy use of javascript to manipulate the content. An example that came before this terminology became a buzzword is an email client on the browser, like Gmail.`,
          difficulty: 8, mastery: 9, importance: 9,
        },
        {
          term: 'React', icon: 'react-original.svg',
          def:  `A javascript library that can be used for the "view" in the MVC model. 
                Mostly useful for single page applications. Backed by Facebook. Although you can use React with out JSX, JSX is a popular way to develop react. Often mentioned in comparison with Angular and Vue.js frameworks.`,
          difficulty: 8, mastery: 5, importance: 5,
        },
        {
          term: 'Node.js', icon: 'nodejs-original.svg',
          def:  `Not necessarily for frontend development, but frontend developers will undoubtly come across this term. Just knonw that it is typically a server side environment that lets you use JavaScript on the server based on the Chrome V8 javascript engine.`,
          difficulty: 6, mastery: 10, importance: 5,
        },
        {
          term: 'JSX', icon: 'react-original.svg',
          def:  `An extension of javascript that accepts some template-like syntax that makes developing with React easier. JSX is not recognizeable in the browser, so it must be transpiled with tools like Babel.`,
          difficulty: 6, mastery: 6, importance: 5,
        },
        {
          term: 'Babel', icon: 'babel-original.svg',
          def:  `A javascript transpiler. It is used to transpile the latest versions of javascript (e.g. ES2016) into an older, more browser compatible version of javascript (e.g. ES5). Notably, it is also able to transpile JSX into regular javascript. This allows developers to code with the latest javascript features, then transpiling the code back to a older version of javascript for production. It is typically used as part of a preprocessing step for production build.`,
          difficulty: 4, mastery: 5, importance: 5,
        },
        {
          term: 'Webpack', icon: 'webpack-original.svg',
          def:  `A build tool to bundle your webapp's many js/css files into single js/css file. Webpack can also do minification and transpile JSX code into regular javascript. All of this reduces downloading time when the browser requests one js or css file as opposed to many. You can also manage your js and css file dependencies by using import/export syntax and webpack can handle them correctly on build time. Also has 'tree shaking' feature where it will analyze the dependencies and throw away anything that is not being used.`,
          difficulty: 5, mastery: 2, importance: 6,
        },
        {
          term: 'PhoneGap/Cordova/ionic',
          def:  `Tools to build Android and iOS apps using HTML, javascript, and CSS. Resulting app will be based on WebView with a native wrapper that gives acess to native APIs to javascript inside WebView. Disadvantages include sluggish response and animations compared to native counter parts, and limited access to native mobile APIs. Tools like this will become less relevant as mobile browsers are increasingly giving javascript access to native mobile APIs (notifications, etc) and offline features (through manifest) that brings webapps closer to native apps.`,
          difficulty: 5, mastery: 2, importance: 3,
        },
        {
          term: 'Vue.js', icon: 'vuejs-original.svg',
          def:  `Javascript library to handle the view in MVC model. Often compared to React and Angular, but not as popular. Seeing more adoption by international companies, especially in China such as Alibaba, Baidu, and Xiaomi. Compared to React, it does not have to deal with new syntax such as JSX. Regular html tags, attributes, and css can be applied onto its string templates.`,
          difficulty: 8, mastery: 7, importance : 6,
        },
        {
          term: 'AJAX',
          def: 'A way for the client to request, update, delete resources over the network using GET, POST, DELETE, PUT methods over HTTP protocol triggered through javascript, without reloading the page. It can be thought of as the client side code to handle interactions with RESTful backend APIs. There are many implementations of this, often a wrapper function around the XMLHttpRequest API.',
          difficulty: 7, mastery: 9, importance: 8,
        },
        {
          term: 'RESTful API',
          def: 'An API style that follows the REST architecture. An API that allows the client to request, update, delete etc. resources by using GET, POST, DELETE, PUT methods over HTTP protocol. As a frontend developer, this would be the most common interface to interact with the backend.',
          difficulty: 6, mastery: 8, importance: 9,
        },
        {
          term: 'Promises',
          def: 'Introduced in ES2015, promises are a new way of doing callbacks. Use of promises can avoid "callback hell" where code can become unreadble. You can store a promise in a variable and pass them around your code even before promise is resolved and returns a value. You can also handle sequential and parallel functions more easily. You can use the dot notation and .then()/.catch() notation to chain calls and mimic try/catch logic. Interestingly, it is not natively supported in Node.js, although you can import a library for it.',
          difficulty: 6, mastery: 7, importance: 4,
        },
        {
          term: 'async/await',
          def: 'A promise based syntax, but allows you to pause a particular function while awaiting for a promise to resolve. One of the more important features to be introduced in ES2016. Currently not widely available in browsers.',
          difficulty: 8, mastery: 5, importance: 3,
        },
        {
          term: 'Object Oriented Programming',
          def: 'In many languages, this is the primary way of writing code, where you define classes and organize your code using inheritance of those classes. Most of the logic is then about how these classes interact with each other through each object\'s state and its methods. It is possible to code in this style with javascript by using the "new" keyword, prototype, and, recently added in ES2015, classes.',
          difficulty: 8, mastery: 8, importance: 2,
       },
        {
          term: 'Functional Programming',
          def: 'A way to build software by composing pure functions. Pure functions are functions that given same input parameters, it will always return the same result, meaning the outcome of the function does not depend on the state of the environment outside the function. This makes code predictable, testable, and less error prone.',
          difficulty: 8, mastery: 7, importance: 8,
        },
        {
          term: 'Chrome Dev Tools', icon: 'chrome-original.svg',
          def: 'The most useful tool for examining and debugging the web. Although it is really easy to get started with, the ever increasing features within dev tools makes it an ongoing endeavor to master it. Easy to get started, hard to master. The perfect combination.',
          difficulty: 7, mastery: 7, importance: 8,
        },
        {
            term: 'polyfill',
            def: 'A piece of code that you would add as a fallback in the case a browser does not have support for a particular native javascript feature.',
            difficulty: 5, mastery: 10, importance: 9,
        },
        {
          term: 'ECMAScript',
          def: 'Often shorthanded to ES followed by version number. Javascript is not maintained, developed, or owned by a single person/company/entity. There is nothing stopping browser vendors from having their own version of javascript in their browser. ECMAScript is a standardized version of javascript, where it is really up to the browsers to follow or not. In the early days, many browsers did indeed have their particular versions of javascript, and developers had to use many polyfills to be compatible across different platforms. New versions of ECMAScript were few and far between until ES2015, which from this onwards there would be a new standard published every year.',
          difficulty: 8, mastery: 9, importance: 7,
        },
        {
          term: 'ECMAScript2015',
          def: 'Als known as ES6, or ECMAScript 6th Edition. A big jump from the previous version ES5, which has been around for several years. Introduced important javascript features such as modules, promises, new variable declarations const and let, and classes.',
          difficulty: 6, mastery: 4, importance: 7,
        },
        {
            term: 'npm (Node Package Manager)', icon: 'nodejs-original.svg',
            def: 'Most popular tool to manage frontend build systems. Many people install Node.js on their development machine just to use npm and not necessarily any Node.js code. It is used to install and manage various tools/libraries for the frontend such as React, Webpack, Babel and many more.',
            difficulty: 6, mastery: 8, importance: 6,
        },
        {
            term: 'WebSockets',
            def: 'Unlike a typical GET/POST ajax request where the connection over the network terminates upon receving a response from the server, websockets maintain the connection to the server once initiated. This makes requests much faster, but most importantly, server can push information to the client. An alternative to websocket is polling, where ajax request is made every few seconds to the server to check for any new data. A good example is a chat app, where websocket connection will allow the client to receive new chat message as soon as it is available from the server.',
            difficulty: 6, mastery: 10, importance: 6,
        },
        {
            term: 'Scope',
            def: 'One of the hardest concepts to master in javascript. Forgiving nature of javascript as well as features such as functions, function instances, global scope, hoisting, anonymous functions, and use of asynchronous callbacks, keeping track of variable scope can be very difficult. With the introduction of new let and const variable declarations in ES2015 will give developers more control over restricting a variable\'s scope.',
            difficulty: 10, mastery: 8, importance: 9,
        },
        {
            term: 'AWS (Amazon Web Services)', icon: 'amazonwebservices-original.svg',
            def: 'The service that popularized hosting your app on the "cloud". Using services like this gets rid of manually maintaining a server somewhere to host your app. Also such service will take care of your code and data replication since it is hosted across many servers around the world. Scaling of your app can also be simplified. You will have to learn to use their suite of APIs to work with AWS.',
            difficulty: 7, mastery: 1, importance: 7,
        },
        {
            term: 'Heroku', icon: 'heroku-original.svg',
            def: 'Operated by Salesforce, it is an alternative to AWS for cloud hosting.',
            difficulty: 7, mastery: 7, importance: 6,
        },
        {
            term: 'php', icon: 'php-original.svg',
            def: 'A backend language that\'s been around for many decades. Very popular especially due to wordpress being based on php. One advantage is that it is quite easy to get setup with. As long as php is installed in the backend environment, you can simply use an FTP connection to upload your php files and you are good to go, without needing to call any initialization commands for the server.',
            difficulty: 8, mastery: 5, importance: 4,
        },
        {
            term: 'global scope',
            def: 'The most parent scope. In the case of javascript in the browser, the global scope is the window object. All global variables and functions are actually properties of window object. In javascript, if variable is not declared using var/let/const keywords, it is automatically created at the global scope. Also any API the browser provides should be available as a window object property, meaning global scope.',
            difficulty: 5, mastery: 10, importance: 10,
        },
        {
            term: 'let/const',
            def: 'Two new ways of declaring variables in javascript, introduced in ES2015. Most notably, "let" is scoped within the block({}), and "const" value is fixed and cannot be reassigned with a new value. However, properties of const object can be changed.',
            difficulty: 8, mastery: 9, importance: 6,
        },
        {
            term: 'webview',
            def: 'It is a way to convert a webapp into a mobile app, and it is the basis for things like PhoneGap. Essentially a browser wrapped inside native Android or iOS shell. Although this allows for a single javascript codebase to be used cross-platform, some major disadvantages are that performance is sluggish and often access to native APIs are limited.',
            difficulty: 8, mastery: 7, importance: 4,
        },
        {
          term: 'AngularJS',
          def: 'One of the big 3 (React, Vue) of frontend frameworks, and oldest of the 3. Backed by Google. There is a complete redesign from Angular 1 to 2. Versions after 2 is just iterations of Angular 2.',
          difficulty: 8, mastery: 1, importance: 5,
        }
      ]
    }
  }


  componentWillMount(){
      this.sortData(this.state.sortBy);
  }

  componentDidMount(){
    this.fadeIn();
  }

  componentDidUpdate(){
      return;
      if(this.state.visible){
        this.state.startHidden = true;
      } else {
        this.fadeIn();
      }
  }

  fadeIn(){
    setTimeout(function(that){
        that.setState({startHidden: false});
    },0, this);
  }


  sortData(sortBy, asc){
    var data = this.state.data;
    if(typeof sortBy != 'string'){ sortBy = this.state.sortBy; }
    if(typeof asc != 'boolean'){ asc = this.state.asc; }
    if(sortBy == 'mastery' || sortBy == 'importance'){ asc = !asc; }

    data.sort((a, b)=>{
      var varA = a[sortBy], varB = b[sortBy];
      if(typeof varA == 'string'){ varA = varA.toUpperCase(); }
      if(typeof varB == 'string'){ varB = varB.toUpperCase(); }
      if(varA === 'undefined' && typeof varB == 'number'){ varA = 0; }
      else if(varB === 'undefined' && typeof varA == 'number'){ varB = 0; }

      var comp = 0;
      if(varA > varB){
        comp = asc ? 1 : -1;
      } 
      else if(varB > varA){
        comp = asc ? -1 : 1;
      } 
      else if(sortBy != 'term'){
        //fall back to sorting based on terms of other is equal
        comp = a.term.toUpperCase() > b.term.toUpperCase() ? 1 : -1;
      }

      return comp;

    });

    this.setState({
        sortBy: sortBy,
        data: data});
  }

  getSortExplain(){
      if(this.state.sortBy == 'term'){
          return 'Alphabetical sorting.';
      }
      else if(this.state.sortBy == 'difficulty'){
          return 'Sorted by difficulty of concepts.';
      }
      else if(this.state.sortBy == 'mastery'){
          return "Sorted by Sky's current mastery of each concept.";
      }
      else if(this.state.sortBy = 'importance'){
          return "Sorted by importance or relevance to frontend development.";
      }
      else{
          return '';
      }
  }

  showDifficulty(lvl){
    if(typeof lvl != 'number'){ return ''; }
    if(lvl < 4){ return 'easy'; }
    else if(lvl < 7){ return 'medium'; }
    else{ return 'hard'; }
  }

  showMastery(lvl){
    if(typeof lvl != 'number'){ return ''; }
    if(lvl < 4){ return 'Heard of it.'; }
    else if(lvl < 6){ return 'Learning it now.'; }
    else if(lvl < 9){ return 'Pretty good with it.'; }
    else{ return 'Excellent.'; }
  }

  getLiClass(lvl){
    if(typeof lvl != 'number'){ return ''; }
    const sortBy = this.state.sortBy;
    var div = 3;
    if(sortBy == 'term'){ return ''; }
    else if(sortBy == 'difficulty'){ div = 3; }
    else if(sortBy == 'mastery'){ div = 4; }
    return 'lvl_'+Math.floor(lvl/div);
  }

  hasSearchMatch(i){
    if(this.state.searchTerm.length < 1){
        return true;
    }
    const term = this.state.searchTerm.toLowerCase();
    const target = this.state.data[i].term.toLowerCase();
    if(target.indexOf(term) > -1){ return true; }
    else { return false; }
  }

  handleSearchOnChange(event){
    const value = event.target.value, that = this;
    this.setState({ searchTerm: value });
    /*
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(function(){
        that.setState({ searchTerm: value });
    },800); 
    */
  }

  clearSearch(){
    this.setState({ searchTerm: '' });
  }

  renderSearchBox(){
    return e('span', {className: 'searchBox'},
        e('i', {className: 'fa fa-search'}),
        e('input', {
            type: 'text', value: this.state.searchTerm,
            onChange: (event)=>this.handleSearchOnChange(event)
        }),
        e('button', {onClick: ()=>this.clearSearch() }, 'x')
    );
  }

  handleReverseOnChange(event){
    this.state.asc = !this.state.asc;
    this.sortData();
  }


  render(){
    if(this.state.startHidden){
        this.state.visible = false;
    } else {
        this.state.visible = true;
    }

    var lis = this.state.data.map((obj, i)=>{
        if(!this.hasSearchMatch(i)){ return; }
      return e('li', {
          key: i, 
          //className: this.getLiClass(obj[this.state.sortBy])
        },
        this.state.sortBy  != 'term' ? e('div', {className: 'rankBlock'}, 
            e('div', null, 
                e('div', {className: 'number'}, obj[this.state.sortBy]),
                e('div', null, 'score')
            ),
        ) : '',
        e('div', null,
          e('h3', null, obj.term,
                obj.icon ? e('img', {src: 'icons/'+obj.icon, className: 'icon'}) : ''
            ),
          e('div', {className: 'scoresDetail'}, 
            e('div', null, `Importance/relevance to frontend dev: ${obj.importance} / 10`),
            e('div', null, `Concept difficulty: ${obj.difficulty} / 10`),
            e('div', null, `My mastery of concept: ${obj.mastery} / 10`),
          )
        ), 
        e('p', null, obj.def)
      );
    });

    return e('div', { className: 'sortBy_'+this.state.sortBy },
        e('div',{className: 'controls'},
            e('button', {
                onClick: ()=>{ this.sortData('term'); },
                className: 'btn_term'
            }, 'term'),
            e('button', {
                onClick: ()=>{ this.sortData('importance'); },
                className: 'btn_importance'
            }, 'importance'),
            e('button', {
                onClick: ()=>{ this.sortData('difficulty'); }, 
                className: 'btn_difficulty',
            }, 'difficulty'),
            e('button', {
                onClick: ()=>{ this.sortData('mastery'); },
                className: 'btn_mastery'
            }, 'mastery'),
            e('label', {className: 'label_reverse'}, 
                e('input', {
                        type: 'checkbox', 
                        onChange: (event) => this.handleReverseOnChange(event) 
                    }
                ),
                e('span', null, 'reverse order')
            ),
            this.renderSearchBox(),
            e('div', null, this.getSortExplain())
        ),        
        e('ul', {className: 'ul_list'+ (this.state.visible ? ' show' : '')}, lis)
    );
  }
}


ReactDOM.render(
  e(app),
  document.getElementById('app')
);