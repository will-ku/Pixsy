# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Product.delete_all
Review.delete_all

# users
john = User.create!(email: 'john@pixsy.com', first_name: 'John', password: 'abc123')
will = User.create!(email: 'will@pixsy.com', first_name: 'Will', password: 'abc123')
zach = User.create!(email: 'zach@pixsy.com', first_name: 'Zach', password: 'abc123')
batman=User.create!(email: "batman@pixsy.com", first_name: "Batman", password: "abc123")
superman=User.create!(email: "superman@pixsy.com", first_name: "Superman", password: "abc123")
ironman=User.create!(email: "ironman@pixsy.com", first_name: "Ironman", password: "abc123")
jenn=User.create!(email: "jenn@pixsy.com", first_name: "Jenn", password: "abc123")
jason=User.create!(email: "jason@pixsy.com", first_name: "Jason", password: "abc123")
jessica=User.create!(email: "jesssica@pixsy.com", first_name: "Jessica", password: "abc123")
peter=User.create!(email: "peter@pixsy.com", first_name: "Peter", password: "abc123")

# DEMO PRODUCT
aseventhree = Product.create!(
  name: 'Sony Alpha a7iii Mirrorless Digital Camera', 
  description: 'Distinguished by its updated sensor design, the Alpha a7 III Mirrorless Digital Camera from Sony is a well-rounded camera suitable for both photo and video applications in a variety of working situations. Refined for improved speed and low-light performance, the full-frame 24.2MP Exmor R BSI CMOS sensor and BIONZ X image processor pair to realize an impressive 10 fps continuous shooting rate and improved autofocus performance for faster, more reliable subject tracking along with wide frame coverage.',
  price: 1998,
  seller_id: will.id
)

file001 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/sonya7iii_1.png")
file002 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/sonya7iii_2.png")
file003 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/sonya7iii_3.png")
aseventhree.photos.attach(io: file001, filename: 'sonya7iii_1.png')
aseventhree.photos.attach(io: file002, filename: 'sonya7iii_2.png')
aseventhree.photos.attach(io: file003, filename: 'sonya7iii_3.png')

review1 = Review.create!(
  reviewer_id: will.id,
  product_id: aseventhree.id,
  comment: "this is great!!!!!",
  rating: 5
)

# PRODUCTS
=begin
productname = Product.create!(
  name: "",
  description: "",
  price: ,
  seller_id: 
)  
=end
# camera 


fujixmten = Product.create!(
  name: 'Fujifilm X-S10',
  description: "The Fujifilm X-S10 doesn't have the external exposure controls of the higher-level X-series cameras, but that's the only thing we can find to complain about, and it's clear this is no 'amateur' camera. as its build quality and handling stand out straight away. The swap to a conventional mode dial might disappoint Fujifilm fans, but the excellent finish, build quality and handling and the inclusion of IBIS (in-body stabilisation) gives this camera a very broad appeal to produce perhaps the best combination of performance, quality and value in the APS-C mirrorless camera. ",
  price: 999,
  seller_id: zach.id
)  
file004 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/fujixs10_1.png")
file005 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/fujixs10_2.png")
file006 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/fujixs10_3.png")
fujixmten.photos.attach(io: file004, filename: 'fujixs10_1.png')
fujixmten.photos.attach(io: file005, filename: 'fujixs10_2.png')
fujixmten.photos.attach(io: file006, filename: 'fujixs10_3.png')

eosr = Product.create!(
  name: "Canon EOS R",
  description: "The EOS R expands Canon’s line-up as our first full-frame mirrorless camera — paving the way for continued optical excellence. Designed to excel in both performance and handling, the EOS R features impressive autofocus capabilities and the ability to shoot in both 4K and Full HD — plus, a new lens mount system that offers full compatibility with EF and EF-S lenses.",
  price: 1800,
  seller_id: will.id
)  
file007 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/canoneosr_1.png")
file008 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/canoneosr_2.png")
file009 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/canoneosr_3.png")
eosr.photos.attach(io: file007, filename: "canoneosr_1.png")
eosr.photos.attach(io: file008, filename: "canoneosr_2.png")
eosr.photos.attach(io: file009, filename: "canoneosr_3.png")

# accessories

pdslide = Product.create!(
  name: 'Peak Design Slide',
  description: 'The most versatile pro camera strap in the world, the newly upgraded Slide can be worn as a sling, neck, or shoulder strap. Internally-padded nylon webbing has a smooth side that glides over clothing in sling mode and a grippy side that prevents slipping in shoulder mode. Dual quick-adjusters provide instant access and easy reconfiguration. Unique Anchor Link system connects quickly and dual points of connection keep your camera more stable than traditional sling straps.',
  price: 65,
  seller_id: zach.id
)  
filea001 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/product_accessories/pdslide1.png")
filea002 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/product_accessories/pdslide2.png")
filea003 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/product_accessories/pdslide3.png")
pdslide.photos.attach(io: filea001, filename: "pdslide_1.png")
pdslide.photos.attach(io: filea002, filename: "pdslide_2.png")
pdslide.photos.attach(io: filea003, filename: "pdslide_3.png")