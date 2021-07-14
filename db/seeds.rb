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
spiderman = User.create!(email: 'spiderman@pixsy.com', first_name: 'Spiderman', password: 'abc123')
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
cartitem001 = CartItem.create!(user_id: spiderman.id, product_id: pdslide.id, quantity: 1)
cartitem002 = CartItem.create!(user_id: spiderman.id, product_id: fujixmten.id, quantity: 20)

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


# lens

canonrf70200 = Product.create!(
  name: "Canon RF 70-200mm f/2.8L IS USM Lens",
  description: "Offering versatility and long reach in a notably sleek form factor, the Canon RF 70-200mm f/2.8L IS USM is a flexible telephoto zoom characterized by its bright design and advanced optics. The constant f/2.8 maximum aperture suits working in difficult lighting conditions and also enables greater control over depth of field. A sophisticated optical design comprises a series of specialized elements, which help to suppress a variety of aberrations throughout the zoom range for well-controlled imagery. An Air Sphere Coating has also been applied to suppress flare and ghosting when working in strong lighting conditions.",
  price: 2699,
  seller_id: megaman.id,
  category_id: lenses.id
)  

filea035 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/canonrf70200_1.png")
filea036 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/canonrf70200_2.png")
filea037 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/canonrf70200_3.png")
canonrf70200.photos.attach(io: filea035, filename: "canonrf70200_1.png")
canonrf70200.photos.attach(io: filea036, filename: "canonrf70200_2.png")
canonrf70200.photos.attach(io: filea037, filename: "canonrf70200_3.png")

canonrf2870mm2 = Product.create!(
  name: "Canon RF 28–70mm F2 L USM Standard Zoom Lens",
  description: "Combining the versatility of a zoom with the speed typically reserved for a prime, the Canon RF 28-70mm f/2L USM is a wide-angle to portrait-length lens distinguished by its impressively unique f/2 constant maximum aperture. This bright design yields excellent low-light performance along with enhanced control over depth of field for isolating subject matter. Ultra-Low Dispersion glass is employed in the optical design, and greatly reduces color fringing and chromatic aberrations in order to realize high clarity and color accuracy.",
  price: 2999,
  seller_id: jenn.id,
  category_id: lenses.id
)  

filea039 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/canonrf2870mm2_1.png")
filea040 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/canonrf2870mm2_2.png")
canonrf2870mm2.photos.attach(io: filea039, filename: "canonrf2870mm2_1.png")
canonrf2870mm2.photos.attach(io: filea040, filename: "canonrf2870mm2_2.png")

fuji18mm14 = Product.create!(
  name: "Fujifilm XF 18mm f/1.4 R LM WR Lens",
  description: "Get up close and wide open with Fujifilm’s versatile new prime lens – the high-quality, portable, and weather-resistant FUJINON XF18mmF1.4 R LM WR. With a focal length equivalent to 27mm, it’s the perfect choice for sprawling landscapes, the sights and sounds of the street, and everything else in between. Be ready for any creative outburst with lightning-fast autofocus, a wide F1.4 aperture, and weather resistance to allow for continued operation in dusty, moist, and freezing conditions.",
  price: 999.95,
  seller_id: jessica.id,
  category_id: lenses.id
)  

filea041 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/fuji18mm14_1.png")
fuji18mm14.photos.attach(io: filea041, filename: "fuji18mm14_1.png")

leica28f2 = Product.create!(
  name: "Leica Summicron-M 28mm f/2 ASPH Lens",
  description: "A bright wide-angle prime with consistent performance throughout the aperture range, the Leica Summicron-M 28mm f/2 ASPH. Lens is well-suited to reportage and environmental photography in a variety of working conditions. Aside from the wide perspective, this 28mm f/2 is also characterized by a sophisticated nine elements in six groups design, which incorporates a single aspherical element to control distortions and spherical aberrations throughout the focusing and aperture ranges.",
  price: 4995,
  seller_id: jason.id,
  category_id: lenses.id
)  

filea042 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/leica28f2_1.png")
filea043 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/leica28f2_2.png")
leica28f2.photos.attach(io: filea042, filename: "leica28f2_1.png")
leica28f2.photos.attach(io: filea043, filename: "leica28f2_2.png")

sigma2470mm28 = Product.create!(
  name: "Sigma 24-70mm f/2.8 DG DN Art Lens",
  description: "A bright wide-angle prime with consistent performance throughout the aperture range, the Leica Summicron-M 28mm f/2 ASPH. Lens is well-suited to reportage and environmental photography in a variety of working conditions. Aside from the wide perspective, this 28mm f/2 is also characterized by a sophisticated nine elements in six groups design, which incorporates a single aspherical element to control distortions and spherical aberrations throughout the focusing and aperture ranges.",
  price: 1099,
  seller_id: superman.id,
  category_id: lenses.id
)  

filea044 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/sigma2470mm28_1.png")
sigma2470mm28.photos.attach(io: filea044, filename: "sigma2470mm28_1.png")

leicasummicron50mm2 = Product.create!(
  name: "Leica Summicron-M 50mm F/2",
  description: "The Leica Summicron-M 50mm f/2 stands out due to both its compact and well-proven optical design, as well as its legendary focal length which can provide natural perspectives. Its fine picture quality extends all the way to the extreme corners of the image field, and outstanding contrast is achieved at all apertures.",
  price: 2795,
  seller_id: batman.id,
  category_id: lenses.id
)  

filea046 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/leicasummicron50mm2_1.png")
filea047 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/leicasummicron50mm2_2.png")
leicasummicron50mm2.photos.attach(io: filea046, filename: "leicasummicron50mm2_1.png")
leicasummicron50mm2.photos.attach(io: filea047, filename: "leicasummicron50mm2_2.png")

sony1635mm28 = Product.create!(
  name: "Sony FE 16-35mm f/2.8 GM Lens",
  description: "A fast and flexible wide-angle zoom, the FE 16-35mm f/2.8 GM Lens from Sony is a wide-angle zoom designed for full-frame E-mount mirrorless cameras. Distinguished by its constant f/2.8 maximum aperture, this lens offers consistent performance throughout the zoom range and benefits working in low-light conditions. The optical design incorporates two extra-low dispersion elements to reduce chromatic aberrations along with two XA elements and three aspherical elements, which significantly controls spherical aberrations for a high degree of image sharpness and clarity.",
  price: 2198,
  seller_id: megaman.id,
  category_id: lenses.id
)  

filea048 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/sony1635mm28_1.png")
filea049 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/sony1635mm28_2.png")
sony1635mm28.photos.attach(io: filea048, filename: "sony1635mm28_1.png")
sony1635mm28.photos.attach(io: filea049, filename: "sony1635mm28_2.png")

sony50mm14 = Product.create!(
  name: "Sony Planar T* FE 50mm f/1.4 ZA Lens",
  description: "With its normal perspective, fast maximum aperture, and high-end design, the Planar T* FE 50mm f/1.4 ZA Lens from Sony is easy to see as a go-to standard optic for full-frame E-mount shooters. Starting off with the fast f/1.4 maximum aperture, photographers and videographers will enjoy exceptional low-light performance along with the ability to create shallow depth-of field effects. The Zeiss Planar optical design benefits users by providing an almost distortion-free image, while the incorporation of one Advanced Aspherical, one aspherical, and one extra-low dispersion element work to minimize spherical and chromatic aberrations.",
  price: 1498,
  seller_id: jenn.id,
  category_id: lenses.id
)  

filea050 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/sony50mm14_1.png")
filea051 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/sony50mm14_2.png")
filea052 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/sony50mm14_3.png")
sony50mm14.photos.attach(io: filea050, filename: "sony50mm14_1.png")
sony50mm14.photos.attach(io: filea051, filename: "sony50mm14_2.png")
sony50mm14.photos.attach(io: filea052, filename: "sony50mm14_3.png")

sony35mm28 = Product.create!(
  name: "Sony Sonnar T* FE 35mm f/2.8 ZA Lens",
  description: "Sony has managed to squeeze exceptional quality into the extraordinarily compact Sonnar T* FE 35mm f/2.8 ZA Lens, making it a near perfect match for full-frame E-mount cameras. It benefits greatly from Zeiss's optical technology, as it utilizes a Sonnar design with three double-sided aspherical to provide the relatively fast f/2.8 aperture with minimal aberrations. The lens is also equipped with Zeiss' T* anti-reflective coating to effectively eliminate flare and ghosting. Taking things up a notch is the linear autofocus motor and internal focusing design, resulting in fast, quiet, and responsive performance in stills and video as well providing a minimum focus distance of 13.8.",
  price: 598,
  seller_id: megaman.id,
  category_id: lenses.id
)  

filea053 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/sony35mm28_1.png")
filea054 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_lens/sony35mm28_2.png")
sony35mm28.photos.attach(io: filea053, filename: "sony35mm28_1.png")
sony35mm28.photos.attach(io: filea054, filename: "sony35mm28_2.png")

# more accessories

joby5k = Product.create!(
  name: "Joby GorillaPod 5K Kit, Black",
  description: "The top choice of leading journalists and vloggers, the Joby GorillaPod 5K Kit sets the standard for mobile content creation worldwide. The strong, flexible GorillaPod 5K Stand operates in 3 modes: grip for interviews and selfies, tripod or wrapping mount. Weve paired this flexible tripod with our pro level BallHead 5K, featuring independent pan and tilt functionality for precise positioning and an Arca-Swiss compatible quick release plate for easy set-up. This kit performs perfectly as an interview/selfie/live stream rig.",
  price: 119.95,
  seller_id: ironman.id,
  category_id: accessories.id
)  

filea055 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_accessories_v2/joby5k_1.png")
filea056 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_accessories_v2/joby5k_2.png")
joby5k.photos.attach(io: filea055, filename: "joby5k_1.png")
joby5k.photos.attach(io: filea056, filename: "joby5k_2.png")

rodevideomicpro = Product.create!(
  name: "Rode VideoMic Pro Camera-Mount Shotgun Microphone",
  description: "Offering lower noise, higher sensitivity, and more adjustable settings than the VideoMic, the Rode VideoMic Pro camera-mount shotgun microphone is ideal for mobile journalists, vloggers, budget filmmakers, and run-and-gun shooters looking for a cost-effective way to step up to the next level in quality.",
  price: 229,
  seller_id: ironman.id,
  category_id: accessories.id
)  

filea057 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_accessories_v2/rodevideomicpro_1.png")
filea058 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_accessories_v2/rodevideomicpro_2.png")
rodevideomicpro.photos.attach(io: filea057, filename: "rodevideomicpro_1.png")
rodevideomicpro.photos.attach(io: filea058, filename: "rodevideomicpro_2.png")

rodevideomicroultracompact = Product.create!(
  name: "Rode VideoMicro Ultracompact Camera-Mount Shotgun Microphone",
  description: "Switch from using the built-in mic on your camera or portable recorder to the Rode VideoMicro ultracompact camera-mount shotgun microphone for improved sound quality and wind noise reduction without adding heft to your rig. Since it runs on plug-in power and has no controls or switches, the VideoMicro is a simple and reliable microphone ideal for mobile journalists, vloggers, and run-and-gun shooters.",
  price: 59,
  seller_id: peter.id,
  category_id: accessories.id
)  

filea060 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_accessories_v2/rodevideomicroultracompact_1.png")
filea061 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_accessories_v2/rodevideomicroultracompact_2.png")
rodevideomicroultracompact.photos.attach(io: filea060, filename: "rodevideomicroultracompact_1.png")
rodevideomicroultracompact.photos.attach(io: filea061, filename: "rodevideomicroultracompact_2.png")

switchpod = Product.create!(
  name: "SwitchPod DSLR/Smartphone Handheld Stabilized Tripod",
  description: "Weighing in at only 11.1 oz, the aluminum DSLR/Smartphone Handheld Stabilized Tripod tripod from SWITCHPOD provides a lightweight, tabletop tripod and handheld solution for your DSLR, smartphone, or small camera. Its quick-switch design allows you to change from tripod to handheld and back in no time with its swiveling leg style, and it uses magnets to connect the legs together.",
  price: 99,
  seller_id: megaman.id,
  category_id: accessories.id
)  

filea062 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_accessories_v2/switchpod_1.png")
filea063 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_accessories_v2/switchpod_2.png")
switchpod.photos.attach(io: filea062, filename: "switchpod_1.png")
switchpod.photos.attach(io: filea063, filename: "switchpod_2.png")

# bags

wandrdprvke = Product.create!(
  name: "WANDRD PRVKE 21L Backpack",
  description: "Store, transport, and protect your gear from inclement weather with the PRVKE 21L Backpack in blue from WANDRD. The PRVKE is designed to hold a variety of photo and personal gear. This backpack has a 21-liter capacity, and the rolltop is expandable to create an extra five liters of space. Photographers will appreciate the magnetic tote handles and side opening for quick access to your camera. A side pocket stores a water bottle or tripod while the rolltop closure provides weather protection in addition to its weather-resistant zippers. There's also a dedicated storage space for an optional rainfly. Moreover, this backpack is constructed from water-resistant tarpaulin and nylon.",
  price: 184,
  seller_id: megaman.id,
  category_id: bags.id
)  
filea064 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/wandrdprvke_1.png")
filea065 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/wandrdprvke_2.png")
wandrdprvke.photos.attach(io: filea064, filename: "wandrdprvke_1.png")
wandrdprvke.photos.attach(io: filea065, filename: "wandrdprvke_2.png")


loweprophotosportbp24 = Product.create!(
  name: "Lowepro PhotoSport BP 24L AW III Photo Backpack",
  description: "Made with 75% recycled materials and the pilot for a sustainable new line of products to follow, the black with blue details LowePro PhotoSport BP 24L AW III Photo Backpack is built without compromise to give adventure photographers and explorers the right pack for all their outdoor activities. Built as a one-bag solution, it features a removable camera insert that can be used with the included strap system in multiple configurations by itself or integrated into the harness for maximum protection and convenience. The insert stows in the pack when you aren't using it.",
  price: 229.99,
  seller_id: peter.id,
  category_id: bags.id
)  
filea066 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/loweprophotosportbp24_1.png")
filea067 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/loweprophotosportbp24_2.png")
loweprophotosportbp24.photos.attach(io: filea066, filename: "loweprophotosportbp24_1.png")
loweprophotosportbp24.photos.attach(io: filea067, filename: "loweprophotosportbp24_2.png")


loweproprotactic450 = Product.create!(
  name: "Lowepro ProTactic BP 450 AW II Camera and Laptop Backpack (Black)",
  description: "Carry one or two Pro DSLRs, including one with an attached 70-200mm f/2.8 lens, in this black ProTactic 450 AW II Camera and Laptop Backpack from Lowepro. Updated from the first generation to expand its protection and versatility, this bag will also accommodate eight additional lenses or flash units, as well as a tripod, and a 15 inch laptop. Four access points at the top, sides, and back help you to organize your gear and quickly grab it to get a shot. Create customized configurations with the SlipLock-compatible strap system and adjustable interior dividers.",
  price: 249.95,
  seller_id: jessica.id,
  category_id: bags.id
)  
filea068 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/loweproprotactic450_1.png")
filea069 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/loweproprotactic450_2.png")
loweproprotactic450.photos.attach(io: filea068, filename: "loweproprotactic450_1.png")
loweproprotactic450.photos.attach(io: filea069, filename: "loweproprotactic450_2.png")


pdeveryd = Product.create!(
  name: "Peak Design Everyday Backpack v2",
  description: "This 20L, charcoal-colored Everyday Backpack v2 from Peak Design is a versatile bag that is designed for photographers, multimedia creators, or anyone whose carrying requirements can benefit from its compressible, size-adjustable design that minimizes bulk or can be expanded as needed. Multiple magnetic latches for its top flap allow this backpack to vary from 18.3\" to 22.3\" in height, while inside, three dividers allow items to be stacked within the main compartment. The dividers also feature foldout surfaces that can be configured to cushion and hold items against either of the Everyday Backpack v2's zippered side openings. Since the side openings are positioned to face the wearer when the bag is rotated from one's back to front with either side facing upward, the dividers provide the ability to ensure which items can be most quickly accessed from the bag's sides.",
  price: 259.95,
  seller_id: jenn.id,
  category_id: bags.id
)  
filea070 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/pdeveryd_1.png")
filea071 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/pdeveryd_2.png")
filea072 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/pdeveryd_3.png")
pdeveryd.photos.attach(io: filea070, filename: "pdeveryd_1.png")
pdeveryd.photos.attach(io: filea071, filename: "pdeveryd_2.png")
pdeveryd.photos.attach(io: filea072, filename: "pdeveryd_3.png")


pdeverymessenger = Product.create!(
  name: "Peak Design Everyday Messenger v2",
  description: "The 13L black Everyday Messenger v2 from Peak Design is a versatile messenger-style bag designed for photographers, multimedia creators, or anyone else whose carrying requirements can benefit from its compressible, size-adjustable design that minimizes bulk or can be expanded as needed. Multiple magnetic latches for its front flap allow this bag to vary from 11.7\" to 14.2\" in height, while inside the main compartment, its two dividers can be configured according to the specific equipment being carried. The dividers are foldable, and can cradle curved surfaces such as the grip of a camera with an attached lens. During use, the foldable dividers enhance protection between those curved surfaces and adjacent items while minimizing the area between them for more efficient use of the main compartment's space.",
  price: 219.95,
  seller_id: jenn.id,
  category_id: bags.id
)  
filea073 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/pdeverymessenger_1.png")
filea074 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/pdeverymessenger_2.png")
filea075 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/pdeverymessenger_3.png")
pdeverymessenger.photos.attach(io: filea073, filename: "pdeverymessenger_1.png")
pdeverymessenger.photos.attach(io: filea074, filename: "pdeverymessenger_2.png")
pdeverymessenger.photos.attach(io: filea075, filename: "pdeverymessenger_3.png")


pdeverysling = Product.create!(
  name: "Peak Design Everyday Sling 5L",
  description: "If you're on the go and don't want to be burdened with a lot of gear or a bulky bag, take advantage of this 5L Everyday Sling in sage from Peak Design. Well-organized yet compact, this bag can hold a full-size DSLR camera with an extra lens, or a mirrorless body with up to two lenses. In addition to your core photo gear, an internal padded sleeve will hold a tablet and two small inner side pockets are great for batteries. The inside of the main flap offers yet more space, with several slip pockets where you can store cords, memory cards, and pens. Finally, a zippered external slip pocket allows for quick access to everyday items like your smartphone, wallet, and keys.",
  price: 99.95,
  seller_id: superman.id,
  category_id: bags.id
)  
filea076 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/pdeverysling_1.png")
filea077 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/pdeverysling_2.png")
pdeverysling.photos.attach(io: filea076, filename: "pdeverysling_1.png")
pdeverysling.photos.attach(io: filea077, filename: "pdeverysling_2.png")


tenbamessengerdna15 = Product.create!(
  name: "Tenba DNA 16 Pro Camera Messenger Bag",
  description: "Built for seamless transitions between photojournalism and sports photography, urban exploration and adventure travel, and all kinds of social events with or without a camera, the black Tenba DNA 16 Pro Camera Messenger Bag can hold a professional-sized DSLR camera with a grip and attached 70-200mm lens with room for up to six total lenses plus a flash, accessories, personal gear, a laptop, and a tablet. The camera and lenses fit inside a padded insert in the main compartment that can be removed to allow its use as a conventional bag. Thoughtful design features and proprietary hardware make this bag easy to use and durable against the elements.",
  price: 199.95,
  seller_id: jason.id,
  category_id: bags.id
)  
filea078 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/tenbamessengerdna15_1.png")
filea079 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_bags/tenbamessengerdna15_2.png")
tenbamessengerdna15.photos.attach(io: filea078, filename: "tenbamessengerdna15_1.png")
tenbamessengerdna15.photos.attach(io: filea079, filename: "tenbamessengerdna15_2.png")

#drone v2

djiphantom4pro = Product.create!(
  name: "DJI Phantom 4 Pro+ Version 2.0 Quadcopter",
  description: "Version 2 of the DJI Phantom 4 Pro+ includes all the same great features as the original Phantom 4 Pro+ and boasts several enhancements including improved resolution for on-controller live-view streaming, enhanced connectivity, reduced propeller noise, and more. Like the original, the Phantom 4 Pro+ Version 2 features a 3-axis-stabilized gimbal camera with a 20MP 1in. CMOS sensor capable of shooting up to 4K60 fps video and photo bursts at up to 14 fps. It also utilizes the FlightAutonomy system which includes dual rear-vision sensors and infrared sensing for a total of five directions of obstacle sensing and four directions of obstacle avoidance. Instead of Lightbridge, the Phantom 4 Pro+ Version 2 now uses Ocusync, which enables improved live video stream performance. Other notable enhancements include lighter props and reduced overall takeoff weight, wireless integration with DJI Goggles, and bolstered transmission power. Like the original Phantom 4 Pro+, Version 2 comes with a controller that features an integrated 1080p display.",
  price: 2049,
  seller_id: jason.id,
  category_id: drones.id
)  
filea080 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_drones_v2/djiphantom4pro_1.png")
filea081 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_drones_v2/djiphantom4pro_2.png")
djiphantom4pro.photos.attach(io: filea080, filename: "djiphantom4pro_1.png")
djiphantom4pro.photos.attach(io: filea081, filename: "djiphantom4pro_2.png")


djuaur2sflymore = Product.create!(
  name: "DJI Air 2S Fly More Combo Drone",
  description: "The compact and foldable design of the DJI Air 2S Fly More Combo Drone lets you easily capture breathtaking aerial images and video whenever the mood strikes. It's an ideal alternative for use when travelling on vacation or for photography enthusiasts looking to record from new and unique perspectives. Piloting is made to be easy and intuitive via your smartphone and the DJI Fly app. Simply slip your phone into the included remote controller. Thanks to the Air 2S's 3-axis gimbal, four remote antennae, and OcuSync 3.0 technology, you can receive a stable, live view from the drone up to 7.5 miles away.",
  price: 1299,
  seller_id: ironman.id,
  category_id: drones.id
)  
filea082 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_drones_v2/djuaur2sflymore_1.png")
filea083 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_drones_v2/djuaur2sflymore_2.png")
djuaur2sflymore.photos.attach(io: filea082, filename: "djuaur2sflymore_1.png")
djuaur2sflymore.photos.attach(io: filea083, filename: "djuaur2sflymore_2.png")


# mobile

manfrottominitripod = Product.create!(
  name: "Manfrotto Pixi Mini Tripod Black with Universal Smartphone Clamp",
  description: "PIXI Smart is the perfect choice for anyone who uses their smartphone on a daily basis to take spontaneous pictures. The PIXI black now boasts a Universal Smartphone clamp, with multiple ¼” thread attachments, which enables its use with most of the smartphones currently on the market, ensuring great flexibility and ease of use in any type of circumstance. The PIXI Smart features double functionality: it works as a stable holder and can also be used as a comfortable ergonomic grip to capture great videos, take selfies and incredible images that really stand out from the rest.",
  price: 39.99,
  seller_id: ironman.id,
  category_id: mobile.id
)  
filea084 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_mobile/manfrottominitripod_1.png")
filea085 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_mobile/manfrottominitripod_2.png")
manfrottominitripod.photos.attach(io: filea084, filename: "manfrottominitripod_1.png")
manfrottominitripod.photos.attach(io: filea085, filename: "manfrottominitripod_2.png")


moment58 = Product.create!(
  name: "Moment Tele 58mm Lens",
  description: "The new Tele 58mm M-series Lens has been completely redesigned from the ground up. Taking everything we’ve learned about the latest and greatest smartphone cameras, we’ve optimized the optics for the new larger sensors on the iPhone 11 Pro, Google Pixel 4 and Samsung Galaxy S10.",
  price: 129.99,
  seller_id: will.id,
  category_id: mobile.id
)  
filea086 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_mobile/moment58_1.png")
filea087 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_mobile/moment58_2.png")
moment58.photos.attach(io: filea086, filename: "moment58_1.png")
moment58.photos.attach(io: filea087, filename: "moment58_2.png")


moment18 = Product.create!(
  name: "Moment Wide 18mm Lens",
  description: "The Wide 18mm M-series Lens is an everyday, go-to wide-angle lens for mobile photographers and filmmakers. The cinema quality glass and wide angle design allows your phone to capture 2x more picture. The most advanced lens we’ve ever made, the Wide 18mm Lens captures smartphone photos and videos that are beautiful, crisp, and straight, with no fisheye distortion.",
  price: 129.99,
  seller_id: will.id,
  category_id: mobile.id
)  
filea088 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_mobile/moment18_1.png")
filea089 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_mobile/moment18_2.png")
moment18.photos.attach(io: filea088, filename: "moment18_1.png")
moment18.photos.attach(io: filea089, filename: "moment18_2.png")


momentanamorphicgold = Product.create!(
  name: "Moment M-Series 1.33x Anamorphic Lens (Gold Flare Edition)",
  description: "Set your mobile videos and photos apart from the pack with this M-Series 1.33x Anamorphic Lens from Moment. This lens is specifically made for Moment's M-Series cases and attaches with a quick-and-easy, yet strong-and-secure, twist and lock design. It's a 1.33x anamorphic lens that emulates a 2.40:1 Cinemascope aspect ratio. This gives videos natural top and bottom black bars for a wide-angle, cinema feel. On photos, this wide-angle/shallow depth of field is ideal for capturing the vastness and scope of scenes that lend themselves to an expansive widescreen view. It also has the added benefit of providing golden horizontal lens flares with an oval bokeh in your shoots and footage.",
  price: 149.99,
  seller_id: jessica.id,
  category_id: mobile.id
)  
filea090 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_mobile/momentanamorphicgold_1.png")
filea091 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_mobile/momentanamorphicgold_2.png")
momentanamorphicgold.photos.attach(io: filea090, filename: "momentanamorphicgold_1.png")
momentanamorphicgold.photos.attach(io: filea091, filename: "momentanamorphicgold_2.png")


profotoc1plus = Product.create!(
  name: "Profoto C1 Plus Portable Studio Light",
  description: "Profoto C1 Plus is a smartphone studio light that creates professional images with just a simple click. Point-and-shoot with automatic exposure and flash power based on the surrounding conditions. Go between natural and dramatic images with a swipe of your finger. In manual mode, get full control and freedom over power, exposure, and color temperature.",
  price: 249,
  seller_id: batman.id,
  category_id: mobile.id
)  
filea092 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_mobile/profotoc1plus_1.png")
filea093 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_mobile/profotoc1plus_2.png")
profotoc1plus.photos.attach(io: filea092, filename: "profotoc1plus_1.png")
profotoc1plus.photos.attach(io: filea093, filename: "profotoc1plus_2.png")


rodevideomicntg = Product.create!(
  name: "RODE VideoMic NTG",
  description: "The VideoMic NTG is a broadcast-grade, feature-packed shotgun microphone optimized for on-camera use. It features a highly directional supercardioid polar pattern and very low self-noise, this compact on-camera microphone contends with the world’s best shotgun mics. The VideoMic NTG is so much more than just an on-camera mic. As well as pairing perfectly with DSLRs, compact cameras, and smartphones – either on-camera, as a boom mic, or on a pistol grip – it is also a fully-featured USB microphone that can be plugged into a computer, tablet, or smartphone. On top of this, the 3.5mm jack doubles as a headphone output for seamless monitoring of audio while using the USB output.",
  price: 349,
  seller_id: will.id,
  category_id: mobile.id
)  
filea094 = open("https://pixsy-dev.s3.us-east-2.amazonaws.com/products_mobile/rodevideomicntg_1.png")
rodevideomicntg.photos.attach(io: filea094, filename: "rodevideomicntg_1.png")
