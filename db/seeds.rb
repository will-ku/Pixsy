# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Product.delete_all

# users
john = User.create!(email: 'john@pixsy.com', first_name: 'John', password: 'abc123')
will = User.create!(email: 'will@pixsy.com', first_name: 'Will', password: 'abc123')
zach = User.create!(email: 'zach@pixsy.com', first_name: 'Zach', password: 'abc123')

# products

=begin
productname = Product.create!(
  name: '',
  description: '',
  price: '',
  seller_id: 
)  
=end

aseventhree = Product.create!(
  name: 'Sony Alpha a7iii Mirrorless Digital Camera', 
  description: 'Distinguished by its updated sensor design, the Alpha a7 III Mirrorless Digital Camera from Sony is a well-rounded camera suitable for both photo and video applications in a variety of working situations. Refined for improved speed and low-light performance, the full-frame 24.2MP Exmor R BSI CMOS sensor and BIONZ X image processor pair to realize an impressive 10 fps continuous shooting rate and improved autofocus performance for faster, more reliable subject tracking along with wide frame coverage.',
  price: '1998',
  seller_id: will.id
)

pdslide = Product.create!(
  name: 'Peak Design Slide',
  description: 'The most versatile pro camera strap in the world, the newly upgraded Slide can be worn as a sling, neck, or shoulder strap. Internally-padded nylon webbing has a smooth side that glides over clothing in sling mode and a grippy side that prevents slipping in shoulder mode. Dual quick-adjusters provide instant access and easy reconfiguration. Unique Anchor Link system connects quickly and dual points of connection keep your camera more stable than traditional sling straps.',
  price: '65',
  seller_id: zach.id
)  
