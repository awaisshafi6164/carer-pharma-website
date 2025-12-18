export interface Product {
  id: string;
  name: string;
  genericName: string;
  category: string;
  strength: string;
  packSize: string;
  description: string;
}

export const productCategories = [
  'Capsules',
  'Tablets',
  'Injections',
  'Sachets',
  'Dry Suspensions',
  'Nutra Products',
] as const;

export const products: Product[] = [
  // Capsules
  { id: 'cap-001', name: 'Datzend', genericName: 'Esomeprazole', category: 'Capsules', strength: '20mg', packSize: '14s', description: 'Proton pump inhibitor for acid reflux and GERD treatment' },
  { id: 'cap-002', name: 'Datzend', genericName: 'Esomeprazole', category: 'Capsules', strength: '40mg', packSize: '14s', description: 'Proton pump inhibitor for acid reflux and GERD treatment' },
  { id: 'cap-003', name: 'Prezula', genericName: 'Omeprazole', category: 'Capsules', strength: '20mg', packSize: '14s', description: 'Reduces stomach acid production' },
  { id: 'cap-004', name: 'Prezula', genericName: 'Omeprazole', category: 'Capsules', strength: '40mg', packSize: '14s', description: 'Reduces stomach acid production' },
  { id: 'cap-005', name: 'Prezula', genericName: 'Pregabalin', category: 'Capsules', strength: '75mg', packSize: '14s', description: 'Neuropathic pain and anxiety management' },
  { id: 'cap-006', name: 'Prezula', genericName: 'Pregabalin', category: 'Capsules', strength: '100mg', packSize: '14s', description: 'Neuropathic pain and anxiety management' },
  { id: 'cap-007', name: 'Prezula', genericName: 'Pregabalin', category: 'Capsules', strength: '150mg', packSize: '14s', description: 'Neuropathic pain and anxiety management' },
  { id: 'cap-008', name: 'Coricin 0.4', genericName: 'Tamsulosin HCL', category: 'Capsules', strength: '0.4mg', packSize: '10s', description: 'Treatment for enlarged prostate symptoms' },
  { id: 'cap-009', name: 'Caraconazole', genericName: 'Itraconazole', category: 'Capsules', strength: '100mg', packSize: '4s', description: 'Antifungal medication' },
  { id: 'cap-010', name: 'Degalip', genericName: 'Lansoprazole', category: 'Capsules', strength: '30mg', packSize: '14s', description: 'Proton pump inhibitor for ulcer treatment' },

  // Tablets
  { id: 'tab-001', name: 'Trevlig', genericName: 'Azithromycin', category: 'Tablets', strength: '500mg', packSize: '14s', description: 'Broad-spectrum antibiotic' },
  { id: 'tab-002', name: 'Sitgalip', genericName: 'Sitagliptin', category: 'Tablets', strength: '50/500mg', packSize: '14s', description: 'Type 2 diabetes management' },
  { id: 'tab-003', name: 'Sitgalip', genericName: 'Sitagliptin', category: 'Tablets', strength: '50/1000mg', packSize: '14s', description: 'Type 2 diabetes management' },
  { id: 'tab-004', name: 'Moxilig', genericName: 'Moxifloxacin', category: 'Tablets', strength: '400mg', packSize: '5s', description: 'Fluoroquinolone antibiotic' },
  { id: 'tab-005', name: 'Caraprox', genericName: 'Ciprofloxacin', category: 'Tablets', strength: '500mg', packSize: '10s', description: 'Broad-spectrum antibiotic' },
  { id: 'tab-006', name: 'Caraprox', genericName: 'Ciprofloxacin', category: 'Tablets', strength: '250mg', packSize: '10s', description: 'Broad-spectrum antibiotic' },
  { id: 'tab-007', name: 'Lecinxa', genericName: 'Levofloxacin', category: 'Tablets', strength: '500mg', packSize: '10s', description: 'Fluoroquinolone antibiotic' },
  { id: 'tab-008', name: 'Caratika', genericName: 'Montelukast Sodium', category: 'Tablets', strength: '10mg', packSize: '14s', description: 'Asthma and allergy management' },

  // Injections
  { id: 'inj-001', name: 'Absotela', genericName: 'Ceftriaxone', category: 'Injections', strength: '1gram', packSize: '1s', description: 'Third-generation cephalosporin antibiotic' },
  { id: 'inj-002', name: 'Absotela', genericName: 'Ceftriaxone', category: 'Injections', strength: '500mg', packSize: '1s', description: 'Third-generation cephalosporin antibiotic' },
  { id: 'inj-003', name: 'Absotela', genericName: 'Ceftriaxone', category: 'Injections', strength: '250mg', packSize: '1s', description: 'Third-generation cephalosporin antibiotic' },
  { id: 'inj-004', name: 'Ceficar', genericName: 'Cefixime', category: 'Injections', strength: '400mg', packSize: '5s', description: 'Oral cephalosporin antibiotic' },
  { id: 'inj-005', name: 'Ceficar Syrup', genericName: 'Cefixime', category: 'Injections', strength: '100mg/5ml', packSize: '1s', description: 'Pediatric antibiotic suspension' },
  { id: 'inj-006', name: 'Ceficar Syrup', genericName: 'Cefixime', category: 'Injections', strength: '200mg/5ml', packSize: '1s', description: 'Pediatric antibiotic suspension' },
  { id: 'inj-007', name: 'Desyre IV', genericName: 'Omeprazole', category: 'Injections', strength: '40mg', packSize: '1s', description: 'IV proton pump inhibitor' },
  { id: 'inj-008', name: 'Tazocillin IV', genericName: 'Piperacillin+Tazabactam', category: 'Injections', strength: '4.5mg', packSize: '1s', description: 'Broad-spectrum antibiotic combination' },
  { id: 'inj-009', name: 'Tazocillin IV', genericName: 'Piperacillin+Tazabactam', category: 'Injections', strength: '2.25mg', packSize: '1s', description: 'Broad-spectrum antibiotic combination' },
  { id: 'inj-010', name: 'Carpenem', genericName: 'Meropenem', category: 'Injections', strength: '500mg', packSize: '1s', description: 'Carbapenem antibiotic' },
  { id: 'inj-011', name: 'Cezotum', genericName: 'Cefoperazone+Sulbactam', category: 'Injections', strength: '1gm', packSize: '1s', description: 'Antibiotic combination therapy' },
  { id: 'inj-012', name: 'Cezotum', genericName: 'Cefoperazone+Sulbactam', category: 'Injections', strength: '2gm', packSize: '1s', description: 'Antibiotic combination therapy' },
  { id: 'inj-013', name: 'Careifer', genericName: 'Iron Sucrose', category: 'Injections', strength: '100mg/5ml', packSize: '5s', description: 'Iron deficiency treatment' },
  { id: 'inj-014', name: 'Carabalamine', genericName: 'Vitamin B12', category: 'Injections', strength: '500mcg/ml', packSize: '10s', description: 'Vitamin B12 supplementation' },
  { id: 'inj-015', name: 'Cara-D3', genericName: 'Vitamin D3', category: 'Injections', strength: '5mg/ml', packSize: '5s', description: 'Vitamin D supplementation' },

  // Sachets
  { id: 'sach-001', name: 'Desyre', genericName: 'Omeprazole/Sodium Bicarbonate', category: 'Sachets', strength: '20/1680mg', packSize: '10s', description: 'Acid reflux treatment' },
  { id: 'sach-002', name: 'Desyre', genericName: 'Omeprazole/Sodium Bicarbonate', category: 'Sachets', strength: '40/1680mg', packSize: '10s', description: 'Acid reflux treatment' },
  { id: 'sach-003', name: 'ORS', genericName: 'Oral Rehydration Salts', category: 'Sachets', strength: 'Standard', packSize: '21s', description: 'Dehydration treatment' },
  { id: 'sach-004', name: 'Caratika', genericName: 'Montelukast Sodium', category: 'Sachets', strength: '4mg', packSize: '14s', description: 'Pediatric asthma management' },

  // Dry Suspensions
  { id: 'susp-001', name: 'Cinmyor', genericName: 'Clarithromycin', category: 'Dry Suspensions', strength: '250mg', packSize: '1s', description: 'Macrolide antibiotic suspension' },
  { id: 'susp-002', name: 'Cinmyor', genericName: 'Clarithromycin', category: 'Dry Suspensions', strength: '125mg', packSize: '1s', description: 'Macrolide antibiotic suspension' },

  // Nutra Products
  { id: 'nutra-001', name: 'CILOF A Drops', genericName: 'Folic Acid', category: 'Nutra Products', strength: '10mg', packSize: '1s', description: 'Folic acid supplementation' },
  { id: 'nutra-002', name: 'D Care Drops', genericName: 'Vitamin A, D3, E', category: 'Nutra Products', strength: '10ml', packSize: '1s', description: 'Multi-vitamin drops' },
  { id: 'nutra-003', name: 'D Care Plus Drops', genericName: 'Vitamin A, D3, E, K2', category: 'Nutra Products', strength: '10ml', packSize: '1s', description: 'Enhanced multi-vitamin drops' },
  { id: 'nutra-004', name: 'Galacto Drops', genericName: 'Calcium', category: 'Nutra Products', strength: '10ml', packSize: '1s', description: 'Calcium supplementation for infants' },
  { id: 'nutra-005', name: 'Magnical Syrup', genericName: 'Calcium', category: 'Nutra Products', strength: '120ml', packSize: '1s', description: 'Calcium syrup' },
  { id: 'nutra-006', name: 'Ginko Care', genericName: 'Vitamin D3+Magnesium+Zinc', category: 'Nutra Products', strength: '120ml', packSize: '1s', description: 'Cognitive and immune support' },
  { id: 'nutra-007', name: 'Multi Care', genericName: 'Multivitamins & Minerals', category: 'Nutra Products', strength: '30 tablets', packSize: '30s', description: 'Complete multivitamin supplement' },
];
