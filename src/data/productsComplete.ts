export interface ProductComplete {
  id: string;
  name: string;
  genericName: string;
  category: string;
  strength: string;
  packSize: string;
  mrp: string;
  tp: string;
  image: string;
}

export const productCategories = [
  'Antibiotics',
  'PPI',
  'Injections',
  'Capsules',
  'Tablets',
  'Sachets',
  'Suspensions',
] as const;

export const productsComplete: ProductComplete[] = [
  // Antibiotics
  { id: '1', name: 'Absotela', genericName: 'Ceftriaxone', category: 'Antibiotics', strength: '1gm', packSize: '1s', mrp: '527.00', tp: '447.95', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '2', name: 'Absotela', genericName: 'Ceftriaxone', category: 'Antibiotics', strength: '500mg', packSize: '1s', mrp: '279.00', tp: '237.15', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '3', name: 'Absotela', genericName: 'Ceftriaxone', category: 'Antibiotics', strength: '250mg', packSize: '1s', mrp: '165.00', tp: '140.25', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '4', name: 'Caraprox', genericName: 'Ciprofloxacin', category: 'Antibiotics', strength: '500mg', packSize: '10s', mrp: '492.00', tp: '418.2', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '5', name: 'Caraprox', genericName: 'Ciprofloxacin', category: 'Antibiotics', strength: '250mg', packSize: '10s', mrp: '213.00', tp: '181.05', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '6', name: 'Carpenum', genericName: 'Meropenem', category: 'Antibiotics', strength: '1gm', packSize: '1s', mrp: '3164.00', tp: '2689.4', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '7', name: 'Carpenum', genericName: 'Meropenem', category: 'Antibiotics', strength: '500mg', packSize: '1s', mrp: '1934.00', tp: '1643.9', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '8', name: 'Ceficar', genericName: 'Cefixime', category: 'Antibiotics', strength: '400mg', packSize: '5s', mrp: '580.00', tp: '493', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '9', name: 'Ceficar', genericName: 'Cefixime', category: 'Suspensions', strength: '100mg/5ml', packSize: '30ml', mrp: '295.00', tp: '250.75', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '10', name: 'Ceficar', genericName: 'Cefixime', category: 'Suspensions', strength: '200mg/5ml', packSize: '30ml', mrp: '492.00', tp: '418.2', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '11', name: 'Cezotum', genericName: 'Cefoperazone+Sulbactam', category: 'Antibiotics', strength: '2gm', packSize: '1s', mrp: '574.90', tp: '574.9', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '12', name: 'Cezotum', genericName: 'Cefoperazone+Sulbactam', category: 'Antibiotics', strength: '1gm', packSize: '1s', mrp: '402.00', tp: '341.7', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '13', name: 'Lecinxa', genericName: 'Levofloxacin', category: 'Antibiotics', strength: '500mg', packSize: '10s', mrp: '695.00', tp: '590.75', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '14', name: 'Lecinxa', genericName: 'Levofloxacin', category: 'Antibiotics', strength: '250mg', packSize: '10s', mrp: '403.00', tp: '403', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '15', name: 'Moxflucin', genericName: 'Moxifloxacin', category: 'Antibiotics', strength: '400mg', packSize: '5s', mrp: '780.00', tp: '663', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '16', name: 'Carabactum', genericName: 'Piperacillin+Tazobactam', category: 'Antibiotics', strength: '4.5gm', packSize: '1s', mrp: '1395.00', tp: '1185.8', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '17', name: 'Carabactum', genericName: 'Piperacillin+Tazobactam', category: 'Antibiotics', strength: '2.25gm', packSize: '1s', mrp: '614.00', tp: '521.9', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '18', name: 'Trevlig', genericName: 'Azithromycin', category: 'Antibiotics', strength: '500mg', packSize: '6s', mrp: '550.00', tp: '467.5', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '19', name: 'Trevlig', genericName: 'Azithromycin', category: 'Antibiotics', strength: '250mg', packSize: '6s', mrp: '310.00', tp: '263.5', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '20', name: 'Trevlig', genericName: 'Azithromycin', category: 'Suspensions', strength: '200mg/5ml', packSize: '30ml', mrp: '415.00', tp: '352.75', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '21', name: 'Cinmyor', genericName: 'Clarithromycin', category: 'Suspensions', strength: '250mg/5ml', packSize: '30ml', mrp: '820.00', tp: '697', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '22', name: 'Cinmyor', genericName: 'Clarithromycin', category: 'Suspensions', strength: '125mg/5ml', packSize: '30ml', mrp: '450.00', tp: '382.5', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },

  // PPI Products
  { id: '23', name: 'Datzend', genericName: 'Esomeprazole', category: 'PPI', strength: '20mg', packSize: '14s', mrp: '223.00', tp: '189.55', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '24', name: 'Datzend', genericName: 'Esomeprazole', category: 'PPI', strength: '40mg', packSize: '14s', mrp: '338.00', tp: '287.3', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '25', name: 'Degalig', genericName: 'Lansoprazole', category: 'PPI', strength: '30mg', packSize: '14s', mrp: '352.00', tp: '299.2', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '26', name: 'Desyre', genericName: 'Omeprazole', category: 'PPI', strength: '20mg', packSize: '14s', mrp: '246.00', tp: '209.1', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '27', name: 'Desyre', genericName: 'Omeprazole', category: 'PPI', strength: '40mg', packSize: '14s', mrp: '427.00', tp: '362.95', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '28', name: 'Desyre', genericName: 'Omeprazole', category: 'Injections', strength: '40mg', packSize: '1s', mrp: '535.00', tp: '454.75', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '29', name: 'Desyre', genericName: 'Omeprazole', category: 'Sachets', strength: '20/1680mg', packSize: '10s', mrp: '177.00', tp: '150.45', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '30', name: 'Desyre', genericName: 'Omeprazole', category: 'Sachets', strength: '40/1680mg', packSize: '10s', mrp: '293.00', tp: '249.05', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },

  // Other Products
  { id: '31', name: 'Ketocar', genericName: 'Ketorolac Tromethamine', category: 'Injections', strength: '30mg/ml', packSize: '5s', mrp: '890', tp: '756.5', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '32', name: 'Cara-D3', genericName: 'Cholecalciferol', category: 'Injections', strength: '5mg/ml', packSize: '1s', mrp: '250.00', tp: '212.5', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '33', name: 'Carabalamine', genericName: 'Mecobalamin', category: 'Injections', strength: '500mcg/ml', packSize: '10s', mrp: '695.00', tp: '590.75', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '34', name: 'Carcifer', genericName: 'Iron Sucrose', category: 'Injections', strength: '100mg/5ml', packSize: '5s', mrp: '1850.00', tp: '1572.5', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '35', name: 'CP-NALB', genericName: 'Nalbuphene', category: 'Injections', strength: '10mg/ml', packSize: '10s', mrp: '1250.00', tp: '1062.5', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '36', name: 'Caraconazole', genericName: 'Itraconazole', category: 'Capsules', strength: '100mg', packSize: '4s', mrp: '492.00', tp: '418.2', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '37', name: 'Coricin', genericName: 'Tamsulosin', category: 'Capsules', strength: '0.4mg', packSize: '10s', mrp: '595.00', tp: '505.75', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '38', name: 'Prezula', genericName: 'Pregabalin', category: 'Capsules', strength: '75mg', packSize: '14s', mrp: '361.00', tp: '306.85', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '39', name: 'Prezula', genericName: 'Pregabalin', category: 'Capsules', strength: '100mg', packSize: '14s', mrp: '453.00', tp: '385.05', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '40', name: 'Prezula', genericName: 'Pregabalin', category: 'Capsules', strength: '150mg', packSize: '14s', mrp: '661.00', tp: '561.85', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '41', name: 'Suliptin', genericName: 'Sitagliptin+Metformin', category: 'Tablets', strength: '50/500mg', packSize: '14s', mrp: '415.00', tp: '352.75', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '42', name: 'Suliptin', genericName: 'Sitagliptin+Metformin', category: 'Tablets', strength: '50/1000mg', packSize: '14s', mrp: '490.00', tp: '416.5', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '43', name: 'Caratika', genericName: 'Montelukast', category: 'Tablets', strength: '10mg', packSize: '14s', mrp: '550.00', tp: '467.5', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '44', name: 'Caratika', genericName: 'Montelukast', category: 'Sachets', strength: '4mg', packSize: '14s', mrp: '475.00', tp: '403.75', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '45', name: 'ORS', genericName: 'Oral Rehydrate Salt', category: 'Sachets', strength: 'Standard', packSize: '20s', mrp: '450.00', tp: '382.5', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '46', name: 'Namper', genericName: 'Esomeprazole+Naproxen', category: 'Tablets', strength: '20/500mg', packSize: '28s', mrp: '1190.00', tp: '1011.5', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '47', name: 'Namper', genericName: 'Esomeprazole+Naproxen', category: 'Tablets', strength: '20/375mg', packSize: '28s', mrp: '890.00', tp: '756.5', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '48', name: 'Careston', genericName: 'Ondansetron', category: 'Suspensions', strength: '4mg/5ml', packSize: '50ml', mrp: '490.00', tp: '416.5', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '49', name: 'Vonesba', genericName: 'Vonoprazan', category: 'Tablets', strength: '10mg', packSize: '14s', mrp: '364.00', tp: '309.4', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '50', name: 'Vonesba', genericName: 'Vonoprazan', category: 'Tablets', strength: '20mg', packSize: '14s', mrp: '546.00', tp: '464.1', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '51', name: 'Carafinac SR', genericName: 'Diclofenac Sodium', category: 'Tablets', strength: '100mg', packSize: '30s', mrp: '190.00', tp: '161.5', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '52', name: 'Fibricar', genericName: 'Tranexamic Acid', category: 'Injections', strength: '500mg', packSize: '5s', mrp: '725.00', tp: '616.25', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '54', name: 'Fibricar', genericName: 'Tranexamic Acid', category: 'Capsules', strength: '500mg', packSize: '20s', mrp: '185', tp: '200', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '55', name: 'Fibricar', genericName: 'Tranexamic Acid', category: 'Capsules', strength: '250mg', packSize: '20s', mrp: '850.00', tp: '722.5', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '56', name: 'Fluca', genericName: 'Fluconazole', category: 'Tablets', strength: '150mg', packSize: '1s', mrp: '240.00', tp: '204', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '57', name: 'Clarithromycin', genericName: 'Clarithromycin', category: 'Tablets', strength: '250mg', packSize: '10s', mrp: '470.00', tp: '399.5', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '58', name: 'Clarithromycin', genericName: 'Clarithromycin', category: 'Tablets', strength: '500mg', packSize: '10s', mrp: '750.00', tp: '637.5', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '59', name: 'Rovasta', genericName: 'Rosuvastatin', category: 'Tablets', strength: '10mg', packSize: '30s', mrp: '437.00', tp: '371.45', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '60', name: 'Terbitar', genericName: 'Terbinafine HCl', category: 'Tablets', strength: '250mg', packSize: '10s', mrp: '515.00', tp: '437.75', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '61', name: 'Terbitar', genericName: 'Terbinafine HCl', category: 'Tablets', strength: '125mg', packSize: '10s', mrp: '390.00', tp: '331.5', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '62', name: 'Carbifer', genericName: 'Ferric Carboxymaltose', category: 'Injections', strength: '500mg/10ml', packSize: '1s', mrp: '3950.00', tp: '3357.5', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '63', name: 'Caratika Chewable', genericName: 'Montelukast Sodium', category: 'Tablets', strength: '4mg', packSize: '14s', mrp: '294', tp: '249.9', image: '/ForWebsite/CARER PROFILE IMAGE/17.jpg' },
  { id: '64', name: 'Careston', genericName: 'Ondansetron', category: 'Injections', strength: '4mg/2ml', packSize: '1s', mrp: '385', tp: '327.25', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
  { id: '65', name: 'Careston', genericName: 'Ondansetron', category: 'Injections', strength: '4mg/2ml', packSize: '5s', mrp: '1923', tp: '1634.6', image: '/ForWebsite/CARER PROFILE IMAGE/16.jpg' },
];
