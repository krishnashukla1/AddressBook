//App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddressList from './components/AddressList';
import AddAddress from './components/AddAddress';
import './App.css'

function App() {
return (
	<Router>
	<div className='container container-fluid min-vh-100 d-flex flex-column'>
		<Routes>
		<Route exact path="/" element={<AddressList/>} component={AddressList} />
		<Route exact path="/add" element={<AddAddress/>} component={AddAddress} />
		</Routes>
	</div>
	</Router>
);
}

export default App;
