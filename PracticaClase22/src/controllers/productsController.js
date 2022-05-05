const fs = require('fs');
const path = require('path');
const { render } = require('../app');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products',{products:products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const id = parseInt(req.params.id);
		const productSelected = products.filter((product)=>{return product.id === id })[0]
		res.render('detail',{productSelected:productSelected})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const id = products.length;
		const name = req.body.name;
		const description = req.body.description;
		const price = req.body.price;
		const category = req.body.category;
		const discount = req.body.discount;
		const image = req.file.filename;
		newProducts = {id,name,description,price,category,image};
		products.push(newProducts);
		let data = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, data);		
		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		const idQuery =req.params.id;
		let product = products.find((producto)=>{return producto.id == idQuery});
		console.log(product)
		res.render('product-edit-form',{product:product})
	},
	// Update - Method to update
	update: (req, res) => {		
		const idQuery =req.params.id;
		let pos=0;
		products.forEach((producto,index)=>{producto.id == idQuery?pos=index:false});
		products[pos].name =req.body.name;
		products[pos].description =req.body.description;
		products[pos].price = req.body.price;
		products[pos].discount = req.body.discount;
		//products[pos].image = req.file.filename;
		const data = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, data);              
		res.render('detail',{productSelected:products[pos]})
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const idQuery =req.params.id;
		let arrayResultado
		products.forEach((producto,index)=>{producto.id == idQuery?arrayResultado = products.splice(index,1):false});
		const data = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, data);
		res.redirect('/products');
	}
};

module.exports = controller;