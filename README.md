type de bdd: mysql
nom du schéma pour la bdd: alten_shop
host: localhost
port: 3306
username: root
password: root

### `node index.js`
pour lancer l'api

### `npx migrate dev`
Pour créer la table product

insérer ces données:

INSERT INTO product (id, code, name, description, price, quantity, inventoryStatus, category, image, rating)
VALUES
(1, 'P001', 'Laptop', 'A high-performance laptop for everyday use', 1200.00, 5, 'In Stock', 'Electronics', 'laptop.jpg', 4),
(2, 'P002', 'Smartphone', 'A latest model smartphone with advanced features', 800.00, 10, 'In Stock', 'Electronics', 'smartphone.jpg', 2),
(3, 'P003', 'Headphones', 'Noise-cancelling headphones for immersive sound experience', 150.00, 15, 'Out of Stock', 'Accessories', 'headphones.jpg', 3),
(4, 'P004', 'Smart Watch', 'A smart watch with multiple fitness tracking features', 200.00, 8, 'In Stock', 'Wearables', 'smartwatch.jpg', 5),
(5, 'P005', 'Tablet', 'A lightweight tablet for all your reading and browsing needs', 300.00, 7, 'In Stock', 'Electronics', 'tablet.jpg', 1),
(6, 'P006', 'Bluetooth Speaker', 'Portable Bluetooth speaker with high-quality sound', 50.00, 20, 'In Stock', 'Accessories', 'speaker.jpg', 2),
(7, 'P007', 'Camera', 'DSLR camera for professional photography', 1000.00, 3, 'Low Stock', 'Electronics', 'camera.jpg', 4),
(8, 'P008', 'Keyboard', 'Mechanical keyboard with RGB backlighting', 70.00, 12, 'In Stock', 'Accessories', 'keyboard.jpg', 5),
(9, 'P009', 'Monitor', '27-inch 4K UHD monitor for immersive viewing', 400.00, 6, 'In Stock', 'Electronics', 'monitor.jpg', 5),
(10, 'P010', 'Gaming Mouse', 'High-precision gaming mouse with customizable buttons', 60.00, 25, 'In Stock', 'Accessories', 'mouse.jpg', 4),
(11, 'P011', 'Mechanical Keyboard', 'RGB mechanical keyboard with customizable backlighting', 120.00, 15, 'In Stock', 'Accessories', 'keyboard.jpg', 4),
(12, 'P012', 'Wireless Headset', 'Noise-cancelling wireless headset with long battery life', 150.00, 10, 'In Stock', 'Accessories', 'headset.jpg', 3),
(13, 'P013', 'Laptop', '15-inch laptop with powerful performance and sleek design', 1200.00, 8, 'In Stock', 'Electronics', 'laptop.jpg', 4),
(14, 'P014', 'Smartphone', 'Latest model smartphone with advanced features', 800.00, 20, 'In Stock', 'Electronics', 'smartphone.jpg', 5),
(15, 'P015', 'Smartwatch', 'Smartwatch with fitness tracking and notifications', 200.00, 30, 'In Stock', 'Accessories', 'smartwatch.jpg', 2),
(16, 'P016', 'Tablet', '10-inch tablet with high-resolution display', 300.00, 12, 'In Stock', 'Electronics', 'tablet.jpg', 1),
(17, 'P017', 'Bluetooth Speaker', 'Portable Bluetooth speaker with excellent sound quality', 100.00, 50, 'In Stock', 'Accessories', 'speaker.jpg', 4),
(18, 'P018', 'External Hard Drive', '1TB external hard drive for reliable data storage', 80.00, 40, 'In Stock', 'Accessories', 'harddrive.jpg', 2),
(19, 'P019', 'Printer', 'All-in-one printer with wireless connectivity', 150.00, 9, 'In Stock', 'Electronics', 'printer.jpg', 3),
(20, 'P020', 'Digital Camera', 'Compact digital camera with high resolution', 500.00, 7, 'In Stock', 'Electronics', 'camera.jpg', 5),
(21, 'P021', 'Action Camera', 'Waterproof action camera with 4K recording', 250.00, 18, 'In Stock', 'Electronics', 'action_camera.jpg', 5),
(22, 'P022', 'Drone', 'Quadcopter drone with HD camera', 600.00, 5, 'In Stock', 'Electronics', 'drone.jpg', 4),
(23, 'P023', 'Fitness Tracker', 'Fitness tracker with heart rate monitor', 100.00, 35, 'In Stock', 'Accessories', 'fitness_tracker.jpg', 1),
(24, 'P024', 'Smart Home Hub', 'Smart home hub for controlling connected devices', 180.00, 22, 'In Stock', 'Electronics', 'smart_home_hub.jpg', 3),
(25, 'P025', 'VR Headset', 'Virtual reality headset with immersive experience', 350.00, 14, 'In Stock', 'Electronics', 'vr_headset.jpg', 5);