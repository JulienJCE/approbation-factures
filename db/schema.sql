-- ============================================
-- SCHEMA: Approbation Factures
-- Conteneurs Experts Inc.
-- ============================================

CREATE TABLE personnes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nom VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  role VARCHAR(50) NOT NULL CHECK (role IN ('approuveur', 'employe_visa', 'comptable')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type VARCHAR(50) NOT NULL CHECK (type IN ('invoice', 'visa')),
  file_name VARCHAR(255) NOT NULL,
  volet INTEGER NOT NULL CHECK (volet IN (1, 2)),
  status VARCHAR(50) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  approuveur_id UUID NOT NULL REFERENCES personnes(id),
  visa_code VARCHAR(50),
  pdf_url VARCHAR(512),
  stamps_applied TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  approved_at TIMESTAMP
);

CREATE TABLE journal_courriels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID NOT NULL REFERENCES documents(id),
  approuveur_id UUID NOT NULL REFERENCES personnes(id),
  email_to VARCHAR(255) NOT NULL,
  subject VARCHAR(512) NOT NULL,
  status VARCHAR(50) NOT NULL CHECK (status IN ('sent', 'failed')),
  sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE routage_visa (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  visa_code VARCHAR(50) NOT NULL UNIQUE,
  employe_id UUID NOT NULL REFERENCES personnes(id),
  approuveur_id UUID NOT NULL REFERENCES personnes(id),
  auto_approve BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories_approbateurs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nom VARCHAR(255) NOT NULL,
  approuveur_id UUID NOT NULL REFERENCES personnes(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
