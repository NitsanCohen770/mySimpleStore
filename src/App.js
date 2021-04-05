import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/navigation/navBar/navBar';
import ProductList from './components/products/productList/productList';
import CartList from './components/cart/cartList/cartList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar></NavBar>
        <Switch>
          <Route path="/products" component={ProductList} />

          <Route path="/cart" component={CartList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
