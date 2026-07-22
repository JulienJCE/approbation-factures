# Approbation Factures - Conteneurs Experts Inc.

Plateforme web pour l'approbation des factures fournisseurs et des dépenses Visa.

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Accédez à http://localhost:3000

### Build Production

```bash
npm run build
npm start
```

## 📚 Workflows

### Volet 1: Approbation Factures

1. Comptabilité upload PDF + choisit approuveur manuellement
2. Approuveur reçoit email → clique lien sécurisé (pas de login)
3. Approuveur approuve/rejette → Stamp rouge appliqué
4. Comptabilité assigne GL dans Prextra manuellement

### Volet 2: Dépenses Visa

1. Employé soumet reçu avec code d'accès (ex: YT-2026)
2. Stamp VISA appliqué automatiquement (bleu)
3. Approuveur revoit + assigne GL
4. Approuveur approuve → Stamp rouge appliqué
5. Comptabilité enregistre dans Prextra

**Cas spéciaux: Pierjean & Emre**
- Auto-approval instantané (codes PS-2026, EK-2026)
- Les deux stamps appliqués simultanément

## 🗄️ Base de Données

### Development: In-Memory
Données statiques dans `lib/db.ts`

### Production: Postgres/Neon
Schema: `db/schema.sql`

## 👥 Approuveurs

- Julien Jacques
- Emre Keskin
- Pierjean Savard
- Patrick Parent
- Michel Villeneuve
- Karine Fournelle
- Franco Di Chiccio

## 💳 Codes d'Accès Visa

| Code | Employé | Approuveur | Auto-approve |
|------|---------|-----------|--------------|
| PS-2026 | Pierjean Savard | Pierjean | ✅ |
| EK-2026 | Emre Keskin | Emre | ✅ |
| YT-2026 | Yanick Tremblay | Franco | ❌ |
| MC-2026 | Marco Chappadeau | Michel | ❌ |
| EC-2026 | Eric Cloutier | Patrick | ❌ |
