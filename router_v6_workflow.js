
//////React Router 6 v6 


Least Important Concepts We Dont Use that Much 

		1 HashBrowser
		2 Unstable_HistoryBrowser 
		3 Memory router
		4 Static Router !

Main conceepts 

		Link component
		Outlet (renders everything inside the shared nested Component !)
		Index Pages
		NavLink component
		URL Params
		UseNavigate
		Navigate
		ProtectedRoute (Navigate)
		Search Parameter
		{replace : true}
		Lazy Loading
		Dunamic Routes(useParams to nagigate Automatically)
		
		React Router V6 update 	
		(can able to identify the hard-coded(url) vs useParams dynamic Routes)



///Syntax 

import { BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<div>Home Page</div> } />
      <Route path='/about' element={<div>about Page</div> } />
    </Routes>
  </BrowserRouter>;
}


//////////////////NEXT///////////////////////////////////

 

////To Navigate inside within project we use {Link} from 'react-router-dom'

//syntax | It prevents default refresh while  navigating inside

import {Link} from 'react-router-dom';

const Home  = ()=>{
	return (
		<div>
			<h2>Home Page </h2>
			<Link to = '/Home' className = 'btn'>
		</div>
	)
}


//////////////////NEXT///////////////////////////////////


////Navigate to default or Error Page

return <BrowserRouter>
    <Routes>
      <Route path='*' element={<div>Error Page</div> } />
    </Routes>
  </BrowserRouter>;
  
  
  //////////////////NEXT///////////////////////////////////



import {Link} from 'react-router-dom';

	const Home  = ()=>{
		return (
			<div>
			<h2>Home Page </h2>
			<Link to = '/Home' className = 'btn'>
		</div>
	)
}


//////////////////NEXT///////////////////////////////////

INDEX Route

		The word index will always act as a PROP and matches the base URL or Home URL,
		The home route only works when it renders its base URL (/)

Syntax 

function App() {
 

  return <BrowserRouter>
    <Routes>
	
      <Route path='/' element={<Shared />} >
        /////<Route index element={ <Home/>}></Route>/////
		
        <Route path='about' element={<About/> } />
        <Route path='products' element={<Products />} />
        <Route path='info' element={<Info/>} />
        <Route path='/info/footer' element={<Footer/>} />
        <Route path = '*' element={<Error/> } />
      </Route>
	  
	  
	  //////////////////NEXT///////////////////////////////////
	   
	  //#### NavLink (style)

- StyledNavbar.js

```js
import { NavLink } from 'react-router-dom';

<nav className='navbar'>
  <NavLink
    to='/about'
    style={({ isActive }) => {
      return { color: isActive ? 'red' : 'grey' };
    }}
  >
    Home
  </NavLink>
</nav>;
```

#### NavLink (className)

- StyledNavbar.js

```js
<nav className='navbar'>
  <NavLink
    to='/'
    className={({ isActive }) => (isActive ? 'link active' : 'link')}
  >
    Home
  </NavLink>
</nav>
```
 //////////////////NEXT///////////////////////////////////
 
 #### Reading URL Params

          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />


 //////////////////NEXT///////////////////////////////////

#### Protected Route



<Route
  path="dashboard"
  element={
    
	<ProtectedRoute user={user}>
      <Dashboard user={user} />
    </ProtectedRoute>
  }
/>


 //////////////////NEXT///////////////////////////////////
 
 //Lazy Loading 
 
 
 
 Step 1 : Making a dynamic import 
 ///// const LazyAbout = React.lazy(() => import('./components/About'))

setp 2 : WWrap it with React.SusPense.Fallback

   <React.Suspense fallback='Loading ...!'>
          <LazyAbout/>
        </React.Suspense>
		
		
		
 //////////////////NEXT///////////////////////////////////
 
 
 ############# Nested Route Basic Example ###################
 
		<Route path="/books">
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>


Topics

1 Nested Routes
2 Shared Layoouts
3 Outlet
 4 Index Routes
 5 StyledNavbar 
