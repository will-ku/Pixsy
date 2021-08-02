# Pixsy

Pixsy is an online marketplace for all your photography needs, from cameras and lenses to tripods and specialty bags. Pixsy is a clone of popular e-commerce website, Etsy. Check out the live demo [here](https://pixsy-fullstack.herokuapp.com/#/)!


<kbd>![Pixsy Homepage](https://pixsy-dev.s3.us-east-2.amazonaws.com/github/splash.png)</kbd>

# Technologies Used

-   React
-   Redux
-   Ruby on Rails
-   PostgreSQL
-   AWS Simple Cloud Storage (S3)

# Features

## Product Page

<kbd>![Product Page](https://pixsy-dev.s3.us-east-2.amazonaws.com/github/product.png)</kbd>

Functionalities of the product page include:
* Product details
* Product photos
* Reviews including review form
* 'Add To Cart' button




## Reviews

React lifecycle methods are used to fetch all reviews for a particular product when that product's page is loaded. The `componentDidUpdate()` method was leveraged to re-render the product page after a user submits their review. Users can only access the review form to submit a review if they are logged into the application.

```javascript
componentDidMount() {
    Promise.all([
      this.props.fetchProduct(this.props.match.params.productId),
      this.props.fetchAllReviews(this.props.match.params.productId),
    ]);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product)
      if (prevProps.product.id !== this.props.product.id) {
        Promise.all([
          this.props.fetchProduct(this.props.match.params.productId),
          this.props.fetchAllReviews(this.props.match.params.productId),
        ]);
      }
  }
```

## Navigation Bar

Pixsy features a navigation bar which is accessible from anywhere in the application. Functionalities of the navigation bar include a search bar, user authentication (login/logout buttons), link to shopping cart and product category links.

<kbd>![Search](https://pixsy-dev.s3.us-east-2.amazonaws.com/github/search.png)</kbd>

The following functionalities are available from the navigation bar:
* Link to homepage
* Search bar
* User Authentication (login / logout button)
* Cart
* Product category links 

The **search bar** allows users to search for all products in the database by name.

On the backend, the following Rails controller and model methods, respectively, were implemented to retrieve products from the database based on the query string sent from the frontend.

```ruby
  def search_products
    @products = Product.search(params[:search])
  
    if @products   
      render :index
    else
      render json: ["We couldn't find any results for #{params[:search]}"], status: 404
    end
  end
```

```ruby
  def self.search(query)
    search_result = self.where("LOWER(name) like ?", "%#{query.downcase}%")
    
    if search_result.length > 0
      return search_result
    end  
  end
```

## Shopping Cart

<kbd>![Shopping Cart](https://pixsy-dev.s3.us-east-2.amazonaws.com/github/checkout.png)</kbd>
