const token = {
  access_token: "05372624d4b5f299dab41b46b4dc0fcc63b1526c124a5b99c3a71e833656245a",
  token_type: "bearer",
  expires_in: 7200,
  refresh_token: "10f0c21adfaf89c81b29e852a8ff26ae9719a9357acb035d9a8b9bf09414910d",
  created_at: 1560805200
}

const status = [
  'pending',
  'processing',
  'generated',
  'sent',
  'paid',
  'soft_bounce',
  'hard_bounce',
  'error',
  'refunded',
  'partial_refunded',
  'expired'
]

const banks = [
  'Bradesco',
  'Itaú',
  'Banco do Brasil',
  'Santander',
  'Caixa Econômica'
]

const method = {
  type: ['credit', 'debit', 'payment_slip', 'phone_bill'],
  brands: ['visa', 'master', 'elo']
}

module.exports = {
  token,
  banks,
  status,
  method
}
