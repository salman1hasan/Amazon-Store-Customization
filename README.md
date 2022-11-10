Salman Hasan 

UNGUARDED Project
https://vimeo.com/manage/videos/767973367/privacy


NEXTJS 

(Take extensive notes when you make these apps this way you remember how to make these projects otherwise, I'll forget how to make a project) 

Step by step take complete notes. When making a project take notes because ReactJS and Nextjs are completely different, I should’ve took extensive notes while making my ReactJS project this way I can clone it and make other projects but since I didn’t I literally don’t have a microsoft word template to make that project again. I made that as fast as possible because that replaced all the education I lacked and I didn’t have time to think. Now that I have time make sure that I take all the notes while making this project so this way it retains. I know how to work with front end and backend. I would have to review all of my backend and then try to remember how to do my Reactjs app. Rather than look back, take notes on every single step when it comes to NEXTJS this way im completely comfortable with that. I’m going to look around for my reactjs, I know I took extensive notes on the backend I created.  

1.NPX create-next-app store (Downloads npx create-next-app-store) 

2.Npx create-next-app@latest --use-npm (Creates next app latest) 

3.NPM run dev (runs the local server) 

4.Install Tailwind - npm install -D tailwindcss postcss autoprefixer (Installs tailwind) 

5.Configure your template paths. Adding this configures the page /** @type {import('tailwindcss').Config} */ module.exports = { content: [ "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", ], theme: { extend: {}, }, plugins: [],  

6. Go to css file and add @tailwind base,@tailwind components, @tailwind utilities  

7. Home.module css gets deleted from the index.js file  

8.Delete all the files besides the head and the h1 file 

9.Add the h1 className = “text-3xl font-bold" , the text is 3xl and the font- is bold 

10.Add a components folder and create layout.js 

11.In layout.js create rfc file 

12. Div and a closing div element. Header and a closing header element. Main and a main element. Footer and a closed footer element 

13.Add header, then add main, then add footer 

14. In the main component add main and add children, and add children to export default function Layout 

15.Import layout from home page insert it by using  ‘../components/layout’ and add layout component to home page 

16.Add Head from function layout and add <Head> <title>{title? title + '-Amazona':'Amazona'}</title> <meta name="description" content="Ecommerce Website"/> <link rel="icon" href="/favicon.ico"/></Head> 

17.Go to eslintric.json and added “eslint:reccomended” and then from there go to layout and add title  

18. Add a title to home page to my index.js and that will show up on the nav bar that will show home page-amazona 

19. Flex min-h-screen flex-col justify between.  [Css properties that are important to remember] 

If you move mouse over tailwind then you can get css properties 

(Flex-display:flex) 

(min-h-screen- makes page full height) 

(Flex-col-Vertically) 

Justify-between- Create space 

20.Inside the navigation create a header and add a nav route. Then import Link and add an href 

21.Add a className=’text-lg’ (tailwind to set a font size to 1.1), font-bold and set it = to amazona </a> 

22.Create a div to create headerlinks, create link href and set it = to cart and set another one = login 

23.In the nav classname set it = ‘flex h-12' and justify-between (makes amazona go left and makes cart go right) (Creates 3rem space) 

24.In the nav create a shadow-md this way it looks like a navigation 

25.Items center moves the center vertically, set the horizontal padding to px-4 

26. Set the padding a classname= ‘p-2’ and the same for login 

27. In the main section set the boxname to container, it’s a classname from tailwind that sets the width to 100 and sets multiple screens 

28.Set m-auto which means margin auto, and padding horizontally to 4 

29.Create flex and justify-center and items center, to put the footer horizontal and vertically and set the height to 10, 2.5 rem and create shadow inner 

30. Import a folder called utils and add a file data.js. In the data.js file add an object called const data 

31. Products: [ 

  { 

name: 'Free Shirt', 

slug:'Free-shirt', 

category: 'Shirts', 

image: '/images/shirt1.jpg', 

price: 70, 

brand: 'Nike', 

rating: 4.5, 

numReviews: 8, 

countInStock:20, 

description: 'A popular shirt', 

} 

 

And add 6 products. 

32.Download all the images and add them to your file and create an images folder in the ug 

33. Create an rfc and press tab then from there add import product. Then add div classname=”card” and add link href = `/product/${product.slug}`} This is specifically  one of the keys in a product 

34.Add <a> tag and add an image tag 

35. <img src ={product.image}, alt={product.name}, className="rounded shadow"/> 

36.Create a div className=”flex flex-col items-center justify-center p-5" 

37.<Link href={`/product/${product.slug}`}> Created a link href of product and product.slug 

38. Create a h2 className=”text-lg”>{product.name}</h2> 

39. Add <a> and </a> tag that wrapped h2 classname with text-lg 

40.<p className=”mb-2”> {product.brand}</p> and add the className mb-2 and product brand to 2 

41.<p>${product.price}</p>, added a ${product.price} to the paragraph  

42.<button className=”primary-button” type=”button”> Add to cart </button> 

43. Grid grid-cols-1(Shows 1 item in a row) gap-4 md: grid-cols-3(Shows 3 items in a row) lg:grid-cols-4(show 4 items in a row large) display grid add a grid-cols-1 and add a gap-4 and add a md grid-cols-3 and lg grid-cols-4 

44. {Data.products.map((product) => ( 

      <ProductItem product={product} key={product.slug}></ProductItem> 

))} 

45. Add card and add primary button add mb-5 block rounded-lg border border-gray-100 show-md;  

46. Primary-button rounded bg-amber-300 py-2 px-4 shadow outline-none hover:bg-amber-400 and active:bg-amber-500 

47. Added these styles you can mess around with these styles later. 

48. Go to product and add a page [slug.js] and import rfc 

49. Change the name of the component and use Layout to add all the files that are needed. Layout title and put product.name  

50. Define query from use router(); 

51. Import const {slug} = query; 

52. Import useEffect and download npm i -D @types/react, but I don’t even use it which is interesting 

53. If(!product) return <div>Product not found</div> 

54.return(<layout title={product.name}> <div className=”py-2”></div><layout> 

55.Inside of that create a <Link href=”/”> back to products </Link> 

56. <div className=”grid md: grid-cols-4 md: gap-3"> 

57. <div className =”md:col-span-2"> 

58. <Image src={product.image} alt={product.name} width={640} height={640} layout=”responsive”></Image> 

59. <ul> <li> added a  

<h1 className ="text-lg">{product.name}</h1> 

</li> 

<li>Category: {product.category}</li> 

<li>Brand: {product.brand}</li> 

<li>{product.rating} of {product.numReviews} reviews</li> 

<li>Description: {product.description}</li> 

</ul> 

60. <div className="card p-5"> <div className="mb-2 flex justify-between"> <div>Price</div> <div>${product.price}</div></div> 

61.Import card-5 p-5 and import className =mb-2 flex justify-between and add prive and add product price with a dollar sign 

62. <div className="mb-2 flex justify-between"> 

<div>Status</div> 

<div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div> 

63. <button className="primary-button w-full">Add to cart</button> 

 

Shopping Cart 

64.Import{createContext, userReducer} from ‘react’ and export const Store = createContext(); 

65. Have to define an initial state and set it to an object, and inside that object define cart and for the cart define an object and set cartItems to an empty array 

const initialState ={ 

Cart:{ cartItems: [] }, //define cart and set cart items to an empty array, and inside the cart we have cart items  

};  Initial state is the initial state the cartItems is  

66. The next step is to define a reducer function that accepts two parameters state and action and need to define a switch case 

That includes action.type.  If the action.type is ‘Cart_Add_Item’ we need to update the state and add the new item to the cart. 

 

Action.type is used specifically for redux and when you define state and action 

In order to do that get the new item = action.payload of that action set it as new item.  

Search the state for that item using the find method. Const existItem= state.cart.cartItems.find((item) => item.slug === newItem.slug. Using find method in the cartItems in the cart and the state. If the item = item.slug set it === newitem.slug (slug) is the url defintion.  If the existitem exists then what we need to do is use the map function on the cart item 

Const cartItems = existItem? State.cart.cartItems.map(). This is to check each item in the cart item. If they are = exist item replace it with the new item. If the cart item is existant with the cart item replace it with the new item because the new item contains the new quantity of the payload, otherwise keep the cart items in the cart item as they are. 

The code for that is const cartItems = existItem? State.cart.cartItems.map((item) => item.name === existItem.name ? NewItem : item ): else 

Use the the constracting array operator and[ ...state.cart.cartItems, newItem] to construct all the items in the cart item and add newItem.  Push the new item at the end of the cart item. The const cart items containts the updated variable we need to return Need to return the value so the reduced function can get a new state 

Keep the previous state as it is, and only update the cart: ...state.cart(This keeps the previous values, and only update the cart item. If that item exists, in the cart item we only update the quantity of it using this condition and then have to create a default case for the switch case and default and return state; 

The last step is providing a storeprovider that accepts children as a parameter.  In this export function create const [state,dispatch] = useReducer(reducer, InitialState) use a useReducer hook inside the export function storerovider and make the parameter children. And pass in reducer and initialState.  

 

Then define another value with state and dispatch, then return the store.provider and the store is coming from store and it is a wrapper for all children componenets Next ste is to wrap the app.js with the store and the store provider.  

 

Next step is to import a reducer function, function reducer(state,action){   

Reducers, as the name suggests, take in two things: previous state and an action 

And have switch(action.type){ 

Case 'Cart_ADD_ITEM’: { 

} 

{	 

} 

67. Get the new payload of switch(action.type){ 

Case'CART_ADD_ITEM’: { 

const newItem = action.payload; 

} 
       } 
} 

68. Then search the state with the find item with the cart object with the state. If the item with the slug has been found, exist item get that item  

 

Switch(action.type){ 

Case ‘CART_ADD_ITEM’: { 

const newItem = action.payload; 

const existItem = state.cart.cartItems.find( 

(item) => item.slug === newItem.slug 

); 

const cartItems = existItem?  

 

69. If the exist item exists then need to use the map function 

const cartItems = existItem? State.cart.cartItems.map() 

} 

} 

} 

70. Specific in the map. Check each item in the cart item. If they exist to the old item, replace it with the new item because the new item contains the new quantity of the item. Otherwise keep the cart items in the cart item the way they are. 

71. If this doesn’t work use the constracting array [...state.cart.cartItems, newItem]. Concat it so we push the new item into the cart items using this method  

function reducer(state,action){ 

switch(action.type){ 

case'CART_ADD_ITEM': { 

const newItem = action.payload; 

const existItem = state.cart.cartItems.find( 

(item) => item.slug === newItem.slug  

); 

const cartItems = existItem 

? state.cart.cartItems.map((item) => 

item.name === existItem.name ? newItem : item 

) 

:[...state.cart.cartItems,newItem] 

return { ...state, cart: {...state.cart, cartItems}}; //keep the state cart the way it is and only update the cart item based on this expression 

} 

default: 

return state; 

} 

} 

 

72. At the end the cartitems variable contains the updated cart item and need to return them at the bottom because the reducer function. 

 

Reducer function 

It takes the result so far and the current item, then it returns the next result 

 

73.Return a new item, but if this exists in the cart item then we only update the quantity of it using the nextjs condition, because the new item contains the new quantity. 

74. Have to define the default case with a return state and export the function to store provider with children 

return <Store.Provider value={value}>{children}</Store.Provider>; 

75.Then in the function provider I have to use a hook that includes . Get the state and the dispatch and get it from the usereducer. Then get the const value from state and dispatch and then return store.provider value={value} and {children} and Store.provider. 

export function StoreProvider({children}){ 

const [state,dispatch] = useReducer(reducer,initialState) 

const value = { state,dispatch}; 

return <Store.Provider value={value}>{children}</Store.Provider>; 

} 

 

76. Store is coming from create context function and the store.provider. Use the store rovider in the app.js and we provide store.provider and pass the value of the children into the property. State contains the cart and the cart itms 

77. Then go to your app.js file and wrap it with the Store.provider and press tab to import it into app  

function MyApp({ Component, pageProps }) { 

return ( 

<StoreProvider> 

<SSRProvider> 

<Navbar/> 

<Component {...pageProps} /> 

</SSRProvider> 

</StoreProvider> 

) 

} 

 
 

export default MyApp 

 

78. Go to slug.js and add an onclick handler to cart.js 

const addToCartHandler = () =>{ 

const existItem = state.cart.cartItems.find((x) => x.slug === product.slug); 

const quantity= existItem ? existItem.quantity+1:1; 

 
 

if(product.countInStock<quantity){ 

alert('Sorry. Product is out of stock') 

return; 

} 

dispatch({ type: 'CART_ADD_ITEM', payload: {...product,quantity}}); 

} 

 

<button className="primary-button1" onClick={addToCartHandler}>ADD TO CART</button> 

 

79. Have to import useContext and use const{state,dispatch} and = useContext(Store) and import the store from utils 

80. Based on the store dispatch, I'm going to dispatch Cart_Add_Item and dispatch the item in the add to cart handler as listed in instruction 78. 

81.Go to cart to add some ui to this component. I customized this in my custom navbar 

<Link href="/cart"><a className='p-2'>Cart 

{cart.cartItems.length >0 && ( 

<span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white"> //This creates a span element to show the design of the page 

{cart.cartItems.reduce((a,c)=> a+c.quantity,0)} 

</span> 

)} 

</a></Link> 

82.Add all the tailwind css and I converted this to my own design which I will go over. 

83. const quantity= existItem ? existItem.quantity+1:1; This is the way to add the extra counter to the add to count handler  

84. Add the if(product.countInStock<quantity){ alert(‘Sorry.Product is out of stock’) return;}, then alert with an alert sorry item out of stock, but what else I can do is really simple. I can send them to another page, this way it shows a nicer design and ui. 

85. To get the add to cart button to work on the home page all you have to do is move the state dispatch to the home page as well to have the add to cart functionality work there as well , specifically the onclick handler 

Creating Add to cart page 

1.Create new file and create cart.js and click rfc to create react component and change it to cart screen 

2.add div and change it to cart 

3.Import const {state,dispatch} = useContext{store} from react and pass store as a paramter from the previous store.js made 

4.Going to get the element from state using the constracting item. The code includes const { cart: {cartItems}, } = state; 

Get access to the cart and add access to cart to cartItems 

5.Get rid of the div and create layout and set title to shopping cart. Import layout that was developed before  

6.Create heading layout h1 classname with “mb-4 text-xl" 

7.Have conditional rendering. If cartItems.length ===0 ? Need to show a div with cart is empty and also show a link href with go shopping and cart is empty 

8.Wrap it in parentheses like this and create another parentheses for the else part which wil create a list to show items in the cart 

9.This will include a div classname =”grid md:grid-cols-4 md: gap-5"></div> 

10.Control space Link to import the link from nextjs link  

11. Inside this div we’re going to define another div “overflow-x-auto md:col-span-3"  

12.Create a table with classname min w/full and create a head classname with a border-b 

13. Create a table row for the title using <tr></tr> 

14. Create table cell using th className =”px-5 text-left">Item</th> 

15. Set classname to padding 5 . Item quantity price and action 

16. Add tr and </tr> The <tr> HTML element defines a row of cells in a table 

17.Table body add cartItems.map((item) => ())} Convert each item in the cart item into a row 

18.Inside the parentheses create a table row set the key of it to item and slug 

<tr key={item.slug} className=”border-b”</tr> 

19.  The first column is the item and make the item linkable <td><Link href ={`/product/${item.slug}`} 

<a className=”flex items-center"> </Link> Going to show an image and text after. 

20. Import the image with src and add item image alt {imagename} then create &nbsp and add item.name 

21. Add td className = “p-5 text-right"> and add {items.quanitity}</td> 

22. Add {items.quantity} and add items.price 

23. Add text-center and add <button> and add xCircleIcon this is what we’re going to use to delete the functions. 

24.Add onclick={{() => removeItemHandler(item)}> 

25.Then from there define const removeItemHandler =(item) => { 

Dispatch({ type: ‘Cart_remove_item’, payload: item}); 

26. Need to add Cart_Remove_item to case: { 

And add const CartItems = state.cart.cartItems.filter( 

(item)=> item.slug ! === action.payload.slug ); 

Return { ...state,cart:{ ...state.cart,cartItems}};  

27.Can add router.push(‘/cart’) and add that to the slug.js and it would import the item and make sure you define const router and useRouter and import it.  

28.Create a checkout button and add a <div className=”card p-5"> and add a ul and li with <div classNa=”pb-3”Sub total</div> 

29. Show the number of items using cartItems.reduce(a,c) => a + c.quantity,0}} ) and create an empty space {‘ ‘}: #{cartItems.reduce((a,c0+> a + c.quantity * c.price,0}} and can make the font size bigger with text-cl  

30. Add a button and add a class name primary-button w-full" and add checkout and add an onclick with router.push(‘shipping) and import use router and import the router.  

 

Creating Counter Page 

1.Go to cart.js and scroll down to find the item. Get rid of item quantity and add curly brackets to the cart 

2. Add an array and [...Array(item.countInStock).keys)] create...array item.countinstock and use map function to convert numbers options for the select box 

3.Use option and set the key={x+1} value={x+1} and wrap this in a section and add sleect value and add an onchange and create an updatecarthandler function with item and e.target.value. 

4.Updatecarthandler = (item,qty) => { 

Const quantity=Number(qty); Add item and quantity and const quantity = Number(qty) 

5.Add dispatch type Cart_Add_Item payload ...item,quantity  

6.Update it to item.quantity for value 

 

UNGUARDED NextJS Navigation Bar specifically with ReactJS bootstrap 

1.Npm i react-bootstrap 

2.Import bootstrap into _app.js file  

3.SSR Provider must wrap the application in order to ensure that the auto generated ids are consistent between the server and the client 

4.Create a co.mponent folder 

5.Create a header component and create a layout component 

6.In your layout component import header.js file 

7.Import Layout component  

I remember there was an easier way to import the links rather than use all of the video bs with const menu to create link,  

8.The best way to import css is to use styles ../components/navbar.module.css this is how you’re able to import css then you go to the file and add classname={styles.mb-1} this way I can insert the style I want 

9.Import icons using icons and size and style= position relative, top 10px left 5x and added color 

10.Issues with this navigation bar. The icon on the bar doesn’t move properly. I need this on the left side of the home screen. It’s on the damn top of the bar.  

11.I don’t know why but for some reason the faicons on the navigation bar, they don’t move according to the Nextjs application. React and NextJS actually have different styling. Naturally, Reactjs formats the icons to the left of the text, but NextJS naturally formats them to the top. 

13. I was able to fix the nextjs canvas by adding the property specifically in the offcanvas section. When it came to the faicons, tailwind automatically throws them on the top so I moved them to the right rather than fight the way it is, no big deal.  

14.I fixed the search bar with border radius and made it to 0 to give it that box look similar to the old navbar 

15. To move the icons to the left im able to go to the main navbar component and plug in whatever I need to plug in to the navbar so I just used justify content to the left to the left like I was beyonce or some shit 

16. Even better news, I was able to get the navigation bar to the left and get the icons to the left as well and fix it specifically in the offcanvas by importing the style in the offcanvas. 

17.I was able to get the navbar menu icon to fix the styling with simple scss properties and making sure the input was fixed. I removed the sign up button though because it didn’t look right in the navigation bar but im going to work on that soon. 

18. To remove the outline I used  

.btn-primary:hover,.btn-primary:focus,.btn-primary:active,  

.btn-primary:active:focus:not(:disabled):not(.disabled), 

.btn:focus, .btn:active, .btn:hover{ 

box-shadow: none!important; 

outline: 0; 

} 

19. Adding the image I knew was going to be tough and I had to sneak that in 

.navbar-toggler-icon { 

display: inline-block; 

width: 3.5em; 

height: 1.5em; 

vertical-align: middle; 

background-image: url('../menu.png'); 

background-repeat: no-repeat; 

background-position: center; 

background-size: 100%; 

} 

The issue becomes specifically that the image has to be in a specific location in your file I moved it outside the package and it worked.  

Styling the Build Ecommerce products 

1.Go to scss and remove the border radius from the project 

2.Go to root and remove the image border this way the image is proportional to the border 

3.Removed the shadow with a shadow-none class importing it into the card 

4.Removed the border by using !important in the browser properties 

5.Reducing space is easy go to the elements and make margin bottom 0rem to those elements to reduce space 

6.I replaced the h2 tag with a p tag, and then replaced the a tag. I had to make sure that the navlink had an href and was important 

7. Time to style the h1,h2,h3 tag 

8. Easy fix <div classname=”grid grid-cols-2 gap-3 md: grid-cols-3 lg:grid-cols-3">  

9. To fix the space I just added two breaks and looking at dior I can add a sliding element later on as I get good  

10. Added a p classname product and changed the font-family to open-sans 

11. Changed the product to product description instead of brand 

12. Center aligned the text for product 

13. Changed the data where the name and description and other items fit the UNGUARDED website to showcase the brand 

14.Added margin bottom to the first product tag with !important to create space 

15.Made the text description small for product description 

16. Center aligned the text for description 

17. Changed the font-weight for the product and the description 

18. Import the stying from the tutorial for the primary button styling.Primary-button{ apply rounded bg-amber-300 py-2 px-2 shadow outline-none hover:bg-amber-400 active:bg-amber-500 

19..primary-button{ 

border-radius: .75rem; 

background-color: #f98500; 

padding-top:.5rem; 

padding-bottom: .5rem; 

padding-left:.8rem; 

padding-right: 1rem; 

font-size: x-small; 

@apply hover:bg-amber-400 active:bg-amber-500 

} 

Made these specific changes to the button 

20.Add primary button hover and active class 

Background-color:rgb (250,155,46, transition 1s) 

Primary-button: active-background color 

21. Container is text-align center, I had to create a div around the button to center it where it actually moves with the page 

22. Changed the font size to 7px which was easier 

23.Added images styled on canva and added a margin-top:7x. 

24. Added margin-top (negative) to price and container this way it can grow  
 

Styling the Build Ecommerce product section 

1. Add className = UNGUARDED shorts  

2. Add this styling to the productname 

 .productname{ 

font-size: 18px; 

font-weight: 500; 

font-family:'Open sans'; 

} 

3.Add productdescription and add these files 

4. .productdescription{ 

margin-top: 10px; 

font-size: 12px; 

font-weight: 100; 

font-family:'Open sans'; 

} 

5.Add product price and in stock or not out of stock 

6. .productprice{ 

margin-top: 10px; 

font-size: 12px; 

font-weight: 100; 

font-family:'Open sans'; 

} 

7. Primary Button add primary button with a class  

 

8. primary-button1 { 

border-radius: 0.75rem; 

background-color: rgb(249, 133, 0); 

padding-top: 1.0rem; 

padding-bottom: 1.0rem; 

padding-left: 0.8rem; 

padding-right: 1rem; 

font-size: 8px; 

margin-left: 30px 

} 

9.Add back to product and edit design there 

10.backtoproduct{ 

font-size: 10px; 

margin-top:5px; 

font-weight: 100; 

font-family:'Open sans'; 

} 

 

Adding video component and adding  

Adding a video is pretty simple, you just use the same component as a react js file but the biggest issue with videos. I have to import the video specifically in public videos. You’re not able to directly import videos into NEXT.JS or atleast I don’t know of one yet   <video autoPlay loop muted style={{width: "100%" }} src={"/unguardedmerch.mp4"} type="video/mp4"></video> 

Adding the carousel was a simple task. It was the same as the reactjs, but since I used a layout component to style my program. I had to wrap a div around the project.  I wasn’t able to link specifically to the products because I used a specific data for product and this wasn’t looped in the products, so it was there for design. In addition I wasn’t able to add the value of the carousel because the products don’t have direct links and were linked using a hashmap  

          3.       Importing the css files was actually easy. Read the scss and then from there make the necessary changes. I made the same 	changes I made to my NEXTJS app 

          4.	Ways to link this product. You use Link href like reactjs. The way to change the url link in data is to use slug and then from there you 	can make the product link to whatever name you like. 

 

.carousel-indicators [data-bs-target] { 

box-sizing: content-box; 

flex: 0 1 auto; 

width:  

30px 

; 

height:  

3px 

; 

padding: 0; 

margin-right:  

3px 

; 

margin-left:  

3px 

; 

text-indent:  

-999px 

; 

cursor: pointer; 

background-color: #fff; 

background-clip: padding-box; 

border: 0; 

border-top:  

10px 

 solid transparent; 

border-bottom:  

10px 

 solid transparent; 

opacity: .5; 

transition: opacity .6s ease; 

} 

 

 

.carousel-indicators [data-bs-target] { 

width:  

10px 

 !important; 

height:  

10px 

 !important; 

border:  

1px 

 solid transparent !important; 

} 

 

 

.carousel-indicators .active { 

background-color: #f98500 !important; 

} 

 

 

 

 

Things I want to add, but I want to as they aren't completely necessary 

Customization of the navbar to add the cart item count 

1. <Link href="/cart" passHref><Nav.Link className="inactive"><FaShoppingCart size='1.2rem' style={{position: 'relative', top: '13px', left: '-20px',}}/>CART{cart.cartItems.length >0 && ( <span className="cartitemcounter"> 

{cart.cartItems.reduce((a,c)=> a+c.quantity,0)}</span> )} </Nav.Link></Link> 

 

2.Added custom css. 

.cartitemcounter{ 

background-color: #0d0d0d;  

padding-left:8px; 

padding-right: 8px; 

padding-top: 5px; 

padding-bottom: 3px; 

border-radius:300px; 

position: relative; 

right:35px; 

bottom: 15px; 

font-size: 0.75rem; /* 12px */ 

line-height: 1rem; /* 16px */ 

} 

 

3. Changed some of the routing this way it can work, and it was able to work this was the navlink can look the best possible.  

 

Added a router.push and a route. 

1.Import useRouter  

2.Define const router = useRouter(); 

3.router.push(‘/’) to any route you want after the if else statement 

 

Added Updating to quantity. 

1.I decided to add the quantity counter to the item. 

2.Instead of using x+1 I used only x and I changed the updatecarthandler toproduct as item wasn’t defined, I kept the cart as is 

 

 

Things I want to add, but I want to as they aren't completely necessary at this time as im building base functionality 

As I get advanced, I want to add a header above this navigation bar that shows the logo like Nike and I want to add the search bar effect and a transition where it goes to a different page, but since im still learning im going to leave this behind 

How can I have it like amazon where it’s like you don’t send to link but it shows the quantity in stock and also has a counter where there is like 20-30 products?  

 

 

NEXTJS Store adjustments 

1. Make the quantity button smaller  

2. Create a better cart design for the Shop where it is more presentable  

3.Have to fix breaking point 

4.Is there a way I can custom the css to orange 

5.Since I have a layout and a container and a card layout for the store I have to specifically make the images bigger thus I can include all the stuff that is necessary 

 

Things that need to be fixed [Layout and breaking points] (The layout looks great but when it breaks its really choppy and not smooth due to the fact theres too many elements wrapped in elements). 

This would take more time than 1-2 days but it is worth the time to fix. 

 

How do I add multiple products with multiple images for color changes?! 

 

Way to fix the layout 

Instead of using layout and having such a strict shrinker im better off using a div and then wrapping the margin left and the margin right 

 

Product select handler adjustment 

1.Move the select value into the product price 

2.How to position the movement to the right 

3. I also randomly changed the value 

4.Added a div class and added a section 

5.Changed it to md for now because section looks better in medium 

6.Ways to accomplish is to move elements around and put them in the right position 

7. Had to change the md: grid-cols-4 md:gap2 

8.To style properly have br between text and style accordingly.  

9.To add the product item where you can change the quantity of the cart, all you have to do is go to slug.js and add the same information and then add the item. Instead of product as it isn’t defined and get the same result 

10.Change the font size of the select value to become smaller to fit the appearance of the website 

11.Have to update trash button. Update size color using classname similar to the navbar 

12.Added a price and made some font adjustments, been at it for hours trying to figure out how to add a unique layout  

 

Save Cart Items 

1.NPM Install js-cookie 

2.Import JS cookies  

3.Remove cookies.get cart if it exists then use json.parse(Cookie.get(‘cart’)): 

{cartItems: [] }, 

4.Update the cartAddItems, cookies.set(‘cart’, JSON.stringify(...state.cart, cartItems }) 

5.Add the same thing in the remove item cart and that’s it  

6.Have to render this import dynamic from ‘next/js’ 

7.Cut export default and import dynamic function export default dynamic(()=>Promise.resolve(CartScreen), {ssr:false}) 

8.Have to go to layout.js and import useState and press tab and set it to cartItemsCount; 

9.Define useEffect, setCartItemsCount to the value already in the header 

 

Create Login form  

1.Go to pages and go to login .js and press rfc to create a login componenet and make login screen 

2.<div>Login</div> 

3.<Layout title=”login”>, </Layout> 

4.<form className=’mx-auto max-w-screen’></form> this means it will be 768px 

5. <h1 className=”mb-4 text-xl">Login</h1> 

6. <label htmlFor=”email”>Email</label> 

7.<input type=”email” className=”w-full" id=”email” autoFocus> 

8.<div className=”mb-4”>,  

<button className=”primary-button”>Login</button> 

<label htmlFor=”email”>Email</label> 

9.  <div className=”mb-4”> <label htmlFor=”password”>Password</label> Create 

10. <input type=”password” className=”w-full” id=”password” autoFocus> 

11.<div className=mb-4"> <button className=”primary-button”>Login</button> 

12.Add don’t have an account add Don&aposit have an account> &nbsp don’t have an account. 

13.Login?/shipping and button onClick={() => router.push(‘login?shipping’)} className=”primary-button w-full"> Checkout </button>  

14.Go to global css, and go to input,select,textarea{ 

@apply rounded border p-2 outline-none ring-indigo-300 focus:ring 

} 

15.NPM install react-hook-form  

16.Import {useForm} from ‘react-hook-form'  

17.const { 

HandleSubmit,  

Register, 

FormState:{errors}, }= useForm(); 

18.Onsubmit handler is where you have to use onSubmit={handleSubmit{submitHandler}} 

19.const submitHandler = ({email, password}) => { 

 

} 

20.<Input type=”email” {...register(‘email’, {required: ‘Please enter email’)} </input> 

21.{errors.email && (<div>{errors.email.message}</div>)} 

22. Value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,] 

23.’Please enter valid email’ 

24.console.log{email,password} 

 

 

Add MongoDB 

1.Install mongoose  

2.Go to mongodb 

3.click create and click on database 

4. Free and then create an account 

5. Add a user profile 

6. Connect the link using mongodburi 

7.Import mongoose from ‘mongoose’; 

8. Const connection ={} 

9.Async function connect(){ 

If(connection.isConnected){ 

Console.log(‘already connected’); 

} 

Return; 
} 

10.if(mongoose.connection.length>0), connection.isConnected = mongoose.connections[0].readyState; 

11.If connection.isConnected=1 console.log(‘use previous connection’), and return; 

12.Await mongoose.disconnect(); 

13.Const db = await mongoose.connect and process.env MONGODB_URI 

14.Async function disconnect(){ 

15.If(connection.isConnected){ 

16.If(process.env.NODE_ENV===’production’){ 

17.Await mongoose.disconnect(); 

Connection.isConnected=false; 

18.else, console.log(‘not disconnected’); 

19.Add a const db = connect,disconnect and export default db; 

20.Go to data and go to users and add name email password and isadmin 

21.Download bcryptjs  

22.Then go to pages api seed.js and add import db from utils and a const hander async request call and response call with an await db.connect(); 

23.And just like a reactjs project ad User.js in model file and all the information a user need to sign 

24.Const userSchema and = new mongoose.schema and add name,email password is admin and a timestamp  

25.Add const User = mongoose.models.User || mongoose.model(‘User’,userSchema) 

26.Seed.js and add import db from “../utils/db” 

27. Await and add User.deleteMany() and await User.insertMany(data.users) 

28.Await db.disconnect(); and res.send message seeded succesfully 

29.Export default handler; 

30.And all the files should be connected and check with a seeder to see if everything works. 

 

 

 

 

 

 

 

Added body{min-width315px) [changes margin of mobile page] 

To style properly I added a wrapper to make the component better I can make this into a card element as well to make it better 

I added a logo/image placement to create a better display[Needs to be designed better but can move on] 

https://www.youtube.com/watch?v=znqUwx0b0HI 

 

Adjustments I had to make to make this cookie work with my project 

I had to create Navbar specifically in the component, when that adjustment was made, I was able to find out that the navbar in the main app file was the reason the file wasn’t working. Then from there I imported the navbar to all the files and I was able to make it work. It updates on refresh and everything but there was one error, the cartitemcounter had to stay the old way and not useeffect for some reason, but it worked. Specifically for this project I had to import useEffect 

 

Things I want to add 

Multi products, different colors 

Can add more elements to the cart amount 

Specifically how to create a row in nextjs and how to add the price where it is in the right position 

How to add the check out where it goes to the footer would be pretty cool but this is going to take some research and probably an experts input when I get to people who are really good at building frontend 

Cartitems count needs to be styled better but ill work on that once the project is complete or I can work on it earlier 
