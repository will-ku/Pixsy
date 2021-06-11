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
# Not deleting all categories

# users
john = User.create!(email: 'john@pixsy.com', first_name: 'John', password: 'abc123')
will = User.create!(email: 'will@pixsy.com', first_name: 'Will', password: 'abc123')
megaman = User.create!(email: 'megaman@pixsy.com', first_name: 'Megaman', password: 'abc123')
batman=User.create!(email: "batman@pixsy.com", first_name: "Batman", password: "abc123")
superman=User.create!(email: "superman@pixsy.com", first_name: "Superman", password: "abc123")
ironman=User.create!(email: "ironman@pixsy.com", first_name: "Ironman", password: "abc123")
jenn=User.create!(email: "jenn@pixsy.com", first_name: "Jenn", password: "abc123")
jason=User.create!(email: "jason@pixsy.com", first_name: "Jason", password: "abc123")
jessica=User.create!(email: "jesssica@pixsy.com", first_name: "Jessica", password: "abc123")
peter=User.create!(email: "peter@pixsy.com", first_name: "Peter", password: "abc123")

# categories
digicam = Category.create!(name: "Digital Cameras")
lenses = Category.create!(name: "Lenses")
bags = Category.create!(name: "Bags & Cases")
drones = Category.create!(name: "Drones")
filmcam = Category.create!(name: "Film Cameras")
mobile = Category.create!(name: "Mobile Photography")
accessories = Category.create!(name: "Accessories")


# DEMO PRODUCT
aseventhree = Product.create!(
  name: 'Sony Alpha a7iii Mirrorless Digital Camera', 
  description: 'Distinguished by its updated sensor design, the Alpha a7 III Mirrorless Digital Camera from Sony is a well-rounded camera suitable for both photo and video applications in a variety of working situations. Refined for improved speed and low-light performance, the full-frame 24.2MP Exmor R BSI CMOS sensor and BIONZ X image processor pair to realize an impressive 10 fps continuous shooting rate and improved autofocus performance for faster, more reliable subject tracking along with wide frame coverage.',
  price: 1998,
  seller_id: will.id,
  category_id: digicam.id
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
  comment: "This was my first full frame camera and I love it!",
  rating: 5
)




# PRODUCTS
=begin
productname = Product.create!(
  name: "",
  description: "",
  price: ,
  seller_id: 
  category_id:
)  
=end
# camera 


fujixmten = Product.create!(
  name: 'Fujifilm X-S10 Mirrorless Camera, Black',
  description: "The Fujifilm X-S10 doesn't have the external exposure controls of the higher-level X-series cameras, but that's the only thing we can find to complain about, and it's clear this is no 'amateur' camera. as its build quality and handling stand out straight away. The swap to a conventional mode dial might disappoint Fujifilm fans, but the excellent finish, build quality and handling and the inclusion of IBIS (in-body stabilisation) gives this camera a very broad appeal to produce perhaps the best combination of performance, quality and value in the APS-C mirrorless camera. ",
  price: 999,
  seller_id: megaman.id,
  category_id: digicam.id
)  
file004 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/fujixs10_1.png")
file005 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/fujixs10_2.png")
file006 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/fujixs10_3.png")
fujixmten.photos.attach(io: file004, filename: 'fujixs10_1.png')
fujixmten.photos.attach(io: file005, filename: 'fujixs10_2.png')
fujixmten.photos.attach(io: file006, filename: 'fujixs10_3.png')



eosr = Product.create!(
  name: "Canon EOS R Mirrorless Digital Camera Body",
  description: "The EOS R expands Canon’s line-up as our first full-frame mirrorless camera — paving the way for continued optical excellence. Designed to excel in both performance and handling, the EOS R features impressive autofocus capabilities and the ability to shoot in both 4K and Full HD — plus, a new lens mount system that offers full compatibility with EF and EF-S lenses.",
  price: 1800,
  seller_id: will.id,
  category_id: digicam.id
)  
file007 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/canoneosr_1.png")
file008 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/canoneosr_2.png")
file009 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/canoneosr_3.png")
eosr.photos.attach(io: file007, filename: "canoneosr_1.png")
eosr.photos.attach(io: file008, filename: "canoneosr_2.png")
eosr.photos.attach(io: file009, filename: "canoneosr_3.png")

# accessories

pdslide = Product.create!(
  name: 'Peak Design Slide Lite Strap',
  description: 'The most versatile pro camera strap in the world, the newly upgraded Slide can be worn as a sling, neck, or shoulder strap. Internally-padded nylon webbing has a smooth side that glides over clothing in sling mode and a grippy side that prevents slipping in shoulder mode. Dual quick-adjusters provide instant access and easy reconfiguration. Unique Anchor Link system connects quickly and dual points of connection keep your camera more stable than traditional sling straps.',
  price: 65,
  seller_id: megaman.id,
  category_id: accessories.id
)  
filea010 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/product_accessories/pdslide1.png")
filea011 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/product_accessories/pdslide2.png")
filea012 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/product_accessories/pdslide3.png")
pdslide.photos.attach(io: filea010, filename: "pdslide_1.png")
pdslide.photos.attach(io: filea011, filename: "pdslide_2.png")
pdslide.photos.attach(io: filea012, filename: "pdslide_3.png")


# seeding cart items
cartitem001 = CartItem.create!(user_id: john.id, product_id: pdslide.id, quantity: 1)
cartitem002 = CartItem.create!(user_id: john.id, product_id: fujixmten.id, quantity: 20)

# more seeding of products

sonya1 = Product.create!(
  name: "Sony Alpha 1 Mirrorless Digital Camera",
  description: "The Alpha 1 features a newly developed stacked Exmor RS CMOS image sensor, built with integral memory and paired with an upgraded BIONZ XR imaging processing engine, making it capable of shooting 50.1-megapixel images continuously at anastounding 30fps with up to 120 AF/AE calculations per second. The Alpha 1 shooting capabilities are further enhanced by a 9.4 million dot OLED Quad-XGA electronic viewfinder, with a refresh rate of upto 240 fps, ensuring no black out. Additionally, for the first time in an Alpha series camera, 8K 30p 10-bit 4:2:0 video is available, along with 4K 120p 1510-bit 4:2:2 recording and S-Cinetone color. The Alpha 1 is also packed with features that support field professionals with faster workflow, including 3.5x faster wireless FTP transfer speed and more.",
  price: 6498,
  seller_id: superman.id,
  category_id: digicam.id
)  

filea013 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/sonya1_1.png")
filea014 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/sonya1_2.png")
filea015 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/sonya1_3.png")
sonya1.photos.attach(io: filea013, filename: "sonya1_1.png")
sonya1.photos.attach(io: filea014, filename: "sonya1_2.png")
sonya1.photos.attach(io: filea015, filename: "sonya1_3.png")


fuji100v = Product.create!(
  name: "Fujifilm X100V Digital Camera, Silver",
  description: "Fujifilm unveils the X100V, its latest addition to its X-100 series. This versatile and compact mirrorless camera packs an APS-C-format 26.1MP X-Trans CMOS 4 sensor with a back-illuminated design. The sensor gives the X100V an ISO 160-12800 sensitivity range for better low-light performance. It also has an expanded phase-detection autofocus system that utilizes 425 selectable points. This AF system gives the X100V faster and more precise focusing even under a variety of lighting conditions. The Fujifilm X100V can record 4K video at 30fps and shoot full HD videos at up to 120fps. It also comes with an incorporated Fujinon 23mm f/2 lens that now has two aspherical elements for rendering sharper images.",
  price: 1399,
  seller_id: superman.id,
  category_id: digicam.id
)  

filea016 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/fujix100v_1.png")
filea017 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/fujix100v_2.png")
filea018 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/fujix100v_3.png")
fuji100v.photos.attach(io: filea016, filename: "fujix100v_1.png")
fuji100v.photos.attach(io: filea017, filename: "fujix100v_2.png")
fuji100v.photos.attach(io: filea018, filename: "fujix100v_3.png")


djimini2 = Product.create!(
  name: "DJI Mini 2 Drone Fly More Combo",
  description: "DJI Mini 2 is beginner-friendly, powerful, and well, mini. Impressive performance, stunning image quality, and creative videos are just a few taps away. Explore an entirely new perspective, capturing the moments that make your life truly yours. Thanks to intuitive and advanced features packed in a portable frame, DJI Mini 2 provides complete freedom wherever and however you want to create. Whether you're shooting at a deserted beach or capturing the details of a fun family reunion, Mini 2 can handle it all.  ",
  price: 599,
  seller_id: batman.id,
  category_id: drones.id
)  

filea019 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/00products-drone/djimini2_1.png")
filea020 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/00products-drone/djimini2_2.png")
filea021 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/00products-drone/djimini2_3.png")
djimini2.photos.attach(io: filea019, filename: "djimini2_1.png")
djimini2.photos.attach(io: filea020, filename: "djimini2_2.png")
djimini2.photos.attach(io: filea021, filename: "djimini2_3.png")


pdtri = Product.create!(
  name: "Peak Design Travel Tripod, Aluminum",
  description: "For years, traditional tripods have suffered from needless bulk and wasted space. We spent 4 years redesigning the tripod from the ground up, creating a travel tripod that packs down to the diameter of a water bottle—without compromising height, stability, or features.
  Radically faster to setup and takedown, our tripod features ergonomic adjustment points, built-in mobile compatibility, and thoughtful details at every turn. Plus, it’s built for life on the road: durable, 100% serviceable, and backed by the Peak Design lifetime guarantee.
  Tripod includes legs, ballhead, protective soft case, ARCA-compatbile Standard Plate, mobile mount, hex tool with carrying clip, and bushing removal tool for maintenance. See Specs section below for details.",
  price: 349.95,
  seller_id: ironman.id,
  category_id: accessories.id
)  

filea022 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/product_accessories/pdtri_1.png")
filea023 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/product_accessories/pdtri_2.png")
filea024 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/product_accessories/pdtri_3.png")
pdtri.photos.attach(io: filea022, filename: "pdtri_1.png")
pdtri.photos.attach(io: filea023, filename: "pdtri_2.png")
pdtri.photos.attach(io: filea024, filename: "pdtri_3.png")


leicam10 = Product.create!(
  name: "Leica M10 Monochrom Digital Rangefinder Camera",
  description: "The Leica M10 Monochrom is the latest addition to Leica’s series of black and white-only digital rangefinder cameras. This model is based on the M10-P and has a slim and compact body that is similar to M film cameras. The Leica M10 comes with a redeveloped full-frame, monochrome 40.89MP CMOS sensor and a Maestro II image processor. This combination allows the M10 to have a wide dynamic range and better sensitivity that is necessary for working under various lighting conditions. It also has a sensitivity range of ISO 160-100000, higher than color-enabled M10 cameras. The Leica M10 has a 3.0-inch 1.04m-dot touchscreen LCD with a Gorilla Glass cover for added durability. The body of the Leica M10 has a dedicated ISO dial that can be adjusted even if the camera is turned off. Additionally, the M10 Monochrom is WiFi-ready and can be linked and controlled using a mobile device using the Leica FOTOS app. Discover beauty in black and white using the Leica M10 Monochrom Digital Rangefinder Camera.",
  price: 8995,
  seller_id: ironman.id,
  category_id: digicam.id
)  

filea025 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/leicam10_1.png")
filea026 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/leicam10_2.png")
filea027 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/leicam10_3.png")
leicam10.photos.attach(io: filea025, filename: "leicam10_1.png")
leicam10.photos.attach(io: filea026, filename: "leicam10_2.png")
leicam10.photos.attach(io: filea027, filename: "leicam10_3.png")

djifpv = Product.create!(
  name: "DJI FPV Drone",
  description: "DJI FPV is a hybrid drone that combines the best of both worlds. Taking inspiration from their Mavic Series and traditional FPV drones, DJI has aimed to democratize FPV drone flying. Its three flight modes and Motion Controller aims to help users easily transition from flying standard drones to the FPV experience making the DJI FPV great for those who want to enter the world of FPV. The DJI Digital FPV System was designed for the drone racing industry. It consists of the DJI FPV Air Unit Module, DJI FPV Camera, DJI FPV Goggles, and DJI FPV Remote Controller, all of which are packed with powerful features and serve a significant role in the development of our HD Low Latency FPV system. We have redefined drone racing, delivering lower latency rates, stunning HD resolution, and, most importantly, an unforgettable FPV flying experience.",
  price: 1299,
  seller_id: superman.id,
  category_id: drones.id
)  

filea028 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/00products-drone/djifpv_1.png")
filea029 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/00products-drone/djifpv_1.png")
filea030 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/00products-drone/djifpv_1.png")
djifpv.photos.attach(io: filea028, filename: "djifpv_1.png")
djifpv.photos.attach(io: filea029, filename: "djifpv_2.png")
djifpv.photos.attach(io: filea030, filename: "djifpv_3.png")

sonya6600 = Product.create!(
  name: "Sony Alpha 6600 APS-C Mirrorless 4K Video Camera - Black",
  description: "The all-new Sony Alpha a6600 is the brand’s latest flagship camera. It features a revised APS-C-format 24.2MP Exmor CMOS sensor with an ISO 100-32000 for capturing high-quality images with minimal noise and can be expanded further to ISO 102400 for shooting under low-light conditions. The a6600 can record UHD 4K movies internally in XAVC S format. It also supports HDR content as well as other video features, such as slow and quick motion, enhanced zebra function, and time code and user bit settings. It has a 5-axis, 5-step image stabilization, an XGA OLED Tru-Finder, and a tiltable 3.0-type 921K-dot LCD monitor. The a6600 features a weather-resistant magnesium alloy body for working under various weather conditions. What’s more, the Sony a6600 Mirrorless Digital Camera can be purchased separately or bought with an additional 18-135mm f/3.5-5.6 OSS Lens. Shoot breathtaking stills and video using the revolutionary Sony Alpha a6600 Mirrorless Camera.",
  price: 1399.99,
  seller_id: megaman.id,
  category_id: digicam.id
)  

filea031 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/sonya6600_1.png")
filea032 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/sonya6600_2.png")
sonya6600.photos.attach(io: filea031, filename: "sonya6600_1.png")
sonya6600.photos.attach(io: filea032, filename: "sonya6600_2.png")

sonyxv1 = Product.create!(
  name: "Sony ZV-1 Compact 4K HD Camera",
  description: "Vloggers and influencers rejoice, the Sony ZV-1 is a purpose-built compact camera blending the proven imaging capabilities of the RX100-series platform with an updated physical design for more efficient content creation. Featuring a side flip-out 3.0 touchscreen and a directional 3-capsule microphone that are perfect for front-facing recording, the ZV-1 also caters to this crowd with the Product Showcase Setting, Background Defocus function, Soft Skin Effect, and Face Priority Auto-Exposure.",
  price: 698,
  seller_id: megaman.id,
  category_id: digicam.id
)  

filea034 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/sonyxv1_1.png")
filea035 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_cameras/sonyxv1_2.png")
sonyxv1.photos.attach(io: filea034, filename: "sonyxv1_1.png")
sonyxv1.photos.attach(io: filea035, filename: "sonyxv1_2.png")


